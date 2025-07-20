import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const name = "Ramiz Shahin";
  const profession = "Computer Engineer";
  const tagline = ""; // = "Crafting seamless digital experiences with passion and precision.";
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white overflow-hidden py-20"
    >
      {/* background blob animation */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white opacity-10 rounded-full mix-blend-overlay animate-blob"></div>
        <div className="absolute -bottom-10 -right-20 w-96 h-96 bg-white opacity-10 rounded-full mix-blend-overlay animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/4 left-1/2 w-64 h-64 bg-white opacity-10 rounded-full mix-blend-overlay animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between z-10 text-center md:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* text content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl font-light mb-2"
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4"
          >
            {name}
          </motion.h1>
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/90 mb-6"
          >
            A <span className="text-yellow-300">{profession}</span>
          </motion.h2>
          {tagline && (
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl font-light max-w-xl mx-auto md:mx-0 mb-8"
            >
              {tagline}
            </motion.p>
          )}

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" });
                history.pushState(null, "", window.location.pathname);
              }}
              className="px-8 py-3 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
                history.pushState(null, "", window.location.pathname);
              }}
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-600 transition duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>

        {/* image */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0"
          variants={imageVariants}
        >
          <img
            src="/images/ramiz.jpg"
            alt="Ramiz Shahin - Profile"
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover object-top shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
