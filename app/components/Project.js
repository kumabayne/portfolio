import Image from "next/image";
import Link from "next/link";

function Project({ project }) {
  return (
    <div className="border border-white/10 rounded-lg p-2 inline-flex flex-col h-full md:p-4">
      <Link className="group" href={project.url} target="_blank">
        <Image
          className="rounded-lg grayscale mb-2 group-hover:grayscale-0 lg:mb-4"
          src={`/images/projects/${project.image}`}
          width="400"
          height="300"
          alt={project.name}
        />
      </Link>
      <h4 className="text-sm text-indigo-100 font-bold">{project.name}</h4>
    </div>
  );
}

export default Project;
