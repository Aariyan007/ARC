import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export const initAnimations = () => {

  console.log("GSAP INIT")

  // ── SMOOTH SCROLL ─────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'))
      if (!target) return

      e.preventDefault()

      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: target, offsetY: 80 },
        ease: 'power3.inOut'
      })
    })
  })

  // ── PAGE LOAD ─────────────────────────────
  gsap.from('.navbar', {
    y: -60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })

  gsap.from('.hero', {
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: 'power3.out',
    delay: 0.2
  })

  // ── 🔥 UNIVERSAL SCROLL ANIMATION (MAIN FIX) ──
  const sections = document.querySelectorAll(
    '.hero, .features, .how-it-works, .tech-stack, .about, .contact, .footer'
  )

  console.log("Animating elements:", sections)

  sections.forEach((el) => {
    if (!el) return

    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
  })

  // ── PARALLAX ──────────────────────────────
  gsap.to('.hero-orb', {
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5
    },
    y: -80,
    ease: 'none'
  })

  // ── MOUSE EFFECT ──────────────────────────
  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2
    const y = (e.clientY / window.innerHeight - 0.5) * 2

    gsap.to('.hero-orb', {
      x: x * 12,
      y: y * 8,
      duration: 1,
      ease: 'power2.out'
    })
  })

  // ── BUTTON MICRO INTERACTION ──────────────
  document.querySelectorAll('.btn, .hcta-primary, .cc-btn, .nav-cta').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, { scale: 1.04, duration: 0.25, ease: 'power2.out' })
    })
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power2.out' })
    })
    btn.addEventListener('mousedown', () => {
      gsap.to(btn, { scale: 0.97, duration: 0.1, ease: 'power2.out' })
    })
    btn.addEventListener('mouseup', () => {
      gsap.to(btn, { scale: 1.04, duration: 0.15, ease: 'power2.out' })
    })
  })

}