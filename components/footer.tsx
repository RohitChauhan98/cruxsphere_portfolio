'use client'

import { useState } from "react";




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
        <div className="relative md:w-[800px] mx-auto flex py-[100px] border-b ">
            <h1 className="text-[50px] md:text-[90px] text-white ml-10 clashBold inline-block">Let&apos;s work together</h1>
            <div
                className="absolute top-[100%] right-[10%] w-[100px] h-[100px] md:w-[180px] md:h-[180px] bg-[#445AE9] rounded-full transition-transform duration-300 ease-in-out text-white flex items-center justify-center text-lg clashReg"
                style={{ transform: transformStyle }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
            ><p className="text-xs md:text-base">Get in touch</p></div>
        </div>
        <div className="flex-grow"></div>
        <div>
            <div className="flex justify-center items-center h-[100px]">
                <p className="text-white">© 2021 Crux</p>
            </div>
        </div>
    </div>
}