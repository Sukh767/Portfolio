import { useState } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from '@/context/DarkModeContext';
import { 
  Code2, 
  Database, 
  Server, 
  Palette, 
  Cloud,
  Cpu,
  GitBranch,
  Layers,
  Smartphone,
  Terminal,
  Network,
  Shield,
  Lock,
  CpuIcon
} from "lucide-react";

const Skills = () => {
  const {darkMode} = useDarkMode();
  
  const skillCategories = [
    {
      title: "Frontend",
      icon: Palette,
      color: "text-rose-400",
      bgColor: "bg-rose-400/10",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Redux", "React Query", "Axios"],
    },
    {
      title: "Backend",
      icon: Server,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      skills: ["Node.js", "Express", "REST APIs"],
    },
    {
      title: "AWS Cloud",
      icon: Cloud,
      color: "text-amber-400",
      bgColor: "bg-amber-400/10",
      skills: ["EC2", "S3", "Lambda", "RDS", "Cognito", "VPC"],
    },
    // {
    //   title: "DevOps",
    //   icon: GitBranch,
    //   color: "text-purple-400",
    //   bgColor: "bg-purple-400/10",
    //   skills: ["Docker", "Kubernetes", "CI/CD", "Terraform", "Ansible", "GitHub Actions"],
    // },
    {
      title: "Database",
      icon: Database,
      color: "text-emerald-400",
      bgColor: "bg-emerald-400/10",
      skills: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    // {
    //   title: "Security",
    //   icon: Shield,
    //   color: "text-indigo-400",
    //   bgColor: "bg-indigo-400/10",
    //   skills: ["IAM", "Cognito", "WAF", "KMS", "VPN", "Security Groups"],
    // },
  ];

  const [activeCategory, setActiveCategory] = useState(0);

  // AWS Architecture visualization components
  const awsComponents = [
    { name: "EC2", icon: Server, color: "bg-orange-500", position: "top-1/4 left-1/4" },
    { name: "S3", icon: Database, color: "bg-yellow-500", position: "top-1/3 right-1/4" },
    { name: "Lambda", icon: CpuIcon, color: "bg-blue-500", position: "bottom-1/3 left-1/3" },
    { name: "RDS", icon: Database, color: "bg-emerald-500", position: "bottom-1/4 right-1/3" },
    { name: "CloudFront", icon: Network, color: "bg-purple-500", position: "top-1/2 left-1/2" },
    { name: "VPC", icon: Network, color: "bg-red-500", position: "bottom-1/2 right-1/2" },
  ];

  return (
    <section className={`relative py-24 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-500 overflow-hidden`}>

      {/* Floating gradient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 ${darkMode ? 'bg-blue-500/10' : 'bg-blue-200/30'} rounded-full filter blur-[80px]`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-72 h-72 ${darkMode ? 'bg-purple-500/10' : 'bg-purple-200/30'} rounded-full filter blur-[90px]`}></div>
        <div className={`absolute top-1/3 right-1/3 w-56 h-56 ${darkMode ? 'bg-emerald-500/10' : 'bg-emerald-200/30'} rounded-full filter blur-[70px]`}></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className={`inline-block px-4 py-1.5 text-sm font-medium rounded-full ${darkMode ? 'bg-gray-800 text-blue-400 border-gray-700' : 'bg-blue-100 text-blue-600'} border mb-4`}
          >
            Technical Capabilities
          </motion.span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-700">Development Skills</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            The tools and technologies I use to build cloud-native applications
          </p>
        </motion.div>

        {/* Category selector */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(index)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`px-5 py-2.5 rounded-full flex items-center text-sm font-medium transition-all border ${
                activeCategory === index
                  ? `${category.bgColor} ${category.color} border-transparent shadow-lg`
                  : `${darkMode ? 'bg-gray-800/50 text-gray-300 border-gray-700' : 'bg-white text-gray-700 border-gray-200'} hover:${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`
              }`}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className={`rounded-xl p-4 border ${darkMode ? 'bg-gray-800/50 border-gray-700 hover:border-blue-400/30' : 'bg-white border-gray-200 hover:border-blue-500/30'} transition-all shadow-sm`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-12 h-12 rounded-lg ${skillCategories[activeCategory].bgColor} flex items-center justify-center mb-3`}>
                  <Layers className={`w-5 h-5 ${skillCategories[activeCategory].color}`} />
                </div>
                <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{skill}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* AWS Architecture Visualization */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={`mt-20 rounded-2xl p-8 relative overflow-hidden ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}
        >
          {/* Decorative elements */}
          <div className={`absolute top-0 right-0 w-32 h-32 ${darkMode ? 'bg-blue-500/10' : 'bg-blue-200/20'} rounded-full filter blur-[80px]`}></div>
          <div className={`absolute bottom-0 left-0 w-40 h-40 ${darkMode ? 'bg-purple-500/10' : 'bg-purple-200/20'} rounded-full filter blur-[90px]`}></div>
          
          <div className="relative max-w-4xl mx-auto">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center mb-6"
            >
              <Cloud className={`w-8 h-8 mr-3 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} />
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>AWS Architecture</h3>
            </motion.div>
            <p className={`mb-8 text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Experience designing and implementing cloud solutions on AWS
            </p>
            
            {/* Interactive AWS Architecture Diagram */}
            <div className="relative h-96 w-full rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 p-8">
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {awsComponents.map((comp, i) => (
                  <line 
                    key={i}
                    x1="50%" 
                    y1="50%" 
                    x2={comp.position.includes('left') ? '30%' : '70%'} 
                    y2={comp.position.includes('top') ? '30%' : '70%'}
                    stroke={darkMode ? 'rgba(156, 163, 175, 0.3)' : 'rgba(209, 213, 219, 0.5)'}
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                ))}
              </svg>
              
              {/* Central node */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className={`w-16 h-16 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg flex items-center justify-center border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                  <Network className={`w-6 h-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                </div>
              </div>

              {/* AWS components */}
              {awsComponents.map((comp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ scale: 1.1 }}
                  className={`absolute ${comp.position} transform -translate-x-1/2 -translate-y-1/2`}
                >
                  <div className={`w-12 h-12 rounded-lg ${comp.color} flex items-center justify-center shadow-md`}>
                    <comp.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className={`text-xs mt-2 text-center font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{comp.name}</p>
                </motion.div>
              ))}
            </div>

            {/* AWS Services List */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "EC2", desc: "Virtual Servers" },
                { name: "S3", desc: "Object Storage" },
                { name: "Lambda", desc: "Serverless Functions" },
                { name: "RDS", desc: "Managed Databases" },
                { name: "VPC", desc: "Network Isolation" },
                { name: "IAM", desc: "Access Management" },
                { name: "CloudFront", desc: "CDN Service" },
                { name: "Cognito", desc: "User Authentication" },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}
                >
                  <h4 className={`font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{service.name}</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;