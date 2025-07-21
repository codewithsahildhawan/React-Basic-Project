import React from 'react'
import content from '../../data/site_content'

const PartnerSection = () => {
  return (
    <section className="partners-section">
                <div className="container">
                    <div className="row justify-content-center align-items-center">

                        <div className="col-lg-12 col-12">
                            <h4 className="partners-section-title bg-white shadow-lg">Trusted by companies</h4>
                        </div>

                        {content.partners.map((partner,index) => (
                        <div className="col-lg-2 col-md-4 col-6" key={index}>
                            <img src={partner} className="partners-image img-fluid" />
                        </div>
                        ))}
                        

                    </div>
                </div>
            </section>
  )
}

export default PartnerSection