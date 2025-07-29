import React from "react";
import Image from "next/image";
import katex from "katex";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const elements = parseMarkdownToComponents(content);
  return <div className="markdown-content">{elements}</div>;
}

function parseMarkdownToComponents(markdown: string): React.ReactNode[] {
  const elements: React.ReactNode[] = [];
  const lines = markdown.split("\n");
  let currentParagraph: string[] = [];
  let keyCounter = 0;

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const paragraphContent = currentParagraph.join("\n");

      // If paragraph has multiple lines, preserve line breaks
      if (currentParagraph.length > 1) {
        const paragraphElements: React.ReactNode[] = [];
        currentParagraph.forEach((line, index) => {
          paragraphElements.push(
            ...parseInlineElements(line, keyCounter + index * 100)
          );
          if (index < currentParagraph.length - 1) {
            paragraphElements.push(<br key={`br-${keyCounter}-${index}`} />);
          }
        });

        elements.push(
          <p key={`p-${keyCounter++}`} className="mb-4">
            {paragraphElements}
          </p>
        );
      } else {
        // Single line paragraph
        elements.push(
          <p key={`p-${keyCounter++}`} className="mb-4">
            {parseInlineElements(paragraphContent, keyCounter)}
          </p>
        );
      }
      currentParagraph = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();

    // Skip empty lines
    if (trimmedLine === "") {
      flushParagraph();
      continue;
    }

    // Handle headers
    if (trimmedLine.startsWith("#")) {
      flushParagraph();
      const headerMatch = trimmedLine.match(/^(#{1,6})\s+(.+)$/);
      if (headerMatch) {
        const level = headerMatch[1].length;
        const text = headerMatch[2];
        const HeaderTag = `h${level}` as
          | "h1"
          | "h2"
          | "h3"
          | "h4"
          | "h5"
          | "h6";

        elements.push(
          React.createElement(
            HeaderTag,
            {
              key: `h${level}-${keyCounter++}`,
              className: getHeaderClassName(level),
            },
            parseInlineElements(text, keyCounter)
          )
        );
      }
      continue;
    }

    // Handle display math ($$...$$)
    if (trimmedLine.startsWith("$$") && trimmedLine.endsWith("$$")) {
      flushParagraph();
      const math = trimmedLine.slice(2, -2);
      elements.push(renderDisplayMath(math, `math-${keyCounter++}`));
      continue;
    }

    // Handle Obsidian images
    const imageMatch = trimmedLine.match(
      /^!\[\[([^\]]+\.(png|jpg|jpeg|gif|webp|PNG|JPG|JPEG|GIF|WEBP))\]\]$/
    );
    if (imageMatch) {
      flushParagraph();
      const filename = imageMatch[1];
      elements.push(
        <ObsidianImage key={`img-${keyCounter++}`} filename={filename} />
      );
      continue;
    }

    // Handle code blocks
    if (trimmedLine.startsWith("```")) {
      flushParagraph();
      const language = trimmedLine.slice(3).trim() || "text";
      const codeLines: string[] = [];
      i++; // Skip the opening ```

      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }

      elements.push(
        <CodeBlock
          key={`code-${keyCounter++}`}
          language={language}
          code={codeLines.join("\n")}
        />
      );
      continue;
    }

    // Handle checkboxes (- [x] or - [ ])
    const checkboxMatch = trimmedLine.match(/^- \[([ x])\] (.+)$/);
    if (checkboxMatch) {
      flushParagraph();
      const isChecked = checkboxMatch[1] === "x";
      const checkboxText = checkboxMatch[2];

      elements.push(
        <CheckboxItem
          key={`checkbox-${keyCounter++}`}
          checked={isChecked}
          text={checkboxText}
          baseKey={keyCounter}
        />
      );
      continue;
    }

    // Handle regular list items (- item)
    const listItemMatch = trimmedLine.match(/^- (.+)$/);
    if (listItemMatch && !checkboxMatch) {
      flushParagraph();
      const listText = listItemMatch[1];

      elements.push(
        <div
          key={`list-${keyCounter++}`}
          className="flex items-start gap-2 my-2"
        >
          <span className="text-muted-foreground mt-1">•</span>
          <span>{parseInlineElements(listText, keyCounter)}</span>
        </div>
      );
      continue;
    }

    // Regular line - add to current paragraph
    currentParagraph.push(line);
  }

  // Flush any remaining paragraph
  flushParagraph();

  return elements;
}

