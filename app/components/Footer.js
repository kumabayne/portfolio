import Link from "next/link";
import { FaRegEnvelope } from "react-icons/fa6";
import Container from "./Container";

function Footer() {
    return (
        <footer className="mb-2 py-8 relative md:py-12">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <Link
                    className="bg-amber-500 block duration-300 ease-in-out p-4 rounded-full text-amber-800 transition-colors hover:text-amber-700"
                    href="mailto:kumabayne@icloud.com"
                >
                    <FaRegEnvelope className="h-4 w-4" />
                </Link>
            </div>
            <Container>
                <div className="text-center">
                    <p className="text-gray-500">
                        <small>
                            Copyright &copy; {new Date().getFullYear()}{" "}
                            kumabayne.com
                        </small>
                    </p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
