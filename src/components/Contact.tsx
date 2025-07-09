import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react';

interface ContactProps {
  id: string;
  onSectionInView: (section: string) => void;
}

const Contact: React.FC<ContactProps> = ({ id, onSectionInView }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      onSectionInView(id);
    }
  }, [inView, id, onSectionInView]);

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      label: "Email",
      value: "riteshbhusare495@gmail.com",
      href: "mailto:riteshbhusare495@gmail.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      label: "Phone",
      value: "7507567249",
      href: "tel:7507567249",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <Github className="w-8 h-8" />,
      label: "GitHub",
      value: "riteshbhusare/github_2025",
      href: "https://github.com/riteshbhusare/github_2025",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      label: "LinkedIn",
      value: "ritesh-bhusare-5a209330b",
      href: "https://linkedin.com/in/ritesh-bhusare-5a209330b",
      gradient: "from-blue-600 to-blue-400"
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      label: "Instagram",
      value: "@ritesh_bhusare_patil",
      href: "https://instagram.com/ritesh_bhusare_patil",
      gradient: "from-pink-500 to-red-500"
    }
  ];

  return (
    <section
      ref={ref}
      id={id}
      className="py-20 px-6 bg-gradient-to-br from-black to-gray-900"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-8">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's connect and discuss opportunities in Cloud Engineering and DevOps!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="group relative block"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${contact.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-300`} />
              
              {/* Card */}
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 group-hover:transform group-hover:scale-105">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${contact.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {contact.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gray-100 transition-colors">
                      {contact.label}
                    </h3>
                    <p className="text-gray-300 text-sm break-all">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-400">
            © 2025 Ritesh Bhusare. Built with React & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;