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
        {/* Two Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Content - Takes 3/4 of the width on large screens */}
          <div className="lg:col-span-3 space-y-8">
            
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

            {/* Projects Section */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Projects</h2>
              
              <div className="timeline">
                {/* Project 1 */}
                <div className="timeline-item">
                  <div className="bg-card/40 backdrop-blur-xl border border-border/50 hover:bg-card/60 transition-all duration-300 overflow-hidden group">
                    {/* Project Image */}
                    <div className="relative h-48 w-full bg-muted/30 backdrop-blur-sm">
                      {/* Placeholder for project image */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10">
                        <div className="text-center">
                          <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-2 group-hover:scale-110 transition-transform" />
                          <p className="text-sm text-muted-foreground">Project Screenshot</p>
                        </div>
                      </div>
                      {/* Glass overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                      {/* Uncomment and replace with actual image when ready */}
                      {/* <Image
                        src="/project1-screenshot.jpg"
                        alt="Project One Screenshot"
                        fill
                        className="object-cover"
                      /> */}
                    </div>
                    
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Project One</h3>
                          <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            Spring 2024
                          </p>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-background/80 transition-all">
                            <Github className="h-4 w-4" />
                            Repository
                          </button>
                          <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary/80 backdrop-blur-sm text-primary-foreground border border-primary/20 hover:bg-primary transition-all">
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </button>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Description of your first project. This could include the technologies used, 
                        the problem it solves, and key features implemented.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-xs bg-secondary/50 backdrop-blur-sm border border-border/30 text-secondary-foreground">React</span>
                        <span className="px-3 py-1 text-xs bg-secondary/50 backdrop-blur-sm border border-border/30 text-secondary-foreground">TypeScript</span>
                        <span className="px-3 py-1 text-xs bg-secondary/50 backdrop-blur-sm border border-border/30 text-secondary-foreground">Node.js</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="timeline-item">
                  <div className="bg-card/40 backdrop-blur-xl border border-border/50 hover:bg-card/60 transition-all duration-300 overflow-hidden group">
                    {/* Project Image */}
                    <div className="relative h-48 w-full bg-muted/30 backdrop-blur-sm">
                      {/* Placeholder for project image */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10">
                        <div className="text-center">
                          <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-2 group-hover:scale-110 transition-transform" />
                          <p className="text-sm text-muted-foreground">Project Screenshot</p>
                        </div>
                      </div>
                      {/* Glass overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                      {/* Uncomment and replace with actual image when ready */}
                      {/* <Image
                        src="/project2-screenshot.jpg"
                        alt="Project Two Screenshot"
                        fill
                        className="object-cover"
                      /> */}
                    </div>
                    
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Project Two</h3>
                          <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            Fall 2023
                          </p>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-background/80 transition-all">
                            <Github className="h-4 w-4" />
                            Repository
                          </button>
                          <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary/80 backdrop-blur-sm text-primary-foreground border border-primary/20 hover:bg-primary transition-all">
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </button>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Description of your second project. Highlight the unique challenges 
                        you faced and the innovative solutions you implemented.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-xs bg-secondary/50 backdrop-blur-sm border border-border/30 text-secondary-foreground">Python</span>
                        <span className="px-3 py-1 text-xs bg-secondary/50 backdrop-blur-sm border border-border/30 text-secondary-foreground">Flask</span>
                        <span className="px-3 py-1 text-xs bg-secondary/50 backdrop-blur-sm border border-border/30 text-secondary-foreground">PostgreSQL</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="timeline-item">
                  <div className="bg-card/40 backdrop-blur-xl border border-border/50 hover:bg-card/60 transition-all duration-300 overflow-hidden group">
                    {/* Project Image */}
                    <div className="relative h-48 w-full bg-muted/30 backdrop-blur-sm">
                      {/* Placeholder for project image */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-500/10 via-transparent to-violet-500/10">
                        <div className="text-center">
                          <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-2 group-hover:scale-110 transition-transform" />
                          <p className="text-sm text-muted-foreground">Project Screenshot</p>
                        </div>
                      </div>
                      {/* Glass overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                      {/* Uncomment and replace with actual image when ready */}
                      {/* <Image
                        src="/project3-screenshot.jpg"
                        alt="Project Three Screenshot"
                        fill
                        className="object-cover"
                      /> */}
                    </div>
                    
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Project Three</h3>
                          <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            Summer 2023
                          </p>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-background/80 transition-all">
                            <Github className="h-4 w-4" />
                            Repository
                          </button>
                          <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary/80 backdrop-blur-sm text-primary-foreground border border-primary/20 hover:bg-primary transition-all">
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </button>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Description of your third project. Focus on the impact it had and 
                        the technical skills you developed while building it.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-xs bg-secondary/50 backdrop-blur-sm border border-border/30 text-secondary-foreground">Java</span>
                        <span className="px-3 py-1 text-xs bg-secondary/50 backdrop-blur-sm border border-border/30 text-secondary-foreground">Spring Boot</span>
                        <span className="px-3 py-1 text-xs bg-secondary/50 backdrop-blur-sm border border-border/30 text-secondary-foreground">MySQL</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

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

        {/* Footer */}
        <footer className="text-center text-muted-foreground text-sm py-8 mt-12 border-t border-border/30">
          <p>&copy; {new Date().getFullYear()} Ibraheem Amin. Built with Next.js & shadcn/ui.</p>
        </footer>
      </div>
    </div>
  );
}
