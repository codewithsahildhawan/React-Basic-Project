import React from 'react'
import HomeHeader from '../../components/headers/HomeHeader/HomeHeader'
import Footer from '../../components/footers/Footer/Footer'
import TestimonialSection from '../../components/sections/TestimonialSection'
import PartnerSection from '../../components/sections/PartnerSection'

export default function MainLayout({ children }) {
  return (
    <>
      <HomeHeader />
        <main>{children}</main>
      <TestimonialSection></TestimonialSection>
      <PartnerSection></PartnerSection>
      <Footer />
    </>
  )
}
