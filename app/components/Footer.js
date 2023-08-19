import Container from "./Container";
import SocialNav from "./SocialNav";

export default function Footer() {
    return (
        <footer className="bg-dark-pattern mb-2 py-4">
            <Container>
                <div className="flex justify-between">
                    <p className="text-white">
                        <small>
                            Copyright &copy; {new Date().getFullYear()}{" "}
                            kumabayne.com
                        </small>
                    </p>
                    <SocialNav className="flex gap-2 lg:gap-4" />
                </div>
            </Container>
        </footer>
    );
}
