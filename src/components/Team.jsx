import React from 'react'
import './Team.css'

const members = [
  { name: 'Member 1', role: 'Lead Developer', bio: 'Add your bio here.', initials: 'M1', photo: null },
  { name: 'Member 2', role: 'Computer Vision', bio: 'Add your bio here.', initials: 'M2', photo: null },
  { name: 'Member 3', role: 'IoT & Hardware', bio: 'Add your bio here.', initials: 'M3', photo: null },
  { name: 'Member 4', role: 'UI/UX Design', bio: 'Add your bio here.', initials: 'M4', photo: null },
]

const Team = () => (
  <section id="team" className="team">
    <div className="team-inner">
      <div className="team-header reveal">
        <p className="eyebrow">The People</p>
        <h2 className="section-title">Meet the<br /><em>team</em></h2>
        <p className="section-sub">Four builders who turned an idea into a system.</p>
      </div>

      <div className="team-grid">
        {members.map((m, i) => (
          <div className={`team-card reveal delay-${i + 1}`} key={m.name}>
            <div className="tc-photo">
              {m.photo
                ? <img src={m.photo} alt={m.name} />
                : <div className="tc-placeholder">
                    <span className="tc-initials">{m.initials}</span>
                    <span className="tc-placeholder-label">Add photo</span>
                  </div>
              }
              <div className="tc-photo-overlay" />
            </div>
            <div className="tc-info">
              <h3 className="tc-name">{m.name}</h3>
              <span className="tc-role">{m.role}</span>
              <p className="tc-bio">{m.bio}</p>
            </div>
            <div className="tc-number">0{i + 1}</div>
          </div>
        ))}
      </div>

      <p className="team-note reveal delay-2">
        Replace the placeholder names and photos in <code>Team.jsx</code> with your actual details.
      </p>
    </div>
  </section>
)

export default Team