'use client'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useEffect } from "react"
import loading from "@/public/Infinity.svg"



export default function Loader() {

    useGSAP(() => {
        gsap.from('.text', {
            duration: 0.5,
            stagger: 0.2,
            y: "100%",
        })
        gsap.to('.main', {
            delay: 3.5,
            duration: 2,
            height: 0,
            ease: "Expo.easeInOut"
        })
        gsap.to('.greenDiv', {
            height: "100%",
            duration: 2,
            delay: 3,
            ease: "Expo.easeInOut",
        })
    }, [])

    return <div className="absolute z-50">
        <div className="h-[100vh] w-[100vw] bg-[#151515] text-white main  overflow-hidden">
            <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 inline-block ">
                <div className="flex justify-center overflow-hidden text-lg md:text-2xl lg:text-3xl">
                    <p className="text inline-block">Software</p>
                    <p className="text inline-block">&nbsp;Development</p>
                    <p className="text inline-block">&nbsp;Partner</p>
                </div>
                <div className="overflow-hidden text-lg md:text-2xl lg:text-3xl">
                    <p className="text inline-block">&nbsp;for</p>
                    <p className="text inline-block">&nbsp;Startup</p>
                    <p className="text inline-block">&nbsp;Founder</p>
                    <p className="text inline-block">&nbsp;and</p>
                    <p className="text inline-block">&nbsp;Agencies</p>

                </div>
            </div>
            <img className="absolute left-[50%] -translate-x-1/2 bottom-10 h-14" src={loading.src} alt="" />
        </div>
        <div className="absolute bottom-0 h-0 w-[100vw] greenDiv bg-white ">

        </div>
    </div>
}