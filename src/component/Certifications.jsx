import { motion } from "framer-motion";
import { BadgeCheck, BookOpen, Code, Database, Server } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";

const Certifications = () => {
  const { darkMode } = useDarkMode();

  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "June 2023",
      icon: Code,
      link: "#",
      skills: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Advanced JavaScript Concepts",
      issuer: "Coursera",
      date: "March 2023",
      icon: BookOpen,
      link: "#",
      skills: ["ES6+", "Async/Await", "Design Patterns"]
    },
    {
      title: "MongoDB for Developers",
      issuer: "MongoDB University",
      date: "January 2023",
      icon: Database,
      link: "#",
      skills: ["Aggregation", "Indexing", "Data Modeling"]
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "November 2022",
      icon: Server,
      link: "#",
      skills: ["EC2", "S3", "Lambda", "CloudFront"]
    },
    {
      title: "React Frontend Development",
      issuer: "freeCodeCamp",
      date: "August 2022",
      icon: Code,
      link: "#",
      skills: ["Hooks", "Context API", "Redux"]
    }
  ];

  return (
    <section 
      name="certifications"
      className={`py-16 transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100"
          : "bg-gradient-to-b from-blue-50 to-indigo-50 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div
            className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-wide mb-4 ${
              darkMode ? "bg-purple-500/10 text-purple-400" : "bg-indigo-500/10 text-indigo-600"
            }`}
          >
            My Credentials
          </div>
          <h2 className="text-3xl text-white sm:text-4xl lg:text-5xl font-bold mb-4">
            Certifications & <span className={darkMode ? "text-purple-400" : "text-indigo-600"}>Courses</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            Here are some of the certifications I've earned to validate my skills and knowledge in various technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 ${
                darkMode
                  ? "bg-gray-800/50 border border-gray-700 hover:border-purple-400/30 hover:shadow-purple-500/10"
                  : "bg-white border border-gray-200 hover:border-indigo-300 hover:shadow-indigo-500/10"
              }`}
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${
                    darkMode ? "bg-purple-500/10" : "bg-indigo-500/10"
                  }`}>
                    <cert.icon className={`w-6 h-6 ${
                      darkMode ? "text-purple-400" : "text-indigo-600"
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-xl text-white font-bold mb-1">{cert.title}</h3>
                    <p className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}>
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className={`text-sm font-semibold mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}>
                    Skills Covered:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`text-xs px-2 py-1 rounded-full ${
                          darkMode
                            ? "bg-gray-700/50 text-purple-300"
                            : "bg-indigo-100 text-indigo-700"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-dashed border-gray-500/30">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-medium flex items-center gap-1 ${
                      darkMode ? "text-purple-400 hover:text-purple-300" : "text-indigo-600 hover:text-indigo-500"
                    }`}
                  >
                    <BadgeCheck className="w-4 h-4" />
                    View Certificate
                  </a>
                  <span className={`text-xs px-2 py-1 rounded ${
                    darkMode ? "bg-gray-700 text-green-400" : "bg-green-100 text-green-700"
                  }`}>
                    Verified
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className={`mb-6 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            I'm constantly learning and adding new certifications to my skillset.
          </p>
          <button
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              darkMode
                ? "bg-purple-600 hover:bg-purple-700 text-white"
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
            }`}
          >
            View All Certifications
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;