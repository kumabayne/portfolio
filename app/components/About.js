import Container from "./Container";
import Grid from "./Grid";
import Image from "next/image";
import Skills from "./Skills";
import Timeline from "./Timeline";

function About() {
    return (
        <section
            id="about"
            className="bg-[#1f294a] flex items-center py-16 relative md:py-32 lg:min-h-screen"
        >
            <Container>
                <Skills />
                <div className="flex justify-center mb-12">
                    <Image
                        className="rounded-full"
                        src="/images/kuma-campfire.webp"
                        alt="Kuma Bayne"
                        height="240"
                        width="240"
                    />
                </div>
                <h2 className="font-title text-center text-indigo-100 text-xl uppercase md:col-span-full md:mb-4 md:text-4xl">
                    About Me
                    <span className="pl-0.5 text-blue-400">.</span>
                </h2>
                <div className="max-w-3xl mx-auto">
                    <p className="font-light leading-relaxed mb-2 text-center text-indigo-300 text-lg">
                        Hi, I&apos;m Kuma, a front-end web developer based out
                        of San Diego, CA. I currently work at Robot Cache, a
                        start up that is disrupting the gaming industry.
                        I&apos;ve been creating content for the web since 2015.
                        When you can&apos;t find me behind my computer, I enjoy
                        camping, hiking and spending time with my family.
                        Although I do like playing video games and building
                        computers so even in my off hours you&apos;ll find me
                        near a computer.
                    </p>
                </div>
                {/* <div className="col-span-full">
                    <Timeline />
                </div> */}
            </Container>
        </section>
    );
}

export default About;
