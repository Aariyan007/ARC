import React from 'react'
import './HowItWorks.css'

const steps = [
  {
    num: '01',
    title: 'Wake from Your Wrist',
    desc: 'Your ESP32 wristband has a built-in mic that continuously listens for the wake word "Arc" using Porcupine — a lightweight on-device engine. No internet needed to wake. Battery impact is near zero since it runs on the microcontroller, not your laptop.'
  },
  {
    num: '02',
    title: 'Noise Cancellation',
    desc: 'In a crowded classroom, café, or street — ARC still hears you clearly. WebRTC VAD (Voice Activity Detection) strips background noise in real time before your voice ever reaches the AI. Only clean, isolated speech gets processed.'
  },
  {
    num: '03',
    title: 'Voice Identity Verified',
    desc: 'ECAPA-TDNN — a deep neural network trained on speaker embeddings — compares your voice signature against your registered profile. If it doesn\'t match, Arc stays silent. No false triggers from roommates, strangers, or recordings.'
  },
  {
    num: '04',
    title: 'Whisper Transcribes',
    desc: 'OpenAI Whisper runs locally on your laptop — no cloud, no API call, no data leaving your machine. It converts your speech to text with high accuracy even with accents or casual speech. The transcript is ready in under a second.'
  },
  {
    num: '05',
    title: 'Gemini Understands Context',
    desc: 'The transcript goes to Gemini 1.5 Flash along with your conversation history and memory. Arc knows what you said yesterday, what projects you\'re working on, your habits and preferences. It doesn\'t just answer — it responds like someone who knows you.'
  },
  {
    num: '06',
    title: 'Arc Acts on Your Laptop',
    desc: 'Arc runs as a background process 24/7 on your Mac. It can open and close apps, search and manage files, read and send emails, write code, build and deploy projects, set reminders, summarise PDFs — all through natural voice commands.'
  },
  {
    num: '07',
    title: 'Response Streams to Your Ear',
    desc: 'The reply is converted to speech using Mac\'s built-in Daniel voice and streamed via Bluetooth to your earphones connected to the wristband. You hear Arc respond naturally — with personality, humour, and context — within seconds of speaking.'
  },
  {
    num: '08',
    title: 'HUD for Verified Users Only',
    desc: 'If you\'re using ARC\'s visual HUD — a live camera overlay with face tracking and biometrics — it only activates and displays data for faces that pass voice or face verification. Unrecognised people see nothing. Your data stays yours.'
  },
]

const HowItWorks = () => (
  <section id="how-it-works" className="hiw">
    <div className="hiw-inner">
      <div className="hiw-header reveal">
        <p className="eyebrow">How It Works</p>
        <h2 className="section-title">Speak once.<br /><em>Arc handles the rest.</em></h2>
        <p className="section-sub">
          A wristband on your wrist. An AI running on your laptop. A voice in your ear.
          Here's exactly how it all connects.
        </p>
      </div>

      <div className="hiw-steps">
        {steps.map((s, i) => (
          <div className={`hiw-step reveal delay-${(i % 3) + 1}`} key={s.num}>
            <div className="hiw-step-num">{s.num}</div>
            <div className="hiw-step-body">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="hiw-flow reveal delay-2">
        {[
          'Wristband',
          'Noise Filter',
          'Voice Auth',
          'Whisper',
          'Arc AI',
          'Laptop Control',
          'Earphones'
        ].map((node, i, arr) => (
          <React.Fragment key={node}>
            <div className={`flow-node ${node === 'Arc AI' ? 'flow-node--center' : ''}`}>
              <span>{node}</span>
            </div>
            {i < arr.length - 1 && <div className="flow-connector">—</div>}
          </React.Fragment>
        ))}
      </div>

    </div>
  </section>
)

export default HowItWorks