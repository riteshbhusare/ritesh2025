import React from 'react';
import { 
  Code, 
  Server, 
  Terminal, 
  Container, 
  GitBranch, 
  Settings,
  Cloud,
  Database
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'C', 'C++', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      skills: ['Docker', 'Jenkins', 'AWS', 'CI/CD'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'System Administration',
      icon: Server,
      skills: ['Linux', 'SSH', 'Nginx', 'Apache'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Tools & Technologies',
      icon: Settings,
      skills: ['GitHub', 'VS Code', 'Postman', 'Vim'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const techIcons = [
    { icon: Container, name: 'Docker', color: 'hover:text-blue-400' },
    { icon: Terminal, name: 'Linux', color: 'hover:text-yellow-400' },
    { icon: Settings, name: 'Jenkins', color: 'hover:text-red-400' },
    { icon: Database, name: 'Databases', color: 'hover:text-green-400' },
    { icon: Cloud, name: 'Cloud', color: 'hover:text-cyan-400' },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 ml-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 title-font">
            <span className="text-yellow-400">Skills</span> & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg card-hover border border-gray-700"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg mr-4`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white title-font">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-4 py-2 bg-gray-700 text-gray-300 rounded-lg skill-glow cursor-pointer font-medium`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8 title-font">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {techIcons.map((tech, index) => (
              <div
                key={index}
                className="group p-6 bg-gray-800 rounded-lg tech-glow cursor-pointer border border-gray-700"
              >
                <tech.icon size={32} className={`text-gray-400 ${tech.color} transition-colors duration-300`} />
                <p className="text-xs text-gray-400 group-hover:text-white mt-2 text-center transition-colors duration-300 font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;