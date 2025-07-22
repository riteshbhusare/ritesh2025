import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Clock, Calendar } from 'lucide-react';

interface BlogsProps {
  id: string;
  onSectionInView: (section: string) => void;
}

const Blogs: React.FC<BlogsProps> = ({ id, onSectionInView }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      onSectionInView(id);
    }
  }, [inView, id, onSectionInView]);

  const blogs = [
    {
      title: "Why Companies Use Kubernetes",
      description: "Explore how Kubernetes revolutionizes container orchestration and why enterprises are adopting it for scalable, resilient applications.",
      category: "DevOps",
      url: "https://riteshbhusare.hashnode.dev/why-companies-use-kubernetes",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Why Companies Use Linux",
      description: "Discover the reasons behind Linux's dominance in enterprise environments and its role in modern infrastructure.",
      category: "Linux",
      url: "https://riteshbhusare.hashnode.dev/why-companies-use-linux",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Why Companies Use Docker",
      description: "Learn how Docker transforms application deployment and why containerization has become essential for modern development.",
      category: "DevOps",
      url: "https://riteshbhusare.hashnode.dev/why-companies-use-docker",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "How AWS Powers Industry Giants",
      description: "Discover how Netflix, Spotify, Coca-Cola, and Samsung use AWS to deliver innovation at scale across entertainment, beverages, and electronics.",
      category: "Cloud",
      url: "https://www.linkedin.com/posts/ritesh-bhusare-5a209330b_a-blog-on-the-aws-user-amazon-web-services-activity-7352593106082365440-vdMo",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      title: "Containerizing Flask with Docker",
      description: "See how Flask apps run seamlessly inside Docker containers, improving portability and simplifying deployment.",
      category: "DevOps",
      url: "https://www.linkedin.com/posts/ritesh-bhusare-5a209330b_docker-flask-python-activity-7352555433837977600-5hDn",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      title: "Speed and Reliability in DevOps",
      description: "Understand the importance of achieving both speed and reliability in modern DevOps pipelines and workflows.",
      category: "DevOps",
      url: "https://www.linkedin.com/posts/ritesh-bhusare-5a209330b_in-todays-tech-world-speed-reliability-activity-7350378771754926080-4Efz",
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "My LinuxWorld Training Experience",
      description: "A look into hands-on training with Linux, Python, and real-world DevOps use cases at LinuxWorld Workshop.",
      category: "Linux",
      url: "https://www.linkedin.com/posts/ritesh-bhusare-5a209330b_linuxworld-python-linux-activity-7350173412130025472-7d64",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      title: "Linux Customization Rocks",
      description: "Learn how Linux customization helps in building efficient, tailored environments, appreciated by community mentors like Vimal Daga Sir.",
      category: "Linux",
      url: "https://www.linkedin.com/posts/ritesh-bhusare-5a209330b_linux-customization-vimaldagasir-activity-7349988443487109120-Oc4L",
      gradient: "from-lime-500 to-green-500"
    },
    {
      title: "Building a Custom Linux Desktop",
      description: "Explore the process of setting up a clean, fast, and fully customized Linux desktop experience for daily development.",
      category: "Linux",
      url: "https://www.linkedin.com/posts/ritesh-bhusare-5a209330b_linux-linuxdesktop-linuxuser-activity-7349803477537075200-ZRFz",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      title: "LinuxWorld 2025 – My Journey",
      description: "Insights from attending the LinuxWorld 2025 workshop, where we explored Linux fundamentals and real-world DevOps applications.",
      category: "Linux",
      url: "https://www.linkedin.com/posts/ritesh-bhusare-5a209330b_linux-linuxworld-linux2025-activity-7349614730912620544-VH5W",
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section
      ref={ref}
      id={id}
      className="py-20 px-6 bg-gradient-to-br from-black to-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-8">
            Blogs
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Insights and thoughts on Cloud Computing, DevOps, and modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="group relative"
            >
              {/* Enhanced Glow effect - brighter than Featured Projects */}
              <div className={`absolute inset-0 bg-gradient-to-r ${blog.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-300`} />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-all duration-300" />
              
              {/* Card */}
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 group-hover:transform group-hover:scale-105 h-full flex flex-col">
                
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 text-xs font-semibold bg-gradient-to-r ${blog.gradient} text-white rounded-full`}>
                    {blog.category}
                  </span>
                </div>
                
                {/* Blog Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-100 transition-colors leading-tight">
                  {blog.title}
                </h3>
                
                {/* Blog Description */}
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                  {blog.description}
                </p>
                
                {/* Read Article Button */}
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group/btn shadow-lg hover:shadow-cyan-500/25"
                >
                  <span className="mr-2">Read Article</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;