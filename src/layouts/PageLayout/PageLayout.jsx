import React from 'react'
import Footer from '../../components/footers/Footer/Footer'
import PageHeader from '../../components/headers/PageHeader/PageHeader'
import TestimonialSection from '../../components/sections/TestimonialSection'
import PartnerSection from '../../components/sections/PartnerSection'

export default function MainLayout({ children }) {
  return (
    <>
      <PageHeader />
        <main>{children}</main>
        <TestimonialSection></TestimonialSection>
        <PartnerSection></PartnerSection>
      <Footer />
    </>
  )
}
