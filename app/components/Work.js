import Container from "./Container";
import Grid from "./Grid";
import Project from "./Project";

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
            className="bg-[#272742] flex items-center py-8 md:py-32 lg:min-h-screen"
        >
            <Container className="max-w-5xl">
                <Grid className="gap-6 md:gap-12">
                    <div className="col-span-full">
                        <h2 className="font-title text-center text-indigo-100 text-xl uppercase md:text-4xl">
                            Work
                            <span className="pl-0.5 text-blue-400">.</span>
                        </h2>
                    </div>
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="col-span-6 sm:col-span-4"
                        >
                            <Project project={project} />
                        </div>
                    ))}
                </Grid>
            </Container>
        </section>
    );
}

export default Work;
