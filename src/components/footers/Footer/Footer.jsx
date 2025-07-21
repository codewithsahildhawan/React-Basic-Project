import React from 'react'
import content from '../../../data/site_content'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
            <div className="container">
                <div className="row">
                    {content.footer.services && (
                        <div className="col-lg-6 col-12 mb-4 mb-lg-0">
                            <h5 className="site-footer-title mb-3">Our Services</h5>
                            <ul className="footer-menu">
                            {content.footer.services.map((item, index) => (
                                <li className="footer-menu-item" key={index}>
                                    <Link to={`/services/${item.slug}`} className="footer-menu-link">
                                        <i className="bi-chevron-double-right footer-menu-link-icon me-2"></i>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            </ul>
                        </div>
                    )}

                    {content.footer.office && (
                    <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-0">
                        {content.footer.office.addressLine1 && content.footer.office.cityStateZip && (
                        <>
                            <h5 className="site-footer-title mb-3">Office</h5>
                            <p className="text-white d-flex mt-3 mb-2">
                                <i className="bi-geo-alt-fill me-2"></i>
                                {content.footer.office.addressLine1}, {content.footer.office.cityStateZip}
                            </p>
                        </>
                        )}

                        {content.footer.office.phone && (
                        <p className="text-white d-flex mb-2">
                            <i className="bi-telephone-fill me-2"></i>

                            <Link to={`tel: ${content.footer.office.phone}`} className="site-footer-link">
                                {content.footer.office.phone}
                            </Link>
                        </p>
                        )}

                        {content.footer.office.email && (
                        <p className="text-white d-flex">
                            <i className="bi-envelope-fill me-2"></i>

                           <Link to href={`mailto:${content.footer.office.email}`} className="site-footer-link">
                                {content.footer.office.email}
                            </Link>
                        </p>
                        )}

                        {content.footer.office.socialIcons && (
                        <ul className="social-icon mt-4">
                            {content.footer.office.socialIcons.twitter && (
                            <li className="social-icon-item">
                                <Link to={content.footer.office.socialIcons.twitter}  target="_blank" className="social-icon-link button button--skoll">
                                    <span></span>
                                    <span className="bi-twitter"></span>
                                </Link>
                            </li>
                            )}
                            {content.footer.office.socialIcons.facebook && (
                            <li className="social-icon-item">
                                <Link to={content.footer.office.socialIcons.facebook}  target="_blank" className="social-icon-link button button--skoll">
                                    <span></span>
                                    <span className="bi-facebook"></span>
                                </Link>
                            </li>
                            )}
                            {content.footer.office.socialIcons.instagram && (
                            <li className="social-icon-item">
                                <Link to={content.footer.office.socialIcons.instagram}  target="_blank" className="social-icon-link button button--skoll">
                                    <span></span>
                                    <span className="bi-instagram"></span>
                                </Link>
                            </li>
                            )}
                        </ul>
                        )}
                    </div>
                    )}
                    {content.footer.serviceHours && (
                    <div className="col-lg-3 col-md-6 col-6 mt-3 mt-lg-0 mt-md-0">
                        <div className="featured-block">
                            <h5 className="text-white mb-3">Service Hours</h5>
                            <p className="text-white mb-0"> {content.footer.serviceHours}</p>
                        </div>
                    </div>
                    )}
                </div>
            </div>
                    
            {content.footerBottom && (
            <div className="site-footer-bottom">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12">
                            <p className="copyright-text mb-0">{content.footerBottom.copyright}</p>
                        </div>
                        
                        <div className="col-lg-6 col-12 text-end">
                            <p className="copyright-text mb-0">
                            Designed by {content.footerBottom.designedBy}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            )}
        </footer>
    </>
  )
}

export default Footer