'use client'

import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { mix, distance, wrap } from "@popmotion/popcorn";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  colors,
  center,
  powerOut4,
  generateSize,
  useAnimationLoop
} from "./utils";
import "./style.css";
import { url } from "inspector";
import test from "./../public/test.svg"


const ImagePlaceholder = ({ url, position }: { url: any, position: any }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (!position) return;
    const { xOrigin, x, yOrigin, y } = position;
    controls.start({
      x: [xOrigin, x, x],
      y: [yOrigin, y, y],
      opacity: [1, 1, 0],
      scale: [1, 1, 0.2],
      transition: {
        duration: 0.8,
        ease: ["easeOut", powerOut4, powerOut4],
        times: [0, 0.7, 1]
      }
    });
  }, [position]);

  const style = position ? position.style : {};
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      transformTemplate={center}
      style={{ borderRadius: '10px', overflow: "hidden", ...style }}
      className="placeholder"
    >
      <iframe src="https://giphy.com/embed/sWFYgYFjHGugleQdO7" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
    </motion.div>

  );
};

const herotxt = [
  'Development', 'Partner', 'for', 'Startup', 'Founder', 'and', 'Agencies'
];

const Hero = ({ distanceThreshold = 140 }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Check window size
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 512); // 1024px is the lg breakpoint in Tailwind
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const letter1 = useRef(null);
  useGSAP(() => {
    gsap.from(".letters", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 0.2
    });
  })

  const mouseInfo = useRef({
    now: { x: 0, y: 0 },
    prev: { x: 0, y: 0 },
    prevImage: { x: 0, y: 0 }
  }).current;

  const imagePositions = useRef<{ xOrigin: number; yOrigin: number; x: number; y: number; style: { zIndex: any; height: number; width: number; }; }[]>([]);

  const [index, setIndex] = useState(0);

  useAnimationLoop(() => {
    const mouseDistance = distance(mouseInfo.now, mouseInfo.prevImage);

    mouseInfo.prev = {
      x: mix(mouseInfo.prev.x || mouseInfo.now.x, mouseInfo.now.x, 0.1),
      y: mix(mouseInfo.prev.y || mouseInfo.now.y, mouseInfo.now.y, 0.1)
    };

    if (mouseDistance > distanceThreshold) {
      const newIndex = index + 1;
      const imageIndex = wrap(0, colors.length - 1, newIndex);

      imagePositions.current[imageIndex] = {
        xOrigin: mouseInfo.prev.x,
        yOrigin: mouseInfo.prev.y,
        x: mouseInfo.now.x,
        y: mouseInfo.now.y,
        style: {
          ...generateSize(),
          zIndex: imageIndex
        }
      };

      mouseInfo.prevImage = mouseInfo.now;

      setIndex(newIndex);
    }
  });


  
  useGSAP(() => {
    gsap.to('.letter1Sm', {
      delay: 4.5,
      duration: 1,
      y: -45,
      rotateY: -360,
      transformOrigin: "50% 50%",
      ease: "back.out",
    })

    gsap.from('.letter2Sm', {
      delay: 5.5,
      duration: 0.6,
      opacity: 0,
      rotateY: -180,
      transformOrigin: "50% 50%",
      ease: "back.out"
    })

    gsap.from('.letter3Sm', {
      delay: 6.1,
      duration: 0.8,
      x: -100,
      opacity: 0,
      scale: 0.9,
      ease: "power2.out",
    })

    gsap.from('.letter4Sm', {
      delay: 5.5,
      duration: 0.8,
      y: 100,
      scale: 0.5,
      rotation: 360,
      opacity: 0,
      ease: "power4.out",
    })

    gsap.from('.letter5Sm', {
      delay: 4.5,
      duration: 1.5,
      scaleX: 2,
      scaleY: 0.5,
      ease: "elastic.out(1, 0.75)",
    })

    gsap.from('.letter6Sm', {
      delay: 4.5,
      duration: 1.5,
      rotationY: 360,
      transformPerspective: 800,
      transformOrigin: "50% 50%",
      opacity: 0,
      ease: "power3.inOut",
    })

    gsap.to('.letterSm', {
      delay: 4.5,
      duration: 0.5,
      y: '-60',
      stagger: 0.05,
    })

  });




  return (
    <div
      className="flex flex-col h-[100vh] w-[100vw] bg-[#151515] text-white"
      onMouseMove={e => (mouseInfo.now = { x: e.pageX, y: e.pageY })}
    >
      {colors.map((color, i) => (
        <ImagePlaceholder
          position={imagePositions.current[i]}
          url={color}
          key={color}
        />
      ))}
      <nav className="mx-20 py-5 flex justify-between">
        <p className="tracking-widest text-lg font-bold">CRUX</p>
        <div>
          <ul className="flex gap-10">
            <li className="font-light hover:scale-110 duration-300">Our Work</li>
            <li className="font-light hover:scale-110 duration-300">Contact</li>
          </ul>
        </div>
      </nav>
      <div className="relative top-[40%] left-[10%] -translate-y-1/2 w-fit">
        <div className="h-[60px] md:h-[150px] lg:h-[200px] text-[8vw] flex overflow-hidden font-bold w-fit">
          <div>
            <span className="mx-1 md:mx-2 inline-block overflow-hidden"><p className="letter2Sm">D</p></span>
            <span className="mx-1 md:mx-2 inline-block overflow-hidden"><p className="letter3Sm">e</p></span>
            <span className="mx-1 md:mx-2 inline-block overflow-hidden"><p className="letter5Sm">v</p></span>
            <span className="mx-1 md:mx-2 inline-block overflow-hidden"><p className="letter2Sm">e</p></span>
            <span className="mx-1 md:mx-2 inline-block overflow-hidden"><p className="letter6Sm">l</p></span>
            <span className="mx-1 md:mx-2 inline-block overflow-hidden"><p className="letter5Sm">o</p></span>
            <span className="mx-1 md:mx-2 inline-block overflow-hidden"><p className="letter4Sm">p</p></span>
            <span className="mx-1 md:mx-2 inline-block overflow-hidden"><p className="letter2Sm">m</p></span>
            <span className="mx-1 md:mx-2 inline-block overflow-hidden"><p className="letter3Sm">e</p></span>
            <span className="mx-1 md:mx-2 inline-block overflow-hidden"><p className="letter6Sm">n</p></span>
            <span className="mx-1 md:mx-2 inline-block overflow-hidden"><p className="letter2Sm">t</p></span>
          </div>
        </div>
        <div className="lg:ml-[500px] h-[60px] md:h-[150px] lg:h-[200px] text-[8vw] flex overflow-hidden font-bold w-fit">
          <div>
            <span className="mx-1 md:mx-2 inline-block overflow-hidden"><p className="letter2Sm">C</p></span>
            <span className="mx-1 md:mx-2 inline-block overflow-hidden"><p className="letter3Sm">o</p></span>
            <span className="mx-1 md:mx-2 inline-block overflow-hidden"><p className="letter4Sm">m</p></span>
            <span className="mx-1 md:mx-2 inline-block overflow-hidden"><p className="letter6Sm">p</p></span>
            <span className="mx-1 md:mx-2 inline-block overflow-hidden"><p className="letter2Sm">a</p></span>
            <span className="mx-1 md:mx-2 inline-block overflow-hidden"><p className="letter5Sm">n</p></span>
            <span className="mx-1 md:mx-2 inline-block overflow-hidden"><p className="letter2Sm">y</p></span>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Hero;


// DEV TEAM
//         for startup founders and agencies 