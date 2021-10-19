import ProjectItem from "./ProjectItem"

export default function ProjectList({ loadOnScroll = false, items = [] }) {
    return (
        <ul className="flex flex-wrap text-center">
            {items.map((item, idx) => {
                return <ProjectItem {...item} key={idx} />
            })}
        </ul>
    )
}