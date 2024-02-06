'use client'
import React from 'react'
import Header from '@/components/LandingPage/Headers/Header'
import Hero from '@/components/LandingPage/HeroSection/Hero'
import AboutMe from '@/components/About/About'
import Footer from './Footer/Footer'
import Contacts from '../Contacts/Contacts'
import Weal from '../SkillWeal/Weal';
import ProjectsSection from '../Projects/ProjectsSection'

const Home = () => {
  

  return (
    <>
    <Header />
    <Hero />
    <AboutMe />
    <Weal />
    <ProjectsSection />
    <Contacts />
    <Footer />
    </>
  )
}

export default Home
