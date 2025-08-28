"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [backgroundElements, setBackgroundElements] = useState<Array<{
    x: string;
    y: string;
    scale: number;
    width: string;
    height: string;
    }>>([]);

  useEffect(() => {
    setIsLoaded(true);
    setBackgroundElements(
      Array.from({ length: 20 }).map(() => ({
        x: Math.random() * 100 - 50 + "%",
        y: Math.random() * 100 - 50 + "%",
        scale: Math.random() * 0.5 + 0.5,
        width: `${Math.random() * 300 + 50}px`,
        height: `${Math.random() * 300 + 50}px`
      }))
    );
  }, []);

  const projects = [
    {
      title: "Aidmate",
      description: "AI-Driven First Aid Guide and Assistant with paramedic tracking, real-time advice, and emergency resources.",
      image: "/project1.png", 
      technologies: ["Next.js", "Gemini", "LLM Integration", "Vercel"]
    },
    {
      title: "ERP System",
      description: "Enterprise resource planning application with inventory management, user roles, and real-time analytics.",
      image: "/project2.png",
      technologies: ["Next.js", "POS", "Node.js", "Prisma"]
    },
    {
      title: "E-Learning Platform",
      description: "A comprehensive learning management system with live classes, certificate verification, and progress tracking.",
      image: "/project3.png",
      technologies: ["React", "Node.js", "Express", "Chapa API", "Telebirr API"]
    },
    {
      title: "Portfolio Website",
      description: "Modern responsive portfolio website with smooth animations and interactive elements.",
      image: "/project4.png",
      technologies: ["Next.js", "Framer Motion", "TailwindCSS"]
    },
    {
      title: "Medloc",
      description: "A telemedicine application that helps patients connect with pharmacies and locate medicines.",
      image: "/project5.png",
      technologies: ["React", "Firebase", "TypeScript", "Material-UI"]
    }
  ];

  return (
    <div className="font-sans bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed w-full px-8 py-6 flex justify-between items-center z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm"
      >
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent"
        >
          AY
        </motion.div>
        <div className="hidden md:flex gap-8">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1, color: "#38bdf8" }}
              className="cursor-pointer"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-0">
        <div className="absolute w-full h-full">
          {backgroundElements.map((element, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500/20"
              initial={{ 
                x: element.x, 
                y: element.y,
                scale: element.scale,
                opacity: 0.2
              }}
              animate={{ 
                x: [element.x, Math.random() * 100 - 50 + "%"], 
                y: [element.y, Math.random() * 100 - 50 + "%"],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ 
                duration: Math.random() * 20 + 10, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{
                width: element.width,
                height: element.height
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-8 z-10 flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 space-y-6"
            initial={{ x: -100, opacity: 0 }}
            animate={isLoaded ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-blue-300 font-medium"
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi there, I'm
            </motion.p>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Abdullah Yousuf
            </motion.h1>
            <motion.h2 
              className="text-3xl md:text-5xl font-bold"
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Full-Stack Developer
            </motion.h2>
            <motion.p 
              className="text-gray-300 max-w-lg"
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              I build end-to-end digital products with modern web technologies.
              Focused on scalable, secure backends and delightful, accessible UIs.
            </motion.p>
            <motion.div 
              className="pt-4 flex gap-4"
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-sky-400 px-8 py-3 rounded-full font-medium"
                href="#contact"
              >
                Get in Touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-blue-400 px-8 py-3 rounded-full font-medium"
                href="#projects"
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
            initial={{ x: 100, opacity: 0 }}
            animate={isLoaded ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
              className="relative w-72 h-72 md:w-96 md:h-96"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 blur-xl opacity-40"></div>
              <div className="absolute inset-4 rounded-full bg-gray-900"></div>
              <div className="absolute inset-6 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 opacity-80"></div>
              <div className="absolute inset-7 rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                <Image 
                  src="/PFP.JPG" 
                  alt="Profile" 
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-full" 
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-blue-400"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="min-h-screen flex items-center py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-8">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              className="md:w-1/2"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 mb-4">
                I am a Computer Science graduate and Full Stack Developer with expertise in building modern, scalable web applications. My work includes AidMate, an AI-assisted first aid guidance platform, as well as certificate verification systems and ERP solutions, using technologies such as Next.js, Vue.js, Node.js, Prisma, Hasura GraphQL, and PostgreSQL.
              </p>
              <p className="text-gray-300 mb-4">
                I focus on creating reliable and efficient applications that deliver real value, from seamless user experiences to secure backend systems. With a strong foundation in both frontend and backend development, I aim to contribute to projects that demand technical excellence and innovation.
              </p>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 grid grid-cols-2 gap-6"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                { label: "Experience", value: "2+ years" },
                { label: "Projects", value: "15+" },
                { label: "Clients", value: "10+" },
                { label: "Technologies", value: "25+" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/50 p-6 rounded-xl border border-blue-500/20"
                >
                  <h3 className="text-blue-300 font-medium">{item.label}</h3>
                  <p className="text-3xl font-bold">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="min-h-screen py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-8">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            My <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-800/50 rounded-xl overflow-hidden border border-blue-500/20"
              >
                <div className="h-48 relative overflow-hidden bg-gradient-to-br from-blue-900 to-sky-800 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, j) => (
                      <span key={j} className="text-xs bg-blue-900/50 px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="skills" 
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-8">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            My <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
              { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
              { name: "Next.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg" },
              { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
              { name: "TailwindCSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
              { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" },
              { name: "Vue.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg" },
              { name: "PostgreSQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
              { name: "Prisma", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg" },
              { name: "Git", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
              { name: "Figma", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg" },
              { name: "Docker", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" }
            ].map((skill, i) => (
              <motion.div 
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 150, delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-gray-800/50 rounded-xl border border-blue-500/20 p-4 flex flex-col items-center group hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 mb-3 flex items-center justify-center">
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    style={{
                      filter: skill.name === 'Next.js' ? 'invert(1)' : 'none'
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'w-full h-full bg-gradient-to-br from-blue-500 to-sky-400 rounded-lg flex items-center justify-center text-lg font-bold text-white';
                      fallback.textContent = skill.name.charAt(0);
                      target.parentElement?.appendChild(fallback);
                    }}
                  />
                </div>
                <p className="font-medium text-sm text-center group-hover:text-blue-300 transition-colors duration-300">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
        <motion.section 
          id="contact" 
          className="py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-8">
            <motion.h2 
              className="text-4xl font-bold mb-16 text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Get in <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">Touch</span>
            </motion.h2>
            
            <motion.div 
              className="max-w-2xl mx-auto text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 mb-12 text-lg">
                I'm currently open for freelance projects and job opportunities. 
                Feel free to reach out if you'd like to work together!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-blue-900/50 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <h3 className="text-blue-300 font-medium mb-2">Phone</h3>
                  <p className="text-gray-300"> +251 973083565 </p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-blue-900/50 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-blue-300 font-medium mb-2">Email</h3>
                  <p className="text-gray-300">abdullahyousuf1412@gmail.com</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-blue-900/50 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <h3 className="text-blue-300 font-medium mb-2">Location</h3>
                  <p className="text-gray-300">Addis Ababa, Ethiopia</p>
                </div>
              </div>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-blue-500 to-sky-400 px-8 py-3 rounded-full font-medium text-lg"
                href="mailto:abdullahyousuf1412@gmail.com"
              >
                Send me an Email
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-8">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex gap-6">
                <motion.a 
                  href="https://www.linkedin.com/in/abdullah-yousuf-34a3b330a"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center group hover:bg-blue-600 transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400 group-hover:text-white">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>

                <motion.a 
                  href="https://github.com/Oreki-ht"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center group hover:bg-gray-700 transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400 group-hover:text-white">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>
              
              <motion.a 
                href="https://t.me/oreki_ht"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center group hover:bg-blue-500 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400 group-hover:text-white">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </motion.a>
              
              <motion.a 
                href="https://wa.me/+251973083565"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center group hover:bg-green-600 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400 group-hover:text-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                </svg>
              </motion.a>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} Abdullah Yousuf. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}