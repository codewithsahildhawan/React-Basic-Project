import React from 'react'
import TopBanner from '../components/TopBanner/TopBanner'
import aboutContent from "../data/about";
import { useMeta } from '../hooks/useMeta';


const About = () => {
  useMeta({
  title: "Innovating the Future, One Line of Code at a Time | Devtech Labs",
    description:
      "Devtech Labs empowers businesses to scale through innovative technology solutions in FinTech, EdTech, HealthTech, and E-commerce. We build scalable digital products using AI, cloud, and agile development.",
    keywords:
      "Devtech Labs, software development, digital transformation, technology innovation, FinTech, EdTech, HealthTech, AI, blockchain, IoT, cloud computing, custom software, mobile app development, agile development, MVP, scalable solutions",
  });


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