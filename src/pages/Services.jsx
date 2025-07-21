import React from 'react'
import TopBanner from '../components/TopBanner/TopBanner'
import ServicesSection from '../components/sections/ServicesSection'

const Services = () => {
  return (
   <>
        <TopBanner
            title="Services"
            breadcrumbs={[
                { label: 'Home', path: '/', active: false },
                { label: 'Services', active: true }
            ]}
        />
        <ServicesSection />
    </>
  )
}

export default Services