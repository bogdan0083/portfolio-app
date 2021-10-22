import ProjectItem from "./ProjectItem"

export default function ProjectList({ loadOnScroll = false, items = [] }) {
    return (
        <ul className="flex flex-wrap text-center">
            {items.map((item, idx) =>
                <ProjectItem key={idx.toString()} {...item} />
            )}
        </ul>
    )
}