import React from 'react'
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {Link} from "react-scroll/modules";
import HeroImage from '@/assets/me.png'
import CustomArrow from '@/assets/hero-element-2.png'

const Hero = () => {
    

    return (
        <section className="lg:py-2 px-16 py-10 custom-bg h-full">
            <div className="grid grid-cols-1 justify-center sm:grid-cols-12 md:grid-cols-12 md:pt-20 mx-5">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="text-white mb-2 text-2xl sm:text-xl lg:text-7xl lg:leading-normal font-bold">
                        <span className=" bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                            Hello, I&apos;m{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Ayan Saha.",
                                2000,
                                "a Web Developer.",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Where Vision Meets Versatility.
                    </p>
                    <div className='ml-0 pl-0 md:pl-6 md:ml-10'>
                        <Link
                         activeClass="active" 
                         to="Contact" 
                         spy={true} 
                         smooth={true} 
                         offset={50} 
                         duration={500} 
                    
                            className="px-6 font-bold inline-block py-3 w-full sm:w-fit rounded-full mr-4  hover:bg-sky-700 bg-gradient-to-r from-teal-400 to-indigo-600 text-white
                                        transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out"
                        >
                           Hire Me
                        </Link>
                        <a
                            href="/"
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3
                                        transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out"
                        >
                            <span className="block bg-blue-600 hover:bg-blue-400 rounded-full px-5 py-2">
                                View CV
                            </span>
                        </a>
                    </div>
                </motion.div>

                <div className='absolute z-10 top-[21rem] left-10 md:top-[36rem] left-right-movement'>
                    <Image src={CustomArrow} alt='' />
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                    <div className="rounded-full rounded-custom w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] relative overflow-hidden
                                        ">
                        <Image
                            src={HeroImage}
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full h-full object-cover "
                            width={300}
                            height={300}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
