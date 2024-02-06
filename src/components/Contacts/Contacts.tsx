import React from 'react'
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { FaRegSmileBeam } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Contacts = () => {



    return (
        <section className="container my-4 py-10 mx-auto md:px-6" id='Contact'>
            <span className='flex items-center justify-center lg:text-4xl md:text-2xl gap-2 '>
                <FaAnglesRight color='blue' />
                Let{"'"}s keep in touch!
                <FaAnglesLeft color='blue' />

            </span>
            <div className="mb-32 text-center">
                <div className="py-12 md:px-12">
                    <div className="container mx-auto xl:px-32">
                        <div className="grid items-center lg:grid-cols-2 ">
                            <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                                <div
                                    className="relative z-[1] block rounded-lg bg-[hsla(219,43%,55%,1)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                                    <h2 className="mb-12 text-3xl font-bold">Contact us</h2>
                                    <p>
                                        You can contact me via Email or any other Social Media Platform.
                                    </p>
                                    <p className='flex items-center justify-center'>
                                        Thank you. < FaRegSmileBeam color='yellow' />
                                    </p>
                                    <p className='flex items-center justify-center font-semibold text-white'>
                                        <span className='text-red-400 text-lg'>
                                            Gmail 
                                        </span>
                                        

                                        <FaArrowRight color='white' size={10}/>
                                        

                                        <span className='text-blue-300 cursor-pointer'>
                                        asahaayan@gmail.com
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="md:mb-12 lg:mb-0">
                                <div
                                    className="relative h-[600px] rounded-lg shadow-lg dark:shadow-black/20">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22777.1310809239!2d88.3865345!3d22.6764125!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7MJCM9GQHJ9!2sAgarpara!5e0!3m2!1sen!2sus!4v1632398456860"
                                        className="absolute left-0 top-0 h-full w-full rounded-lg"

                                        allowFullScreen>

                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contacts
