"use client";

import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import { useEffect, useRef } from "react";

export default function Navigation() {
    const navRef = useRef(null);
    const logoRef = useRef(null);
    const links = ["about", "work", "resume"];

    const changeNav = () => {
        if (window.scrollY >= 8) {
            navRef.current.classList.add("bg-zinc-900");
            logoRef.current.classList.remove("fill-red-400");
            logoRef.current.classList.add("fill-white");
        } else {
            navRef.current.classList.remove("bg-zinc-900");
            logoRef.current.classList.add("fill-red-400");
            logoRef.current.classList.remove("fill-white");
        }
    };

    useEffect(() => {
        changeNav();
        window.addEventListener("scroll", changeNav);

        return () => window.removeEventListener("scroll", changeNav);
    }, []);

    return (
        <nav
            className="duration-500 ease-in-out mt-4 py-1 transition-all"
            ref={navRef}
        >
            <Container>
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <Logo
                            className="fill-red-400 hover:-scale-x-100"
                            ref={logoRef}
                        />
                    </Link>
                    <ul className="flex gap-6 px-6 py-2 relative after:absolute after:bg-dark-pattern after:inset-0 after:-skew-x-12 after:-z-10">
                        {links.map((link, i) => (
                            <li key={i}>
                                <Link
                                    href={`${
                                        link === "resume"
                                            ? "/files/kuma-bayne_resume.pdf"
                                            : `#${link}`
                                    }`}
                                    className="font-semibold text-white hover:border-b-2 hover:border-red-400"
                                    {...(link === "resume" && {
                                        download: true,
                                    })}
                                >
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </nav>
    );
}
