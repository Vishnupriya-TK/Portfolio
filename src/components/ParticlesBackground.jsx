import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: false },

        particles: {
          number: {
            value: 70,
            density: { enable: true, area: 800 },
          },

          color: {
            value: ["#00f5ff", "#8b5cf6", "#00ffcc"],
          },

          links: {
            enable: true,
            distance: 150,
            color: "#00f5ff",
            opacity: 0.3,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            outModes: { default: "out" },
          },

          size: {
            value: { min: 1, max: 4 },
          },

          opacity: {
            value: 0.6,
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            repulse: {
              distance: 120,
            },
          },
        },
      }}
      className="fixed inset-0 z-0"
    />
  );
};

export default ParticlesBackground;