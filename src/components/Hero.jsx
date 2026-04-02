import React, { useEffect, useRef, useState } from 'react'
import './Hero.css'
import logoImg from '../assets/logo.png'

const Hero = () => {
  const canvasRef = useRef(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)

    const draw = (t) => {
      const { width: w, height: h } = canvas
      ctx.clearRect(0, 0, w, h)

      // Subtle dot grid
      ctx.fillStyle = 'rgba(244,93,0,0.15)'
      const gap = 48
      for (let x = gap; x < w; x += gap) {
        for (let y = gap; y < h; y += gap) {
          ctx.beginPath()
          ctx.arc(x, y, 1, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Scan line
      const scanY = ((t * 0.00015) % 1) * h
      const g = ctx.createLinearGradient(0, scanY - 80, 0, scanY + 80)
      g.addColorStop(0, 'rgba(244,93,0,0)')
      g.addColorStop(0.5, 'rgba(244,93,0,0.06)')
      g.addColorStop(1, 'rgba(244,93,0,0)')
      ctx.fillStyle = g
      ctx.fillRect(0, scanY - 80, w, 160)

      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section id="hero" className={`hero ${loaded ? 'loaded' : ''}`}>
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-inner">
        {/* Left column */}
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            <span>System Online — v2.4.1</span>
          </div>

          <h1 className="hero-title">
            <span className="ht-line">Adaptive</span>
            <span className="ht-line ht-line--accent">Reality</span>
            <span className="ht-line">Core</span>
          </h1>

          <p className="hero-desc">
            A real-time AI-powered HUD that merges computer vision,
            embedded IoT hardware, and futuristic interface design
            into one seamless experience.
          </p>

          <div className="hero-ctas">
            <a href="#features" className="hcta-primary">
              Explore Features
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#how-it-works" className="hcta-ghost">Watch how it works</a>
          </div>

          <div className="hero-stats">
            <div className="hstat">
              <span className="hstat-n">30<em>fps</em></span>
              <span className="hstat-l">Live Stream</span>
            </div>
            <div className="hstat-sep" />
            <div className="hstat">
              <span className="hstat-n">AI+IoT</span>
              <span className="hstat-l">Integrated</span>
            </div>
            <div className="hstat-sep" />
            <div className="hstat">
              <span className="hstat-n">360°</span>
              <span className="hstat-l">HUD Coverage</span>
            </div>
          </div>
        </div>

        {/* Right column — visual */}
        <div className="hero-right">
          <div className="hero-orb">
            <div className="orb-ring r1" />
            <div className="orb-ring r2" />
            <div className="orb-ring r3" />
            <div className="orb-core">
              <img src={logoImg} alt="ARC" />
            </div>
            <div className="orb-tag ot1">
              <span className="ot-dot" />Face Tracking
            </div>
            <div className="orb-tag ot2">
              <span className="ot-dot" />Heart Rate: 72bpm
            </div>
            <div className="orb-tag ot3">
              <span className="ot-dot" />Temp: 36.8°C
            </div>
            <div className="orb-tag ot4">
              <span className="ot-dot" />Voice Auth
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}

export default Hero