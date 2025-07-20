import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import skillsData from "@/data/skills";
import SkillIcon from "./ui components/SkillIcon";

const Skills = () => {
  const categories = [
    "All",
    ...new Set(skillsData.map((skill) => skill.category)),
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredSkills, setFilteredSkills] = useState(skillsData);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredSkills(skillsData);
    } else {
      setFilteredSkills(
        skillsData.filter((skill) => skill.category === activeCategory)
      );
    }
  }, [activeCategory]);

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
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-900 text-white">
      {" "}
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-md ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-700 text-gray-200 hover:bg-gray-600 hover:shadow-md"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            viewport={{ amount: 0.1 }}
          >
            {filteredSkills.length > 0 ? (
              filteredSkills.map((skill) => (
                <div className="hover:scale-110 hover:shadow-xl duration-500">
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 border border-gray-700" // Skill card background and border adjusted
                  >
                    {/* <span className="text-5xl mb-4">{skill.icon}</span> */}
                    <div className="text-5xl mb-4 text-blue-400">
                      {" "}
                      {/* Added text-blue-400 for icon color */}
                      <SkillIcon iconName={skill.icon} size="2.5em" />{" "}
                      {/* Use size prop for scaling */}
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {" "}
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      {skill.category}
                    </p>{" "}
                  </motion.div>
                </div>
              ))
            ) : (
              <motion.p
                className="col-span-full text-center text-gray-400 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                No skills found for this category.
              </motion.p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
