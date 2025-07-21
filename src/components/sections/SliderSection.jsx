import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const backgrounds = [
  '/images/slideshow/slide1.jpg',
  '/images/slideshow/slide2.jpg',
  '/images/slideshow/slide3.jpg'
];

const rotatingWords = ["Web Development", "Cloud Solutions", "Cybersecurity"];

const SliderSection = () => {
  const [index, setIndex] = useState(0);

  // Change both background and text together
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero-section hero-section-full-height d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${backgrounds[index]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
      }}
    >
      <div className="section-overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-12 text-center mx-auto">
            <h1 className="cd-headline text-white mb-4 pb-2">
              <span>We specialize in </span>
              <span className="cd-word animate-fade">{rotatingWords[index]}</span>
            </h1>

            <Link className="custom-btn btn button button--atlas smoothscroll me-3" to='/about'>
              <span>About Us</span>
              <div className="marquee" aria-hidden="true">
                <div className="marquee__inner">
                  <span>About Us</span><span>About Us</span><span>About Us</span><span>About Us</span>
                </div>
              </div>
            </Link>

            <Link className="custom-btn custom-border-btn custom-btn-bg-white btn button button--pan smoothscroll" to="/services">
              <span>Explore Services</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom SVG wave */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fillOpacity="1" d="M0,224L40,229.3C80,235,160,245,240,250.7C320,256,400,256,480,240C560,224,640,192,720,176C800,160,880,160,960,138.7C1040,117,1120,75,1200,80C1280,85,1360,139,1400,165.3L1440,192L1440,320L0,320Z"></path>
      </svg>
    </section>
  );
};

export default SliderSection;
