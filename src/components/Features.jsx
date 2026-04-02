import React from 'react'
import './Footer.css'
import logoImg from '../assets/logo.png'

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <img src={logoImg} alt="ARC" />
        <div>
          <div className="fb-name">ARC</div>
          <div className="fb-tag">Adaptive Reality Core</div>
        </div>
      </div>

      <nav className="footer-nav">
        {['Features', 'How It Works', 'Tech', 'About', 'Team', 'Contact'].map(l => (
          <a key={l} href={`#${l.toLowerCase().replace(/\s+/g,'-')}`}>{l}</a>
        ))}
      </nav>

      <a href="mailto:arconwrist@gmail.com" className="footer-email">
        arconwrist@gmail.com
      </a>
    </div>

    <div className="footer-bottom">
      <span>© 2025 ARC — All rights reserved</span>
      <span>System v2.4.1</span>
    </div>
  </footer>
)

export default Footer