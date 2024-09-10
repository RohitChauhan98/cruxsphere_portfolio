import Spline from '@splinetool/react-spline/next';
import Image from 'next/image';
import src from '@/public/assets/ui.png'

export default function Mobile() {
    return <div className='grid grid-cols-4 h-full md:h-[80vh] gap-5 md:gap-10 lg:gap-20 px-8 md:px-20 lg:px-32 mx-auto'>
        <div className='flex flex-col justify-center lg:col-span-2 md:col-span-2 col-span-4'>
            {/* <Spline
        scene="https://prod.spline.design/c9yUYtmGOy313sBr/scene.splinecode" 
      /> */}
            <Image
                src={src}
                alt="image"
                className="w-[90vw] lg:w-[40vw] md:w-[40vw] object-cover"
            />
        </div>
        <div className='flex flex-col justify-center items-center lg:col-span-2 md:col-span-2 col-span-4 w-[90vw] lg:w-[40vw] md:w-[40vw]'>
            <div className='p-5'>
                <h1 className="text-[20px] md:text-[30px] lg:text-[48px] font-bold">Build Your Vision</h1>
                <p className='text-[12px] md:text-[15px] lg:text-[18px] font-thin md:leading-7 lg:leading-10'>In today&apos;s fast-paced digital world, having a robust online presence is crucial. Whether you need a sleek, responsive website or a powerful app tailored to your unique needs, our agency is here to turn your vision into reality. We specialize in creating custom websites and innovative solutions that elevate your brand, engage your audience, and drive success. Let us help you build the digital experience your business deserves.</p>

            </div>
        </div>
    </div>
}