function parseInlineElements(text: string, baseKey: number): React.ReactNode[] {
  const result: React.ReactNode[] = [];
  let keyCounter = baseKey * 1000;

  // Process inline math first (to avoid conflicts with other formatting)
  const mathParts: Array<{ type: "text" | "math"; content: string }> = [];
  const inlineMathRegex = /\$([^$\n]+?)\$/g;
  let lastIndex = 0;
  let match;

  while ((match = inlineMathRegex.exec(text)) !== null) {
    // Add text before math
    if (match.index > lastIndex) {
      mathParts.push({
        type: "text",
        content: text.slice(lastIndex, match.index),
      });
    }

    // Add math
    mathParts.push({
      type: "math",
      content: match[1],
    });

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    mathParts.push({
      type: "text",
      content: text.slice(lastIndex),
    });
  }

  // If no math found, just process the whole text
  if (mathParts.length === 0) {
    mathParts.push({ type: "text", content: text });
  }

  // Now process each part
  mathParts.forEach((part) => {
    if (part.type === "math") {
      result.push(
        renderInlineMath(part.content, `inline-math-${keyCounter++}`)
      );
    } else {
      result.push(...parseTextWithFormatting(part.content, keyCounter));
      keyCounter += 100;
    }
  });

  return result.length > 0 ? result : [text];
}

function parseTextWithFormatting(
  text: string,
  baseKey: number
): React.ReactNode[] {
  if (!text) return [];

  const result: React.ReactNode[] = [];
  let keyCounter = baseKey;

  // Parse in order: code, bold, italic, links
  const tokens = tokenizeText(text);

  tokens.forEach((token) => {
    switch (token.type) {
      case "code":
        result.push(
          <code
            key={`code-${keyCounter++}`}
            className="bg-muted px-1 py-0.5 rounded text-sm"
          >
            {token.content}
          </code>
        );
        break;
      case "bold":
        result.push(
          <strong key={`bold-${keyCounter++}`}>
            {parseTextWithFormatting(token.content, keyCounter + 1000)}
          </strong>
        );
        break;
      case "italic":
        result.push(
          <em key={`italic-${keyCounter++}`}>
            {parseTextWithFormatting(token.content, keyCounter + 1000)}
          </em>
        );
        break;
      case "link":
        result.push(
          <a
            key={`link-${keyCounter++}`}
            href={token.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {token.content}
          </a>
        );
        break;
      case "text":
        if (token.content) {
          result.push(token.content);
        }
        break;
    }
  });

  return result;
}

interface Token {
  type: "text" | "code" | "bold" | "italic" | "link";
  content: string;
  url?: string;
}

function tokenizeText(text: string): Token[] {
  const tokens: Token[] = [];
  let remaining = text;

  while (remaining.length > 0) {
    // Check for bold text first (highest priority for ** and __)
    const boldStarMatch = remaining.match(/^\*\*([^*]+?)\*\*/);
    if (boldStarMatch) {
      tokens.push({ type: "bold", content: boldStarMatch[1] });
      remaining = remaining.slice(boldStarMatch[0].length);
      continue;
    }

    const boldUnderMatch = remaining.match(/^__([^_]+?)__/);
    if (boldUnderMatch) {
      tokens.push({ type: "bold", content: boldUnderMatch[1] });
      remaining = remaining.slice(boldUnderMatch[0].length);
      continue;
    }

    // Check for inline code (high priority to avoid conflicts)
    const codeMatch = remaining.match(/^`([^`]+?)`/);
    if (codeMatch) {
      tokens.push({ type: "code", content: codeMatch[1] });
      remaining = remaining.slice(codeMatch[0].length);
      continue;
    }

    // Check for italic text (both * and _ syntax)
    const italicStarMatch = remaining.match(/^\*([^*]+?)\*/);
    if (italicStarMatch) {
      tokens.push({ type: "italic", content: italicStarMatch[1] });
      remaining = remaining.slice(italicStarMatch[0].length);
      continue;
    }

    const italicUnderMatch = remaining.match(/^_([^_]+?)_/);
    if (italicUnderMatch) {
      tokens.push({ type: "italic", content: italicUnderMatch[1] });
      remaining = remaining.slice(italicUnderMatch[0].length);
      continue;
    }

    // Check for links
    const linkMatch = remaining.match(/^\[([^\]]*)\]\(([^\)]*)\)/);
    if (linkMatch) {
      tokens.push({ type: "link", content: linkMatch[1], url: linkMatch[2] });
      remaining = remaining.slice(linkMatch[0].length);
      continue;
    }

    // Find next special character or take rest of string
    const nextSpecialIndex = Math.min(
      ...["`", "*", "_", "["].map((char) => {
        const idx = remaining.indexOf(char);
        return idx === -1 ? Infinity : idx;
      })
    );

    if (nextSpecialIndex === Infinity || nextSpecialIndex === 0) {
      // No more special characters or we're at one but didn't match - take one character
      tokens.push({ type: "text", content: remaining.charAt(0) });
      remaining = remaining.slice(1);
    } else {
      // Take text up to next special character
      tokens.push({
        type: "text",
        content: remaining.slice(0, nextSpecialIndex),
      });
      remaining = remaining.slice(nextSpecialIndex);
    }
  }

  return tokens;
}

