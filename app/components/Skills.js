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
        <div
            id="skills"
            className="absolute bg-gray-800 border border-white/10 drop-shadow-sm px-8 py-4 left-1/2 rounded-xl top-0 -translate-x-1/2 -translate-y-1/2"
        >
            <h3 className="font-semibold mb-2 text-center text-gray-400 text-xs uppercase">
                Skills
            </h3>
            <div className="flex gap-3">
                {skills.map((skill) => (
                    <span
                        key={skill.id}
                        className="bg-slate-700 flex items-center justify-center p-2.5 rounded-full text-xl"
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
