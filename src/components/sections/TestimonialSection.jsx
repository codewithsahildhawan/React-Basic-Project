import React from 'react'
import content from '../../data/site_content'

const TestimonialSection = () => {
  return (
     <section className="testimonial-section section-padding section-bg">
                <div className="section-overlay"></div>

                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 col-12 text-center">
                            <h2 className="text-white mb-4">Happy Customers</h2>
                        </div>

                        {content.testimonials.map((testimonial, index) => (
                            <div className="col-lg-4 col-12" key={index}>
                                <div className="featured-block">
                                <div className="d-flex align-items-center mb-3">
                                    <img src={testimonial.image} className="avatar-image img-fluid" alt={testimonial.name} />

                                    <div className="ms-3">
                                    <h4 className="mb-0">{testimonial.name}</h4>

                                    <div className="reviews-icons mb-1">
                                        {[...Array(5)].map((_, i) => (
                                        <i
                                            key={i}
                                            className={i < testimonial.rating ? "bi-star-fill" : "bi-star"}
                                        ></i>
                                        ))}
                                    </div>
                                    </div>
                                </div>

                                <p className="mb-0">{testimonial.description}</p>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </section>
  )
}

export default TestimonialSection