"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { Github, ExternalLink, Mail, Linkedin, Award, Calendar, MapPin, ImageIcon, Copy } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { toast, Toaster } from "sonner";
import { useState } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const [activeTab, setActiveTab] = useState<'main' | 'connect'>('main');

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${label} copied to clipboard!`);
    } catch (err) {
      toast.error('Failed to copy to clipboard');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="bottom-right" richColors />
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Ibraheem Amin</h1>
            <p className="text-sm text-muted-foreground">CS Student at Princeton</p>
          </div>
          <ThemeToggle />
        </div>
      </header>

              <div className="max-w-7xl mx-auto px-4 py-8">
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
                            <div style={{ borderRadius: '10px' }} className="bg-gradient-to-br from-gray-100/95 to-gray-200/95 dark:from-slate-800/90 dark:to-slate-900/90 backdrop-blur-xl border border-gray-300/50 dark:border-slate-600/50 shadow-2xl overflow-hidden">
                 {/* Terminal Header */}
                 <div className="flex items-center justify-between px-4 py-3 bg-gray-200/80 dark:bg-slate-700/50 border-b border-gray-300/50 dark:border-slate-600/30">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500" style={{ borderRadius: '50%' }}></div>
                    <div className="w-3 h-3 bg-yellow-500" style={{ borderRadius: '50%' }}></div>
                    <div className="w-3 h-3 bg-green-500" style={{ borderRadius: '50%' }}></div>
                  </div>
                                     <div className="text-gray-600 dark:text-slate-400 text-sm font-mono">~/ibraheem-portfolio</div>
                  <div className="w-16"></div> {/* Spacer for balance */}
                </div>

                                 {/* Terminal Content */}
                 <div className="p-8 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md">
                   <div className="text-gray-700 dark:text-slate-300 text-sm md:text-base space-y-3 font-mono max-w-4xl">
                    {/* Welcome Header */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                                             <p className="text-blue-600 dark:text-cyan-400 text-lg mb-4">
                         # Welcome to Ibraheem's Digital Workspace
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
                         <span className="text-green-600 dark:text-green-400">$</span> <span className="text-gray-900 dark:text-white">whoami</span>
                       </p>
                       <p className="text-blue-600 dark:text-cyan-400 pl-4">Ibraheem Amin</p>
                       <p className="text-gray-600 dark:text-slate-300 pl-4">CS Student at Princeton University</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.1, duration: 0.5 }}
                      className="space-y-2"
                    >
                                             <p>
                         <span className="text-green-600 dark:text-green-400">$</span> <span className="text-gray-900 dark:text-white">cat about.txt</span>
                       </p>
                       <p className="text-gray-600 dark:text-slate-300 pl-4">Lowell, MA</p>
                       <p className="text-gray-600 dark:text-slate-300 pl-4">Sophomore</p>
                       {/* <p className="text-gray-600 dark:text-slate-300 pl-4">💻 Passionate about building meaningful software solutions</p> */}
                    </motion.div>

                    <motion.div
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
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.7, duration: 0.5 }}
                      className="space-y-2"
                    >
                                             <p>
                         <span className="text-green-600 dark:text-green-400">$</span>{" "}
                         <span className="text-gray-900 dark:text-white">echo "Thanks for visiting my portfolio!"</span>
                       </p>
                       <p className="text-purple-600 dark:text-purple-400 pl-4">Thanks for visiting my portfolio!</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.0, duration: 0.5 }}
                      className="space-y-2"
                    >
                                             <p>
                         <span className="text-green-600 dark:text-green-400">$</span>{" "}
                         <span className="text-gray-900 dark:text-white">./explore_projects --interactive</span>
                       </p>
                       <p className="text-orange-600 dark:text-yellow-400 pl-4">Loading project showcase...</p>
                       <p className="text-gray-500 dark:text-slate-400 pl-4">↓ Scroll down to explore my work ↓</p>
                    </motion.div>

                                         <motion.p
                       className="flex items-center pt-2"
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       transition={{ delay: 2.3, duration: 0.5 }}
                     >
                       <span className="text-green-600 dark:text-green-400">$</span>
                       <span className="w-2 h-4 bg-gray-900 dark:bg-white ml-2 animate-pulse rounded-sm"></span>
                     </motion.p>
                  </div>
                </div>
              </div>
                        </motion.section>

          </div>

          {/* Sidebar - Second Terminal */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Second Terminal Window */}
              <div style={{ borderRadius: '10px' }} className="bg-gradient-to-br from-gray-100/95 to-gray-200/95 dark:from-slate-800/90 dark:to-slate-900/90 backdrop-blur-xl border border-gray-300/50 dark:border-slate-600/50 shadow-2xl overflow-hidden">
                {/* Terminal Header with Tabs */}
                <div className="bg-gray-200/80 dark:bg-slate-700/50 border-b border-gray-300/50 dark:border-slate-600/30">
                  <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500" style={{ borderRadius: '50%' }}></div>
                      <div className="w-3 h-3 bg-yellow-500" style={{ borderRadius: '50%' }}></div>
                      <div className="w-3 h-3 bg-green-500" style={{ borderRadius: '50%' }}></div>
                    </div>
                    <div className="text-gray-600 dark:text-slate-400 text-sm font-mono">~/connect</div>
                    <div className="w-16"></div>
                  </div>
                  
                  {/* Tab Navigation */}
                  <div className="flex border-t border-gray-300/50 dark:border-slate-600/30">
                    <button
                      onClick={() => setActiveTab('main')}
                      className={`px-4 py-2 text-sm font-mono border-r border-gray-300/50 dark:border-slate-600/30 transition-colors ${
                        activeTab === 'main' 
                          ? 'bg-white/70 dark:bg-slate-900/60 text-gray-900 dark:text-white' 
                          : 'text-gray-600 dark:text-slate-400 hover:bg-gray-100/50 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      connect.sh
                    </button>
                    <button
                      onClick={() => setActiveTab('connect')}
                      className={`px-4 py-2 text-sm font-mono transition-colors ${
                        activeTab === 'connect' 
                          ? 'bg-white/70 dark:bg-slate-900/60 text-gray-900 dark:text-white' 
                          : 'text-gray-600 dark:text-slate-400 hover:bg-gray-100/50 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      certs.sh
                    </button>
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-6 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md min-h-[400px]">
                  {activeTab === 'main' ? (
                    <div className="text-gray-700 dark:text-slate-300 text-sm font-mono space-y-3">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <p className="text-blue-600 dark:text-cyan-400 mb-3"># Contact Information</p>
                        
                        <div className="space-y-2">
                          <p>
                            <span className="text-green-600 dark:text-green-400">$</span>{" "}
                            <span className="text-gray-900 dark:text-white">cat emails.txt</span>
                          </p>
                          
                          <div className="pl-4 space-y-2">
                            <div className="flex items-center justify-between group">
                              <span className="text-gray-600 dark:text-slate-300">ibraheem.amin2@gmail.com</span>
                              <button
                                onClick={() => copyToClipboard('ibraheem.amin2@gmail.com', 'Personal email')}
                                className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-200/50 dark:hover:bg-slate-800/50 rounded"
                              >
                                <Copy className="h-3 w-3 text-gray-500 dark:text-slate-400" />
                              </button>
                            </div>
                            <div className="flex items-center justify-between group">
                              <span className="text-gray-600 dark:text-slate-300">ibraheem@princeton.edu</span>
                              <button
                                onClick={() => copyToClipboard('ibraheem@princeton.edu', 'Princeton email')}
                                className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-200/50 dark:hover:bg-slate-800/50 rounded"
                              >
                                <Copy className="h-3 w-3 text-gray-500 dark:text-slate-400" />
                              </button>
                            </div>
                          </div>

                          <p className="pt-2">
                            <span className="text-green-600 dark:text-green-400">$</span>{" "}
                            <span className="text-gray-900 dark:text-white">cat social.txt</span>
                          </p>
                          
                          <div className="pl-4">
                            <div className="flex items-center justify-between group">
                              <span className="text-gray-600 dark:text-slate-300">GitHub: DIodide</span>
                              <button
                                onClick={() => copyToClipboard('DIodide', 'GitHub username')}
                                className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-200/50 dark:hover:bg-slate-800/50 rounded"
                              >
                                <Copy className="h-3 w-3 text-gray-500 dark:text-slate-400" />
                              </button>
                            </div>
                          </div>

                          <p className="pt-2 flex items-center">
                            <span className="text-green-600 dark:text-green-400">$</span>
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
                        <p className="text-blue-600 dark:text-cyan-400 mb-3"># Certifications & Achievements</p>
                        
                        <div className="space-y-2">
                          <p>
                            <span className="text-green-600 dark:text-green-400">$</span>{" "}
                            <span className="text-gray-900 dark:text-white">ls -la certifications/</span>
                          </p>
                          
                          <div className="pl-4 space-y-1">
                            <a href="#" className="text-gray-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors block">
                              -rw-r--r--  AWS Cloud Practitioner
                            </a>
                            <a href="#" className="text-gray-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors block">
                              -rw-r--r--  Google Cloud Associate
                            </a>
                            <a href="#" className="text-gray-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors block">
                              -rw-r--r--  MongoDB Developer
                            </a>
                            <a href="#" className="text-gray-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors block">
                              -rw-r--r--  CompTIA Security+
                            </a>
                            <a href="#" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors block">
                              ... and 7 more
                            </a>
                          </div>

                          <p className="pt-2 flex items-center">
                            <span className="text-green-600 dark:text-green-400">$</span>
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
        <div className="mb-12">
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
                  // showcase
                </div>
                <div className="absolute bottom-3 left-4 text-gray-400/30 dark:text-slate-500/30 font-mono text-xs">
                  &lt;portfolio/&gt;
                </div>
                
                <div className="relative z-10 flex items-center gap-4">
                  {/* Command prompt style indicator */}
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-600 dark:text-green-400 font-mono text-sm">&gt;</span>
                  </div>
                  
                  {/* Main heading */}
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                      Featured Projects
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-slate-400 mt-1 font-mono">
                      Building solutions, one commit at a time
                    </p>
                  </div>
                  
                  {/* Status indicator */}
                  <div className="hidden md:flex items-center gap-2 text-xs text-gray-500 dark:text-slate-400 font-mono">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                    <span>Active Development</span>
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
                
                {/* Status bar */}
                <div className="flex items-center justify-between px-4 py-2 bg-gray-100/60 dark:bg-slate-700/60 border-b border-gray-200/50 dark:border-slate-600/50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-600 dark:text-slate-400 font-mono">project_01.tsx</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Project Image */}
                <div className="relative h-48 w-full bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 overflow-hidden">
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="relative">
                        <ImageIcon className="h-12 w-12 text-gray-400 dark:text-slate-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all"></div>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-slate-400 font-mono">// project-screenshot.jpg</p>
                    </div>
                  </div>
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                <div className="p-6 relative">
                  {/* Decorative code comment */}
                  <div className="absolute top-2 right-4 text-gray-400/40 dark:text-slate-500/40 font-mono text-xs">
                    /* featured */
                  </div>
                  
                  <div className="flex flex-col space-y-4 mb-4">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                        Project One
                      </h3>
                      <div className="px-2 py-1 bg-green-500/20 dark:bg-green-400/20 border border-green-500/30 dark:border-green-400/30 rounded text-xs text-green-700 dark:text-green-300 font-mono">
                        ACTIVE
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-slate-400 flex items-center gap-2 font-mono">
                      <Calendar className="h-3 w-3" />
                      <span>Spring 2024</span>
                      <span className="text-gray-400 dark:text-slate-500">•</span>
                      <span>v1.2.0</span>
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gray-100/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-slate-600/50 hover:bg-gray-200/80 dark:hover:bg-slate-700/80 transition-all rounded-lg group/btn">
                        <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        Repository
                      </button>
                      <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all rounded-lg group/btn shadow-lg shadow-blue-500/20">
                        <ExternalLink className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        Live Demo
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-slate-300 mb-4 leading-relaxed">
                    Description of your first project. This could include the technologies used, 
                    the problem it solves, and key features implemented.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs bg-blue-500/20 dark:bg-blue-400/20 border border-blue-500/30 dark:border-blue-400/30 text-blue-700 dark:text-blue-300 rounded-full font-mono">React</span>
                    <span className="px-3 py-1 text-xs bg-purple-500/20 dark:bg-purple-400/20 border border-purple-500/30 dark:border-purple-400/30 text-purple-700 dark:text-purple-300 rounded-full font-mono">TypeScript</span>
                    <span className="px-3 py-1 text-xs bg-cyan-500/20 dark:bg-cyan-400/20 border border-cyan-500/30 dark:border-cyan-400/30 text-cyan-700 dark:text-cyan-300 rounded-full font-mono">Node.js</span>
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
                
                {/* Status bar */}
                <div className="flex items-center justify-between px-4 py-2 bg-gray-100/60 dark:bg-slate-700/60 border-b border-gray-200/50 dark:border-slate-600/50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-600 dark:text-slate-400 font-mono">project_02.py</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-teal-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Project Image */}
                <div className="relative h-48 w-full bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10 overflow-hidden">
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="relative">
                        <ImageIcon className="h-12 w-12 text-gray-400 dark:text-slate-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all"></div>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-slate-400 font-mono">// project-screenshot.jpg</p>
                    </div>
                  </div>
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                <div className="p-6 relative">
                  {/* Decorative code comment */}
                  <div className="absolute top-2 right-4 text-gray-400/40 dark:text-slate-500/40 font-mono text-xs">
                    /* stable */
                  </div>
                  
                  <div className="flex flex-col space-y-4 mb-4">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-emerald-800 dark:from-white dark:via-green-200 dark:to-emerald-200 bg-clip-text text-transparent">
                        Project Two
                      </h3>
                      <div className="px-2 py-1 bg-yellow-500/20 dark:bg-yellow-400/20 border border-yellow-500/30 dark:border-yellow-400/30 rounded text-xs text-yellow-700 dark:text-yellow-300 font-mono">
                        STABLE
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-slate-400 flex items-center gap-2 font-mono">
                      <Calendar className="h-3 w-3" />
                      <span>Fall 2023</span>
                      <span className="text-gray-400 dark:text-slate-500">•</span>
                      <span>v2.1.3</span>
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gray-100/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-slate-600/50 hover:bg-gray-200/80 dark:hover:bg-slate-700/80 transition-all rounded-lg group/btn">
                        <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        Repository
                      </button>
                      <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 transition-all rounded-lg group/btn shadow-lg shadow-green-500/20">
                        <ExternalLink className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        Live Demo
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-slate-300 mb-4 leading-relaxed">
                    Description of your second project. Highlight the unique challenges 
                    you faced and the innovative solutions you implemented.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs bg-green-500/20 dark:bg-green-400/20 border border-green-500/30 dark:border-green-400/30 text-green-700 dark:text-green-300 rounded-full font-mono">Python</span>
                    <span className="px-3 py-1 text-xs bg-emerald-500/20 dark:bg-emerald-400/20 border border-emerald-500/30 dark:border-emerald-400/30 text-emerald-700 dark:text-emerald-300 rounded-full font-mono">Flask</span>
                    <span className="px-3 py-1 text-xs bg-teal-500/20 dark:bg-teal-400/20 border border-teal-500/30 dark:border-teal-400/30 text-teal-700 dark:text-teal-300 rounded-full font-mono">PostgreSQL</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-violet-500/5 to-indigo-500/10 backdrop-blur-sm rounded-lg -z-10 transform group-hover:rotate-1 transition-transform duration-300"></div>
              
              <div className="bg-gradient-to-br from-gray-50/90 via-white/70 to-gray-100/90 dark:from-slate-800/90 dark:via-slate-700/70 dark:to-slate-800/90 backdrop-blur-xl border border-gray-200/50 dark:border-slate-600/50 rounded-lg overflow-hidden group-hover:shadow-2xl group-hover:shadow-purple-500/10 transition-all duration-300">
                
                {/* Status bar */}
                <div className="flex items-center justify-between px-4 py-2 bg-gray-100/60 dark:bg-slate-700/60 border-b border-gray-200/50 dark:border-slate-600/50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-600 dark:text-slate-400 font-mono">project_03.java</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-violet-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-indigo-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Project Image */}
                <div className="relative h-48 w-full bg-gradient-to-br from-purple-500/10 via-transparent to-violet-500/10 overflow-hidden">
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="relative">
                        <ImageIcon className="h-12 w-12 text-gray-400 dark:text-slate-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all"></div>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-slate-400 font-mono">// project-screenshot.jpg</p>
                    </div>
                  </div>
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                <div className="p-6 relative">
                  {/* Decorative code comment */}
                  <div className="absolute top-2 right-4 text-gray-400/40 dark:text-slate-500/40 font-mono text-xs">
                    /* archived */
                  </div>
                  
                  <div className="flex flex-col space-y-4 mb-4">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-violet-800 dark:from-white dark:via-purple-200 dark:to-violet-200 bg-clip-text text-transparent">
                        Project Three
                      </h3>
                      <div className="px-2 py-1 bg-red-500/20 dark:bg-red-400/20 border border-red-500/30 dark:border-red-400/30 rounded text-xs text-red-700 dark:text-red-300 font-mono">
                        ARCHIVED
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-slate-400 flex items-center gap-2 font-mono">
                      <Calendar className="h-3 w-3" />
                      <span>Summer 2023</span>
                      <span className="text-gray-400 dark:text-slate-500">•</span>
                      <span>v1.0.0</span>
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gray-100/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-slate-600/50 hover:bg-gray-200/80 dark:hover:bg-slate-700/80 transition-all rounded-lg group/btn">
                        <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        Repository
                      </button>
                      <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-500 to-violet-500 text-white hover:from-purple-600 hover:to-violet-600 transition-all rounded-lg group/btn shadow-lg shadow-purple-500/20">
                        <ExternalLink className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        Live Demo
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-slate-300 mb-4 leading-relaxed">
                    Description of your third project. Focus on the impact it had and 
                    the technical skills you developed while building it.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs bg-purple-500/20 dark:bg-purple-400/20 border border-purple-500/30 dark:border-purple-400/30 text-purple-700 dark:text-purple-300 rounded-full font-mono">Java</span>
                    <span className="px-3 py-1 text-xs bg-violet-500/20 dark:bg-violet-400/20 border border-violet-500/30 dark:border-violet-400/30 text-violet-700 dark:text-violet-300 rounded-full font-mono">Spring Boot</span>
                    <span className="px-3 py-1 text-xs bg-indigo-500/20 dark:bg-indigo-400/20 border border-indigo-500/30 dark:border-indigo-400/30 text-indigo-700 dark:text-indigo-300 rounded-full font-mono">MySQL</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-muted-foreground text-sm py-8 mt-12 border-t border-border/30">
          <p>&copy; {new Date().getFullYear()} Ibraheem Amin. Built with Next.js & shadcn/ui.</p>
        </footer>
      </div>
    </div>
  );
}
