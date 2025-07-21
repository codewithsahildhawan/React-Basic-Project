import React from 'react'
import content from '../../data/site_content'

const AboutSection = () => {
    return (
        <section className="intro-section" id="intro-section">
                <div className="container">
                    <div className="row justify-content-lg-center align-items-center">

                        <div className="col-lg-6 col-12">
                            <h2 className="mb-4">{content.about.title}</h2>

                            <p>{content.about.description}</p>
                        </div>

                        <div className="col-lg-6 col-12 custom-block-wrap">
                            <img src={content.about.image} className="img-fluid" alt={content.about.title} title={content.about.title} />
                        </div>

                    </div>
                </div>
            </section>
    );
}

export default AboutSection;