import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import experienceData from "@/data/experience";

const Experience = () => {
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
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          My Experience
        </motion.h2>

        {/* Timeline Container */}
        <motion.div
          className="relative mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          viewport={{ amount: 0.1 }} // Trigger when 10% of container is visible
        >
          {experienceData.length > 0 && (
            <>
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-600 h-full hidden md:block"></div>
              {experienceData.map((exp, index) => (
                <motion.div
                  key={index}
                  className="mb-8 flex justify-between items-center w-full right-timeline"
                  variants={itemVariants}
                >
                  {/* Left Side (for even index) / Spacer (for odd index) */}
                  <div className="order-1 w-full md:w-5/12">
                    {index % 2 === 0 && (
                      <div className="bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-700 md:text-right">
                        <h3 className="text-2xl font-bold text-blue-300 mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-gray-200 mb-1">
                          {exp.company}
                        </p>
                        <p className="text-md font-semibold text-gray-300 flex items-center md:justify-end mb-1">
                          <Calendar className="w-4 h-4 mr-2 md:mr-0 md:ml-2" />{" "}
                          {exp.dates}
                        </p>
                        {exp.location && (
                          <p className="text-md text-gray-400 flex items-center md:justify-end">
                            <MapPin className="w-4 h-4 mr-2 md:mr-0 md:ml-2" />{" "}
                            {exp.location}
                          </p>
                        )}
                        <ul className="list-disc list-inside text-gray-300 space-y-1 mt-4 text-left md:text-right">
                          {exp.description.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Timeline Node */}
                  <div className="z-10 flex items-center order-1 bg-blue-600 shadow-xl w-10 h-10 rounded-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <Briefcase className="w-6 h-6 text-white mx-auto" />
                  </div>

                  {/* Right Side (for odd index) / Spacer (for even index) */}
                  <div className="order-1 w-full md:w-5/12">
                    {index % 2 !== 0 && (
                      <div className="bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-700 md:text-left">
                        <h3 className="text-2xl font-bold text-blue-300 mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-gray-200 mb-1">
                          {exp.company}
                        </p>
                        <p className="text-md font-semibold text-gray-300 flex items-center mb-1">
                          <Calendar className="w-4 h-4 mr-2" /> {exp.dates}
                        </p>
                        {exp.location && (
                          <p className="text-md text-gray-400 flex items-center">
                            <MapPin className="w-4 h-4 mr-2" /> {exp.location}
                          </p>
                        )}
                        <ul className="list-disc list-inside text-gray-300 space-y-1 mt-4">
                          {exp.description.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </>
          )}

          {!experienceData.length && (
            <motion.div
              className="text-center text-gray-400 mt-8"
              variants={itemVariants}
            >
              <p>No experience data available.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
