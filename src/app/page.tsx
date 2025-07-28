/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { ThemeToggle } from "@/components/theme-toggle";
import Certifications, {
  categorizeCertifications,
} from "@/components/certifications";
import { Github, ExternalLink, Calendar, ImageIcon, Copy } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { toast, Toaster } from "sonner";
import { useState, useRef } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const [activeTab, setActiveTab] = useState<"main" | "connect">("main");

  // Refs for scrolling
  const projectsRef = useRef<HTMLDivElement>(null);
  const certsRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${label} copied to clipboard!`);
    } catch {
      toast.error("Failed to copy to clipboard");
    }
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToCertifications = () => {
    // Scroll to the actual certifications section
    certificationsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="bottom-right" richColors />
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-[90rem] mx-auto px-4 py-4 flex justify-between items-center">
          <div className="logo-rainbow-hover" onClick={scrollToTop}>
            <div className="p-1">
              <h1 className="text-2xl font-bold font-dm-sans">Ibraheem Amin</h1>
              <p className="text-sm text-muted-foreground font-dm-sans">
                CS Student at Princeton
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={scrollToProjects}
              className="relative text-sm font-medium text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer group font-dm-sans"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
            <button
              onClick={scrollToCertifications}
              className="relative text-sm font-medium text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer group font-dm-sans"
            >
              Certifications
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
            <a
              href="https://ibraheem-amin.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-sm font-medium text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer group font-dm-sans"
            >
              Legacy Portfolio
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </nav>

          <ThemeToggle />
        </div>
      </header>

      <div className="max-w-[90rem] mx-auto px-4 py-8">
        {/* Top Grid - Terminals */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Main Terminal - Takes 3/4 of the width on large screens */}
          <div className="lg:col-span-3">
            {/* Hero Section - Full Terminal */}
            <motion.section
              className="mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ y: heroY, opacity: heroOpacity }}
            >
              {/* Terminal Window */}
              <div
                style={{ borderRadius: "10px" }}
                className="bg-gradient-to-br from-gray-100/95 to-gray-200/95 dark:from-slate-800/90 dark:to-slate-900/90 backdrop-blur-xl border border-gray-300/50 dark:border-slate-600/50 shadow-2xl overflow-hidden"
              >
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-gray-200/80 dark:bg-slate-700/50 border-b border-gray-300/50 dark:border-slate-600/30">
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-3 h-3 bg-red-500"
                      style={{ borderRadius: "50%" }}
                    ></div>
                    <div
                      className="w-3 h-3 bg-yellow-500"
                      style={{ borderRadius: "50%" }}
                    ></div>
                    <div
                      className="w-3 h-3 bg-green-500"
                      style={{ borderRadius: "50%" }}
                    ></div>
                  </div>
                  <div className="text-gray-600 dark:text-slate-400 text-sm font-mono">
                    ~/ibraheem-portfolio
                  </div>
                  <div className="w-16"></div> {/* Spacer for balance */}
                </div>

                {/* Terminal Content */}
                <div className="p-8 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md">
                  <div className="text-gray-700 dark:text-slate-300 text-sm md:text-base space-y-3 font-mono max-w-5xl">
                    {/* Welcome Header */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <p className="text-blue-600 dark:text-cyan-400 text-lg mb-4">
                        # Hi, I&apos;m Ibraheem, scroll down to explore my work!
                      </p>
                    </motion.div>

                    {/* Terminal Commands */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      className="space-y-2"
                    >
                      <p>
                        <span className="text-green-600 dark:text-green-400">
                          $
                        </span>{" "}
                        <span className="text-gray-900 dark:text-white">
                          whoami
                        </span>
                      </p>
                      <p className="text-blue-600 dark:text-cyan-400 pl-4">
                        Ibraheem Amin
                        <span className="text-gray-600 dark:text-slate-300 pl-4">
                          Computer Science (B.S.E) Undergrad at Princeton
                          University
                        </span>
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.1, duration: 0.5 }}
                      className="space-y-2"
                    >
                      <p>
                        <span className="text-green-600 dark:text-green-400">
                          $
                        </span>{" "}
                        <span className="text-gray-900 dark:text-white">
                          cat introduction.md
                        </span>
                      </p>
                      <div className="text-gray-600 dark:text-slate-300 pl-4 space-y-2">
                        <p>
                          Hi! I&apos;m Ibraheem, a current computer science
                          undergraduate student at Princeton University.
                        </p>
                        <p>
                          I am interested in systems design, LLM utilization and
                          interoperability strategies, and web infrastructure.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4, duration: 0.5 }}
                      className="space-y-2"
                    >
                      <p>
                        <span className="text-green-600 dark:text-green-400">
                          $
                        </span>{" "}
                        <span className="text-gray-900 dark:text-white">
                          cat interests.txt
                        </span>
                      </p>
                      <div className="text-gray-600 dark:text-slate-300 pl-4 space-y-1">
                        <p className="text-purple-600 dark:text-purple-400">
                          Some other things that I am interested in:
                        </p>
                        <p>
                          ➼ Representing code and design decisions as nodes in a
                          graph and vector embeddings
                        </p>
                        <p>
                          ➼ Building to reduce or use &quot;dead&quot; compute
                          or &quot;dead&quot; memory for shared compute and
                          serverless
                        </p>
                        <p>
                          ➼ Ways to measure &quot;similarity&quot; between
                          arbitrary and graph-like data sources
                        </p>
                      </div>
                    </motion.div>

                    {/* <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.7, duration: 0.5 }}
                      className="space-y-2"
                    >
                                             <p>
                         <span className="text-green-600 dark:text-green-400">$</span> <span className="text-gray-900 dark:text-white">cat contact.txt</span>
                       </p>
                       <div className="text-gray-600 dark:text-slate-300 pl-4 space-y-1">
                         <p>Feel free to reach out:</p>
                         <p className="text-blue-600 dark:text-cyan-400">📧 ibraheem@princeton.edu</p>
                         <p className="text-gray-500 dark:text-slate-400 text-xs pl-4">for academic inquiries</p>
                         <p className="text-blue-600 dark:text-cyan-400">📧 ibraheem.amin2@gmail.com</p>
                         <p className="text-gray-500 dark:text-slate-400 text-xs pl-4">for professional inquiries</p>
                       </div>
                    </motion.div> */}

                    {/* <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4, duration: 0.5 }}
                      className="space-y-2"
                    >
                                             <p>
                         <span className="text-green-600 dark:text-green-400">$</span> <span className="text-gray-900 dark:text-white">ls -la skills/</span>
                       </p>
                       <p className="text-gray-600 dark:text-slate-300 pl-4">drwxr-xr-x  full-stack-development/</p>
                       <p className="text-gray-600 dark:text-slate-300 pl-4">drwxr-xr-x  systems-design/</p>
                       <p className="text-gray-600 dark:text-slate-300 pl-4">drwxr-xr-x  design-thinking/</p>
                       <p className="text-gray-600 dark:text-slate-300 pl-4">drwxr-xr-x  builder/</p>
                    </motion.div> */}

                    {/* <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.7, duration: 0.5 }}
                      className="space-y-2"
                    >
                                             <p>
                         <span className="text-green-600 dark:text-green-400">$</span>{" "}
                         <span className="text-gray-900 dark:text-white">echo &quot;Thanks for visiting my portfolio!&quot;</span>
                       </p>
                       <p className="text-purple-600 dark:text-purple-400 pl-4">Thanks for visiting my portfolio!</p>
                    </motion.div> */}

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.3, duration: 0.5 }}
                      className="space-y-2"
                    >
                      <p>
                        <span className="text-green-600 dark:text-green-400">
                          $
                        </span>{" "}
                        <span className="text-gray-900 dark:text-white">
                          ./explore_projects --interactive
                        </span>
                      </p>
                      <p className="text-orange-600 dark:text-yellow-400 pl-4">
                        Loading project showcase...
                      </p>
                      <p className="text-gray-500 dark:text-slate-400 pl-4">
                        ↓ Scroll down to explore my work ↓{" "}
                        <motion.span
                          className="w-2 h-4 bg-gray-900 dark:bg-white ml-2 animate-pulse rounded-sm"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 2.6, duration: 0.5 }}
                        >
                          <span className="w-2 h-4 bg-gray-900 dark:bg-white ml-2 animate-pulse rounded-sm"></span>
                        </motion.span>
                      </p>
                    </motion.div>

                    {/* <motion.p
                       className="flex items-center pt-2"
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       transition={{ delay: 2.3, duration: 0.5 }}
                     >
                       <span className="text-green-600 dark:text-green-400">$</span>
                       <span className="w-2 h-4 bg-gray-900 dark:bg-white ml-2 animate-pulse rounded-sm"></span>
                     </motion.p> */}
                  </div>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Sidebar - Second Terminal */}
          <div className="space-y-6">
            <motion.div
              ref={certsRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Second Terminal Window */}
              <div
                style={{ borderRadius: "10px" }}
                className="bg-gradient-to-br from-gray-100/95 to-gray-200/95 dark:from-slate-800/90 dark:to-slate-900/90 backdrop-blur-xl border border-gray-300/50 dark:border-slate-600/50 shadow-2xl overflow-hidden transition-all duration-500"
              >
                {/* Terminal Header with Tabs */}
                <div className="bg-gray-200/80 dark:bg-slate-700/50 border-b border-gray-300/50 dark:border-slate-600/30">
                  <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-3 h-3 bg-red-500"
                        style={{ borderRadius: "50%" }}
                      ></div>
                      <div
                        className="w-3 h-3 bg-yellow-500"
                        style={{ borderRadius: "50%" }}
                      ></div>
                      <div
                        className="w-3 h-3 bg-green-500"
                        style={{ borderRadius: "50%" }}
                      ></div>
                    </div>
                    <div className="text-gray-600 dark:text-slate-400 text-sm font-mono">
                      ~/connect
                    </div>
                    <div className="w-16"></div>
                  </div>

                  {/* Tab Navigation */}
                  <div className="flex border-t border-gray-300/50 dark:border-slate-600/30">
                    <button
                      onClick={() => setActiveTab("main")}
                      className={`px-4 py-2 text-sm font-mono border-r border-gray-300/50 dark:border-slate-600/30 transition-colors cursor-pointer ${
                        activeTab === "main"
                          ? "bg-white/70 dark:bg-slate-900/60 text-gray-900 dark:text-white"
                          : "text-gray-600 dark:text-slate-400 hover:bg-gray-100/50 dark:hover:bg-slate-800/50"
                      }`}
                    >
                      connect.sh
                    </button>
                    <button
                      onClick={() => setActiveTab("connect")}
                      className={`px-4 py-2 text-sm font-mono transition-colors cursor-pointer ${
                        activeTab === "connect"
                          ? "bg-white/70 dark:bg-slate-900/60 text-gray-900 dark:text-white"
                          : "text-gray-600 dark:text-slate-400 hover:bg-gray-100/50 dark:hover:bg-slate-800/50"
                      }`}
                    >
                      certs.sh
                    </button>
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-6 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md min-h-[400px]">
                  {activeTab === "main" ? (
                    <div className="text-gray-700 dark:text-slate-300 text-sm font-mono space-y-3">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <p className="text-blue-600 dark:text-cyan-400 mb-3">
                          # Contact Information
                        </p>

                        <div className="space-y-2">
                          <p>
                            <span className="text-green-600 dark:text-green-400">
                              $
                            </span>{" "}
                            <span className="text-gray-900 dark:text-white">
                              cat emails.txt
                            </span>
                          </p>

                          <div className="pl-4 space-y-2">
                            <div className="flex items-center justify-between group">
                              <span className="text-gray-600 dark:text-slate-300">
                                ibraheem.amin2@gmail.com
                              </span>
                              <button
                                onClick={() =>
                                  copyToClipboard(
                                    "ibraheem.amin2@gmail.com",
                                    "Personal email"
                                  )
                                }
                                className="p-1 hover:bg-gray-200/50 dark:hover:bg-slate-800/50 rounded cursor-pointer transition-colors hover:scale-110"
                              >
                                <Copy className="h-3 w-3 text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300" />
                              </button>
                            </div>
                            <div className="flex items-center justify-between group">
                              <span className="text-gray-600 dark:text-slate-300">
                                ibraheem@princeton.edu
                              </span>
                              <button
                                onClick={() =>
                                  copyToClipboard(
                                    "ibraheem@princeton.edu",
                                    "Princeton email"
                                  )
                                }
                                className="p-1 hover:bg-gray-200/50 dark:hover:bg-slate-800/50 rounded cursor-pointer transition-colors hover:scale-110"
                              >
                                <Copy className="h-3 w-3 text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300" />
                              </button>
                            </div>
                          </div>

                          <p className="pt-2">
                            <span className="text-green-600 dark:text-green-400">
                              $
                            </span>{" "}
                            <span className="text-gray-900 dark:text-white">
                              cat social.txt
                            </span>
                          </p>

                          <div className="pl-4 space-y-2">
                            <div className="flex items-center justify-between group">
                              <span className="text-gray-600 dark:text-slate-300">
                                GitHub: DIodide
                              </span>
                              <button
                                onClick={() =>
                                  copyToClipboard(
                                    "https://github.com/DIodide",
                                    "GitHub profile"
                                  )
                                }
                                className="p-1 hover:bg-gray-200/50 dark:hover:bg-slate-800/50 rounded cursor-pointer transition-colors hover:scale-110"
                              >
                                <Copy className="h-3 w-3 text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300" />
                              </button>
                            </div>
                            <div className="flex items-center justify-between group">
                              <span className="text-gray-600 dark:text-slate-300">
                                LinkedIn: /in/ibraheem-amin
                              </span>
                              <button
                                onClick={() =>
                                  copyToClipboard(
                                    "https://linkedin.com/in/ibraheem-amin",
                                    "LinkedIn profile"
                                  )
                                }
                                className="p-1 hover:bg-gray-200/50 dark:hover:bg-slate-800/50 rounded cursor-pointer transition-colors hover:scale-110"
                              >
                                <Copy className="h-3 w-3 text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300" />
                              </button>
                            </div>
                          </div>

                          <p className="pt-2 flex items-center">
                            <span className="text-green-600 dark:text-green-400">
                              $
                            </span>
                            <span className="w-2 h-4 bg-gray-900 dark:bg-white ml-2 animate-pulse rounded-sm"></span>
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  ) : (
                    <div className="text-gray-700 dark:text-slate-300 text-sm font-mono space-y-3">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <p className="text-blue-600 dark:text-cyan-400 mb-3">
                          # Certifications & Achievements
                        </p>

                        <div className="space-y-2">
                          <p>
                            <span className="text-green-600 dark:text-green-400">
                              $
                            </span>{" "}
                            <span className="text-gray-900 dark:text-white">
                              ls -la certifications/
                            </span>
                          </p>

                          <div className="pl-4 space-y-1">
                            {(() => {
                              // Get all certifications from all groups
                              const allCertifications =
                                categorizeCertifications().flatMap(
                                  (group) => group.certifications
                                );
                              const firstThree = allCertifications.slice(0, 3);
                              const remaining = allCertifications.length - 3;

                              return (
                                <>
                                  {firstThree.map((cert, index) => (
                                    <a
                                      key={index}
                                      href={cert.verification_link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-gray-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors block cursor-pointer"
                                    >
                                      -rw-r--r-- {cert.name}
                                    </a>
                                  ))}
                                  {remaining > 0 && (
                                    <button
                                      onClick={scrollToCertifications}
                                      className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors block cursor-pointer underline decoration-dotted underline-offset-2"
                                    >
                                      ... and {remaining} more
                                    </button>
                                  )}
                                </>
                              );
                            })()}
                          </div>

                          <p className="pt-2 flex items-center">
                            <span className="text-green-600 dark:text-green-400">
                              $
                            </span>
                            <span className="w-2 h-4 bg-gray-900 dark:bg-white ml-2 animate-pulse rounded-sm"></span>
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Projects Section - Separate Grid */}
        <div ref={projectsRef} className="mb-12">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="relative">
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-sm rounded-lg -z-10 transform rotate-1"></div>

              {/* Main header container */}
              <div className="bg-gradient-to-r from-gray-50/80 via-white/60 to-gray-50/80 dark:from-slate-800/80 dark:via-slate-700/60 dark:to-slate-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-slate-600/50 rounded-lg p-6 relative overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 animate-pulse"></div>
                </div>

                {/* Code-style decorative elements */}
                <div className="absolute top-3 right-4 text-gray-400/30 dark:text-slate-500/30 font-mono text-xs">
                  {/* // showcase */}
                </div>
                <div className="absolute bottom-1 left-4 text-gray-400/30 dark:text-slate-500/30 font-mono text-xs">
                  &lt;portfolio/&gt;
                </div>

                <div className="relative z-10 flex items-center gap-4">
                  {/* Command prompt style indicator */}
                  {/* <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-600 dark:text-green-400 font-mono text-sm">&gt;</span>
                  </div> */}

                  {/* Main heading */}
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                      Featured Projects
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-slate-400 mt-1 font-mono">
                      personal projects, freelance work, and hackathon ideas.
                    </p>
                  </div>
                </div>

                {/* Progress bar aesthetic */}
                <div className="mt-4 flex gap-1">
                  <div className="h-1 bg-green-500 rounded-full flex-1 animate-pulse"></div>
                  <div className="h-1 bg-blue-500 rounded-full flex-1 animate-pulse delay-75"></div>
                  <div className="h-1 bg-purple-500 rounded-full flex-1 animate-pulse delay-150"></div>
                  <div className="h-1 bg-cyan-500 rounded-full flex-1 animate-pulse delay-225"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10 backdrop-blur-sm rounded-lg -z-10 transform group-hover:rotate-1 transition-transform duration-300"></div>

              <div className="bg-gradient-to-br from-gray-50/90 via-white/70 to-gray-100/90 dark:from-slate-800/90 dark:via-slate-700/70 dark:to-slate-800/90 backdrop-blur-xl border border-gray-200/50 dark:border-slate-600/50 rounded-lg overflow-hidden group-hover:shadow-2xl group-hover:shadow-blue-500/10 transition-all duration-300">
                {/* Project Image Carousel */}
                <div className="relative h-48 w-full bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 overflow-hidden">
                  <Carousel className="w-full h-full">
                    <CarouselContent>
                      <CarouselItem>
                        <div className="relative h-48 w-full">
                          <Image
                            src="https://evalgaming.com/api/og/home-og"
                            alt="EVAL Gaming Platform - Home"
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="relative h-48 w-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                          <div className="text-center">
                            <ImageIcon className="h-12 w-12 text-blue-500 mx-auto mb-2" />
                            <p className="text-sm text-gray-500 dark:text-slate-400 font-mono">
                              Dashboard View
                            </p>
                          </div>
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="relative h-48 w-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                          <div className="text-center">
                            <ImageIcon className="h-12 w-12 text-purple-500 mx-auto mb-2" />
                            <p className="text-sm text-gray-500 dark:text-slate-400 font-mono">
                              Player Profiles
                            </p>
                          </div>
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="p-6 relative">
                  {/* Decorative code comment */}
                  <div className="absolute top-2 right-4 text-gray-400/40 dark:text-slate-500/40 font-mono text-xs">
                    {/* featured */}
                  </div>

                  <div className="flex flex-col space-y-4 mb-4">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                          EVAL
                        </h3>
                        <div className="px-2 py-1 bg-green-500/20 dark:bg-green-400/20 border border-green-500/30 dark:border-green-400/30 rounded text-xs text-green-700 dark:text-green-300 font-mono">
                          ACTIVE
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-slate-400 flex items-center gap-2 font-mono">
                        <Calendar className="h-3 w-3" />
                        <span>Summer 2025</span>
                      </p>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <a
                        href="https://github.com/DIodide/eval-next"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gray-100/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-slate-600/50 hover:bg-gray-200/80 dark:hover:bg-slate-700/80 transition-all rounded-lg group/btn cursor-pointer"
                      >
                        <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        Repository
                      </a>
                      <a
                        href="https://evalgaming.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all rounded-lg group/btn shadow-lg shadow-blue-500/20 cursor-pointer"
                      >
                        <ExternalLink className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        Live Demo
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-slate-300 mb-4 leading-relaxed">
                    A comprehensive high school e-sports recruiting platform
                    connecting talented student gamers with college recruiting
                    opportunities. Features player profiles, tournament
                    tracking, recruitment dashboards, and comprehensive
                    analytics.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs bg-blue-500/20 dark:bg-blue-400/20 border border-blue-500/30 dark:border-blue-400/30 text-blue-700 dark:text-blue-300 rounded-full font-mono">
                      Next.js
                    </span>
                    <span className="px-3 py-1 text-xs bg-purple-500/20 dark:bg-purple-400/20 border border-purple-500/30 dark:border-purple-400/30 text-purple-700 dark:text-purple-300 rounded-full font-mono">
                      tRPC
                    </span>
                    <span className="px-3 py-1 text-xs bg-cyan-500/20 dark:bg-cyan-400/20 border border-cyan-500/30 dark:border-cyan-400/30 text-cyan-700 dark:text-cyan-300 rounded-full font-mono">
                      Prisma
                    </span>
                    <span className="px-3 py-1 text-xs bg-green-500/20 dark:bg-green-400/20 border border-green-500/30 dark:border-green-400/30 text-green-700 dark:text-green-300 rounded-full font-mono">
                      Clerk
                    </span>
                    <span className="px-3 py-1 text-xs bg-indigo-500/20 dark:bg-indigo-400/20 border border-indigo-500/30 dark:border-indigo-400/30 text-indigo-700 dark:text-indigo-300 rounded-full font-mono">
                      PostgreSQL
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-teal-500/10 backdrop-blur-sm rounded-lg -z-10 transform group-hover:rotate-1 transition-transform duration-300"></div>

              <div className="bg-gradient-to-br from-gray-50/90 via-white/70 to-gray-100/90 dark:from-slate-800/90 dark:via-slate-700/70 dark:to-slate-800/90 backdrop-blur-xl border border-gray-200/50 dark:border-slate-600/50 rounded-lg overflow-hidden group-hover:shadow-2xl group-hover:shadow-green-500/10 transition-all duration-300">
                {/* Project Image Carousel */}
                <div className="relative h-48 w-full bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10 overflow-hidden">
                  <Carousel className="w-full h-full">
                    <CarouselContent>
                      <CarouselItem>
                        <div className="relative h-48 w-full">
                          <Image
                            src="/images/projects/mindbridge-title.png"
                            alt="MindBridge - AI-Powered Learning Platform"
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="relative h-48 w-full">
                          <Image
                            src="/images/projects/mindbridge-selection.png"
                            alt="MindBridge - Course Selection Interface"
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="relative h-48 w-full">
                          <Image
                            src="/images/projects/mindbridge-knowledge.png"
                            alt="MindBridge - Knowledge Graph Visualization"
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="relative h-48 w-full">
                          <Image
                            src="/images/projects/mindbridge-graph.png"
                            alt="MindBridge - Interactive Learning Graph"
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="p-6 relative">
                  {/* Decorative code comment */}
                  <div className="absolute top-2 right-4 text-gray-400/40 dark:text-slate-500/40 font-mono text-xs">
                    {/* hackathon */}
                  </div>

                  <div className="flex flex-col space-y-4 mb-4">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-emerald-800 dark:from-white dark:via-green-200 dark:to-emerald-200 bg-clip-text text-transparent">
                          MindBridge
                        </h3>
                        <div className="px-2 py-1 bg-purple-500/20 dark:bg-purple-400/20 border border-purple-500/30 dark:border-purple-400/30 rounded text-xs text-purple-700 dark:text-purple-300 font-mono">
                          HACKATHON
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-slate-400 flex items-center gap-2 font-mono">
                        <Calendar className="h-3 w-3" />
                        <span>Fall 2024</span>
                      </p>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <a
                        href="https://github.com/DIodide/MindBridge-front"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gray-100/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-slate-600/50 hover:bg-gray-200/80 dark:hover:bg-slate-700/80 transition-all rounded-lg group/btn cursor-pointer"
                      >
                        <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        Repository
                      </a>
                      <a
                        href="https://mindbridge.courses"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 transition-all rounded-lg group/btn shadow-lg shadow-green-500/20 cursor-pointer"
                      >
                        <ExternalLink className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        Live Demo
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-slate-300 mb-4 leading-relaxed">
                    A roadmap generation tool creating personalized technical
                    and educational guides for any topic. Built at
                    HackPrinceton, it processes natural language learning goals
                    into dynamic, interactive roadmaps with step-by-step guides,
                    examples, and links to external resources.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs bg-blue-500/20 dark:bg-blue-400/20 border border-blue-500/30 dark:border-blue-400/30 text-blue-700 dark:text-blue-300 rounded-full font-mono">
                      Next.js
                    </span>
                    <span className="px-3 py-1 text-xs bg-green-500/20 dark:bg-green-400/20 border border-green-500/30 dark:border-green-400/30 text-green-700 dark:text-green-300 rounded-full font-mono">
                      OpenAI API
                    </span>
                    <span className="px-3 py-1 text-xs bg-emerald-500/20 dark:bg-emerald-400/20 border border-emerald-500/30 dark:border-emerald-400/30 text-emerald-700 dark:text-emerald-300 rounded-full font-mono">
                      Tailwind CSS
                    </span>
                    <span className="px-3 py-1 text-xs bg-purple-500/20 dark:bg-purple-400/20 border border-purple-500/30 dark:border-purple-400/30 text-purple-700 dark:text-purple-300 rounded-full font-mono">
                      MUI
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 3 - BlockWarriors Beacon */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-yellow-500/10 backdrop-blur-sm rounded-lg -z-10 transform group-hover:rotate-1 transition-transform duration-300"></div>

              <div className="bg-gradient-to-br from-gray-50/90 via-white/70 to-gray-100/90 dark:from-slate-800/90 dark:via-slate-700/70 dark:to-slate-800/90 backdrop-blur-xl border border-gray-200/50 dark:border-slate-600/50 rounded-lg overflow-hidden group-hover:shadow-2xl group-hover:shadow-orange-500/10 transition-all duration-300">
                {/* Project Image Carousel */}
                <div className="relative h-48 w-full bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10 overflow-hidden">
                  <Carousel className="w-full h-full">
                    <CarouselContent>
                      <CarouselItem>
                        <div className="relative h-48 w-full">
                          <Image
                            src="/images/projects/blockwarriors-ai.webp"
                            alt="BlockWarriors AI - AI Battle Bot Interface"
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="relative h-48 w-full">
                          <Image
                            src="/images/projects/blockwarriors setup.png"
                            alt="BlockWarriors Setup - Tournament Configuration"
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="p-6 relative">
                  {/* Decorative code comment */}
                  <div className="absolute top-2 right-4 text-gray-400/40 dark:text-slate-500/40 font-mono text-xs">
                    {/* minecraft */}
                  </div>

                  <div className="flex flex-col space-y-4 mb-4">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 via-orange-800 to-red-800 dark:from-white dark:via-orange-200 dark:to-red-200 bg-clip-text text-transparent">
                          BlockWarriors AI
                        </h3>
                        <div className="px-2 py-1 bg-green-500/20 dark:bg-green-400/20 border border-green-500/30 dark:border-green-400/30 rounded text-xs text-green-700 dark:text-green-300 font-mono">
                          ACTIVE
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-slate-400 flex items-center gap-2 font-mono">
                        <Calendar className="h-3 w-3" />
                        <span>2024-2025</span>
                      </p>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <a
                        href="https://github.com/project-blockwarriors/blockwarriors-cmd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gray-100/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-slate-600/50 hover:bg-gray-200/80 dark:hover:bg-slate-700/80 transition-all rounded-lg group/btn cursor-pointer"
                      >
                        <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        Frontend Repo
                      </a>
                      <a
                        href="https://blockwarriors.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 transition-all rounded-lg group/btn shadow-lg shadow-orange-500/20 cursor-pointer"
                      >
                        <ExternalLink className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        Live Platform
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-slate-300 mb-4 leading-relaxed">
                    A Java plugin system handling real-time game state
                    management, player coordination, and seamless integration
                    with the web application via WebSockets for live tournament
                    broadcasting and team management.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs bg-orange-500/20 dark:bg-orange-400/20 border border-orange-500/30 dark:border-orange-400/30 text-orange-700 dark:text-orange-300 rounded-full font-mono">
                      Java
                    </span>

                    <span className="px-3 py-1 text-xs bg-blue-500/20 dark:bg-blue-400/20 border border-blue-500/30 dark:border-blue-400/30 text-blue-700 dark:text-blue-300 rounded-full font-mono">
                      Socket.io
                    </span>
                    <span className="px-3 py-1 text-xs bg-green-500/20 dark:bg-green-400/20 border border-green-500/30 dark:border-green-400/30 text-green-700 dark:text-green-300 rounded-full font-mono">
                      Next.js
                    </span>
                    <span className="px-3 py-1 text-xs bg-purple-500/20 dark:bg-purple-400/20 border border-purple-500/30 dark:border-purple-400/30 text-purple-700 dark:text-purple-300 rounded-full font-mono">
                      Express.js
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Certifications Section */}
        <div ref={certificationsRef}>
          <Certifications />
        </div>

        {/* Footer */}
        <footer className="text-center text-muted-foreground text-sm py-8 mt-12 border-t border-border/30">
          <p>
            &copy; {new Date().getFullYear()} Ibraheem Amin. Built with Next.js
            & shadcn/ui.
          </p>
        </footer>
      </div>
    </div>
  );
}
