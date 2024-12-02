"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return ( 
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from bg-purple-400 to-pink-600 '>
                        Hello, I'm {" "}
                    </span>
                    <br></br>
                    
                        <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Soham Kottawar',
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Web Developer',
                            // 2000,
                            // 'Team Player',
                            2000,
                            'Practical Learner',
                            2000,
                            // 'We produce food for Chinchillas',
                            // 1000
                        ]}
                        wrapper="span"
                        speed={50}
                        // style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                20 year old Full Stack Developer, occasional Graphic Designer,Finance Enthusiast and also an PICT Engineering Student.
                </p>
                <div>
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-orange-400 hover:bg-slate-200 text-white'>
                        <span className='block bg-[121212] hover:bg-slate-800 rounded-full px-5 py-2'>Hire Me</span>
                    </button>
                    <button  onClick={() => window.open('https://drive.google.com/file/d/1-mcGDWoWKxAJVts0iUGuQUUpklc8R06C/view?usp=sharing', '_blank')} className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3' >
                        <span className='block bg-[121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                    </button>
                </div>
            </motion.div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[181818] w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image
                        src="/images/HeroSectionMan.png"
                        alt="hero image"
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={300}
                        height={300}
                    />
                </div>

            </div>
        </div>
    </section>
  )
}

export default HeroSection
