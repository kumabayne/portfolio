import { BsCodeSlash } from "react-icons/bs";

const resume = [
    {
        id: 1,
        companyName: "Robot Cache",
        timeAtCompany: "May 2022 - Present",
        responsibilities: [
            "Developed responsive and user-friendly web interfaces using HTML5, CSS3, and JavaScript, resulting in increased user engagement and improved overall website performance.",
            "Collaborated with back-end team to build out API endpoints for data retrieval and user authentication.",
            "Implemented and optimized front-end frameworks and libraries, such as React and Tailwind CSS, to streamline development processes and enhance website functionality.",
            "Conducted thorough testing and debugging to ensure optimal performance across multiple browsers and devices, resulting in improved website accessibility and user satisfaction.",
        ],
    },
    {
        id: 2,
        companyName: "Ranta Consulting",
        timeAtCompany: "January 2020 – April 2022",
        responsibilities: [
            "Developed responsive and user-friendly websites using HTML5, CSS3, and JavaScript to enhance the overall user experience and functionality.",
            "Implemented and maintained front-end frameworks, libraries, and technologies such as Bootstrap and jQuery to streamline development processes and ensure code reusability.",
            "Collaborated with cross-functional teams to gather requirements, design wireframes, and implement effective UI/UX solutions, leading to seamless user experiences and reduced bounce rates.",
        ],
    },
    {
        id: 3,
        companyName: "Freelance",
        timeAtCompany: "April 2015 – January 2020",
        responsibilities: [
            "Developed responsive and user-friendly websites using HTML5, CSS3, and JavaScript to enhance the overall user experience and functionality.",
            "Designed the UI/UX for the front-end utilizing best practices and common design patterns.",
            "Implemented and maintained front-end frameworks, libraries, and technologies such as Bootstrap, and jQuery.",
        ],
    },
];

export default function Timeline() {
    return (
        <ul className="relative lg:gap-6 lg:grid lg:grid-cols-2 xl:grid-cols-3">
            {resume.map((company) => (
                <li
                    key={company.id}
                    className="flex gap-2 mb-4 relative lg:mb-12"
                >
                    <div className="bg-brush-1 bg-no-repeat flex h-7 items-center justify-center shrink-0 w-7">
                        <BsCodeSlash className="h-4 text-white w-4" />
                    </div>
                    <div className="grow">
                        <div className="flex flex-col justify-between w-full md:flex-row lg:items-center">
                            <h4 className="font-black text-sm text-zinc-700 tracking-wider uppercase">
                                {company.companyName}
                            </h4>
                            <p className="font-bold text-xs text-red-400 uppercase">
                                {company.timeAtCompany}
                            </p>
                        </div>
                        <ul>
                            {company.responsibilities.map((responsibility) => (
                                <li key={company.id} className="mb-2">
                                    {responsibility}
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            ))}
        </ul>
    );
}
