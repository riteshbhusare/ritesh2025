import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Zap, Activity, Shield, Terminal, Code } from 'lucide-react';

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

  // LinuxWorld Projects data
  const linuxWorldProjects = [
    {
      title: 'astroguru.ipynb',
      description: 'AstroGuru Jupyter Notebook for astrology Q&A.',
      tech: ['Python', 'Jupyter'],
      icon: <Code className="w-6 h-6" />, 
      gradient: "from-yellow-500 to-orange-500",
      category: 'Python',
      github: 'https://github.com/riteshbhusare/Summer_Intership2025/blob/main/astroguru.ipynb',
      linkedin: ''
    },
    {
      title: 'bmi.py',
      description: 'BMI calculator script in Python.',
      tech: ['Python'],
      icon: <Code className="w-6 h-6" />, 
      gradient: "from-green-500 to-teal-500",
      category: 'Python',
      github: 'https://github.com/riteshbhusare/Summer_Intership2025/blob/main/bmi.py',
      linkedin: ''
    },
    {
      title: 'email.py',
      description: 'Automate sending emails with Python.',
      tech: ['Python'],
      icon: <Code className="w-6 h-6" />, 
      gradient: "from-blue-500 to-cyan-500",
      category: 'Python',
      github: 'https://github.com/riteshbhusare/Summer_Intership2025/blob/main/email.py',
      linkedin: ''
    },
    {
      title: 'facebook.py',
      description: 'Facebook automation script.',
      tech: ['Python'],
      icon: <Code className="w-6 h-6" />, 
      gradient: "from-purple-500 to-pink-500",
      category: 'Python',
      github: 'https://github.com/riteshbhusare/Summer_Intership2025/blob/main/facebook.py',
      linkedin: ''
    },
    {
      title: 'insta.py',
      description: 'Instagram automation script.',
      tech: ['Python'],
      icon: <Code className="w-6 h-6" />, 
      gradient: "from-pink-500 to-red-500",
      category: 'Python',
      github: 'https://github.com/riteshbhusare/Summer_Intership2025/blob/main/insta.py',
      linkedin: ''
    },
    {
      title: 'linked.py',
      description: 'LinkedIn automation script.',
      tech: ['Python'],
      icon: <Code className="w-6 h-6" />, 
      gradient: "from-indigo-500 to-purple-500",
      category: 'Python',
      github: 'https://github.com/riteshbhusare/Summer_Intership2025/blob/main/linked.py',
      linkedin: ''
    },
    {
      title: 'phone.py',
      description: 'Phone number automation script.',
      tech: ['Python'],
      icon: <Code className="w-6 h-6" />, 
      gradient: "from-teal-500 to-green-500",
      category: 'Python',
      github: 'https://github.com/riteshbhusare/Summer_Intership2025/blob/main/phone.py',
      linkedin: ''
    },
    {
      title: 'sms.py',
      description: 'SMS automation script.',
      tech: ['Python'],
      icon: <Code className="w-6 h-6" />, 
      gradient: "from-orange-500 to-red-500",
      category: 'Python',
      github: 'https://github.com/riteshbhusare/Summer_Intership2025/blob/main/sms.py',
      linkedin: ''
    },
    {
      title: 'twitter.py',
      description: 'Twitter automation script.',
      tech: ['Python'],
      icon: <Code className="w-6 h-6" />, 
      gradient: "from-cyan-500 to-blue-500",
      category: 'Python',
      github: 'https://github.com/riteshbhusare/Summer_Intership2025/blob/main/twitter.py',
      linkedin: ''
    },
    {
      title: 'whatapp.py',
      description: 'WhatsApp automation script.',
      tech: ['Python'],
      icon: <Code className="w-6 h-6" />, 
      gradient: "from-green-500 to-emerald-500",
      category: 'Python',
      github: 'https://github.com/riteshbhusare/Summer_Intership2025/blob/main/whatapp.py',
      linkedin: ''
    },
    {
      title: 'a.html',
      description: 'HTML project file.',
      tech: ['HTML'],
      icon: <Terminal className="w-6 h-6" />, 
      gradient: "from-gray-500 to-slate-500",
      category: 'Linux',
      github: 'https://github.com/riteshbhusare/Summer_Intership2025/blob/main/a.html',
      linkedin: ''
    },
  ];

  const linuxWorldCategories = ['Python', 'Linux', 'Docker', 'Git & GitHub', 'JavaScript + Docker Based Task'];
  const [activeCategory, setActiveCategory] = React.useState('Python');

  return (
    <>
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
                    {/* Remove Hugging Face demo links, update GitHub links if needed */}
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

      {/* LinuxWorld Projects Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-black to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent mb-8">
              LinuxWorld Projects
            </h2>
          </motion.div>

          {/* Tabs for categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {linuxWorldCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-lg font-semibold text-base bg-gray-800/70 text-gray-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:text-white transition-all duration-300 ${activeCategory === cat ? 'ring-2 ring-blue-400' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project cards filtered by category, using same card/animation as Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8">
            {linuxWorldProjects.filter(p => p.category === activeCategory).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
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
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-600/50 hover:text-white transition-all duration-300 group/btn"
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      GitHub
                    </a>
                    {project.linkedin && (
                      <a
                        href={project.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-blue-700/50 text-blue-200 rounded-lg hover:bg-blue-600/50 hover:text-white transition-all duration-300 group/btn"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;