import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { ArrowLeft, Calendar, FolderOpen } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import katex from "katex";

interface Props {
  params: Promise<{
    directory: string;
    slug: string;
  }>;
}

async function getPost(directory: string, slug: string) {
  // Decode URL-encoded directory name (e.g., %40daily-notes -> @daily-notes)
  const decodedDirectory = decodeURIComponent(directory);

  try {
    const contentDir = path.join(process.cwd(), "content");

    // Try .md first, then .mdx
    let fileContent: string;
    let filePath: string;

    try {
      filePath = path.join(contentDir, decodedDirectory, `${slug}.md`);
      fileContent = fs.readFileSync(filePath, "utf8");
    } catch {
      try {
        filePath = path.join(contentDir, decodedDirectory, `${slug}.mdx`);
        fileContent = fs.readFileSync(filePath, "utf8");
      } catch {
        throw new Error(
          `Could not find ${slug}.md or ${slug}.mdx in ${decodedDirectory} directory`
        );
      }
    }

    // Robust frontmatter parsing with fallback for malformed files
    let data: Record<string, unknown> = {};
    let content: string = fileContent;

    try {
      const result = matter(fileContent);
      data = result.data;
      content = result.content;
    } catch (error) {
      console.warn(
        `Failed to parse frontmatter for ${decodedDirectory}/${slug}, treating as plain content:`,
        error
      );
      // If frontmatter parsing fails, treat the entire file as content
      content = fileContent;
      data = {};
    }

    return {
      slug,
      title:
        (data.title as string) ||
        slug
          .replace(/-/g, " ")
          .replace(/\b\w/g, (l: string) => l.toUpperCase()),
      date:
        (data.date as string) ||
        (slug.match(/^\d{4}-\d{2}-\d{2}$/) ? slug : null),
      content,
      directory: decodedDirectory,
      frontmatter: data,
    };
  } catch (error) {
    console.error(`Error reading post ${decodedDirectory}/${slug}:`, error);
    return null;
  }
}

// Enhanced markdown to HTML converter with KaTeX support
function markdownToHtml(markdown: string): string {
  let html = markdown;

  // First, process display math ($$...$$) to avoid conflicts with inline math
  html = html.replace(/\$\$([\s\S]*?)\$\$/g, (match, math) => {
    try {
      const rendered = katex.renderToString(math.trim(), {
        displayMode: true,
        throwOnError: false,
        errorColor: "#cc0000",
        fleqn: false, // Center equations
        macros: {
          "\\RR": "\\mathbb{R}",
          "\\NN": "\\mathbb{N}",
          "\\ZZ": "\\mathbb{Z}",
          "\\QQ": "\\mathbb{Q}",
          "\\CC": "\\mathbb{C}",
        },
        trust: (context) =>
          ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"].includes(
            context.command
          ),
      });
      return `<div class="katex-display">${rendered}</div>`;
    } catch (error) {
      console.warn("KaTeX display math error:", error);
      return `<div class="math-error">Display Math Error: $$${math.trim()}$$</div>`;
    }
  });

  // Then process inline math ($...$)
  html = html.replace(/\$([^$\n]+?)\$/g, (match, math) => {
    try {
      const rendered = katex.renderToString(math.trim(), {
        displayMode: false,
        throwOnError: false,
        errorColor: "#cc0000",
        macros: {
          "\\RR": "\\mathbb{R}",
          "\\NN": "\\mathbb{N}",
          "\\ZZ": "\\mathbb{Z}",
          "\\QQ": "\\mathbb{Q}",
          "\\CC": "\\mathbb{C}",
        },
      });
      return `<span class="katex-inline">${rendered}</span>`;
    } catch (error) {
      console.warn("KaTeX inline math error:", error);
      return `<span class="math-error">Math Error: $${math.trim()}$</span>`;
    }
  });

  // Process other markdown elements
  return (
    html
      // Headers
      .replace(/^### (.*$)/gim, "<h3>$1</h3>")
      .replace(/^## (.*$)/gim, "<h2>$1</h2>")
      .replace(/^# (.*$)/gim, "<h1>$1</h1>")
      // Bold
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      // Italic
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      // Code blocks
      .replace(/```([\s\S]*?)```/g, "<pre><code>$1</code></pre>")
      // Inline code (but avoid math expressions)
      .replace(/`([^`]+?)`/g, "<code>$1</code>")
      // Links
      .replace(
        /\[([^\]]*)\]\(([^\)]*)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
      )
      // Line breaks
      .replace(/\n\n/g, "</p><p>")
      // Wrap in paragraph tags
      .replace(/^(.*)$/gm, (match) => {
        if (
          match.startsWith("<h") ||
          match.startsWith("<pre") ||
          match.startsWith("</p>") ||
          match.startsWith("<p>") ||
          match.startsWith('<div class="katex-display"')
        ) {
          return match;
        }
        return `<p>${match}</p>`;
      })
      // Clean up empty paragraphs
      .replace(/<p><\/p>/g, "")
  );
}

export default async function PostPage({ params }: Props) {
  const { directory, slug } = await params;
  const post = await getPost(directory, slug);

  if (!post) {
    notFound();
  }

  const htmlContent = markdownToHtml(post.content);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-[90rem] mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link
              href="/posts"
              className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white transition-colors font-dm-sans"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Posts
            </Link>
            <div className="h-6 w-px bg-border"></div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
              <FolderOpen className="h-4 w-4" />
              <span className="px-2 py-1 bg-muted rounded-md">
                {post.directory}
              </span>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Post Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4 font-dm-sans">
            {post.title}
          </h1>
          {post.date && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          )}
        </header>

        {/* Post Content */}
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div
            className="text-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>

        {/* Navigation */}
        <footer className="mt-12 pt-8 border-t border-border">
          <Link
            href="/posts"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all posts
          </Link>
        </footer>
      </article>
    </div>
  );
}
