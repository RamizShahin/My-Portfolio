import React from "react";
import { motion } from "framer-motion";
import { educationData, certificatesData } from "@/data/about";

const About = () => {
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
    <section
      id="about"
      className="py-16 md:py-24 text-white relative overflow-hidden"
    >
      <motion.div
        className="container mx-auto px-4 max-w-6xl flex flex-col items-center justify-center z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        exit="hidden"
        viewport={{ amount: 0.3 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-12"
        >
          <span className="text-white">About </span>
          <span className="text-yellow-300">Me</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 w-full items-start">
          <div className="md:w-1/2 text-left space-y-6">
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl font-light leading-relaxed text-gray-100"
            >
              As a passionate Computer Engineering student, I am deeply focused
              on software and web development. I thrive on the challenge of
              creating intelligent solutions and am particularly driven by the
              art of designing efficient algorithms. My journey in engineering
              is fueled by a constant dedication to learning and a meticulous
              attention to detail, ensuring robust and high-quality outcomes.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl font-light leading-relaxed text-gray-100"
            >
              I am committed to transforming complex ideas into functional and
              elegant applications. My approach combines strong analytical
              skills with a proactive mindset, always seeking to optimize
              performance and enhance user experience. I am currently seeking
              full-time roles or internships where I can apply my technical
              expertise, contribute to innovative projects, and further build my
              professional experience.
            </motion.p>
          </div>
          <motion.div className="md:w-1/2 text-left" variants={itemVariants}>
            <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Education
            </h3>
            <div className="space-y-8 hover:scale-110 hover:shadow-xl duration-500">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-indigo-800 p-6 rounded-lg shadow-lg"
                >
                  <h4 className="text-2xl font-bold text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-xl text-gray-100 mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-md text-gray-300 mb-3">{edu.years}</p>
                  {edu.details && (
                    <ul className="list-disc list-inside text-gray-200 space-y-1">
                      {edu.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="w-full mt-16 pt-8 border-t border-gray-700"
          variants={itemVariants}
        >
          <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificatesData.map((cert, index) => (
              <div
                className="hover:scale-110 hover:shadow-xl duration-500 cursor-pointer"
                key={`${index}-2`}
              >
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-indigo-800 p-6 rounded-lg shadow-lg text-left"
                >
                  <h4 className="text-xl font-bold text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-lg text-gray-100 mb-1">{cert.issuer}</p>
                  <p className="text-md text-gray-300 mb-3">{cert.date}</p>
                  {cert.link && cert.link !== "#" && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-200 inline-flex items-center"
                    >
                      View Credential
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.a
          variants={itemVariants}
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
            history.pushState(null, "", window.location.pathname);
          }}
          className="inline-block px-10 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition duration-300 text-lg mt-16"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Connect
        </motion.a>
      </motion.div>
    </section>
  );
};

export default About;
