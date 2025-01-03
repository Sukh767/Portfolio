import React from "react";
import {
  Heading5Icon as Html5,
  CodepenIcon as Css3,
  CodepenIcon as Javascript,
  CodepenIcon as ReactLogo,
  GitGraphIcon as Git,
  CodepenIcon as NodeJs,
  PiIcon as Python,
  Database,
  Server,
  Brain,
  DockIcon as Docker,
  Figma,
  Codepen,
  Framer,
  TerminalSquare as Terminal, // Replacing Tailwind icon
} from "lucide-react";

const SkillCategory = ({ title, skills, icon: Icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl group">
    <div className="flex items-center mb-4">
      <Icon className="w-6 h-6 mr-2 text-blue-500" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex items-center p-2 rounded-md transition-all duration-300 hover:bg-blue-100 group"
        >
          <skill.icon className="w-5 h-5 mr-2 text-gray-500 group-hover:text-blue-500" />
          <span className="group-hover:font-medium">{skill.name}</span>
          <span className="ml-auto text-sm text-gray-500 group-hover:text-blue-500">
            {skill.level}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Brain,
      skills: [
        { name: "C", icon: Codepen, level: "Intermediate" },
        { name: "C++", icon: Codepen, level: "Intermediate" },
        { name: "JavaScript", icon: Javascript, level: "Intermediate" },
        { name: "Python", icon: Python, level: "Intermediate" },
        { name: "SQL", icon: Database, level: "Basic" },
        { name: "Java", icon: Codepen, level: "Intermediate" },
        { name: "R Script", icon: Codepen, level: "Basic" },
      ],
    },
    {
      title: "Frameworks",
      icon: Server,
      skills: [
        { name: "React", icon: ReactLogo, level: "Intermediate" },
        { name: "Node.js", icon: NodeJs, level: "Intermediate" },
        { name: "Express.js", icon: Server, level: "Intermediate" },
        { name: "EJS", icon: Codepen, level: "Basic" },
      ],
    },
    {
      title: "Web Technologies",
      icon: Framer,
      skills: [
        { name: "HTML", icon: Html5, level: "Advanced" },
        { name: "CSS", icon: Css3, level: "Advanced" },
        { name: "Tailwind CSS", icon: Terminal, level: "Intermediate" },
      ],
    },
    {
      title: "Tools",
      icon: Codepen,
      skills: [
        { name: "Git", icon: Git, level: "Intermediate" },
        { name: "GitHub", icon: Codepen, level: "Intermediate" },
        { name: "R Studio", icon: Brain, level: "Basic" },
        { name: "VSCode", icon: Codepen, level: "Advanced" },
        { name: "Postman", icon: Codepen, level: "Intermediate" },
        { name: "Adobe Photoshop", icon: Codepen, level: "Intermediate" },
        { name: "Figma", icon: Figma, level: "Intermediate" },
      ],
    },
    {
      title: "Libraries",
      icon: Brain,
      skills: [
        { name: "Pandas", icon: Brain, level: "Intermediate" },
        { name: "NumPy", icon: Brain, level: "Intermediate" },
        { name: "Matplotlib", icon: Brain, level: "Basic" },
        { name: "Scikit-learn", icon: Brain, level: "Basic" },
        { name: "Seaborn", icon: Brain, level: "Basic" },
      ],
    },
    {
      title: "Concepts",
      icon: Brain,
      skills: [
        { name: "Data Structures", icon: Codepen, level: "Intermediate" },
        { name: "Algorithms", icon: Codepen, level: "Intermediate" },
        { name: "Object-Oriented Programming", icon: Codepen, level: "Intermediate" },
        { name: "DBMS", icon: Database, level: "Intermediate" },
        { name: "AI & ML", icon: Brain, level: "Basic" },
      ],
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Skills</h2>
        <p className="text-xl text-gray-600 text-center mb-12">My technical expertise</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} title={category.title} skills={category.skills} icon={category.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
