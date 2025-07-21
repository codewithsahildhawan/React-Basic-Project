import React from 'react'
import content from '../../data/site_content'
import { Link } from 'react-router-dom'

const ServicesSection = ({limit, sectionTitle }) => {
const servicesToShow = limit ? content.services.data.slice(0,limit) : content.services.data;
  return (
    <section className="services-section section-padding section-bg" id="services-section">                
                <div className="container">
                    <div className="row">
                        {sectionTitle && (
                        <div className="col-lg-12 col-12">
                            <h2 className="mb-4">{sectionTitle}</h2>
                        </div>
                        )}
                        {servicesToShow.map((service, index) => (
                        <div className="col-lg-6 col-12" key={index}>
                            <div className="services-thumb">
                                <div className="row">
                                    <div className="col-lg-5 col-md-5 col-12">
                                        <div className="services-image-wrap">
                                            <Link to={`/services/${service.slug}`}>
                                                <img src={service.image} className="services-image img-fluid" alt={service.name} />
                                                <img src={service.hoverImage} className="services-image services-image-hover img-fluid" alt={service.name} />
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-7 col-md-7 col-12 d-flex align-items-center">
                                        <div className="services-info mt-4 mt-lg-0 mt-md-0">
                                            <h4 className="services-title mb-1 mb-lg-2">
                                                <Link className="services-title-link" to={`/services/${service.slug}`}>
                                                    {service.name}
                                                </Link>
                                            </h4>
                                            <p> {service.shortDesc}</p>
                                            <div className="d-flex flex-wrap align-items-center">
                                                <Link to={`/services/${service.slug}`} className="custom-btn btn button button--atlas mt-2 ms-auto">
                                                    <span>Learn More</span>

                                                    <div className="marquee" aria-hidden="true">
                                                        <div className="marquee__inner">
                                                            <span>Learn More</span>
                                                            <span>Learn More</span>
                                                            <span>Learn More</span>
                                                            <span>Learn More</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                        {limit && (
                          <div className="row mt-4">
                            <div className="col-12 text-center">
                            <Link to="/services" className="custom-btn btn button button--atlas">
                                <span>See More</span>
                                <div className="marquee" aria-hidden="true">
                                <div className="marquee__inner">
                                    <span>See More</span>
                                    <span>See More</span>
                                    <span>See More</span>
                                    <span>See More</span>
                                </div>
                                </div>
                            </Link>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
     </section>
  )
}

export default ServicesSection