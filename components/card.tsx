'use client'
import Image from 'next/image';

import { useTransform, useScroll, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

import styles from './card.module.scss';


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
        className="bg-cover bg-center bg-no-repeat flex flex-col relative top-[-25%] h-full md:h-[60vh] lg:h-[80vh] w-[100vw] rounded-[5px] p-[50px] origin-top"
      >

        <div className="flex flex-col md:flex-row h-full mt-[50px] gap-[50px]">
          <div className="w-[40%] relative top-[10%] pl-[40px]">
            <div className=' md:w-[400px] lg:w-[35vw]'>
              <h2 className="m-0 text-[40px] tracking-[10px]">{title}</h2>
              <h2 className="m-0 text-[22px]">{subtitle}</h2>

              <p className="text-[16px] first:font-title first:text-[20px] leading-8 py-10 tracking-wider">{description}</p>
              <span className="flex items-center gap-[5px]">
                <a href={url} target="_blank" className="text-[12px] underline cursor-pointer">See more</a>
                <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="black" />
                </svg>
              </span>
            </div>
          </div>
          <div className="relative md:w-[40%] lg:w-[40%] h-full rounded-[5px] overflow-hidden mx-auto">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image
                fill
                src={`/assets/image1.jpeg`}
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