import React from 'react'
import Navbar from '../../navbar/Navbar'
import content from '../../../data/site_content'

const HomeHeader = () => {
   const { serviceHours, phone } = content.topHeader; // Destructuring for cleaner code


  return (
    <>
      <header className="site-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-12 d-flex flex-wrap">
                        <p className="d-flex d-lg-block d-md-block d-none me-4 mb-0">
                            <i className="bi-clock-fill me-2"></i>
                            <strong className="me-2">{serviceHours} </strong>
                        </p>
                        <p className="site-header-icon-wrap text-white d-flex mb-0 ms-auto">
                            <i className="site-header-icon bi-whatsapp me-2"></i>

                            <a href="tel: 110-220-9800" className="text-white">
                                {phone}
                            </a>
                        </p>
                    </div>

                </div>
            </div>
        </header>
        <Navbar></Navbar>
    </>
  )
}

export default HomeHeader