import React, { useState, useEffect } from 'react';
import { Layout, Code, Database, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  
  const skills = {
    frontend: [
      { name: "React/Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "UI/UX Design", level: 80 }
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "API Design", level: 90 }
    ],
    database: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Redis", level: 75 }
    ]
  };

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization platform",
      tech: ["Next.js", "D3.js", "PostgreSQL"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-zinc-900/80 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            <div>
              <h1 className="text-lg font-semibold">Jovin Shija</h1>
              <p className="text-sm text-zinc-400">Software Engineer</p>
            </div>
          </div>
          <a href="#" className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Me
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-4 space-y-6">
            {/* About Card */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">About</h2>
              <p className="text-zinc-400">
                Full-Stack Developer with 3+ years of experience building scalable web applications.
                Specialized in React, Node.js, and cloud technologies.
              </p>
            </div>

            {/* Status Card */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-500">Available for work</span>
              </div>
              <p className="text-zinc-400 text-sm mb-4">
                Open to full-time positions and freelance projects
              </p>
              <button className="w-full px-4 py-2 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-all">
                Let's talk →
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-8 space-y-6">
            {/* Skills Section */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-6">Skills</h2>
              <div className="space-y-8">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="text-lg font-medium mb-4 capitalize">{category}</h3>
                    <div className="space-y-4">
                      {items.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-1">
                            <span className="text-zinc-400">{skill.name}</span>
                            <span className="text-zinc-500">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Section */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-6">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-lg bg-zinc-800 p-6 hover:bg-zinc-700 transition-all">
                    <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                    <p className="text-zinc-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-zinc-900 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300"
                    >
                      View Project <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;