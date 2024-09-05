'use client'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);
export default function Portfolio(){
    useGSAP(() => {
        gsap.from('.strip1', {
            x: 200,
            duration: 1,
            scrollTrigger: {
                trigger: '.strip1',
                start: "top 100%",
                end: "top 0%",
                scrub: 1,
            }
        })
        gsap.from('.strip2', {
            x: -200,
            duration: 1,
            scrollTrigger: {
                trigger: '.strip2',
                start: "top 100%",
                end: "top 0%",
                scrub: 1,
            }
        })
    })



    return <div className=" py-20 overflow-hidden">
        <h1 className='text-center text-[30px] md:text-[60px] font-bold py-10 clashBold'>Our Creations</h1>
        <div className="flex gap-20 py-10 strip1 relative -left-[500px]">
            <img className="h-[150px] md:h-[250px] rounded-lg" src="/assets/image1.jpg" alt="" /> 
            <img className="h-[150px] md:h-[250px] rounded-lg" src="/assets/image2.jpg" alt="" /> 
            <img className="h-[150px] md:h-[250px] rounded-lg" src="/assets/image3.jpg" alt="" /> 
            <img className="h-[150px] md:h-[250px] rounded-lg" src="/assets/image4.jpg" alt="" /> 
            <img className="h-[150px] md:h-[250px] rounded-lg" src="/assets/image5.jpg" alt="" /> 
            <img className="h-[150px] md:h-[250px] rounded-lg" src="/assets/image6.jpg" alt="" /> 
        </div>
        <div className="flex gap-20 strip2">
            <img className="h-[150px] md:h-[250px] rounded-lg" src="/assets/image1.jpg" alt="" /> 
            <img className="h-[150px] md:h-[250px] rounded-lg" src="/assets/image6.jpg" alt="" /> 
            <img className="h-[150px] md:h-[250px] rounded-lg" src="/assets/image3.jpg" alt="" /> 
            <img className="h-[150px] md:h-[250px] rounded-lg" src="/assets/image2.jpg" alt="" /> 
            <img className="h-[150px] md:h-[250px] rounded-lg" src="/assets/image5.jpg" alt="" /> 
            <img className="h-[150px] md:h-[250px] rounded-lg" src="/assets/image4.jpg" alt="" /> 
        </div>
    </div>
}