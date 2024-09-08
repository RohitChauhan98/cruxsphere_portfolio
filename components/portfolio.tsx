'use client'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { projects } from './data';
import Card from './card';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import CardP from './card';


gsap.registerPlugin(ScrollTrigger);
export default function Portfolio(){

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end end']
    })
  
    useEffect( () => {
      const lenis = new Lenis()
  
      function raf(time: any) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
  
      requestAnimationFrame(raf)
    })



    return <div className='relative mt-[20vh]'>

{
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <CardP url={project.link} key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i *0.1, 1]} targetScale={targetScale}/>
        })
      }
      </div>
      }