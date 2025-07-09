import React, { useState } from 'react';
import { Github, ExternalLink, Filter } from 'lucide-react';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'BMI Calculator Web App',
      description: 'A responsive web application for calculating Body Mass Index with interactive charts and health recommendations.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Chart.js'],
      category: 'Web',
      demoUrl: '#',
      githubUrl: '#',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'AstroGuru – Cosmic Navigator AI',
      description: 'AI-powered astrology application providing personalized cosmic insights and horoscope predictions.',
      tags: ['Python', 'AI', 'Streamlit', 'OpenAI'],
      category: 'AI',
      demoUrl: '#',
      githubUrl: '#',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Multi-Apps DevOps Toolkit',
      description: 'Comprehensive DevOps toolkit with multiple utilities for automation, monitoring, and deployment.',
      tags: ['Docker', 'Kubernetes', 'Jenkins', 'Python'],
      category: 'DevOps',
      demoUrl: '#',
      githubUrl: '#',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Linux Terminal (SSH Commander)',
      description: 'Web-based SSH terminal emulator with advanced features for remote server management.',
      tags: ['Linux', 'SSH', 'Node.js', 'WebSocket'],
      category: 'System',
      demoUrl: '#',
      githubUrl: '#',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'DevOps Dashboard UI',
      description: 'Modern dashboard for monitoring DevOps metrics, deployments, and system health.',
      tags: ['React', 'Docker', 'Grafana', 'Prometheus'],
      category: 'DevOps',
      demoUrl: '#',
      githubUrl: '#',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 6,
      title: 'AstroGuru Gradio (Standalone)',
      description: 'Standalone version of AstroGuru with Gradio interface for easy deployment and usage.',
      tags: ['Python', 'Gradio', 'AI', 'Streamlit'],
      category: 'AI',
      demoUrl: '#',
      githubUrl: '#',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      id: 7,
      title: 'IoT Traffic Simulation',
      description: 'Smart traffic management system simulation using IoT sensors and real-time data processing.',
      tags: ['IoT', 'Python', 'Raspberry Pi', 'MQTT'],
      category: 'IoT',
      demoUrl: '#',
      githubUrl: '#',
      status: 'In Progress',
      image: 'https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 8,
      title: 'Bank Loan Assistant',
      description: 'AI-powered banking assistant for loan applications with risk assessment and recommendations.',
      tags: ['Python', 'Machine Learning', 'Flask', 'SQLite'],
      category: 'AI',
      demoUrl: '#',
      githubUrl: '#',
      status: 'In Progress',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-rose-500 to-pink-500'
    }
  ];

  const filters = ['All', 'Web', 'AI', 'DevOps', 'System', 'IoT'];
  const filterColors = {
    'All': 'from-gray-500 to-gray-600',
    'Web': 'from-blue-500 to-cyan-500',
    'AI': 'from-purple-500 to-pink-500',
    'DevOps': 'from-green-500 to-emerald-500',
    'System': 'from-orange-500 to-red-500',
    'IoT': 'from-yellow-500 to-orange-500'
  };

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 ml-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 title-font">
            <span className="text-cyan-400">Projects</span> & Work
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedFilter === filter
                  ? `bg-gradient-to-r ${filterColors[filter]} text-white shadow-lg`
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <Filter size={16} />
                {filter}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden card-hover group border border-gray-700"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/80 text-white' 
                      : 'bg-yellow-500/80 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-3 title-font">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 line-clamp-3 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700/80 text-gray-300 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.demoUrl}
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 flex-1 justify-center text-sm font-medium`}
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 hover:text-white transition-all duration-300 flex-1 justify-center text-sm font-medium"
                  >
                    <Github size={14} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Stats */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8 title-font">
            GitHub Activity
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg card-hover border border-gray-700">
              <div className="text-3xl font-bold text-blue-400 title-font">15+</div>
              <div className="text-gray-400">Repositories</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg card-hover border border-gray-700">
              <div className="text-3xl font-bold text-green-400 title-font">200+</div>
              <div className="text-gray-400">Commits</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg card-hover border border-gray-700">
              <div className="text-3xl font-bold text-purple-400 title-font">5+</div>
              <div className="text-gray-400">Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;