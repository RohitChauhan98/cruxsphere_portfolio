'use client'

import { useState } from "react";
import email from '@/public/assets/email.png'
import call from '@/public/assets/call.png'
import linkedIn from '@/public/assets/linkedin.png'
import whatsapp from '@/public/assets/whatsapp.png'
import location from '@/public/assets/location.png'





export default function Footer() {
    const [transformStyle, setTransformStyle] = useState('scale(1)  translateX(0) translateY(-50%)');

    const handleMouseEnter = () => {
        setTransformStyle('scale(1.1) translate(0, 0)');
    };

    const handleMouseLeave = () => {
        setTransformStyle('scale(1)  translateX(0) translateY(-50%)');
    };

    const handleMouseMove = (event: any) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - rect.left - rect.width / 2;
        const mouseY = event.clientY - rect.top - rect.height / 2;

        setTransformStyle(`scale(1.1) translate(${mouseX * 2}px, ${mouseY * 2}px)`);
    };

    return <div className="h-[100vh] bg-[#1C1E21] flex flex-col items-center">
        <div className="relative md:w-[40vw] mx-auto flex mt-[100px] py-[3vw] border-b ">
            <h1 className="text-[3px] md:text-[5vw] text-white  mori font-extrabold inline-block">Let&apos;s work together</h1>
            <div
                className="absolute top-[100%] right-[10%] w-[100px] h-[100px] md:w-[180px] md:h-[180px] bg-[#445AE9] rounded-full transition-transform duration-300 ease-in-out text-white flex items-center justify-center text-lg clashReg"
                style={{ transform: transformStyle }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
            ><p className="text-xs md:text-base">Get in touch</p></div>
        </div>
        <div className="flex-grow"></div>
        <div className="text-white lg:flex w-full justify-between lg:px-20">
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="flex gap-2 py-3 items-center">
                    <img className="h-5" src={email.src} alt="" />
                    <p>contact@cruxsphere.com</p>
                </div>
                <div className="flex gap-2 py-3 items-center">
                    <img className="h-5" src={call.src} alt="" />
                    <p>+15038820512</p>
                </div>
            </div>

            <div>
                <div className="flex gap-2 py-3 items-center justify-center">
                    <img className="h-5" src={location.src} alt="" />
                    <p className="tracking-[4px] text-center">SE Clackamas, OR 97015, USA</p>
                </div>
                <div className="flex justify-center py-3 gap-5">
                    <img className="h-8" src={linkedIn.src} alt="" />
                    <img className="h-8" src={whatsapp.src} alt="" />
                </div>
            </div>
        </div>
        <p className="text-white text-center py-10">© 2021 Crux</p>
    </div>
}

//phone number email linkedin whatsapp
