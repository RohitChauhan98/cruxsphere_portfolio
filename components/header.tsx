'use client'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { use } from "react";


export default function Header() {
    useGSAP(() => {
        gsap.from(".bar", {
            duration: 0.5,
            y: -400,
            stagger: 0.3,
        });
    });
    return (
        <div className="h-[100vh] w-full bg-black ">
            <div className="w-[600px] mx-20 pt-10 z-10 text-white">
                <p className="tracking-[5px] text-[10px]">CRUXSPHERE</p>
                <div className="text-5xl">
                    <p>Creating unique brands is</p>
                    <p> what we can do</p>
                </div>
            </div>
            <div className="flex absolute top-0">
                <div className="w-[25vw] bg-white h-[400px] bar relative top-0 left-0 overflow-hidden z-50">
                    <div className="w-[600px] mx-20 pt-10 z-10 text-black">
                        <p className="tracking-[5px] text-[10px]">CRUXSPHERE</p>
                        <div className="text-5xl">
                            <p>Creating unique brands is</p>
                            <p> what we can do</p>
                        </div>
                    </div>
                </div>
                <div className="w-[50vw] bg-white h-[400px] bar absolute top-0 left-0 overflow-hidden z-40">
                <div className="w-[600px] mx-20 pt-10 z-10 text-black">
                        <p className="tracking-[5px] text-[10px]">CRUXSPHERE</p>
                        <div className="text-5xl">
                            <p>Creating unique brands is</p>
                            <p> what we can do</p>
                        </div>
                    </div>
                </div>
                <div className="w-[75vw] bg-white h-[400px] bar absolut top-0 left-0 z-30"></div>
                <div className="w-[100vw] bg-white h-[400px] bar absolute top-0 left-0 z-20"></div>
            </div>
        </div>
    );
}  