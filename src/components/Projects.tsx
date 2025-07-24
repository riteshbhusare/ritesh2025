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
    }
  ];

  // LinuxWorld Projects data
  const linuxWorldProjects = [
    {
      title: 'astroguru',
      description: 'AstroGuru Jupyter Notebook for astrology Q&A.',
      tech: ['Python', 'Jupyter'],
      icon: <Code className="w-6 h-6" />, 
      gradient: "from-yellow-500 to-orange-500",
      category: 'Python',
      github: 'https://github.com/riteshbhusare/Summer_Intership2025/blob/main/astroguru.ipynb',
      linkedin: 'https://www.linkedin.com/posts/ritesh-bhusare-5a209330b_astrologyapp-pythondeveloper-gradioapp-activity-7347291630053265408-Zzrv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE7bIIoBWkUAwSHNBi_hpDHzs8pczN-zmSI'
    },
    {
      title: 'bmi',
      description: 'BMI calculator script in Python.',
      tech: ['Python'],
      icon: <Code className="w-6 h-6" />, 
      gradient: "from-green-500 to-teal-500",
      category: 'Python',
      github: 'https://github.com/riteshbhusare/Summer_Intership2025/blob/main/bmi.py',
      linkedin: 'https://www.linkedin.com/posts/ritesh-bhusare-5a209330b_myproject-streamlitapp-pythonproject-activity-7346403007892193280-fOnn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE7bIIoBWkUAwSHNBi_hpDHzs8pczN-zmSI'
    },
    {
      title: 'email',
      description: 'Automate sending emails with Python.',
      tech: ['Python'],
      icon: <Code className="w-6 h-6" />, 
      gradient: "from-blue-500 to-cyan-500",
      category: 'Python',
      github: 'https://github.com/riteshbhusare/Summer_Intership2025/blob/main/email.py',
      linkedin: 'https://www.linkedin.com/posts/ritesh-bhusare-5a209330b_python-streamlit-linuxworld-activity-7348569413303820288-zvvB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE7bIIoBWkUAwSHNBi_hpDHzs8pczN-zmSI'
    },
    {
      title: 'facebook',
      description: 'Facebook automation script.',
      tech: ['Python'],
      icon: <Code className="w-6 h-6" />, 
      gradient: "from-purple-500 to-pink-500",
      category: 'Python',
      github: 'https://github.com/riteshbhusare/Summer_Intership2025/blob/main/facebook.py',
      linkedin: 'https://www.linkedin.com/posts/ritesh-bhusare-5a209330b_linuxworld-pythonprojects-automationui-activity-7349414837161984000-bOsi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE7bIIoBWkUAwSHNBi_hpDHzs8pczN-zmSI'
    },
    {
      title: 'instagram',
      description: 'Instagram automation script.',
      tech: ['Python'],
      icon: <Code className="w-6 h-6" />, 
      gradient: "from-pink-500 to-red-500",
      category: 'Python',
      github: 'https://github.com/riteshbhusare/Summer_Intership2025/blob/main/insta.py',
      linkedin: 'https://www.linkedin.com/posts/ritesh-bhusare-5a209330b_python-streamlit-instagaramautomation-activity-7349374830925754369-02gr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE7bIIoBWkUAwSHNBi_hpDHzs8pczN-zmSI'
    },
    {
      title: 'linked',
      description: 'LinkedIn automation script.',
      tech: ['Python'],
      icon: <Code className="w-6 h-6" />, 
      gradient: "from-indigo-500 to-purple-500",
      category: 'Python',
      github: 'https://github.com/riteshbhusare/Summer_Intership2025/blob/main/linked.py',
      linkedin: 'https://www.linkedin.com/posts/ritesh-bhusare-5a209330b_vimaldaga-linuxworld-linkedintools-activity-7349384569311100928-NncG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE7bIIoBWkUAwSHNBi_hpDHzs8pczN-zmSI'
    },
    {
      title: 'phone',
      description: 'Phone number automation script.',
      tech: ['Python'],
      icon: <Code className="w-6 h-6" />, 
      gradient: "from-teal-500 to-green-500",
      category: 'Python',
      github: 'https://github.com/riteshbhusare/Summer_Intership2025/blob/main/phone.py',
      linkedin: 'https://www.linkedin.com/posts/ritesh-bhusare-5a209330b_python-automation-browserbasedtool-activity-7349133686463737856-JpIb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE7bIIoBWkUAwSHNBi_hpDHzs8pczN-zmSI'
    },
    {
      title: 'sms',
      description: 'SMS automation script.',
      tech: ['Python'],
      icon: <Code className="w-6 h-6" />, 
      gradient: "from-orange-500 to-red-500",
      category: 'Python',
      github: 'https://github.com/riteshbhusare/Summer_Intership2025/blob/main/sms.py',
      linkedin: 'https://www.linkedin.com/posts/ritesh-bhusare-5a209330b_python-flask-linuxworld-activity-7349083154462179332-lAPk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE7bIIoBWkUAwSHNBi_hpDHzs8pczN-zmSI'
    },
    {
      title: 'twitter',
      description: 'Twitter automation script.',
      tech: ['Python'],
      icon: <Code className="w-6 h-6" />, 
      gradient: "from-cyan-500 to-blue-500",
      category: 'Python',
      github: 'https://github.com/riteshbhusare/Summer_Intership2025/blob/main/twitter.py',
      linkedin: 'https://www.linkedin.com/posts/ritesh-bhusare-5a209330b_linuxworld-pythonprojects-automationui-activity-7349414837161984000-bOsi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE7bIIoBWkUAwSHNBi_hpDHzs8pczN-zmSI'
    },
    {
      title: 'whatsapp',
      description: 'WhatsApp automation script.',
      tech: ['Python'],
      icon: <Code className="w-6 h-6" />, 
      gradient: "from-green-500 to-emerald-500",
      category: 'Python',
      github: 'https://github.com/riteshbhusare/Summer_Intership2025/blob/main/whatapp.py',
      linkedin: 'https://www.linkedin.com/posts/ritesh-bhusare-5a209330b_python-streamlit-whatsappautomation-activity-7349294909431906304-x-kd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE7bIIoBWkUAwSHNBi_hpDHzs8pczN-zmSI'
    }
  ];

  const linuxWorldCategories = ['Python', 'Linux', 'Docker', 'Git & GitHub', 'JavaScript + Docker Based Task'];
  const [activeCategory, setActiveCategory] = React.useState('Python');

  // Helper to get a color from the gradient string for border/button
  const getMainColor = (gradient: string) => {
    if (gradient.includes('purple')) return '#a855f7';
    if (gradient.includes('pink')) return '#ec4899';
    if (gradient.includes('green')) return '#22d3ee';
    if (gradient.includes('teal')) return '#14b8a6';
    if (gradient.includes('blue')) return '#3b82f6';
    if (gradient.includes('orange')) return '#f59e42';
    if (gradient.includes('red')) return '#ef4444';
    if (gradient.includes('yellow')) return '#facc15';
    if (gradient.includes('indigo')) return '#6366f1';
    return '#a3a3a3';
  };

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const mainColor = getMainColor(project.gradient);
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                  className="group relative cursor-pointer"
                >
                  {/* Soft golden or matching glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-50 transition-all duration-500`} />
                  {/* Glassy card with colored border */}
                  <div className="absolute inset-0 rounded-2xl group-hover:shadow-[0_0_32px_8px_rgba(255,215,0,0.12)] transition-all duration-500" />
                  {/* Card */}
                  <div
                    className="relative bg-gray-900/60 backdrop-blur-md border-2 rounded-2xl p-6 h-full flex flex-col"
                    style={{ borderColor: mainColor }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                        {project.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 mb-4 leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs bg-gray-700/60 text-white rounded-full border border-gray-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-auto">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center px-3 py-2 rounded-lg font-semibold text-white text-sm shadow-md transition-all duration-300 group/btn"
                          style={{ background: mainColor }}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-3 py-2 rounded-lg font-semibold text-white text-sm shadow-md transition-all duration-300 group/btn bg-gray-800/80 hover:bg-gray-700/90"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
          {/* Project cards filtered by category, using new style and grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {linuxWorldProjects.filter(p => p.category === activeCategory).map((project, index) => {
              const mainColor = getMainColor(project.gradient);
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className="group relative cursor-pointer"
                >
                  {/* Soft golden or matching glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-50 transition-all duration-500`} />
                  {/* Glassy card with colored border */}
                  <div className="absolute inset-0 rounded-2xl group-hover:shadow-[0_0_32px_8px_rgba(255,215,0,0.12)] transition-all duration-500" />
                  {/* Card */}
                  <div
                    className="relative bg-gray-900/60 backdrop-blur-md border-2 rounded-2xl p-4 hover:border-[#ffd764]/60 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#ffd764]/20 h-full flex flex-col min-h-[180px]"
                    style={{ borderColor: mainColor }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className={`p-2 rounded-xl bg-gradient-to-r ${project.gradient} text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                        {project.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#ffd764] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-white mb-2 leading-snug flex-grow" style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>
                      {project.description}
                    </p>
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2 py-0.5 text-xs bg-gray-700/60 text-white rounded-full border border-gray-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${project.linkedin ? 'flex-1' : 'w-full'} flex items-center justify-center px-3 py-2 rounded-lg font-semibold text-white text-sm shadow-md transition-all duration-300 group/btn bg-gray-800/80 hover:bg-gray-700/90`}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      {project.linkedin && (
                        <a
                          href={project.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center px-3 py-2 rounded-lg font-semibold text-white text-sm shadow-md transition-all duration-300 group/btn"
                          style={{ background: mainColor }}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;