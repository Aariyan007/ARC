import React, { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import TechStack from './components/TechStack'
import Team from './components/Team'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <TechStack />
      <About />
      <Team />
      <Contact />
      <Footer />
      <ChatBot />
    </div>
  )
}

export default App