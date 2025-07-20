import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react"; // Icons for social links

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Framer Motion variants for simple fade-in
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.footer
      id="footer" // Added ID for potential future navigation
      className="bg-gray-950 text-gray-400 py-8 text-center" // Very dark background
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4">
        <p className="text-sm mb-4">
          &copy; {currentYear} Ramiz Shahin. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://linkedin.com/in/yourprofile" // REPLACE WITH YOUR LINKEDIN PROFILE URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/yourusername" // REPLACE WITH YOUR GITHUB PROFILE URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
        <p className="text-xs">
          Designed and Built with <span className="text-red-500">&hearts;</span>{" "}
          by Ramiz Shahin
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
