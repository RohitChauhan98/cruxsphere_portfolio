'use client'
import next from '@/public/next.svg'
import react from '@/public/react.svg'
import mongo from '@/public/mongodb.svg'
import js from '@/public/js.svg'
import docker from '@/public/docker.svg'
import aws from '@/public/aws.svg'
import digitalOcean from '@/public/digitalOcean.svg'
import flutter from '@/public/flutter.svg'
import firebase from '@/public/firebase.svg'
import express from '@/public/express.svg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useEffect, useState } from 'react'



export default function TechStack() {
    const [dir, setDir] = useState(false)

    useEffect(() => {
        const handleScroll = (event: WheelEvent) => {
            console.log(event.deltaY);
            if (event.deltaY < 0) {
                setDir(false);
            } else {
                setDir(true);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('wheel', handleScroll);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('wheel', handleScroll);
            }
        };
    }, []);
    useEffect(() => {
        if (dir) {
            gsap.to('.stack1', {
                transform: 'translateY(-200%)',
                duration: 10,
                repeat: -1,
                ease: "none"
            })

            gsap.to('.stack2', {
                transform: 'translateY(200%)',
                duration: 10,
                repeat: -1,
                ease: "none"
            })
        } else {
            gsap.to('.stack1', {
                transform: 'translateY(0%)',
                duration: 10,
                repeat: -1,
                ease: "none"
            })

            gsap.to('.stack2', {
                transform: 'translateY(0%)',
                duration: 10,
                repeat: -1,
                ease: "none"
            })
        }

    }, [dir])


    return <div className="grid grid-cols-2 h-[80vh] bg-[#151515] overflow-hidden">
        <div className='flex flex-col justify-center lg:col-span-2 md:col-span-2 col-span-4 w-[90vw] lg:w-[40vw] md:w-[40vw]'>
        <div className='p-5 text-white'>
                <h1 className="text-[20px] md:text-[30px] lg:text-[48px] font-bold">Build Your Vision</h1>
                <p className='text-[12px] md:text-[15px] lg:text-[15px] font-extralight md:leading-7 lg:leading-10'>In today&apos;s fast-paced digital world, having a robust online presence is crucial. Whether you need a sleek, responsive website or a powerful app tailored to your unique needs, our agency is here to turn your vision into reality. We specialize in creating custom websites and innovative solutions that elevate your brand, engage your audience, and drive success. Let us help you build the digital experience your business deserves.</p>

            </div>
        </div>
        <div className='lg:col-span-2 md:col-span-2 col-span-4'>
            <div className='flex flex-row-reverse gap-2 md:gap-5 lg:gap-10 px-2 md:px-20 lg:px-32'>
                <div className=''>
                    <div className='stack1 -translate-y-[100%] '>
                        <div className='h-[90px] w-[90px] lg:h-[120px] lg:w-[120px]  bg-slate-100 rounded-3xl flex items-center justify-center my-2'>
                            <img className='p-4 ' src={next.src} alt="" />
                        </div>
                        <div className='h-[90px] w-[90px] lg:h-[120px] lg:w-[120px] bg-slate-100 rounded-3xl flex items-center justify-center my-2'>
                            <img className='p-4' src={react.src} alt="" />
                        </div>
                        <div className='h-[90px] w-[90px] lg:h-[120px] lg:w-[120px] bg-slate-100 rounded-3xl flex items-center justify-center my-2'>
                            <img className='p-4' src={mongo.src} alt="" />
                        </div>
                        <div className='h-[90px] w-[90px] lg:h-[120px] lg:w-[120px] bg-slate-100 rounded-3xl flex items-center justify-center my-2'>
                            <img className='p-4' src={js.src} alt="" />
                        </div>
                        <div className='h-[90px] w-[90px] lg:h-[120px] lg:w-[120px] bg-slate-100 rounded-3xl flex items-center justify-center my-2'>
                            <img className='p-4' src={docker.src} alt="" />
                        </div>
                        <div className='h-[90px] w-[90px] lg:h-[120px] lg:w-[120px] bg-slate-100 rounded-3xl flex items-center justify-center my-2'>
                            <img className='p-4' src={aws.src} alt="" />
                        </div>
                    </div>

                    <div className='stack1 -translate-y-[100%]'>
                        <div className='h-[90px] w-[90px] lg:h-[120px] lg:w-[120px]  bg-slate-100 rounded-3xl flex items-center justify-center my-2'>
                            <img className='p-4 ' src={next.src} alt="" />
                        </div>
                        <div className='h-[90px] w-[90px] lg:h-[120px] lg:w-[120px] bg-slate-100 rounded-3xl flex items-center justify-center my-2'>
                            <img className='p-4' src={react.src} alt="" />
                        </div>
                        <div className='h-[90px] w-[90px] lg:h-[120px] lg:w-[120px] bg-slate-100 rounded-3xl flex items-center justify-center my-2'>
                            <img className='p-4' src={mongo.src} alt="" />
                        </div>
                        <div className='h-[90px] w-[90px] lg:h-[120px] lg:w-[120px] bg-slate-100 rounded-3xl flex items-center justify-center my-2'>
                            <img className='p-4' src={js.src} alt="" />
                        </div>
                        <div className='h-[90px] w-[90px] lg:h-[120px] lg:w-[120px] bg-slate-100 rounded-3xl flex items-center justify-center my-2'>
                            <img className='p-4' src={docker.src} alt="" />
                        </div>
                        <div className='h-[90px] w-[90px] lg:h-[120px] lg:w-[120px] bg-slate-100 rounded-3xl flex items-center justify-center my-2'>
                            <img className='p-4' src={aws.src} alt="" />
                        </div>
                    </div>
                </div>
                <div className='-translate-y-1/2'>
                    <div className='stack2 translate-y-full'>
                        <div className='h-[90px] w-[90px] lg:h-[120px] lg:w-[120px]  bg-slate-100 rounded-3xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-8' src={digitalOcean.src} alt="" />
                        </div>
                        <div className='h-[90px] w-[90px] lg:h-[120px] lg:w-[120px] bg-slate-100 rounded-3xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-8' src={flutter.src} alt="" />
                        </div>
                        <div className='h-[90px] w-[90px] lg:h-[120px] lg:w-[120px] bg-slate-100 rounded-3xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-8' src={firebase.src} alt="" />
                        </div>
                        <div className='h-[90px] w-[90px] lg:h-[120px] lg:w-[120px] bg-slate-100 rounded-3xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-8' src={express.src} alt="" />
                        </div>
                        <div className='h-[90px] w-[90px] lg:h-[120px] lg:w-[120px] bg-slate-100 rounded-3xl flex items-center justify-center my-2'>
                            <img className='p-4' src={docker.src} alt="" />
                        </div>
                        <div className='h-[90px] w-[90px] lg:h-[120px] lg:w-[120px] bg-slate-100 rounded-3xl flex items-center justify-center my-2'>
                            <img className='p-4' src={aws.src} alt="" />
                        </div>
                    </div>
                    <div className='stack2 translate-y-full'>
                        <div className='h-[90px] w-[90px] lg:h-[120px] lg:w-[120px]  bg-slate-100 rounded-3xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-8 ' src={digitalOcean.src} alt="" />
                        </div>
                        <div className='h-[90px] w-[90px] lg:h-[120px] lg:w-[120px] bg-slate-100 rounded-3xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-8' src={flutter.src} alt="" />
                        </div>
                        <div className='h-[90px] w-[90px] lg:h-[120px] lg:w-[120px] bg-slate-100 rounded-3xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-8' src={firebase.src} alt="" />
                        </div>
                        <div className='h-[90px] w-[90px] lg:h-[120px] lg:w-[120px] bg-slate-100 rounded-3xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-8' src={express.src} alt="" />
                        </div>
                        <div className='h-[90px] w-[90px] lg:h-[120px] lg:w-[120px] bg-slate-100 rounded-3xl flex items-center justify-center my-2'>
                            <img className='p-4' src={docker.src} alt="" />
                        </div>
                        <div className='h-[90px] w-[90px] lg:h-[120px] lg:w-[120px] bg-slate-100 rounded-3xl flex items-center justify-center my-2'>
                            <img className='p-4' src={aws.src} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}