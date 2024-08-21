import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GiSkills } from "react-icons/gi";
import { SiExpress, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import {  FaHtml5,
    FaCss3Alt,
    FaReact,
    FaNodeJs,
    FaGit,
    FaDatabase,
    FaJsSquare,
    FaBootstrap, } from "react-icons/fa";
const Skills = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // Trigger animation when the component mounts
    setHasMounted(true);
  }, []);

  const skills = [
    { icon: <FaHtml5 className="text-red-600" />, label: "HTML", level: 90 },
    { icon: <FaCss3Alt className="text-blue-600" />, label: "CSS", level: 75 },
    {
      icon: <FaReact className="text-blue-400" />,
      label: "React.js",
      level: 80,
    },
    {
      icon: <FaNodeJs className="text-green-600" />,
      label: "Node.js",
      level: 60,
    },
    { icon: <FaGit className="text-orange-600" />, label: "Git", level: 70 },
    {
      icon: <FaDatabase className="text-yellow-500" />,
      label: "MongoDB",
      level: 60,
    },
    {
      icon: <FaJsSquare className="text-yellow-600" />,
      label: "JavaScript",
      level: 80,
    },
    {
      icon: <FaBootstrap className="text-purple-600" />,
      label: "Bootstrap",
      level: 75,
    },
    {
      icon: <SiTailwindcss className="text-teal-500" />,
      label: "Tailwind CSS",
      level: 85,
    },
    {
      icon: <SiNextdotjs className="text-black" />,
      label: "Next.js",
      level: 75,
    },
    {
      icon: <SiExpress className="text-gray-400" />,
      label: "Express.js",
      level: 55,
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold mb-6 flex gap-2 items-center justify-center text-center">Skills</h2>
      <div className="space-y-6 grid md:grid-cols-2 grid-cols-1 gap-5">
        {skills.map((skill) => (
          <motion.div
            key={skill.label}
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={hasMounted ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="md:w-10 md:h-10 h-10 w-10 flex items-center justify-center text-3xl bg-gray-200 rounded-full"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill.icon}
            </motion.div>
            <div className="flex-1">
              <p className="text-xl font-semibold mb-2">{skill.label}</p>
              <div className="relative">
                <div className="absolute inset-0 bg-gray-300 rounded-full h-2">
                  <motion.div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                    initial={{ width: 0 }}
                    animate={hasMounted ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 0.8 }}
                  ></motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
