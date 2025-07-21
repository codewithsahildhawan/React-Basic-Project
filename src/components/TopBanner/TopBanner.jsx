import React from 'react'
import { Link } from 'react-router-dom'

const TopBanner = ({ title, breadcrumbs }) => {
  return (
    <section className="banner-section d-flex justify-content-center align-items-end">
        <div className="section-overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-7 col-12">
                    <h1 className="text-white mb-lg-0">{title}</h1>
                </div>
                {breadcrumbs && (
                    <div className="col-lg-4 col-12 d-flex justify-content-lg-end align-items-center ms-auto">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            {breadcrumbs.map((item) => (
                                <li className={`breadcrumb-item ${item.active ? 'active' : ''}`}>
                                    {item.active ? (
                                        item.label
                                    ) : (
                                        <Link to={item.path}>{item.label}</Link>
                                    )}
                                </li>
                            )
                            )}
                        </ol>
                    </nav>
                </div>
                )}
            </div>
        </div>
    </section>
  )
}

export default TopBanner