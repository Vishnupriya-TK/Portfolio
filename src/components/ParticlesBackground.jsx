import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 65, density: { enable: true, area: 800 } },
          color: { value: ["#5b6fd6", "#8b5cf6", "#38bdf8"] },
          links: {
            enable: true,
            distance: 150,
            color: "#5b6fd6",
            opacity: 0.25,
            width: 1,
          },
          move: { enable: true, speed: 1, direction: "none", outModes: { default: "out" } },
          size: { value: { min: 1, max: 3 } },
          opacity: { value: 0.5 },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
          modes: { repulse: { distance: 100 } },
        },
      }}
      className="fixed inset-0 z-0"
    />
  );
};

export default ParticlesBackground;
