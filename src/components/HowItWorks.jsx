import React from 'react'
import './HowItWorks.css'

const steps = [
  { num: '01', title: 'Camera Capture', desc: 'OpenCV grabs each frame from the live camera at 30fps with minimal CPU overhead.' },
  { num: '02', title: 'Face Analysis', desc: 'MediaPipe detects your face and extracts precise landmark coordinates every frame.' },
  { num: '03', title: 'Sensor Data', desc: 'ESP32 pushes heart rate and temperature readings to FastAPI via HTTP POST in real-time.' },
  { num: '04', title: 'Backend Fusion', desc: 'FastAPI merges all three streams — video, face data, and biometrics — into one unified feed.' },
  { num: '05', title: 'HUD Rendering', desc: 'The frontend Canvas API assembles everything into a live, animated futuristic overlay.' },
  { num: '06', title: 'Voice Layer', desc: 'Porcupine waits for "Jarvis." On wake, ECAPA-TDNN verifies your voice identity.' },
]

const HowItWorks = () => (
  <section id="how-it-works" className="hiw">
    <div className="hiw-inner">
      <div className="hiw-header reveal">
        <p className="eyebrow">Data Flow</p>
        <h2 className="section-title">How it<br /><em>works</em></h2>
        <p className="section-sub">Three streams. One unified HUD.</p>
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
        {['Camera', 'FastAPI', 'HUD', 'ESP32', 'Voice AI'].map((node, i, arr) => (
          <React.Fragment key={node}>
            <div className={`flow-node ${node === 'HUD' ? 'flow-node--center' : ''}`}>
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