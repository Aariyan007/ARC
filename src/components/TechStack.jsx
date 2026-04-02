import React from 'react'
import './TechStack.css'

const stack = [
  { layer: 'Backend', color: '#f45d00', items: ['FastAPI', 'Python 3.11', 'OpenCV', 'MediaPipe', 'Uvicorn'] },
  { layer: 'Frontend', color: '#3b82f6', items: ['React 18', 'Vite', 'JavaScript', 'Canvas API', 'CSS3'] },
  { layer: 'Hardware', color: '#22c55e', items: ['ESP32', 'Heart Rate Sensor', 'Temperature Sensor', 'Camera Module'] },
  { layer: 'AI / Voice', color: '#a855f7', items: ['Porcupine', 'WebRTC VAD', 'ECAPA-TDNN', 'YOLO (planned)'] },
]

const TechStack = () => (
  <section id="tech" className="tech">
    <div className="tech-inner">
      <div className="tech-header reveal">
        <p className="eyebrow">Architecture</p>
        <h2 className="section-title">Built with<br /><em>the best</em></h2>
        <p className="section-sub">A carefully chosen stack for real-time performance.</p>
      </div>

      <div className="tech-grid">
        {stack.map((s, i) => (
          <div className={`tech-layer reveal delay-${i + 1}`} key={s.layer} style={{ '--layer-color': s.color }}>
            <div className="tl-header">
              <span className="tl-dot" />
              <span className="tl-name">{s.layer}</span>
            </div>
            <div className="tl-items">
              {s.items.map(item => (
                <div className="tl-item" key={item}>{item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default TechStack