import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Info from "./Info";
import CV from "../../assets/Sukharanjan-resume-update-3.pdf";
import { useDarkMode } from "../../context/DarkModeContext";

const About = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { darkMode } = useDarkMode();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => setIsDownloading(false), 2000);
  };

  // Tech stack items with colors and images
  const techStack = [
    {
      name: "React",
      color: darkMode ? "#61DAFB" : "#087EA4",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      color: darkMode ? "#68A063" : "#3C873A",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "MongoDB",
      color: darkMode ? "#4DB33D" : "#13AA52",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Express",
      color: darkMode ? "#FFFFFF" : "#000000",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    },
    {
      name: "JavaScript",
      color: darkMode ? "#F0DB4F" : "#F7DF1E",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: "Tailwind",
      color: darkMode ? "#38BDF8" : "#06B6D4",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg",
    },
  ];

  return (
    <section
      name="About"
      className={`relative py-24 overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-gray-100"
          : "bg-gradient-to-b from-slate-50 via-blue-50 to-indigo-50 text-gray-800"
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div
          className={`absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-20 ${
            darkMode ? "bg-purple-600" : "bg-indigo-400"
          }`}
          style={{
            transform: `translate(${mousePosition.x * -20}px, ${
              mousePosition.y * -20
            }px)`,
          }}
        ></div>
        <div
          className={`absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            darkMode ? "bg-blue-600" : "bg-blue-400"
          }`}
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${
              mousePosition.y * 20
            }px)`,
          }}
        ></div>

        {/* Grid pattern */}
        <div
          className={`absolute inset-0 opacity-[0.03] ${
            darkMode ? "bg-white" : "bg-black"
          }`}
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div
            className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-wide mb-3 ${
              darkMode
                ? "bg-purple-500/10 text-purple-400"
                : "bg-indigo-500/10 text-indigo-600"
            }`}
          >
            ABOUT ME
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight dark:text-white">
            My{" "}
            <span
              className={
                darkMode
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-700"
                  : "text-indigo-600"
              }
            >
              Professional Journey
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Content Section */}
          <motion.div
            className="lg:w-1/2 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Info darkMode={darkMode} />

            <p
              className={`mb-8 text-lg leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I'm a passionate full-stack developer with expertise in modern web
              technologies. My journey combines academic excellence with
              hands-on experience building scalable applications. I thrive on
              solving complex problems and creating seamless user experiences.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
              {[
                { value: "10+", label: "Projects Completed" },
                { value: "2+", label: "Years Experience" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className={`p-6 rounded-2xl ${
                    darkMode
                      ? "bg-gray-800/50 hover:bg-gray-800 backdrop-blur-sm border border-gray-700/50"
                      : "bg-white/70 hover:bg-white backdrop-blur-sm border border-gray-200 shadow-lg shadow-indigo-100/20"
                  } transition-all duration-300`}
                >
                  <h3
                    className={`text-3xl font-bold ${
                      darkMode ? "text-purple-400" : "text-indigo-600"
                    }`}
                  >
                    {item.value}
                  </h3>
                  <p
                    className={`text-sm mt-1 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href={CV}
              download
              onClick={handleDownload}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`inline-flex items-center px-8 py-4 rounded-xl shadow-lg transition-all ${
                darkMode
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-purple-500/20"
                  : "bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 shadow-indigo-500/20"
              } text-white font-medium ${
                isDownloading ? "cursor-not-allowed opacity-80" : ""
              }`}
            >
              {isDownloading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Downloading Resume...
                </>
              ) : (
                <>
                  Download Resume
                  <svg
                    className="w-5 h-5 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L11 12.586V5a1 1 0 112 0v7.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </>
              )}
            </motion.a>
          </motion.div>

          {/* Visual Element - Modern Tech Showcase */}
          <motion.div
            className="lg:w-1/2 order-1 lg:order-2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative h-[450px] w-full max-w-[500px] mx-auto">
              {/* Main circular backdrop */}
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full ${
                  darkMode
                    ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50"
                    : "bg-gradient-to-br from-white to-gray-100 border border-gray-200"
                } shadow-2xl`}
                style={{
                  transform: `translate(-50%, -50%) translate(${
                    mousePosition.x * 10
                  }px, ${mousePosition.y * 10}px)`,
                }}
              ></div>

              {/* Profile image or initials */}
              <motion.div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] rounded-full overflow-hidden border-4 ${
                  darkMode ? "border-purple-500" : "border-indigo-500"
                } shadow-xl z-20`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                style={{
                  transform: `translate(-50%, -50%) translate(${
                    mousePosition.x * -15
                  }px, ${mousePosition.y * -15}px)`,
                }}
              >
                <div
                  className={`w-full h-full flex items-center justify-center ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <div
                    className={`text-4xl font-bold ${
                      darkMode ? "text-purple-400" : "text-indigo-600"
                    }`}
                  >
                    SJ
                  </div>
                </div>
              </motion.div>

              {/* Tech stack items */}
              {techStack.map((tech, i) => {
                // Calculate positions in a circle
                const totalItems = techStack.length;
                const angle = i * (360 / totalItems) * (Math.PI / 180);
                const radius = 160; // Distance from center
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                // Stagger the animations
                const delay = 0.5 + i * 0.1;

                return (
                  <motion.div
                    key={tech.name}
                    className={`absolute top-1/2 left-1/2 flex flex-col items-center`}
                    style={{
                      transform: `translate(-50%, -50%) translate(${
                        x + mousePosition.x * (i % 2 === 0 ? 20 : -20)
                      }px, ${
                        y + mousePosition.y * (i % 2 === 0 ? 20 : -20)
                      }px)`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay, type: "spring", stiffness: 200 }}
                  >
                    {/* Tech icon */}
                    <motion.div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                        darkMode
                          ? "bg-gray-800/90 border border-gray-700/50"
                          : "bg-white/90 border border-gray-200"
                      } backdrop-blur-md shadow-lg`}
                      whileHover={{
                        scale: 1.15,
                        boxShadow: darkMode
                          ? `0 0 20px 2px ${tech.color}40`
                          : `0 0 20px 2px ${tech.color}30`,
                      }}
                    >
                      <img
                        src={tech.image || "/placeholder.svg"}
                        alt={tech.name}
                        className="w-8 h-8"
                        style={{
                          filter: darkMode ? "brightness(1.2)" : "none",
                        }}
                      />
                    </motion.div>

                    {/* Tech name */}
                    <motion.span
                      className={`mt-2 text-sm font-medium px-3 py-1 rounded-full ${
                        darkMode
                          ? "bg-gray-800/80 text-gray-300"
                          : "bg-white/80 text-gray-700"
                      } backdrop-blur-sm border ${
                        darkMode ? "border-gray-700/50" : "border-gray-200"
                      }`}
                      style={{ color: tech.color }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech.name}
                    </motion.span>
                  </motion.div>
                );
              })}

              {/* Decorative elements */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`circle-${i}`}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border ${
                    darkMode ? "border-gray-700/30" : "border-gray-300/50"
                  }`}
                  style={{
                    width: `${300 + i * 80}px`,
                    height: `${300 + i * 80}px`,
                    transform: `translate(-50%, -50%) translate(${
                      mousePosition.x * (5 * i)
                    }px, ${mousePosition.y * (5 * i)}px)`,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                ></motion.div>
              ))}

              {/* Floating particles */}
              {[...Array(8)].map((_, i) => {
                const size = Math.random() * 6 + 3;
                const xPos = (Math.random() - 0.5) * 400;
                const yPos = (Math.random() - 0.5) * 400;
                const delay = Math.random() * 2;
                const duration = Math.random() * 10 + 10;

                return (
                  <motion.div
                    key={`particle-${i}`}
                    className={`absolute top-1/2 left-1/2 rounded-full ${
                      darkMode ? "bg-purple-400/30" : "bg-indigo-400/30"
                    }`}
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      x: xPos,
                      y: yPos,
                    }}
                    animate={{
                      x: [xPos, xPos + (Math.random() - 0.5) * 100, xPos],
                      y: [yPos, yPos + (Math.random() - 0.5) * 100, yPos],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration,
                      delay,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                );
              })}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
