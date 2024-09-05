import Spline from '@splinetool/react-spline/next';

export default function Mobile() {
    return <div className='grid md:grid-cols-5 md:h-[80vh]'>
        <div className='col-span-3'>
            {/* <Spline
                scene="https://prod.spline.design/k7s7mPC2IzxJZJJe/scene.splinecode"
            /> */}
        </div>
        <div className='flex flex-col justify-center col-span-2'>
            <div className='md:w-[550px] p-5'>
                <h1 className="text-[30px] md:text-[48px] font-bold">Build Your Vision</h1>
                <p className='text-[15px] md:text-[20px] font-extralight leading-7 md:leading-10'>In today's fast-paced digital world, having a robust online presence is crucial. Whether you need a sleek, responsive website or a powerful app tailored to your unique needs, our agency is here to turn your vision into reality. We specialize in creating custom websites and innovative solutions that elevate your brand, engage your audience, and drive success. Let us help you build the digital experience your business deserves.</p>

            </div>
        </div>
    </div>
}


