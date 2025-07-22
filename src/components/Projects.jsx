import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import projectsData from "@/data/projects";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="projects"
      className="py-16 md:py-24 text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white">My </span>
          <span className="text-yellow-300">Projects</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          viewport={{ amount: 0.2 }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-indigo-600 rounded-xl shadow-lg overflow-hidden flex flex-col h-full 
                         transform hover:border-blue-300 border-2 border-transparent 
                         transition-all duration-300 ease-in-out group"
              whileHover={{
                scale: 1.05,
                boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/600x400/1E293B/E2E8F0?text=${encodeURIComponent(
                      project.title
                    )}`;
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {project.githubLink && project.githubLink !== "#" && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center p-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition duration-300 shadow-md"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-6 h-6" />{" "}
                      </a>
                    )}
                    {project.liveLink && project.liveLink !== "#" && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center p-3 bg-blue-600 text-white rounded-full font-medium hover:bg-white hover:text-blue-600 transition duration-300 shadow-md"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink className="w-6 h-6" />{" "}
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-200 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-white text-gray-500 text-sm px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
