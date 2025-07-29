"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, FileText, FolderOpen } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

interface Post {
  slug: string;
  title: string;
  date?: string;
  content: string;
  directory: string;
  image?: string;
}

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [directories, setDirectories] = useState<string[]>([]);
  const [activeDirectory, setActiveDirectory] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/posts");
        if (response.ok) {
          const data = await response.json();
          setPosts(data.posts);
          setDirectories(data.directories);
          // Set the first directory as active by default
          if (data.directories.length > 0 && !activeDirectory) {
            setActiveDirectory(data.directories[0]);
          }
        } else {
          console.error("Failed to fetch posts");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [activeDirectory]);

  const filteredPosts = posts.filter(
    (post) => post.directory === activeDirectory
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-[90rem] mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white transition-colors font-dm-sans"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
            <div className="h-6 w-px bg-border"></div>
            <div>
              <h1 className="text-2xl font-bold font-dm-sans">Posts</h1>
              <p className="text-sm text-muted-foreground font-dm-sans">
                Notes, thoughts, and writings
              </p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <div className="max-w-[90rem] mx-auto px-4 py-8">
        {/* Directory Switcher */}
        {directories.length > 0 && (
          <div className="mb-8">
            <div className="inline-flex rounded-lg border border-border bg-muted p-1 flex-wrap gap-1">
              {directories.map((directory) => {
                const postCount = posts.filter(
                  (p) => p.directory === directory
                ).length;
                const displayName = directory
                  .replace(/@|_|-/g, " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase());

                // Choose icon based on directory name
                const getIcon = (dirName: string) => {
                  if (dirName.includes("daily") || dirName.includes("note")) {
                    return <Calendar className="h-4 w-4" />;
                  }
                  return <FileText className="h-4 w-4" />;
                };

                return (
                  <button
                    key={directory}
                    onClick={() => setActiveDirectory(directory)}
                    className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all ${
                      activeDirectory === directory
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {getIcon(directory)}
                    {displayName} ({postCount})
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Posts List */}
        <div className="space-y-6">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-foreground"></div>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <FolderOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">
                No posts found
              </h3>
              <p className="text-muted-foreground">
                No content found in the {activeDirectory} directory.
              </p>
            </div>
          ) : (
            filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="post-card group relative rounded-lg border border-border bg-card p-6 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start gap-6 rounded">
                  {post.image && (
                    <div className="rounded relative w-28 h-28 overflow-hidden bg-muted flex-shrink-0 shadow-sm ring-1 ring-black/5 dark:ring-white/10">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="rounded object-cover"
                        sizes="112px"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <h2 className="post-title text-xl font-semibold text-foreground transition-colors">
                          {post.title}
                        </h2>
                        {post.date && (
                          <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>
                        )}
                        <p className="mt-3 text-muted-foreground line-clamp-3">
                          {post.content}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono ml-4">
                        <span className="px-2 py-1 bg-muted rounded-md">
                          {post.directory}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  href={`/posts/${post.directory}/${post.slug}`}
                  className="post-link absolute inset-0 rounded-lg transition-all duration-200"
                >
                  <span className="sr-only">Read {post.title}</span>
                </Link>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
