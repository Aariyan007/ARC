import React from 'react'
import './Contact.css'

const Contact = () => (
  <section id="contact" className="contact">
    <div className="contact-inner">
      <div className="contact-left reveal-left">
        <p className="eyebrow">Get In Touch</p>
        <h2 className="section-title">Let's talk<br /><em>about ARC</em></h2>
        <div className="contact-line" />
        <p className="contact-desc">
          Have questions about the project? Want to collaborate, contribute, or just
          learn more about how ARC works? We'd love to hear from you.
        </p>
        <a href="mailto:arconwrist@gmail.com" className="contact-email-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          arconwrist@gmail.com
        </a>
      </div>

      <div className="contact-right reveal-right">
        <div className="contact-card">
          <div className="cc-eyebrow">Reach Out Directly</div>
          <h3>Send us a message</h3>
          <p>We respond within 24 hours. For urgent queries, email us directly.</p>
          <a href="mailto:arconwrist@gmail.com" className="cc-btn">
            Open Email
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Contact