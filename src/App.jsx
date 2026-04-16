import React, { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import TechStack from './components/TechStack'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'

import { initAnimations } from './animations'

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      initAnimations()
    }, 200) // ensures DOM is ready

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <TechStack />
      <About />
      <Contact />
      <Footer />
      <ChatBot />
    </div>
  )
}

export default App