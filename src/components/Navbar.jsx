import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavLinkClick = (e, id) => {
    e.preventDefault();

    const targetSection = document.getElementById(id);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      history.pushState(null, "", window.location.pathname);

      setIsOpen(false);
    }
  };

  const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];

  return (
    // <nav className="bg-white shadow-md fixed w-full z-50 mb-auto">
    <nav className="bg-gray-950 text-gray-400 py-px text-center fixed w-full z-50 mb-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="bg-gradient-to-r to-blue-500 from-purple-600 bg-clip-text text-transparent text-2xl font-bold tracking-wide">
            <a href="#hero" onClick={(e) => handleNavLinkClick(e, "hero")}>
              Ramiz Shahin
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const id = item.toLowerCase();

              return (
                <motion.a
                  key={item}
                  href={`#${id}`}
                  onClick={(e) => handleNavLinkClick(e, id)}
                  className={`relative group font-medium px-1 transition-colors duration-300 hover:text-blue-500 ${
                    activeSection === id
                      ? "bg-gradient-to-r to-blue-500 from-purple-600 bg-clip-text text-transparent"
                      : "bg-gradient-to-r to-white from-white bg-clip-text text-transparent"
                  }`}
                >
                  {item}

                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-blue-500 transform transition-transform duration-300 group-hover:scale-x-100 ${
                      activeSection === id
                        ? "bg-gradient-to-r from-blue-400 to-purple-600 scale-x-100"
                        : ""
                    }`}
                  />
                </motion.a>
              );
            })}
          </div>

          {/* mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white shadow-lg"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-700 hover:text-blue-500 transition duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
