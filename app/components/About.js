import Container from "./Container";
import Grid from "./Grid";
import Image from "next/image";
import Skills from "./Skills";
import Timeline from "./Timeline";

function About() {
  return (
    <section
      id="about"
      className="flex items-center py-16 relative md:py-32 lg:min-h-screen"
    >
      <Container>
        <h2 className="font-title text-center text-indigo-100 text-xl uppercase md:col-span-full mb-4 md:text-4xl">
          About Me
          <span className="pl-0.5 text-indigo-600">.</span>
        </h2>
        <div className="col-span-full md:col-span-9 lg:col-span-7 md:max-w-xl md:mx-auto lg:max-w-3xl md:text-center">
          <div className="inline-flex gap-4 md:justify-center mb-4 bg-black/10 border border-white/10 p-4 rounded-xl">
            <Image
              className="rounded-xl"
              src="/images/kuma-campfire.webp"
              alt="Kuma Bayne"
              height="120"
              width="120"
            />
            <Skills />
          </div>
          <p className="font-light leading-relaxed mb-2 text-indigo-300 text-lg">
            Hi, I&apos;m Kuma, an experienced front-end engineer with a passion
            for creating seamless, user-friendly interfaces. With a strong
            background in modern web technologies like HTML, CSS, and
            JavaScript, I excel at building responsive, efficient applications
            that prioritize performance and user experience. I have a deep
            understanding of the React framework, and enjoy staying up to date
            with the latest industry trends.
          </p>
          <p className="font-light leading-relaxed mb-2 text-indigo-300 text-lg">
            Outside of work, I enjoy outdoor activities like camping and hiking,
            often taking time to explore new trails. In my downtime, I build
            custom computers and unwind with video games, blending my obession
            for technology with relaxation.
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
