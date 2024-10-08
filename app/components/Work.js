import Image from "next/image";
import Container from "./Container";
import Grid from "./Grid";
import Project from "./Project";
import Link from "next/link";

function Work() {
  const projects = [
    {
      id: 1,
      name: "Robot Cache",
      image: "robotcache.jpg",
      url: "https://store.robotcache.com/",
    },
    {
      id: 2,
      name: "Freedom (Robot Cache)",
      image: "freedom.robotcache.jpg",
      url: "https://freedom.robotcache.com/",
    },
    {
      id: 3,
      name: "Join (Robot Cache)",
      image: "join.robotcache.jpg",
      url: "https://join.robotcache.com/",
    },
    {
      id: 4,
      name: "La Mesa Lumber",
      image: "lamesalumber.jpg",
      url: "https://www.lamesalumber.com/",
    },
    {
      id: 5,
      name: "Johnny B's",
      image: "johnnybs.jpg",
      url: "https://www.johnnybsburgersandbrew.com/",
    },
    {
      id: 6,
      name: "Escape N Stay",
      image: "escapenstay.jpg",
      url: "https://www.escapenstay.com/",
    },
    {
      id: 7,
      name: "Kathie Bayne",
      image: "kathiebayne.jpg",
      url: "https://kathiebayne.com/",
    },
    {
      id: 8,
      name: "Rapid Fix Inc",
      image: "rapidfixinc.jpg",
      url: "https://www.rapidfixinc.com/",
    },
    {
      id: 9,
      name: "Mineola Public Schools",
      image: "mineola.jpg",
      url: "https://www.mineola.k12.ny.us/",
    },
  ];

  return (
    <section
      id="work"
      className="flex items-center py-8 md:py-32 lg:min-h-screen"
    >
      <Container className="max-w-5xl">
        <h2 className="font-title text-center text-indigo-100 text-xl uppercase md:text-4xl mb-4">
          Work
          <span className="pl-0.5 text-indigo-600">.</span>
        </h2>

        <div className="mb-4">
          <h3 className="text-indigo-100 text-lg mb-2">Personal Projects</h3>
          <div className="bg-red-600/10 text-red-500 text-sm p-2 border border-red-500/40 rounded mb-2 md:mb-4 inline-flex">
            These projects are a WIP and are being actively worked on. I&apos;m
            sharing them so you can see my latest work.
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-4 lg:gap-6">
            <Link
              className="border border-white/10 rounded-lg p-2 inline-flex flex-col md:p-4"
              href="https://filmsnail.vercel.app/"
              target="_blank"
            >
              <Image
                className="rounded-lg mb-2 shrink-0"
                src="/images/projects/filmsnail.webp"
                width="800"
                height="433"
                alt="Film Snail"
              />
              <h4 className="text-sm text-indigo-100 font-bold">Film Snail</h4>
              <p className="text-indigo-400 text-sm">
                Film snail is a next.js app built using the TMDB movie API.
              </p>
            </Link>
            <Link
              className="border border-white/10 rounded-lg p-2 inline-flex flex-col md:p-4"
              href="https://japangram.vercel.app/"
              target="_blank"
            >
              <Image
                className="rounded-lg mb-2 shrink-0"
                src="/images/projects/japangram.webp"
                width="800"
                height="433"
                alt="Film Snail"
              />
              <h4 className="text-sm text-indigo-100 font-bold">Japangram</h4>
              <p className="text-indigo-400 text-sm">
                Japangram is in instagram clone built with next.js. It uses
                auth.js for authentication, shadcn as a UI libray and Prisma ORM
                for db integration.
              </p>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-indigo-100 text-lg mb-2">Work Projects</h3>
          <p className="text-indigo-400 mb-2">
            These are various sites I&apos;ve created at work.
          </p>
          <Grid className="gap-2 md:gap-4 lg:gap-6">
            {projects.map((project) => (
              <div key={project.id} className="col-span-6 md:col-span-4">
                <Project project={project} />
              </div>
            ))}
          </Grid>
        </div>
      </Container>
    </section>
  );
}

export default Work;
