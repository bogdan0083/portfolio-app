import Link from 'next/link'
import { useContext } from 'react';
import Particles from 'react-tsparticles'
import DefaultLayout from '../components/layouts/DefaultLayout'
import { UIContext } from '../contexts/UIContext';
import particlesPreset from '../particlesPreset'

export default function AboutPage() {

  const [_, setUI] = useContext(UIContext);

  const openPopup = e => {
    e.preventDefault();
    setUI(prev => ({ ...prev, contactPopupVisible: true }));
  }

  return (
    <DefaultLayout pageTitle="Bogdan Dolin | About Me">
      <section className="pt-24 pb-8 md:pb-20 md:pt-36 text-white z-10 text-left w-full min-h-screen">
        <div className="container mx-auto px-3">
          <h3 className="text-4xl font-bold mb-6 md:mb-6 md:text-5xl text-center">About Me</h3>
          <div className="mx-auto md:w-full lg:w-11/12 xl:w-8/12 2xl:w-8/12">
            <div className="-ml-2 -mr-2 md:flex">
              <div className="p-2 md:mr-10">
                <div className="border-4 w-44 h-44 bg-space-default rounded-full mx-auto mb-5"></div>
              </div>
              <div className="p-2">
                <div className="text-md lg:text-lg xl:text-xl xl:leading-8">
                  <p className="mb-6">My name is Bogdan. I'm a professional web engineer from Siberia with over ten years of experience in front-end and back-end development. I strive to provide the best experience for your business and your users, bringing attention and clarity to your digital products. </p>
                  <p className="mb-6">
                    I was born in a small Siberian city in a family of a truck driver and a housewife. Being a disabled child, I couldn't walk but always was passionate about programming and learning something new. At the age of sixteen, I started working as a remote freelancer, helping businesses to build websites and apps that make users happy.
                  </p>
                  <p className="mb-6">
                    If you like <Link href="/projects"><a href="/projects" className="text-indigo-200 border-b-2 border-indigo-200 transition-all hover:border-transparent">the things I do</a></Link> and want to work together, <a className="text-indigo-200 border-b-2 border-indigo-200 transition-all hover:border-transparent" href="#" onClick={openPopup}>let's have a talk!</a> I'm always open to new opportunities and projects.
                  </p>
                  <p className="text-xl text-center md:text-left">
                    Have a great day!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Particles id="tsparticles" params={particlesPreset} />
    </DefaultLayout>
  )
}
