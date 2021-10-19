import FeaturesSlider from "./FeaturesSlider";
import particlesPreset from '../particlesPreset';
import Particles from "react-tsparticles";
import styles from "./Promo.module.css";

export default function Promo() {
  return (
    <>
      <section className="container mx-auto min-h-screen text-center items-center text-white justify-center flex font-bold">
        <div className="items-center flex flex-col z-10 fixed">
          <h1 className={styles.h1}>Hi! My name is Bogdan.</h1>
          <h2 className={styles.h2}>
            I am a professional web developer who can specializes in{' '}
          </h2>
          <FeaturesSlider />
        </div>
        <Particles
          id="tsparticles"
          options={particlesPreset}
        />
      </section>
    </>
  )
}

