'use client'
import React, { useState } from 'react'
import { FaReact } from 'react-icons/fa';
import { Link } from "react-scroll/modules";
import { navItems } from './navItems';
import Navbar from "@/components/LandingPage/Headers/components/example"


const Header = () => {

    return (

        <nav className='p-10 custom-bg'>
            <div className='w-full h-8 max-w-[1200px] mx-auto flex items-center justify-between'>
                <div>
                    <FaReact size={40} color='white' className='custom-spin' />
                </div>
                <div className='hidden md:block'>
                    <ul className='p-10 flex'>
                        {navItems.map((items, keys) => (
                            <li key={keys} className='p-5 cursor-pointer'>
                                <Link
                                    activeClass="active"
                                    to={items.path}
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
                                >
                                    {items.text}
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>
                <div className='block md:hidden'>
                    <Navbar />
                </div>
            </div>


        </nav>

    )
}

export default Header
