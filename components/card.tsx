'use client'
import Image from 'next/image';

import { useTransform, useScroll, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import styles from './card.module.scss';
import img1 from '../public/assets/100km.png'


interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  src: string;
  url: string;
  color: string;
  i: number;
  progress: any;
  range: any;
  targetScale: any;
}

const CardP: React.FC<CardProps> = ({ title, description, subtitle, src, url, color, i, progress, range, targetScale }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);

  const handleMouseMove = (event: any) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseEnter = () => {
    setIsInside(true);
  };

  const handleMouseLeave = () => {
    setIsInside(false);
  };

  useEffect(() => {
    if (isInside) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
    }

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isInside]);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          background: "rgb(174,255,247)",
          backgroundImage: "linear-gradient(90deg, rgba(174,255,247,1) 0%, rgba(255,134,126,1) 50%, rgba(219,255,190,1) 100%)", scale, top: `calc(-5vh + ${i * 25}px)`
        }}
        className="bg-cover bg-center bg-no-repeat flex flex-col relative top-[-25%] h-full md:h-[80vh] lg:h-[90vh] w-[100vw] rounded-[5px] p-[20px] md:p-[30px] lg:p-[50px] origin-top"
      >

        <div className="grid  items-center justify-center md:grid-cols-2 h-full gap-[20px]" onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          {isInside && (
            <div
              className="absolute bg-opacity-50 text-black w-16 h-16 flex justify-center items-center p-2 rounded-full border border-black transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
              }}
            >
              Open
            </div>
          )}
          <div className="lg:w-[40%] relative top-[10%] md:pl-[40px]">
            <div className=' lg:w-[35vw]'>
              <h2 className="m-0 text-[25px] md:text-[30px] lg:text-[40px] tracking-[10px]">{title}</h2>
              <h2 className="m-0 text-[18px] md:text-[20px] lg:text-[24px]">{subtitle}</h2>

              <p className="text-[16px]  leading-8 py-4 md:py-5 lg:py-10 tracking-wider">{description.slice(0, 300)}</p>

            </div>
          </div>
          <div className=" relative w-[400px] h-[250px] md:w-[480] md:h-[300px] lg:w-[640px] lg:h-[400px] rounded-[5px] overflow-hidden mx-auto">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image
                fill
                src={src}
                alt="image"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default CardP;