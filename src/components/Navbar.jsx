import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo.jpg';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm py-2">
      <div className="container">
        <a 
          className="navbar-brand d-flex align-items-center ms-2 ms-md-4" 
          href="/" 
          onClick={handleHomeClick}
          style={{ cursor: 'pointer' }}
        >
          <img 
            src={logoImg} 
            alt="KIOU Logo" 
            style={{ height: '70px', width: 'auto', objectFit: 'contain' }} 
          />
        </a>
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
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center gap-3">
            <li className="nav-item">
              <a 
                className="nav-link fw-semibold" 
                href="/" 
                onClick={handleHomeClick} 
                style={{ cursor: 'pointer' }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="/#founder">Founder</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="/#about">About KIOU</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="/#faculty">Faculty</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="/#services">Courses & Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="/#clinical-training">Clinical Training</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="/#gallery">Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="/#faqs">FAQs</a>
            </li>
            <li className="nav-item">
              <Link 
                to="/contact" 
                className="btn btn-primary rounded-pill px-4 text-white fw-semibold"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}