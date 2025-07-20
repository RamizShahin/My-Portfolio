import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

const Contact = () => {
  const contactInfo = {
    email: "hrnr.sh2002@gmail.com",
    linkedin: "https://linkedin.com/in/ramiz-shahin-73245a274",
    github: "https://github.com/RamizShahin",
    resume: "/Ramiz_Shahin_CV.pdf",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-800 text-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-lg md:text-xl font-light leading-relaxed text-gray-200 mb-12 max-w-2xl mx-auto"
        >
          I'm always open to new opportunities, collaborations, and discussions.
          Feel free to reach out!
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.a
            variants={itemVariants}
            href={`mailto:${contactInfo.email}`}
            className="inline-flex flex-col items-center p-6 bg-gray-700 rounded-xl shadow-xl 
                       hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <Mail className="w-10 h-10 text-blue-300 mb-3 group-hover:text-white" />
            <span className="text-lg font-semibold text-gray-100">
              Email Me
            </span>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center p-6 bg-gray-700 rounded-xl shadow-xl 
                       hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <Linkedin className="w-10 h-10 text-blue-300 mb-3 group-hover:text-white" />
            <span className="text-lg font-semibold text-gray-100">
              LinkedIn
            </span>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center p-6 bg-gray-700 rounded-xl shadow-xl 
                       hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <Github className="w-10 h-10 text-blue-300 mb-3 group-hover:text-white" />
            <span className="text-lg font-semibold text-gray-100">GitHub</span>
          </motion.a>
        </motion.div>

        <motion.a
          variants={itemVariants}
          href={contactInfo.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg 
                     hover:bg-blue-700 transition duration-300 text-xl transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FileText className="w-6 h-6 mr-3" /> Download My CV
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
