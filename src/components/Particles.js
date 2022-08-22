import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";

const ParticlesComponent = (props) => {
  const options = useMemo(() => {
    return {
      background: {
        color: "#000"
      },
      fullScreen: {
        zIndex: -1
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 200,
            duration: 2,
            opacity: 0.8,
            size: 40
          },
          push: {
            quantity: 4
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: "#00ff00",
        },
        links: {
          color: '#ffffff',
          enable: true,
          distance: 150
        },
        move: {
          direction: "none",
          outMode: "bounce",
          random: true,
          straight: false,
          enable: true,
          speed: { min: 1, max: 4 }
        },
        opacity: {
          value: { min: 0.3, max: 0.7 }
        },
        size: {
          value: { min: 1, max: 3 }
        }
      }
    }
  }, [])

  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);

  return <Particles id={props.id} init={particlesInit} options={options}/>
}

export default ParticlesComponent;