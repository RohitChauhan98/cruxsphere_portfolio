'use client'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { transform } from "next/dist/build/swc"
import { useEffect } from "react"
import loading from "@/public/Infinity.svg"



export default function Loader() {

    useEffect(() => {
        const tl = gsap.timeline()
        
        tl.to('.text', {
            delay: 3,
            duration: 0.5,
            y: "-100%",
        })
        tl.to('.main', {
            delay: 1,
            duration: 2,
            height: 0,
            ease: "Expo.easeInOut"
        })
        tl.to('.greenDiv', {
            height: "100%",
            duration: 2,
            delay: -2,
            ease: "Expo.easeInOut",
        })
    }, [])

    return <div className="absolute z-50">
        <div className="h-[100vh] w-[100vw] bg-[#151515] text-white main  overflow-hidden">
            <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 inline-block text-3xl overflow-hidden"> <p className="text">Hello!</p> </div>
            <img className="absolute left-[50%] -translate-x-1/2 bottom-10 h-14" src={loading.src} alt="" />
        </div>
        <div className="absolute bottom-0 h-0 w-[100vw] bg-green-500 greenDiv">

        </div>
    </div>
}