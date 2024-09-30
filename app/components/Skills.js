import { FaCss3, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";

function Skills() {
  const skills = [
    {
      id: 1,
      icon: FaHtml5,
      color: "text-[#e34b26]",
      name: "HTML5",
    },
    {
      id: 2,
      icon: FaCss3,
      color: "text-[#274de5]",
      name: "CSS3",
    },
    {
      id: 3,
      icon: IoLogoJavascript,
      color: "text-[#efdc4f]",
      name: "JavaScript",
    },
    {
      id: 4,
      icon: FaReact,
      color: "text-[#61dbfb]",
      name: "React",
    },
    {
      id: 5,
      icon: FaNodeJs,
      color: "text-[#5f9f4f]",
      name: "Node.js",
    },
    {
      id: 6,
      icon: FaGitAlt,
      color: "text-[#f34c28]",
      name: "Git",
    },
  ];
  return (
    <div id="skills" className="">
      <h3 className="mb-2 text-gray-400 text-sm text-left">Skills</h3>
      <div className="flex gap-2 flex-wrap">
        {skills.map((skill) => (
          <span
            key={skill.id}
            className="bg-slate-700 flex items-center justify-center p-1 rounded text-xl"
            title={skill.name}
          >
            <skill.icon className={skill.color} />
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
