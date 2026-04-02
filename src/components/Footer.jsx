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
        {['Features', 'How It Works', 'Tech Stack', 'About', 'Contact'].map(l => (
          <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}>{l}</a>
        ))}
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