function CodeBlock({ language, code }: { language: string; code: string }) {
  return (
    <div className="my-4">
      <SyntaxHighlighter
        language={language}
        style={oneDark} // You could make this dynamic based on theme
        customStyle={{
          margin: 0,
          borderRadius: "0.5rem",
          fontSize: "0.875rem",
        }}
        PreTag="div"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

function ObsidianImage({ filename }: { filename: string }) {
  // Remove any path separators and use just the filename
  const cleanFilename = filename.split("/").pop() || filename;
  const imagePath = `/obsidian/images/${cleanFilename}`;

  return (
    <div className="my-6 flex justify-center">
      <div className="relative max-w-full">
        <Image
          src={imagePath}
          alt={cleanFilename}
          width={800}
          height={600}
          className="rounded-lg shadow-md"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>
    </div>
  );
}

function CheckboxItem({
  checked,
  text,
  baseKey,
}: {
  checked: boolean;
  text: string;
  baseKey: number;
}) {
  return (
    <div className="flex items-start gap-3 my-2">
      <input
        type="checkbox"
        checked={checked}
        readOnly
        className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary cursor-default"
      />
      <span
        className={`flex-1 ${
          checked ? "line-through text-muted-foreground" : ""
        }`}
      >
        {parseInlineElements(text, baseKey)}
      </span>
    </div>
  );
}

function renderDisplayMath(math: string, key: string): React.ReactNode {
  try {
    const rendered = katex.renderToString(math.trim(), {
      displayMode: true,
      throwOnError: false,
      errorColor: "#cc0000",
    });
    return (
      <div
        key={key}
        className="katex-display my-4"
        dangerouslySetInnerHTML={{ __html: rendered }}
      />
    );
  } catch (error) {
    console.warn("KaTeX display math error:", error);
    return (
      <div
        key={key}
        className="math-error bg-red-100 dark:bg-red-900 p-2 rounded"
      >
        Display Math Error: $${math}$$
      </div>
    );
  }
}

function renderInlineMath(math: string, key: string): React.ReactNode {
  try {
    const rendered = katex.renderToString(math.trim(), {
      displayMode: false,
      throwOnError: false,
      errorColor: "#cc0000",
    });
    return (
      <span
        key={key}
        className="katex-inline"
        dangerouslySetInnerHTML={{ __html: rendered }}
      />
    );
  } catch (error) {
    console.warn("KaTeX inline math error:", error);
    return (
      <span key={key} className="math-error text-red-500">
        Math Error: ${math}$
      </span>
    );
  }
}

function getHeaderClassName(level: number): string {
  const baseClasses = "font-bold mb-4 text-foreground";
  switch (level) {
    case 1:
      return `text-3xl ${baseClasses}`;
    case 2:
      return `text-2xl ${baseClasses}`;
    case 3:
      return `text-xl ${baseClasses}`;
    case 4:
      return `text-lg ${baseClasses}`;
    case 5:
      return `text-base ${baseClasses}`;
    case 6:
      return `text-sm ${baseClasses}`;
    default:
      return baseClasses;
  }
}
