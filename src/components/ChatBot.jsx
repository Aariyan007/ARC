import React, { useState, useRef, useEffect } from 'react'
import './ChatBot.css'
import logoImg from '../assets/logo.png'

const SYSTEM_PROMPT = `You are ARC Assistant — the official AI helper for the ARC (Adaptive Reality Core) project website. You ONLY answer questions related to the ARC project, its features, technology, and the website itself.

Here is everything you know about ARC:

PROJECT: ARC — Real-Time AI-Powered HUD System
ARC is a real-time intelligent HUD (Heads-Up Display) system that combines computer vision, IoT, and web technologies to create a futuristic human-interaction interface.

FEATURES:
1. Real-Time Camera Streaming — Live video via OpenCV, streamed through FastAPI using MJPEG. Optimized for low latency at 30fps.
2. Face Detection & Tracking — MediaPipe detects and tracks face position, providing coordinates to the HUD for dynamic alignment.
3. Biometric IoT Integration — ESP32 microcontroller sends live heart rate and temperature data via HTTP to the FastAPI backend.
4. Dynamic HUD Interface — Built with HTML/CSS/JavaScript Canvas API. Features face tracking overlay, animated targeting, radar visuals, rotating HUD rings, and biometric panels.
5. Voice Authentication — Porcupine wake word engine ("Jarvis") triggers a 5-second recording pipeline with WebRTC VAD silence removal and ECAPA-TDNN speaker verification.
6. Futuristic UI/UX — Dark theme with blue/amber + black color scheme, neon glow styling, smooth animations.

TECH STACK:
- Backend: FastAPI, Python, OpenCV, MediaPipe
- Frontend: React (Vite), JavaScript, Canvas API, CSS3
- Hardware: ESP32, Heart Rate Sensor, Temperature Sensor
- AI/Voice: Porcupine, WebRTC VAD, ECAPA-TDNN

API ENDPOINTS:
- / → Main UI
- /video → Camera stream
- /face → Face position data
- /sensor → Receives ESP32 data
- /sensor-data → Sends data to frontend

DATA FLOW: Camera → OpenCV → FastAPI → Browser HUD | ESP32 → FastAPI → HUD | Face Detection → Coordinates → HUD Alignment

FUTURE PLANS: YOLO object detection, motion tracking radar, audio alerts, AR/VR compatibility, mobile app integration.

CONTACT: For support, email arconwrist@gmail.com

RULES:
- Only answer questions about ARC, its features, tech stack, how it works, the website, or contact info.
- If someone asks something unrelated (weather, general coding help, other projects, etc.), politely say: "I can only help with questions about the ARC project and website. For other queries, feel free to email us at arconwrist@gmail.com"
- Be concise, friendly, and technical when needed.
- Always stay in character as the ARC Assistant.`

const SUGGESTED = [
  'What is ARC?',
  'How does face tracking work?',
  'What sensors does ARC use?',
  'How does voice auth work?',
]

const ChatBot = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hey! I\'m the ARC Assistant. Ask me anything about the ARC project — features, tech stack, how it works, and more. 🚀',
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showSuggested, setShowSuggested] = useState(true)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [open, messages])

  const sendMessage = async (text) => {
    const userText = text || input.trim()
    if (!userText || loading) return

    setInput('')
    setShowSuggested(false)
    const newMessages = [...messages, { role: 'user', content: userText }]
    setMessages(newMessages)
    setLoading(true)

    try {
      const apiMessages = newMessages.map(m => ({
        role: m.role,
        content: m.content,
      }))

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: apiMessages,
        }),
      })

      const data = await response.json()
      const reply = data.content?.[0]?.text || 'Sorry, I couldn\'t get a response. Please try again or email arconwrist@gmail.com'

      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: 'Something went wrong. Please try again or reach us at arconwrist@gmail.com',
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Floating trigger button */}
      <button
        className={`chatbot-trigger ${open ? 'active' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Open ARC Assistant"
      >
        {open ? (
          <span className="trigger-close">✕</span>
        ) : (
          <img src={logoImg} alt="ARC" className="trigger-logo" />
        )}
        {!open && <span className="trigger-ping" />}
      </button>

      {/* Chat window */}
      <div className={`chatbot-window ${open ? 'open' : ''}`}>
        {/* Header */}
        <div className="cb-header">
          <div className="cb-header-left">
            <img src={logoImg} alt="ARC" className="cb-logo" />
            <div>
              <div className="cb-title">ARC Assistant</div>
              <div className="cb-status">
                <span className="status-dot" />
                Online
              </div>
            </div>
          </div>
          <button className="cb-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
        </div>

        {/* Messages */}
        <div className="cb-messages">
          {messages.map((m, i) => (
            <div key={i} className={`cb-msg ${m.role}`}>
              {m.role === 'assistant' && (
                <img src={logoImg} alt="" className="msg-avatar" />
              )}
              <div className="msg-bubble">{m.content}</div>
            </div>
          ))}

          {loading && (
            <div className="cb-msg assistant">
              <img src={logoImg} alt="" className="msg-avatar" />
              <div className="msg-bubble typing">
                <span /><span /><span />
              </div>
            </div>
          )}

          {/* Suggested questions */}
          {showSuggested && messages.length === 1 && (
            <div className="suggested">
              <p className="suggested-label">Quick Questions</p>
              {SUGGESTED.map(s => (
                <button key={s} className="suggested-btn" onClick={() => sendMessage(s)}>
                  {s}
                </button>
              ))}
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="cb-input-wrap">
          <input
            ref={inputRef}
            className="cb-input"
            type="text"
            placeholder="Ask about ARC..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            disabled={loading}
          />
          <button
            className="cb-send"
            onClick={() => sendMessage()}
            disabled={loading || !input.trim()}
            aria-label="Send"
          >
            ↑
          </button>
        </div>

        <div className="cb-footer-note">
          Need more help?{' '}
          <a href="mailto:arconwrist@gmail.com">arconwrist@gmail.com</a>
        </div>
      </div>
    </>
  )
}

export default ChatBot