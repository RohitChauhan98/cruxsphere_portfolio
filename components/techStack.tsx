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

    const handleScroll = (event: WheelEvent) => {
        console.log(event.deltaY)
        if (event.deltaY < 0) {
            setDir(false)
        } else {
            setDir(true)
        }
    };

    window.addEventListener('wheel', handleScroll);

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


    return <div className="grid grid-cols-2 bg-slate-200 h-[80vh] overflow-hidden">
        <div></div>
        <div>
            <div className='flex flex-row gap-10'>
                <div className=''>
                    <div className='stack1 translate-y-[100%] '>
                        <div className='h-[120px] w-[120px]  bg-slate-100 rounded-2xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-4 ' src={next.src} alt="" />
                        </div>
                        <div className='h-[120px] w-[120px] bg-slate-100 rounded-2xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-4' src={react.src} alt="" />
                        </div>
                        <div className='h-[120px] w-[120px] bg-slate-100 rounded-2xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-4' src={mongo.src} alt="" />
                        </div>
                        <div className='h-[120px] w-[120px] bg-slate-100 rounded-2xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-4' src={js.src} alt="" />
                        </div>
                        <div className='h-[120px] w-[120px] bg-slate-100 rounded-2xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-4' src={docker.src} alt="" />
                        </div>
                        <div className='h-[120px] w-[120px] bg-slate-100 rounded-2xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-4' src={aws.src} alt="" />
                        </div>
                    </div>

                    <div className='stack1 translate-y-[100%]'>
                        <div className='h-[120px] w-[120px]  bg-slate-100 rounded-2xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-4 ' src={next.src} alt="" />
                        </div>
                        <div className='h-[120px] w-[120px] bg-slate-100 rounded-2xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-4' src={react.src} alt="" />
                        </div>
                        <div className='h-[120px] w-[120px] bg-slate-100 rounded-2xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-4' src={mongo.src} alt="" />
                        </div>
                        <div className='h-[120px] w-[120px] bg-slate-100 rounded-2xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-4' src={js.src} alt="" />
                        </div>
                        <div className='h-[120px] w-[120px] bg-slate-100 rounded-2xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-4' src={docker.src} alt="" />
                        </div>
                        <div className='h-[120px] w-[120px] bg-slate-100 rounded-2xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-4' src={aws.src} alt="" />
                        </div>
                    </div>
                </div>
            <div className=''>
                <div className='-translate-y-full'>
                    <div className='stack2 -translate-y-[100%]'>
                        <div className='h-[120px] w-[120px]  bg-slate-100 rounded-2xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-8' src={digitalOcean.src} alt="" />
                        </div>
                        <div className='h-[120px] w-[120px] bg-slate-100 rounded-2xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-8' src={flutter.src} alt="" />
                        </div>
                        <div className='h-[120px] w-[120px] bg-slate-100 rounded-2xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-8' src={firebase.src} alt="" />
                        </div>
                        <div className='h-[120px] w-[120px] bg-slate-100 rounded-2xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-8' src={express.src} alt="" />
                        </div>
                        <div className='h-[120px] w-[120px] bg-slate-100 rounded-2xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-4' src={docker.src} alt="" />
                        </div>
                        <div className='h-[120px] w-[120px] bg-slate-100 rounded-2xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-4' src={aws.src} alt="" />
                        </div>
                    </div>
                    <div className='stack2 -translate-y-[100%]'>
                        <div className='h-[120px] w-[120px]  bg-slate-100 rounded-2xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-8 ' src={digitalOcean.src} alt="" />
                        </div>
                        <div className='h-[120px] w-[120px] bg-slate-100 rounded-2xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-8' src={flutter.src} alt="" />
                        </div>
                        <div className='h-[120px] w-[120px] bg-slate-100 rounded-2xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-8' src={firebase.src} alt="" />
                        </div>
                        <div className='h-[120px] w-[120px] bg-slate-100 rounded-2xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-8' src={express.src} alt="" />
                        </div>
                        <div className='h-[120px] w-[120px] bg-slate-100 rounded-2xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-4' src={docker.src} alt="" />
                        </div>
                        <div className='h-[120px] w-[120px] bg-slate-100 rounded-2xl flex items-center justify-center my-2'>
                            <img className='w-[120px] p-4' src={aws.src} alt="" />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
}