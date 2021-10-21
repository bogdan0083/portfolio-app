import cx from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
    { title: "Projects", route: "/projects" },
    { title: "About Me", route: "/about" },
];

export default function MainNav({ isMobile = false }) {
    const { asPath } = useRouter();

    const linkClass = cx({
        "p-5 mx-2 hover:bg-white hover:text-space-default transition-all font-semibold text-space-default": isMobile,
        "p-2 mx-2 hover:bg-white hover:text-space-default transition-all font-semibold": !isMobile
    });

    const navClass = cx({
        "items-center flex flex-col text-4xl mt-auto font-bold": isMobile,
        "items-center ml-1 sm:ml-2 md:ml-7 hidden sm:flex": !isMobile
    });

    return (
        <nav className={navClass}>
            {links.map((l, idx) => {
                return (
                    <Link href={l.route} key={idx}><a className={cx({
                        "p-5 mx-2 hover:bg-white hover:text-space-default transition-all text-space-default": isMobile,
                        "p-2 mx-2 hover:bg-white hover:text-space-default transition-all ": !isMobile,
                        "text-space-default bg-white pointer-events-none": asPath === l.route
                    })}>{l.title}</a></Link>
                )
            })}
        </nav>
    )
}