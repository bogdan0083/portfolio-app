import ProjectList from '../components/ProjectList'
import Particles from 'react-tsparticles'
import particlesPreset from '../particlesPreset'
import DefaultLayout from '../components/layouts/DefaultLayout'

export async function getStaticProps({ params }) {
    const projects = await import('../content/projects.json');
    return { props: { projects: projects.items } };
}

export default function ProjectsPage({ projects }) {

    return (
        <DefaultLayout pageTitle="Bogdan Dolin | Projects">
            <section className="pt-24 md:pt-36 text-white z-10 text-center w-full min-h-screen">
                <div className="container mx-auto">
                    <div className="text-2xl font-bold mb-1 md:mb-3 md:text-5xl">🚀</div>
                    <h3 className="text-2xl font-bold mb-1 md:mb-3 md:text-5xl">My Recent Projects</h3>
                    <p className="text-xl mb-7 md:text-2xl md:mb-14 w-60 sm:w-10/12 mx-auto">Here's the stuff I've worked on recently.</p>
                </div>
                <ProjectList items={projects} />
            </section>
            {/*<Particles id="tsparticles" params={particlesPreset} />*/}
        </DefaultLayout>
    )
}
