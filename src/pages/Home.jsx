import React from 'react'
import AboutSection from '../components/sections/AboutSection'
import ServicesSection from '../components/sections/ServicesSection'
import SliderSection from '../components/sections/SliderSection'

const Home = () => {
  return (
    <>
        <SliderSection />
        <AboutSection />
        <ServicesSection limit={4} sectionTitle="Our Top Services" />
    </>
  )
}

export default Home