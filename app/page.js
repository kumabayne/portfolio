import Image from "next/image";
import Container from "./components/Container";
import Grid from "./components/Grid";
import Timeline from "./components/Timeline";
import Link from "next/link";
import Project from "./components/Project";

export default function Home() {
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
        <main>
            <section className="flex items-center py-8 md:py-12 lg:min-h-screen">
                <Container>
                    <Grid>
                        <div className="col-span-full flex flex-col justify-center md:col-span-6">
                            <h1 className="font-title text-3xl text-zinc-800 uppercase md:text-4xl lg:text-6xl">
                                Kuma Bayne
                            </h1>
                            <p className="font-light leading-relaxed text-zinc-800 md:text-xl">
                                Crafting digital experiences that blend
                                creativity and functionality.
                                <br />
                                I&apos;m a front-end developer, utilizing a
                                diverse range of technologies to build web
                                applications.
                            </p>
                        </div>
                        <div className="col-span-full flex justify-center mb-4 -order-1 md:col-span-6">
                            <Image
                                src="/images/watercolor.png"
                                alt="water color painting of fisherman in Japan"
                                width="2049"
                                height="1557"
                            />
                        </div>
                    </Grid>
                </Container>
            </section>
            <section
                id="about"
                className="flex items-center py-8 md:py-12 lg:min-h-screen"
            >
                <Container>
                    <Grid>
                        <div className="col-span-full flex items-center">
                            <div className="grid gap-2 md:grid-cols-2 lg:gap-6">
                                <h2 className="font-title text-xl text-zinc-800 uppercase md:col-span-full md:mb-2 md:text-4xl">
                                    About Me
                                </h2>
                                <div className="mb-4 order-1 md:order-0">
                                    <p className="font-light mb-2 md:font-normal">
                                        Hi, I&apos;m Kuma, a front-end web
                                        developer based out of San Diego, CA.
                                        I&apos;ve been creating content for the
                                        web since 2015.
                                    </p>
                                    <p className="font-light md:font-normal">
                                        When you can&apos;t find me behind my
                                        computer, I enjoy camping, hiking and
                                        spending time with my family. Although I
                                        do like playing video games and building
                                        computers so even in my off hours
                                        you&apos;ll find me near a computer.
                                    </p>
                                </div>
                                <div className="flex gap-6 justify-self-start mb-6 relative order-0 shrink-0 md:justify-self-end md:-mt-14 md:order-1">
                                    <Image
                                        className=""
                                        src="/images/kuma-bayne.jpg"
                                        alt="Kuma Bayne"
                                        height="400"
                                        width="300"
                                    />
                                    <div className="absolute bg-dark-pattern h-full left-2 top-2 w-full -z-10"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-full">
                            <Timeline />
                        </div>
                    </Grid>
                </Container>
            </section>
            <section
                id="work"
                className="flex items-center py-8 md:py-12 lg:min-h-screen"
            >
                <Container>
                    <Grid>
                        <div className="col-span-full">
                            <h2 className="font-title text-xl text-zinc-800 uppercase md:text-4xl">
                                Work
                            </h2>
                        </div>
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="col-span-6 md:col-span-4"
                            >
                                <Project project={project} />
                            </div>
                        ))}
                    </Grid>
                </Container>
            </section>
        </main>
    );
}
