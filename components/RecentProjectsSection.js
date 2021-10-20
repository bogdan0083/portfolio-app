import ProjectList from "./ProjectList";
import Link from "next/link";
import projects from "../content/projects.json"

export default function RecentProjectsSection() {
    const firstSixProjects = projects.items.filter((i, idx) => idx < 6);
    return (
        <section className="py-9 md:pt-20 md:pb-14 text-white z-10 bg-indigo-800 text-center">
            <div className="container mx-auto">
                <h3 className="text-xl sm:text-3xl md:text-5xl font-bold mb-1 md:mb-3 lg:text-5xl">My Recent Projects</h3>
                <p className="text-lg sm:text-xl md:text-2xl mb-9 md:mb-16 lg:mb-16 w-8/12 sm:w-10/12 mx-auto">Here's the stuff I've worked on recently.</p>
            </div>
            <ProjectList items={firstSixProjects} />
            <Link href="/projects">
                <a className="border-2 items-center p-3 mt-9 md:mt-16 self-center inline-block hover:bg-white hover:text-space-default transition-all font-semibold text-lg">More Projects</a>
            </Link>
        </section>
    )
}