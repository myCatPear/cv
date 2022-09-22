import React, {useCallback, useMemo} from 'react';
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import {loadSlim} from "tsparticles-slim";
import s from './Particle.module.scss'

const Particle = () => {
    const particlesInit = useCallback(async (engine: any) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: any) => {
        await console.log(container);
    }, []);
   const options:any = useMemo(() => {
       return {
           background: {
               color: {
                   value: "inherit",
               },
           },
           fpsLimit: 120,
           particles: {
               color: {
                   value: "#FFB800",
               },
               links: {
                   color: "#252525",
                   distance: 150,
                   enable: true,
                   opacity: 1,
                   width: 3,
               },
               move: {
                   directions: "none",
                   enable: true,
                   random: false,
                   speed: 1,
                   straight: false,
               },
               number: {
                   density: {
                       enable: true,
                       area: 800,
                   },
                   value: 80,
               },
               opacity: {
                   value: 0.5,
               },
               shape: {
                   type: "circle",
               },
               size: {
                   value: { min: 1, max: 5 },
               },
           },
           detectRetina: true,
       }
   },[])

    return (
        <Particles
            init={particlesInit}
            loaded={particlesLoaded}
            className={s.particle}
            options={options}
        />
    );
};

export default Particle;