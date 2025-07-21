import React from 'react'
import TopBanner from '../components/TopBanner/TopBanner'
import aboutContent from "../data/about";


const About = () => {
  return (
    <>
    <TopBanner title="About"></TopBanner>
    <section className="about-section py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">{aboutContent.heading}</h1>
          <h4 className="text-xl text-gray-600 mt-4">{aboutContent.subheading}</h4>
        </div>

        <div
          className="about-description prose prose-lg max-w-3xl mx-auto text-gray-700 mb-12"
          dangerouslySetInnerHTML={{ __html: aboutContent.description }}
        />
      </div>
    </section>
    </>
  )
}

export default About