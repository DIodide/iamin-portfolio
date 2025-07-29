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
import { useTerminal, getTerminalButtonClasses } from "@/lib/terminal";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const [activeTab, setActiveTab] = useState<"main" | "connect" | "courses">(
    "main"
  );

  // Terminal hooks
  const terminal1 = useTerminal();
  const terminal2 = useTerminal();

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

      <div className="max-w-[92rem] mx-auto px-4 py-8">
        {/* Top Grid - Terminals */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Main Terminal - Takes 3/4 of the width on large screens */}
          <div className="lg:col-span-3">
            {/* Hero Section - Full Terminal */}
            <motion.section
              className="mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: terminal1.isShaking ? [-2, 2, -2, 2, 0] : 0,
              }}
              transition={{
                duration: terminal1.isShaking ? 0.5 : 0.8,
                delay: terminal1.isShaking ? 0 : 0.2,
              }}
              style={{ y: heroY, opacity: heroOpacity }}
            >
              {/* Terminal Window */}
              <div
                style={{ borderRadius: "10px" }}
                className={`bg-gradient-to-br ${terminal1.colors.container} backdrop-blur-xl border ${terminal1.colors.border} shadow-2xl overflow-hidden`}
              >
                {/* Terminal Header */}
                <div
                  className={`flex items-center justify-between px-4 py-3 ${terminal1.colors.header} border-b`}
                >
                  <div className="flex items-center space-x-2">
                    <div
                      className={getTerminalButtonClasses("red").buttonClass}
                      onClick={() => terminal1.handleButtonClick("red")}
                    >
                      <span
                        className={getTerminalButtonClasses("red").symbolClass}
                      >
                        ×
                      </span>
                    </div>
                    <div
                      className={getTerminalButtonClasses("yellow").buttonClass}
                      onClick={() => terminal1.handleButtonClick("yellow")}
                    >
                      <span
                        className={
                          getTerminalButtonClasses("yellow").symbolClass
                        }
                      >
                        −
                      </span>
                    </div>
                    <div
                      className={getTerminalButtonClasses("green").buttonClass}
                      onClick={() => terminal1.handleButtonClick("green")}
                    >
                      <span
                        className={
                          getTerminalButtonClasses("green").symbolClass
                        }
                      >
                        +
                      </span>
                    </div>
                  </div>
                  <div className="text-gray-600 dark:text-slate-400 text-sm font-mono">
                    ~/ibraheem-portfolio
                  </div>
                  <div className="w-16"></div> {/* Spacer for balance */}
                </div>

                {/* Terminal Content */}
                <div
                  className={`p-8 ${terminal1.colors.content} backdrop-blur-md`}
                >
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
              animate={{
                opacity: 1,
                scale: 1,
                x: terminal2.isShaking ? [-2, 2, -2, 2, 0] : 0,
              }}
              transition={{
                duration: terminal2.isShaking ? 0.5 : 0.8,
                delay: terminal2.isShaking ? 0 : 0.6,
              }}
            >
              {/* Second Terminal Window */}
              <div
                style={{ borderRadius: "10px" }}
                className={`bg-gradient-to-br ${terminal2.colors.container} backdrop-blur-xl border ${terminal2.colors.border} shadow-2xl overflow-hidden transition-all duration-500`}
              >
                {/* Terminal Header with Tabs */}
                <div className={`${terminal2.colors.header} border-b`}>
                  <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <div
                        className={getTerminalButtonClasses("red").buttonClass}
                        onClick={() => terminal2.handleButtonClick("red")}
                      >
                        <span
                          className={
                            getTerminalButtonClasses("red").symbolClass
                          }
                        >
                          ×
                        </span>
                      </div>
                      <div
                        className={
                          getTerminalButtonClasses("yellow").buttonClass
                        }
                        onClick={() => terminal2.handleButtonClick("yellow")}
                      >
                        <span
                          className={
                            getTerminalButtonClasses("yellow").symbolClass
                          }
                        >
                          −
                        </span>
                      </div>
                      <div
                        className={
                          getTerminalButtonClasses("green").buttonClass
                        }
                        onClick={() => terminal2.handleButtonClick("green")}
                      >
                        <span
                          className={
                            getTerminalButtonClasses("green").symbolClass
                          }
                        >
                          +
                        </span>
                      </div>
                    </div>
                    <div className="text-gray-600 dark:text-slate-400 text-sm font-mono">
                      ~/connect
                    </div>
                    <div className="w-16"></div>
                  </div>

                  {/* Tab Navigation */}
                  <div
                    className={`flex border-t ${terminal2.colors.border.replace(
                      "border-",
                      "border-t-"
                    )}`}
                  >
                    <button
                      onClick={() => setActiveTab("main")}
                      className={`px-4 py-2 text-sm font-mono border-r ${terminal2.colors.border.replace(
                        "border-",
                        "border-r-"
                      )} transition-colors cursor-pointer ${
                        activeTab === "main"
                          ? `${terminal2.colors.content} text-gray-900 dark:text-white`
                          : "text-gray-600 dark:text-slate-400 hover:bg-gray-100/50 dark:hover:bg-slate-800/50"
                      }`}
                    >
                      connect.sh
                    </button>
                    <button
                      onClick={() => setActiveTab("connect")}
                      className={`px-4 py-2 text-sm font-mono border-r ${terminal2.colors.border.replace(
                        "border-",
                        "border-r-"
                      )} transition-colors cursor-pointer ${
                        activeTab === "connect"
                          ? `${terminal2.colors.content} text-gray-900 dark:text-white`
                          : "text-gray-600 dark:text-slate-400 hover:bg-gray-100/50 dark:hover:bg-slate-800/50"
                      }`}
                    >
                      certs.sh
                    </button>
                    <button
                      onClick={() => setActiveTab("courses")}
                      className={`px-4 py-2 text-sm font-mono transition-colors cursor-pointer ${
                        activeTab === "courses"
                          ? `${terminal2.colors.content} text-gray-900 dark:text-white`
                          : "text-gray-600 dark:text-slate-400 hover:bg-gray-100/50 dark:hover:bg-slate-800/50"
                      }`}
                    >
                      courses.sh
                    </button>
                  </div>
                </div>

                {/* Terminal Content */}
                <div
                  className={`p-6 ${terminal2.colors.content} backdrop-blur-md min-h-[400px]`}
                >
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
                                GitHub:{" "}
                                <a
                                  href="https://github.com/DIodide"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 underline decoration-dotted underline-offset-2 transition-colors"
                                >
                                  DIodide
                                </a>
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
                                LinkedIn:{" "}
                                <a
                                  href="https://linkedin.com/in/ibraheem-amin"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 underline decoration-dotted underline-offset-2 transition-colors"
                                >
                                  /in/ibraheem-amin
                                </a>
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

                          <div className="pt-4 text-center">
                            <pre className="text-gray-500 dark:text-slate-500 text-xs font-mono leading-tight">
                              {`_____4863133_______7645487345___
_____4689461______4563789456____
_____8745879_____3456_____789___
_____5675894____5678_______456__
_____3456789___4567789456789489_
_____6789456__3456___________567
_____4563789_5678_____________89
_____8967345_4567____________5789
_____5634567_567____________4563`}
                            </pre>
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
                  ) : activeTab === "connect" ? (
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
                  ) : (
                    <div className="text-gray-700 dark:text-slate-300 text-sm font-mono space-y-3">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <p className="text-blue-600 dark:text-cyan-400 mb-3">
                          # Academic Coursework
                        </p>

                        <div className="space-y-2">
                          <p>
                            <span className="text-green-600 dark:text-green-400">
                              $
                            </span>{" "}
                            <span className="text-gray-900 dark:text-white">
                              cat princeton_courses.txt
                            </span>
                          </p>

                          <div className="pl-4 space-y-1">
                            <div className="text-gray-600 dark:text-slate-300">
                              <span className="text-purple-600 dark:text-purple-400">
                                Computer Science:
                              </span>
                            </div>
                            <div className="text-gray-600 dark:text-slate-300 pl-2">
                              Algorithms and Data Structures
                            </div>
                            <div className="text-gray-600 dark:text-slate-300 pl-2">
                              Intro to Programming Systems
                            </div>

                            <div className="text-gray-600 dark:text-slate-300 pt-2">
                              <span className="text-purple-600 dark:text-purple-400">
                                Mathematics:
                              </span>
                            </div>
                            <div className="text-gray-600 dark:text-slate-300 pl-2">
                              Multivariable Calculus
                            </div>
                            <div className="text-gray-600 dark:text-slate-300 pl-2">
                              Honors Linear Algebra
                            </div>

                            <div className="text-gray-600 dark:text-slate-300 pt-2">
                              <span className="text-purple-600 dark:text-purple-400">
                                Sciences:
                              </span>
                            </div>
                            <div className="text-gray-600 dark:text-slate-300 pl-2">
                              General Physics 1
                            </div>
                            <div className="text-gray-600 dark:text-slate-300 pl-2">
                              General Physics 2
                            </div>

                            <div className="text-gray-600 dark:text-slate-300 pt-2">
                              <span className="text-purple-600 dark:text-purple-400">
                                Liberal Arts:
                              </span>
                            </div>
                            <div className="text-gray-600 dark:text-slate-300 pl-2">
                              Ethics in Finance
                            </div>
                            <div className="text-gray-600 dark:text-slate-300 pl-2">
                              Priceless
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
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                      Projects
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
                </div>

                <div className="p-6 relative">
                  {/* Decorative code comment */}
                  <div className="absolute top-2 right-4 text-gray-400/40 dark:text-slate-500/40 font-mono text-xs">
                    {/* featured */}
                  </div>

                  <div className="flex flex-col space-y-4 mb-4">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
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
                </div>

                <div className="p-6 relative">
                  {/* Decorative code comment */}
                  <div className="absolute top-2 right-4 text-gray-400/40 dark:text-slate-500/40 font-mono text-xs">
                    {/* hackathon */}
                  </div>

                  <div className="flex flex-col space-y-4 mb-4">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
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
                </div>

                <div className="p-6 relative">
                  {/* Decorative code comment */}
                  <div className="absolute top-2 right-4 text-gray-400/40 dark:text-slate-500/40 font-mono text-xs">
                    {/* minecraft */}
                  </div>

                  <div className="flex flex-col space-y-4 mb-4">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
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

            {/* Project 4 - Wildfire Visualization */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/5 to-yellow-500/10 backdrop-blur-sm rounded-lg -z-10 transform group-hover:rotate-1 transition-transform duration-300"></div>

              <div className="bg-gradient-to-br from-gray-50/90 via-white/70 to-gray-100/90 dark:from-slate-800/90 dark:via-slate-700/70 dark:to-slate-800/90 backdrop-blur-xl border border-gray-200/50 dark:border-slate-600/50 rounded-lg overflow-hidden group-hover:shadow-2xl group-hover:shadow-red-500/10 transition-all duration-300">
                {/* Project Image Carousel */}
                <div className="relative h-48 w-full bg-gradient-to-br from-red-500/10 via-transparent to-orange-500/10 overflow-hidden">
                  <Carousel className="w-full h-full">
                    <CarouselContent>
                      <CarouselItem>
                        <div className="relative h-48 w-full bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
                          <div className="text-center">
                            <div className="relative">
                              <div className="h-12 w-12 mx-auto mb-2 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg
                                  className="h-6 w-6 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-slate-400 font-mono">
                              3D Visualization
                            </p>
                          </div>
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="relative h-48 w-full bg-gradient-to-br from-orange-500/20 to-yellow-500/20 flex items-center justify-center">
                          <div className="text-center">
                            <div className="relative">
                              <div className="h-12 w-12 mx-auto mb-2 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg
                                  className="h-6 w-6 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-slate-400 font-mono">
                              NASA MODIS Data
                            </p>
                          </div>
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="relative h-48 w-full bg-gradient-to-br from-yellow-500/20 to-red-500/20 flex items-center justify-center">
                          <div className="text-center">
                            <div className="relative">
                              <div className="h-12 w-12 mx-auto mb-2 bg-gradient-to-br from-yellow-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg
                                  className="h-6 w-6 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2M9 12h6"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-slate-400 font-mono">
                              MIT Symposium
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
                </div>

                <div className="p-6 relative">
                  {/* Decorative code comment */}
                  <div className="absolute top-2 right-4 text-gray-400/40 dark:text-slate-500/40 font-mono text-xs">
                    {/* research */}
                  </div>

                  <div className="flex flex-col space-y-4 mb-4">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          3D Wildfires Animation
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-slate-400 flex items-center gap-2 font-mono">
                        <Calendar className="h-3 w-3" />
                        <span>Summer 2023</span>
                      </p>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gray-100/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-slate-600/50 hover:bg-gray-200/80 dark:hover:bg-slate-700/80 transition-all rounded-lg group/btn cursor-pointer opacity-60">
                        <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        Repository (Private)
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-slate-300 mb-4 leading-relaxed">
                    3D wildfire animation system using Maya and MEL scripting to
                    visualize NASA MODIS satellite data. Generates dynamic
                    spatiotemporal fire pattern animations, presented at MIT
                    symposium.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs bg-red-500/20 dark:bg-red-400/20 border border-red-500/30 dark:border-red-400/30 text-red-700 dark:text-red-300 rounded-full font-mono">
                      Autodesk Maya
                    </span>
                    <span className="px-3 py-1 text-xs bg-orange-500/20 dark:bg-orange-400/20 border border-orange-500/30 dark:border-orange-400/30 text-orange-700 dark:text-orange-300 rounded-full font-mono">
                      Python
                    </span>
                    <span className="px-3 py-1 text-xs bg-[#eab308]/20 dark:bg-yellow-400/20 border border-yellow-500/30 dark:border-yellow-400/30 text-yellow-700 dark:text-yellow-300 rounded-full font-mono">
                      MEL Scripting
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 5 - ZBot */}
            <motion.div
              className="relative group col-span-1 md:col-span-2 lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-indigo-500/10 backdrop-blur-sm rounded-lg -z-10 transform group-hover:rotate-1 transition-transform duration-300"></div>

              <div className="bg-gradient-to-br from-gray-50/90 via-white/70 to-gray-100/90 dark:from-slate-800/90 dark:via-slate-700/70 dark:to-slate-800/90 backdrop-blur-xl border border-gray-200/50 dark:border-slate-600/50 rounded-lg overflow-hidden group-hover:shadow-2xl group-hover:shadow-violet-500/10 transition-all duration-300">
                {/* Two-column layout */}
                <div className="flex flex-col md:flex-row">
                  {/* Left Column - Image Carousel */}
                  <div className="flex-1 md:w-1/2">
                    <div className="relative h-[31rem] w-full bg-gradient-to-br from-violet-500/10 via-transparent to-purple-500/10 overflow-hidden">
                      <Carousel className="w-full h-full">
                        <CarouselContent>
                          <CarouselItem>
                            <div className="relative h-[31rem] w-full overflow-hidden bg-gradient-to-br from-violet-500/10 to-purple-500/10">
                              <Image
                                src="/images/projects/territory-taken-1.png"
                                alt="Territory Taken - Discord Bot Territory Capture Visualization"
                                fill
                                className="object-contain group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                                <p className="text-xs text-white font-mono">
                                  Territory Captured
                                </p>
                              </div>
                            </div>
                          </CarouselItem>
                          <CarouselItem>
                            <div className="relative h-[31rem] w-full overflow-hidden bg-gradient-to-br from-purple-500/10 to-indigo-500/10">
                              <Image
                                src="/images/projects/territory-image-generator1.png"
                                alt="Territory Image Generator - Discord Bot Map Generation"
                                fill
                                className="object-contain group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                                <p className="text-xs text-white font-mono">
                                  Map Generator
                                </p>
                              </div>
                            </div>
                          </CarouselItem>
                          <CarouselItem>
                            <div className="relative h-[31rem] w-full overflow-hidden bg-gradient-to-br from-indigo-500/10 to-blue-500/10">
                              <Image
                                src="/images/projects/allstats-table1.png"
                                alt="All Stats Table - Discord Bot Statistics Dashboard"
                                fill
                                className="object-contain group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                                <p className="text-xs text-white font-mono">
                                  Statistics Dashboard
                                </p>
                              </div>
                            </div>
                          </CarouselItem>
                          <CarouselItem>
                            <div className="relative h-[31rem] w-full overflow-hidden bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                              <Image
                                src="/images/projects/allstats-table2.png"
                                alt="All Stats Table 2 - Discord Bot War Statistics"
                                fill
                                className="object-contain group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                                <p className="text-xs text-white font-mono">
                                  War Statistics
                                </p>
                              </div>
                            </div>
                          </CarouselItem>
                          <CarouselItem>
                            <div className="relative h-[31rem] w-full overflow-hidden bg-gradient-to-br from-cyan-500/10 to-violet-500/10">
                              <Image
                                src="/images/projects/fullmap.png"
                                alt="Full Map - Discord Bot Complete Territory Overview"
                                fill
                                className="object-contain group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                                <p className="text-xs text-white font-mono">
                                  Full Territory Map
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
                    </div>
                  </div>

                  {/* Right Column - Text Content */}
                  <div className="flex-1 md:w-1/2 p-6 relative flex flex-col justify-between min-h-[31rem]">
                    {/* Decorative code comment */}
                    <div className="absolute top-2 right-4 text-gray-400/40 dark:text-slate-500/40 font-mono text-xs">
                      {/* freelance */}
                    </div>

                    <div className="flex flex-col space-y-4 mb-4">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            ZBot
                          </h3>
                          <div className="px-2 py-1 bg-gray-500/20 dark:bg-gray-400/20 border border-gray-500/30 dark:border-gray-400/30 rounded text-xs text-gray-700 dark:text-gray-300 font-mono">
                            COMPLETED
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-slate-400 flex items-center gap-2 font-mono">
                          <Calendar className="h-3 w-3" />
                          <span>2019-2022</span>
                        </p>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gray-100/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-slate-600/50 hover:bg-gray-200/80 dark:hover:bg-slate-700/80 transition-all rounded-lg group/btn cursor-pointer opacity-60">
                          <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                          Repository (Private)
                        </button>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-slate-300 mb-4 leading-relaxed">
                      Premier Discord guild management system integrating with
                      Wynncraft APIs to provide comprehensive war statistics,
                      territory visualizations, and real-time paging systems.
                      Features asynchronous data orchestration, database
                      concurrency control, and 30+ secure commands serving 300+
                      private end users.
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-xs bg-violet-500/20 dark:bg-violet-400/20 border border-violet-500/30 dark:border-violet-400/30 text-violet-700 dark:text-violet-300 rounded-full font-mono">
                        Python
                      </span>
                      <span className="px-3 py-1 text-xs bg-indigo-500/20 dark:bg-indigo-400/20 border border-indigo-500/30 dark:border-indigo-400/30 text-indigo-700 dark:text-indigo-300 rounded-full font-mono">
                        Discord.py
                      </span>
                      <span className="px-3 py-1 text-xs bg-blue-500/20 dark:bg-blue-400/20 border border-blue-500/30 dark:border-blue-400/30 text-blue-700 dark:text-blue-300 rounded-full font-mono">
                        Airflow
                      </span>
                      <span className="px-3 py-1 text-xs bg-cyan-500/20 dark:bg-cyan-400/20 border border-cyan-500/30 dark:border-cyan-400/30 text-cyan-700 dark:text-cyan-300 rounded-full font-mono">
                        Aiohttp
                      </span>
                    </div>
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
        <footer className="relative text-center text-muted-foreground text-sm py-8 mt-12 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto px-4">
            <div className="flex flex-col items-center md:items-start space-y-1 mb-4 md:mb-0">
              <p>
                &copy; {new Date().getFullYear()} Ibraheem Amin. Built with
                Next.js & shadcn/ui.
              </p>
              <p className="text-xs text-muted-foreground/70">
                Last updated: July 2025
              </p>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 text-xs font-medium bg-background/80 dark:bg-slate-800/80 backdrop-blur-sm border border-border/50 hover:bg-accent hover:text-accent-foreground transition-all rounded-lg group"
              aria-label="Back to top"
            >
              <svg
                className="h-4 w-4 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
              Back to Top
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
