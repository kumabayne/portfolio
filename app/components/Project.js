import Image from "next/image";
import Link from "next/link";

function Project({ project }) {
    return (
        <div className="drop-shadow-sm h-full">
            <Link className="group" href={project.url} target="_blank">
                <Image
                    className="border-2 border-white grayscale mb-2 group-hover:grayscale-0 lg:mb-4"
                    src={`/images/projects/${project.image}`}
                    width="400"
                    height="300"
                    alt={project.name}
                />
            </Link>
            <h3 className="font-black text-xs text-white tracking-wider uppercase">
                {project.name}
            </h3>
        </div>
    );
}

export default Project;
