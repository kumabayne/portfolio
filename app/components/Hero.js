import ChangeMyMood from "./ChangeMyMood";
import Container from "./Container";
import Grid from "./Grid";

function Hero() {
    return (
        <section className="border-b border-white/10 flex items-center py-12 md:py-60">
            <Container>
                <Grid>
                    <div className="col-span-full flex flex-col justify-center mb-6 lg:col-span-6 md:mb-0">
                        <h1 className="font-title text-3xl text-indigo-100 uppercase md:text-4xl lg:text-6xl">
                            Kuma Bayne
                            <span className="pl-0.5 text-blue-400">.</span>
                        </h1>
                        <p className="font-light !leading-relaxed text-indigo-400 md:text-xl">
                            I&apos;m a front-end developer, crafting digital
                            experiences that blend creativity and functionality
                            to build awesome web apps.
                        </p>
                    </div>
                    <ChangeMyMood />
                </Grid>
            </Container>
        </section>
    );
}

export default Hero;
