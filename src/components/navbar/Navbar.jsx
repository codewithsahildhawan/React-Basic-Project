import React from 'react';
import { Link } from 'react-router-dom'; // ✅ SPA routing
import content from '../../data/site_content'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
        <img src="/images/logo.png" className="logo img-fluid" alt="Logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {content.menu.map((item, index) => (
                <li key={index} className={`nav-item ${item.children ? 'dropdown' : ''}`}>
                {item.children ? (
                    <>
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id={`dropdown-${index}`}
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        {item.label}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby={`dropdown-${index}`}>
                        {item.children.map((child, cIndex) => (
                        <li key={cIndex}>
                            <Link className="dropdown-item" to={child.path}>
                            {child.label}
                            </Link>
                        </li>
                        ))}
                    </ul>
                    </>
                ) : (
                    <Link className="nav-link" to={item.path}>
                    {item.label}
                    </Link>
                )}
                </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
