"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { Github, ExternalLink, Mail, Linkedin, Award, Calendar, MapPin, ImageIcon } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="min-h-screen bg-background">
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
              <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-600/50 rounded-lg shadow-2xl overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-700/50 border-b border-slate-600/30">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-slate-400 text-sm font-mono">~/ibraheem-portfolio</div>
                  <div className="w-16"></div> {/* Spacer for balance */}
                </div>

                {/* Terminal Content */}
                <div className="p-8 bg-slate-900/60 backdrop-blur-md">
                  <div className="text-slate-300 text-sm md:text-base space-y-3 font-mono max-w-4xl">
                    {/* Welcome Header */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <p className="text-cyan-400 text-lg mb-4">
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
                        <span className="text-green-400">$</span> <span className="text-white">whoami</span>
                      </p>
                      <p className="text-cyan-400 pl-4">Ibraheem Amin</p>
                      <p className="text-slate-300 pl-4">CS Student & Developer at Princeton University</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.1, duration: 0.5 }}
                      className="space-y-2"
                    >
                      <p>
                        <span className="text-green-400">$</span> <span className="text-white">cat about.txt</span>
                      </p>
                      <p className="text-slate-300 pl-4">📍 Princeton University - Class of 2028</p>
                      <p className="text-slate-300 pl-4">🎓 Computer Science Major, Sophomore</p>
                      <p className="text-slate-300 pl-4">💻 Passionate about building meaningful software solutions</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4, duration: 0.5 }}
                      className="space-y-2"
                    >
                      <p>
                        <span className="text-green-400">$</span> <span className="text-white">ls -la skills/</span>
                      </p>
                      <p className="text-slate-300 pl-4">drwxr-xr-x  full-stack-development/</p>
                      <p className="text-slate-300 pl-4">drwxr-xr-x  algorithms-and-data-structures/</p>
                      <p className="text-slate-300 pl-4">drwxr-xr-x  software-engineering/</p>
                      <p className="text-slate-300 pl-4">drwxr-xr-x  problem-solving/</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.7, duration: 0.5 }}
                      className="space-y-2"
                    >
                      <p>
                        <span className="text-green-400">$</span>{" "}
                        <span className="text-white">echo "Thanks for visiting my portfolio!"</span>
                      </p>
                      <p className="text-purple-400 pl-4">Thanks for visiting my portfolio!</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.0, duration: 0.5 }}
                      className="space-y-2"
                    >
                      <p>
                        <span className="text-green-400">$</span>{" "}
                        <span className="text-white">explore_projects --interactive</span>
                      </p>
                      <p className="text-yellow-400 pl-4">Loading project showcase...</p>
                      <p className="text-slate-400 pl-4">↓ Scroll down to explore my work ↓</p>
                    </motion.div>

                    <motion.p
                      className="flex items-center pt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.3, duration: 0.5 }}
                    >
                      <span className="text-green-400">$</span>
                      <span className="w-2 h-4 bg-white ml-2 animate-pulse rounded-sm"></span>
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

          {/* Sidebar - Takes 1/4 of the width on large screens */}
          <div className="space-y-6">
            
            {/* Social Links Panel */}
            <div className="bg-card/40 backdrop-blur-xl border border-border/50">
              <div className="p-6 border-b border-border/30">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Github className="h-5 w-5" />
                  Connect With Me
                </h3>
              </div>
              <div className="p-6 space-y-3">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full p-3 bg-background/30 backdrop-blur-sm border border-border/30 hover:bg-background/50 transition-all text-sm"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full p-3 bg-background/30 backdrop-blur-sm border border-border/30 hover:bg-background/50 transition-all text-sm"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a 
                  href="mailto:your.email@princeton.edu"
                  className="flex items-center gap-3 w-full p-3 bg-background/30 backdrop-blur-sm border border-border/30 hover:bg-background/50 transition-all text-sm"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </div>
            </div>

            {/* Certifications Panel */}
            <div className="bg-card/40 backdrop-blur-xl border border-border/50">
              <div className="p-6 border-b border-border/30">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Certifications
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold">AWS Cloud Practitioner</h4>
                  <p className="text-sm text-muted-foreground">Amazon Web Services</p>
                  <p className="text-xs text-muted-foreground">Expected: Summer 2024</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold">Google Cloud Associate</h4>
                  <p className="text-sm text-muted-foreground">Google Cloud Platform</p>
                  <p className="text-xs text-muted-foreground">In Progress</p>
                </div>

                <div className="border-l-2 border-muted pl-4">
                  <h4 className="font-semibold text-muted-foreground">MongoDB Developer</h4>
                  <p className="text-sm text-muted-foreground">MongoDB University</p>
                  <p className="text-xs text-muted-foreground">Planned: Fall 2024</p>
                </div>

                <div className="pt-2">
                  <button className="w-full p-2 text-sm bg-background/30 backdrop-blur-sm border border-border/30 hover:bg-background/50 transition-all flex items-center justify-center gap-2">
                    <ExternalLink className="h-3 w-3" />
                    View All Credentials
                  </button>
                </div>
              </div>
            </div>

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
