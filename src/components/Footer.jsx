import React from 'react'
import './Footer.css'
import logoImg from '../assets/logo.png'

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <img src={logoImg} alt="ARC" className="footer-logo" />
        <div>
          <div className="footer-name">ARC</div>
          <div className="footer-tagline">Adaptive Reality Core</div>
        </div>
      </div>

<div className="footer-links">
  <a
    href="https://instagram.com"
    className="footer-social"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
    </svg>
  </a>

  <a
    href="https://linkedin.com"
    className="footer-social"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="3"/>
      <line x1="8" y1="11" x2="8" y2="16"/>
      <line x1="8" y1="8" x2="8" y2="8.5"/>
      <line x1="12" y1="16" x2="12" y2="11"/>
      <path d="M12 13.5a2.5 2.5 0 0 1 5 0V16"/>
    </svg>
  </a>
</div>
      <div className="footer-contact">
        <a href="mailto:arconwrist@gmail.com" className="footer-email">arconwrist@gmail.com</a>
      </div>
    </div>

    <div className="footer-bottom">
      <span className="footer-mono">© 2025 ARC — ALL RIGHTS RESERVED</span>
      <span className="footer-mono">SYSTEM v2.4.1</span>
    </div>
  </footer>
)

export default Footer