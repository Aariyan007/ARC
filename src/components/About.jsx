import React from 'react'
import './About.css'

const stats = [
  { val: '5+', label: 'Integrated Systems' },
  { val: 'AI', label: 'Voice Auth' },
  { val: '30fps', label: 'Live HUD' },
  { val: 'IoT', label: 'Biometrics' },
]

const About = () => (
  <section id="about" className="about">
    <div className="about-inner">
      <div className="about-left reveal-left">
        <p className="eyebrow">About ARC</p>
        <h2 className="section-title">Born from<br />imagination,<br /><em>built for reality</em></h2>
        <div className="about-line" />
        <p className="about-text">
          ARC — Adaptive Reality Core — is a real-time intelligent HUD system born from
          a simple obsession: what if the interfaces we see in sci-fi films were actually real?
        </p>
        <p className="about-text">
          We combined computer vision, embedded IoT hardware, and cutting-edge web technology
          to build something that doesn't just look futuristic — it <em>functions</em> futuristically.
          Every frame is live. Every number is real. Every overlay responds to you.
        </p>
        <div className="about-stats">
          {stats.map(s => (
            <div className="as-item" key={s.label}>
              <span className="as-val">{s.val}</span>
              <span className="as-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="about-right reveal-right">
        <div className="about-quote-card">
          <div className="aq-mark">"</div>
          <p className="aq-text">
            What if the interfaces we see in sci-fi films were actually real?
            That question started ARC.
          </p>
          <div className="aq-line" />
          <span className="aq-attr">— The ARC Team</span>
        </div>

        <div className="about-pills">
          {['Computer Vision', 'IoT Integration', 'Voice AI', 'Real-Time HUD', 'FastAPI', 'ESP32'].map(p => (
            <span key={p} className="about-pill">{p}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default About