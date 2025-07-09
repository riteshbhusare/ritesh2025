import React from 'react';
import { Calendar, MapPin, GraduationCap, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 ml-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 title-font">
            <span className="text-purple-400">About</span> Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <div className="space-y-8">
            <div className="bg-gray-800 p-8 rounded-lg card-hover border border-gray-700">
              <div className="flex items-center mb-6">
                <User size={24} className="text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold text-white title-font">Personal Details</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Calendar size={18} className="text-cyan-400 mr-3" />
                  <span><strong>Born:</strong> April 1, 2005</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin size={18} className="text-cyan-400 mr-3" />
                  <span><strong>Location:</strong> Chhatrapati Sambhajinagar, Maharashtra</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg card-hover border border-gray-700">
              <div className="flex items-center mb-6">
                <GraduationCap size={24} className="text-yellow-400 mr-3" />
                <h3 className="text-2xl font-bold text-white title-font">Education</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-yellow-400 title-font">B.Sc. (Hons) Computer Science</h4>
                  <p className="text-gray-300">MGM University</p>
                  <p className="text-gray-400 text-sm">Currently Pursuing</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Description */}
          <div className="space-y-6">
            <div className="bg-gray-800 p-8 rounded-lg card-hover border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 title-font">My Journey</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I am <span className="text-purple-400 font-semibold">Ritesh Ishwar Bhusare</span>, born on April 1, 2005. 
                A passionate learner in Cloud Computing and DevOps, exploring automation, Linux, and container 
                tools to solve real-world challenges.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                My journey in technology began with a curiosity about how systems work at scale. 
                I've been diving deep into containerization, orchestration, and continuous integration 
                to build robust, scalable solutions.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                  <div className="text-2xl font-bold text-white title-font">5+</div>
                  <div className="text-sm text-blue-100">Projects</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                  <div className="text-2xl font-bold text-white title-font">10+</div>
                  <div className="text-sm text-purple-100">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;