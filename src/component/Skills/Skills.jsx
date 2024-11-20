import React from 'react';
import { Heading5Icon as Html5, CodepenIcon as Css3, CodepenIcon as Javascript, CodepenIcon as ReactLogo, GitGraphIcon as Git, CodepenIcon as NodeJs, PiIcon as Python, Database, Server, Brain, DockIcon as Docker, Trello, Codepen, Framer } from 'lucide-react';

const SkillCategory = ({ title, skills, icon: Icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl group">
    <div className="flex items-center mb-4">
      <Icon className="w-6 h-6 mr-2 text-blue-500" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center p-2 rounded-md transition-all duration-300 hover:bg-blue-100 group">
          <skill.icon className="w-5 h-5 mr-2 text-gray-500 group-hover:text-blue-500" />
          <span className="group-hover:font-medium">{skill.name}</span>
          <div className="ml-auto flex items-center">
            <div className="w-16 bg-gray-200 rounded-full h-2 mr-2 overflow-hidden">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300 group-hover:w-full" 
                style={{width: `${skill.level}%`}}
              ></div>
            </div>
            <span className="text-xs text-gray-500 group-hover:text-blue-500">{skill.level}%</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Framer,
      skills: [
        { name: "HTML", icon: Html5, level: 80 },
        { name: "CSS", icon: Css3, level: 90 },
        { name: "JavaScript", icon: Javascript, level: 85 },
        { name: "React", icon: ReactLogo, level: 75 },
        { name: "Git", icon: Git, level: 70 },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", icon: NodeJs, level: 75 },
        { name: "Python", icon: Python, level: 70 },
        { name: "MySQL", icon: Database, level: 65 },
        { name: "Express.js", icon: Server, level: 70 },
        { name: "MongoDB", icon: Database, level: 65 },
      ],
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: [
        { name: "Python", icon: Python, level: 75 },
        { name: "Scikit-learn", icon: Brain, level: 60 },
        { name: "TensorFlow", icon: Brain, level: 55 },
        { name: "Pandas", icon: Database, level: 70 },
        { name: "NumPy", icon: Codepen, level: 65 },
      ],
    },
    {
      title: "Other Tools",
      icon: Codepen,
      skills: [
        { name: "Git", icon: Git, level: 75 },
        { name: "Docker", icon: Docker, level: 60 },
        { name: "Jira", icon: Trello, level: 65 },
        { name: "Postman", icon: Codepen, level: 70 },
        { name: "VS Code", icon: Codepen, level: 85 },
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