import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Zap, Activity, Shield, Terminal } from 'lucide-react';

interface ProjectsProps {
  id: string;
  onSectionInView: (section: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ id, onSectionInView }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      onSectionInView(id);
    }
  }, [inView, id, onSectionInView]);

  const projects = [
    {
      title: "AstroGuru (Gradio + Gemini)",
      description: "Astrology chatbot powered by Gemini 2.5 and Gradio for interactive astrology consultations and predictions.",
      tech: ["Gradio", "Gemini 2.5", "Python", "AI"],
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      github: "https://github.com/riteshbhusare/astro-guru-gradio-gemini",
      demo: "https://huggingface.co/spaces/riteshbhusare/astro-guru-gradio-gemini"
    },
    {
      title: "BMI Calculator Web App",
      description: "Health tracker application built with Streamlit for calculating BMI and providing health recommendations.",
      tech: ["Streamlit", "Python", "Health Analytics"],
      icon: <Activity className="w-6 h-6" />,
      gradient: "from-green-500 to-teal-500",
      github: "https://github.com/riteshbhusare/bmi-calculator-streamlit",
      demo: "https://bmi-calculator.streamlit.app/"
    },
    {
      title: "Multi-Tool DevOps UI",
      description: "Unified dashboard combining multiple DevOps applications into a single, streamlined interface.",
      tech: ["DevOps", "Dashboard", "UI/UX"],
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      github: "https://github.com/riteshbhusare/devops-dashboard-ui",
      demo: null
    },
    {
      title: "Linux SSH Terminal Web App",
      description: "Web-based terminal interface for remotely executing Linux commands through SSH connections.",
      tech: ["SSH", "Linux", "Web Terminal"],
      icon: <Terminal className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      github: "https://github.com/riteshbhusare/linux-ssh-terminal-webapp",
      demo: null
    },
    {
      title: "DevOps Dashboard UI",
      description: "Docker simulator with SSH capabilities for managing containerized applications remotely.",
      tech: ["Docker", "SSH", "Monitoring"],
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-indigo-500 to-purple-500",
      github: "https://github.com/riteshbhusare/devops-dashboard-ui",
      demo: null
    },
    {
      title: "AstroGuru Gradio Notebook",
      description: "Jupyter-based version of AstroGuru with Gemini-powered astrology Q&A capabilities.",
      tech: ["Jupyter", "Gemini", "Python"],
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-yellow-500 to-orange-500",
      github: "https://github.com/riteshbhusare/astro-guru-gradio-notebook",
      demo: null
    },
    {
      title: "IoT Traffic Light Simulation",
      description: "Real-time traffic signal simulation project for IoT applications and smart city solutions.",
      tech: ["IoT", "Simulation", "Real-time"],
      icon: <Activity className="w-6 h-6" />,
      gradient: "from-teal-500 to-green-500",
      status: "In Progress",
      github: null,
      demo: null
    },
    {
      title: "Bank Loan Assistant App",
      description: "Application connecting users and banks for streamlined loan applications and approvals.",
      tech: ["Finance", "API", "Database"],
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-pink-500 to-purple-500",
      status: "In Progress",
      github: null,
      demo: null
    }
  ];

  return (
    <section
      ref={ref}
      id={id}
      className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-8">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-300`} />
              
              {/* Card */}
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 group-hover:transform group-hover:scale-105">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white`}>
                    {project.icon}
                  </div>
                  {project.status && (
                    <span className="px-3 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/30">
                      {project.status}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group/btn"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      View Demo
                    </a>
                  ) : null}
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-600/50 hover:text-white transition-all duration-300 group/btn"
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      GitHub
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;