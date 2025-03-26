import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import styles from "./Particles.module.css";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            className={styles.particles}
            init={particlesInit}
            options={{
                particles: {
                    number: { value: 100 },
                    size: { value: 3 },
                    move: { speed: 2 },
                    color: { value: "#ffffff" },
                    links: { enable: true, distance: 150, color: "#ffffff" }
                },
                background: { color: "#000000" }
            }}
        />
    );
};

export default ParticlesBackground;
