import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import projectsData from "@/data/projects";

const Projects = () => {
  // Framer Motion variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between child animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-800 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
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
              // Added 'group' class to the card for hover effects on children
              className="bg-gray-700 rounded-xl shadow-xl overflow-hidden flex flex-col h-full 
                         transform hover:scale-[1.02] hover:shadow-2xl hover:border-blue-500 border-2 border-transparent 
                         transition-all duration-300 ease-in-out group" // Added 'group' class here
            >
              {/* Image Container with Overlay and Links */}
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110" // Image scales on hover
                  onError={(e) => {
                    e.target.onerror = null; // Prevents infinite loop
                    e.target.src = `https://placehold.co/600x400/1E293B/E2E8F0?text=${encodeURIComponent(
                      project.title
                    )}`; // Fallback image
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {/* Links Container */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    {project.githubLink && project.githubLink !== "#" && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center p-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition duration-300 shadow-md" // Changed px-4 py-2 to p-3 for square button
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-6 h-6" />{" "}
                        {/* Removed mr-2, increased icon size */}
                      </a>
                    )}
                    {project.liveLink && project.liveLink !== "#" && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center p-3 bg-blue-600 text-white rounded-full font-medium hover:bg-white hover:text-blue-600 transition duration-300 shadow-md" // Changed px-4 py-2 to p-3 for square button
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink className="w-6 h-6" />{" "}
                        {/* Removed mr-2, increased icon size */}
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Details (below image) */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-blue-300 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {" "}
                  {/* mt-auto pushes tags to bottom */}
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-600 text-gray-200 text-sm px-3 py-1 rounded-full font-medium"
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
