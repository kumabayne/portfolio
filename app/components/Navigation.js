"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Container from "./Container";
import Logo from "./Logo";

function Navigation() {
  const navRef = useRef(null);
  const links = [
    { id: 1, href: "#work", text: "work" },
    { id: 2, href: "#skills", text: "about" },
    {
      id: 3,
      download: true,
      href: "/files/kuma-bayne_resume.pdf",
      text: "resume",
      target: "_blank",
    },
    {
      id: 4,
      icon: BsLinkedin,
      href: "https://www.linkedin.com/in/kuma-bayne-1b83b7168/",
      target: "_blank",
    },
    {
      id: 5,
      icon: BsGithub,
      href: "https://github.com/kumabayne",
      target: "_blank",
    },
  ];

  return (
    <nav
      ref={navRef}
      className="duration-500 ease-in-out py-4 transition-colors border-b border-white/10 bg-slate-800"
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <Logo className="fill-indigo-200 hover:-scale-x-100" />
          </Link>
          <ul className="flex gap-6 items-center">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  className="cursor-pointer duration-300 ease-in-out font-medium text-indigo-100 text-sm transition-colors hover:text-indigo-300"
                  href={link.href}
                  target={link.target ? "_blank" : "_self"}
                  {...(link.download && { download: true })}
                >
                  {link.text ? (
                    <>
                      {link.text}
                      <span className="font-semibold pl-0.5 text-indigo-600">
                        .
                      </span>
                    </>
                  ) : (
                    <link.icon
                      className="text-white hover:text-indigo-300"
                      size="18"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default Navigation;
