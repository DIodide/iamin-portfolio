import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface Post {
  slug: string;
  title: string;
  date: string | null;
  content: string;
  directory: string;
  frontmatter: Record<string, unknown>;
  image?: string;
}

export async function GET() {
  try {
    const contentDir = path.join(process.cwd(), "content");
    const posts: Post[] = [];
    const directories: string[] = [];

    if (!fs.existsSync(contentDir)) {
      return NextResponse.json({ posts: [], directories: [] });
    }

    const items = fs.readdirSync(contentDir, { withFileTypes: true });
    const contentDirectories = items
      .filter((item) => item.isDirectory())
      .map((item) => item.name)
      .sort();

    directories.push(...contentDirectories);

    for (const directory of contentDirectories) {
      const dirPath = path.join(contentDir, directory);

      try {
        const files = fs
          .readdirSync(dirPath)
          .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));

        for (const file of files) {
          const filePath = path.join(dirPath, file);
          const fileContent = fs.readFileSync(filePath, "utf8");

          // Robust frontmatter parsing with fallback for malformed files
          let data: Record<string, unknown> = {};
          let content: string = fileContent;

          try {
            const result = matter(fileContent);
            data = result.data;
            content = result.content;
          } catch (error) {
            console.warn(
              `Failed to parse frontmatter for ${directory}/${file}, treating as plain content:`,
              error
            );
            // If frontmatter parsing fails, treat the entire file as content
            content = fileContent;
            data = {};
          }

          const slug = file.replace(/\.(md|mdx)$/, "");

          let title =
            (data.title as string) ||
            slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

          if (directory.includes("daily") && /^\d{4}-\d{2}-\d{2}$/.test(slug)) {
            title = (data.title as string) || `Daily Note - ${slug}`;
          }

          // Use description from frontmatter if available, otherwise truncate content
          const contentPreview =
            (data.description as string) ||
            content.substring(0, 200) + (content.length > 200 ? "..." : "");

          // Skip hidden posts
          if (data.hide === true) {
            continue;
          }

          posts.push({
            slug,
            title,
            date:
              (data.date as string) ||
              (slug.match(/^\d{4}-\d{2}-\d{2}$/) ? slug : null),
            content: contentPreview,
            directory,
            frontmatter: data,
            image: data.image as string | undefined,
          });
        }
      } catch (error) {
        console.error(`Error reading directory ${directory}:`, error);
      }
    }

    posts.sort((a, b) => {
      const dateA = new Date(a.date || "1970-01-01");
      const dateB = new Date(b.date || "1970-01-01");
      return dateB.getTime() - dateA.getTime();
    });

    return NextResponse.json({ posts, directories });
  } catch (error) {
    console.error("Error reading posts:", error);
    return NextResponse.json(
      { error: "Failed to read posts" },
      { status: 500 }
    );
  }
}
