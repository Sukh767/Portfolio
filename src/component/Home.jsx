import { useState } from "react"
import { motion } from "framer-motion"
import { ReactTyped } from "react-typed"
import { Instagram, Linkedin, Github, Mail, Moon, Sun, ChevronsDown } from "lucide-react"
import { FaNodeJs, FaReact } from "react-icons/fa"
import { SiExpress, SiMongodb, SiTypescript, SiTailwindcss } from "react-icons/si"
import image from "../assets/image.webp"
import { useDarkMode } from "../context/DarkModeContext"

const Home = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const [hoveredTech, setHoveredTech] = useState(null)

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/sukh_jana/", color: "hover:text-pink-600", name: "Instagram" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sukharanjan-jana-402b42255",
      color: "hover:text-blue-600",
      name: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/Sukh767", color: "hover:text-gray-900", name: "GitHub" },
    { icon: Mail, href: "mailto:your@email.com", color: "hover:text-red-600", name: "Email" },
  ]

  const techStack = [
    { icon: FaNodeJs, color: "text-green-500", name: "Node.js" },
    { icon: FaReact, color: "text-blue-400", name: "React" },
    { icon: SiExpress, color: "text-gray-400", name: "Express" },
    { icon: SiMongodb, color: "text-green-400", name: "MongoDB" },
    { icon: SiTypescript, color: "text-blue-600", name: "TypeScript" },
    { icon: SiTailwindcss, color: "text-cyan-400", name: "Tailwind CSS" },
  ]

  return (
    <section
      name="home"
      className={`min-h-screen flex items-center justify-center transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-gray-100"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          {/* Text Section */}
          <motion.div
            className="lg:w-1/2 space-y-10 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`fixed top-6 right-6 p-3 rounded-full ${
                darkMode ? "bg-gray-800 shadow-lg shadow-purple-500/10" : "bg-white/80 shadow-lg shadow-blue-500/10"
              } backdrop-blur-md z-50`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-indigo-600" />}
            </motion.button>

            <motion.div
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div
                className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-wide ${
                  darkMode ? "bg-purple-500/10 text-purple-400" : "bg-indigo-500/10 text-indigo-600"
                }`}
              >
                Welcome to My Portfolio
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Hi, I'm <span className={darkMode ? "text-purple-400" : "text-indigo-600"}>Sukharanjan Jana</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="min-h-[4rem] text-3xl sm:text-4xl font-bold"
            >
              <span className="mr-3">I'm a</span>
              <ReactTyped
                className={`${darkMode ? "text-purple-400" : "text-indigo-600"}`}
                strings={["Full-Stack Developer", "MERN Stack Developer", "Web Developer", "Tech Enthusiast"]}
                typeSpeed={40}
                backSpeed={30}
                loop={true}
                showCursor={true}
                cursorChar="|"
              />
            </motion.div>

            <motion.p
              className={`text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              I'm a full-stack web developer and B.Tech student passionate about building modern web applications. With
              expertise in both frontend and backend technologies, I create seamless, performant digital experiences.
            </motion.p>

            {/* Social Media and Skills */}
            <motion.div
              className="flex flex-col gap-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="space-y-5">
                <h3 className={`text-lg font-semibold ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                  Connect with me
                </h3>
                <ul className="flex justify-center lg:justify-start gap-6">
                  {socialLinks.map((item, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`transition-colors duration-300 ${item.color} group`}
                    >
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center"
                        aria-label={item.name}
                      >
                        <div
                          className={`p-3 rounded-full ${
                            darkMode
                              ? "bg-gray-800 shadow-lg shadow-purple-500/5"
                              : "bg-white shadow-lg shadow-indigo-500/10"
                          }`}
                        >
                          <item.icon className="w-5 h-5" />
                        </div>
                        <span
                          className={`text-xs opacity-0 group-hover:opacity-100 transition-opacity mt-2 ${
                            darkMode ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {item.name}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="space-y-5">
                <h3 className={`text-lg font-semibold ${darkMode ? "text-gray-200" : "text-gray-800"}`}>Tech Stack</h3>
                <ul className="flex flex-wrap justify-center lg:justify-start gap-5">
                  {techStack.map((item, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      onHoverStart={() => setHoveredTech(item.name)}
                      onHoverEnd={() => setHoveredTech(null)}
                      className="flex flex-col items-center group"
                    >
                      <div
                        className={`p-3 rounded-full ${
                          darkMode
                            ? "bg-gray-800 shadow-lg shadow-purple-500/5"
                            : "bg-white shadow-lg shadow-indigo-500/10"
                        }`}
                      >
                        <item.icon
                          className={`w-5 h-5 transition-all duration-300 hover:scale-110 ${item.color}`}
                          aria-label={item.name}
                        />
                      </div>
                      <span
                        className={`text-xs opacity-0 group-hover:opacity-100 transition-opacity mt-2 ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {item.name}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative max-w-md">
              {/* Animated gradient glow */}
              <motion.div
                className="absolute -inset-4 rounded-full blur-2xl opacity-20"
                animate={{
                  background: darkMode
                    ? "linear-gradient(45deg, #9333ea, #10b981, #3b82f6)"
                    : "linear-gradient(45deg, #4f46e5, #8b5cf6, #3b82f6)",
                  scale: [1, 1.05, 1],
                  opacity: [0.15, 0.25, 0.15],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Profile image container */}
              <motion.div
                className="relative z-10 group"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="relative overflow-hidden rounded-full w-64 h-64 sm:w-80 sm:h-80 mx-auto">
                  {/* Profile image with subtle shine effect */}
                  <img
                    src={image || "/placeholder.svg"}
                    alt="Sukharanjan Jana"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Subtle overlay */}
                  <div
                    className={`absolute inset-0 rounded-full mix-blend-overlay ${
                      darkMode ? "bg-purple-900 opacity-10" : "bg-indigo-900 opacity-5"
                    }`}
                  />
                </div>

                {/* Floating border effect */}
                <div
                  className={`absolute inset-0 rounded-full border-4 ${
                    darkMode ? "border-purple-400/30" : "border-indigo-400/30"
                  } mx-auto w-64 h-64 sm:w-80 sm:h-80 -z-10 group-hover:scale-105 transition-all duration-300`}
                />
              </motion.div>

              {/* Currently Available badge - Modern floating style */}
              <motion.div
                className="absolute -bottom-4 -right-4"
                initial={{ scale: 0, rotate: -15 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                <div
                  className={`relative p-4 rounded-xl shadow-lg overflow-hidden ${
                    darkMode ? "bg-gray-800/90" : "bg-white/90"
                  } backdrop-blur-md border ${darkMode ? "border-gray-700" : "border-gray-200"}`}
                >
                  {/* Decorative elements */}
                  <div
                    className={`absolute -top-2 -right-2 w-8 h-8 rounded-full ${
                      darkMode ? "bg-purple-500/20" : "bg-indigo-500/20"
                    }`}
                  />
                  <div
                    className={`absolute -bottom-2 -left-2 w-6 h-6 rounded-full ${
                      darkMode ? "bg-emerald-500/20" : "bg-green-500/20"
                    }`}
                  />

                  <div className="relative z-10 text-center">
                    <div
                      className={`text-xs font-semibold uppercase tracking-wider ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Currently
                    </div>
                    <div className={`text-lg font-bold ${darkMode ? "text-emerald-400" : "text-green-600"}`}>
                      Available
                    </div>
                  </div>

                  {/* Animated ping effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl border-2 ${
                      darkMode ? "border-emerald-400/30" : "border-green-500/30"
                    }`}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                {/* Connecting line */}
                <svg
                  className={`absolute top-0 left-0 w-16 h-16 -translate-x-6 -translate-y-6 ${
                    darkMode ? "text-gray-800" : "text-white"
                  }`}
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M80,20 Q50,50 20,80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="5,3"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <div
            className={`p-3 rounded-full ${
              darkMode ? "bg-gray-800/80 shadow-lg shadow-purple-500/5" : "bg-white/80 shadow-lg shadow-indigo-500/10"
            } backdrop-blur-md`}
          >
            <ChevronsDown className={`w-5 h-5 ${darkMode ? "text-purple-400" : "text-indigo-600"}`} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Home
