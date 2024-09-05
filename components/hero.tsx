'use client'

import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { render } from "react-dom";
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
      <img className=""
        src={url.src}
        alt="dfg"
      />
    </motion.div>

  );
};

const herotxt = [
  'Development', 'Partner', 'for', 'Startup', 'Founder', 'and', 'Agencies'
];

const Hero = ({ distanceThreshold = 140 }) => {
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


  // useEffect(() => {
  //   const tl = gsap.timeline({ repeat: 0 });
  //   tl.from(letter1.current, {
  //     duration: 0.5,
  //     opacity: 1,
  //     x: -70,
  //     ease: "bounce.out",
  //   })


  // })

  useGSAP(() => {
    gsap.to('.letter1', {
      duration: 1,
      y: -225,
      rotateY: -360,
      transformOrigin: "50% 50%",
      ease: "back.out",
    })

    gsap.from('.letter2', {
      delay: 1,
      duration: 0.6,
      opacity: 0,
      rotateY: -180,
      transformOrigin: "50% 50%",
      ease: "back.out"
    })

    gsap.from('.letter3', {
      delay: 1.6,
      duration: 0.8,
      x: -100,
      opacity: 0,
      scale: 0.9,
      ease: "power2.out",
    })

    gsap.from('.letter4', {
      delay: 2.2,
      duration: 0.8,
      y: 100,
      scale: 0.5,
      rotation: 360,
      opacity: 0,
      ease: "power4.out",
    })

    gsap.from('.letter5', {
      duration: 1.5,
      scaleX: 2,
      scaleY: 0.5,
      ease: "elastic.out(1, 0.75)",
    })

    gsap.from('.letter6', {
      duration: 1.5,
      rotationY: 360,
      transformPerspective: 800,
      transformOrigin: "50% 50%",
      opacity: 0,
      ease: "power3.inOut",
    })

    gsap.from('.letter', {
      duration: 0.5,
      y: 200,
      stagger: 0.05,
    })

  });




  return (
    <div
      className=" h-[100vh] w-[100vw] bg-[#151515] text-white"
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
      {/* <div className="h-[150px] overflow-hidden absolute top-[40%] left-[50%] text-[100px] flex  -translate-x-1/2 -translate-y-1/2">
        <div className="letter1 inline-block">
          <p className="">B</p>
          <p className="">C</p>
        </div>
        <div>
          <span className="mx-2 relative top-0 inline-block overflow-hidden"><p className="letter2">R</p></span>
          <span className="mx-2 inline-block overflow-hidden"><p className="letter3">U</p></span>
          <span className="mx-2 inline-block overflow-hidden"><p className="letter4">X</p></span>
        </div>
      </div> */}
      {/* <div className="absolute top-[60%] text-[150px] -translate-y-1/2 font-bold">
        <p className="leading-[120px] ml-[80px]">Development</p>
        <p className="ml-[700px]">Company</p>
      </div> */}
      <div className="absolute top-[50%] -translate-y-1/2">
        <div className="ml-[50px] h-[200px] text-[150px] flex overflow-hidden font-bold">
          <div>
            <span className="mx-2 relative top-0 inline-block overflow-hidden"><p className="letter2">D</p></span>
            <span className="mx-2 inline-block overflow-hidden"><p className="letter3">e</p></span>
            <span className="mx-2 inline-block overflow-hidden"><p className="letter5">v</p></span>
            <span className="mx-2 inline-block overflow-hidden"><p className="letter2">e</p></span>
            <span className="mx-2 inline-block overflow-hidden"><p className="letter6">l</p></span>
            <span className="mx-2 inline-block overflow-hidden"><p className="letter5">o</p></span>
            <span className="mx-2 inline-block overflow-hidden"><p className="letter4">p</p></span>
            <span className="mx-2 inline-block overflow-hidden"><p className="letter2">m</p></span>
            <span className="mx-2 inline-block overflow-hidden"><p className="letter3">e</p></span>
            <span className="mx-2 inline-block overflow-hidden"><p className="letter6">n</p></span>
          </div>
          <div className="letter1 inline-block">
            <p className="">1</p>
            <p className="">t</p>
          </div>
        </div>
        <div className="ml-[600px] h-[200px] text-[150px] flex overflow-hidden font-bold">
          <div>
            <span className="mx-2 relative top-0 inline-block overflow-hidden"><p className="letter2">C</p></span>
            <span className="mx-2 inline-block overflow-hidden"><p className="letter3">o</p></span>
            <span className="mx-2 inline-block overflow-hidden"><p className="letter4">m</p></span>
            <span className="mx-2 inline-block overflow-hidden"><p className="letter6">p</p></span>
            <span className="mx-2 inline-block overflow-hidden"><p className="letter2">a</p></span>
            <span className="mx-2 inline-block overflow-hidden"><p className="letter5">n</p></span>
          </div>
          <div className="letter1 inline-block">
            <p className="">1</p>
            <p className="">y</p>
          </div>
        </div>
      </div>


      {/* <div className="absolute top-[90%] -translate-y-1/2 text-[20px] md:text-[60px] ml-20 z-10 mx-auto">
        {herotxt.map((letter, i) => (
          <div className="overflow-hidden inline-block "><p className="letters clashReg">{letter}&nbsp;&nbsp;</p></div>
        ))}
      </div> */}
    </div>

  );
};

export default Hero;


// DEV TEAM
//         for startup founders and agencies 