import Link from "next/link";
import { BsEnvelope, BsGithub, BsLinkedin } from "react-icons/bs";

export const socialAccounts = [
    {
        id: 1,
        icon: BsLinkedin,
        url: "https://www.linkedin.com/in/kuma-bayne-1b83b7168/",
        target: "_blank",
    },
    {
        id: 2,
        icon: BsGithub,
        url: "https://github.com/",
        target: "_blank",
    },
    {
        id: 3,
        icon: BsEnvelope,
        url: "mailto:kumabayne@icloud.com",
        target: "_self",
    },
];

export default function SocialNav({ className }) {
    return (
        <ul className={className}>
            {socialAccounts.map((account) => (
                <li key={account.id}>
                    <Link href={account.url} target={account.target}>
                        <account.icon
                            className="text-white hover:text-red-400"
                            size="24"
                        />
                    </Link>
                </li>
            ))}
        </ul>
    );
}
