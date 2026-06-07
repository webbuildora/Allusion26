import React from 'react';
import { FiMic } from 'react-icons/fi';
import { GiMicrophone } from 'react-icons/gi';

export default function About() {
  return (
    <section id="about">
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-text">
            <div className="about-badge">
              <span>
                <FiMic /> Announcing Division · J'PURA VOICE
              </span>
            </div>
            
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              <span className="section-eyebrow">What is Allusion'26?</span>
              <h2 className="section-title">The Stage for<br />Every Voice</h2>
              <div className="section-line" style={{ margin: '0.8rem 0' }} />
            </div>
            
            <p>
              <strong>ALLUSION'26</strong> is a trilingual inter-university and inter-school announcing competition organized by the Announcing Division of J'PURA VOICE — the Official Media &amp; Broadcasting Unit of the University of Sri Jayewardenepura.
            </p>
            <p>
              The project aims to create a platform for talented personalities while enhancing the announcing and presentation skills of school students and university undergraduates in <strong>Sinhala, English, and Tamil</strong> through a duo-based concept.
            </p>
            <p>
              J'PURA VOICE is the largest university media organization in Sri Lanka with over <strong>600+ active members</strong> across 11 faculties, operating through Announcing, Debating, Dubbing, Filming &amp; Programming, and News Broadcasting divisions.
            </p>

            <div className="about-stats">
              {[
                ['600+', 'Active Members'],
                ['11', 'Faculties'],
                ['26K+', 'Followers'],
                ['100+', 'Annual Projects']
              ].map(([num, label]) => (
                <div className="astat" key={label}>
                  <span className="astat-num">{num}</span>
                  <span className="astat-label">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-visual">
            <div className="about-ring" />
            <div className="about-ring2" />
            <div className="about-mic-wrap">
              <GiMicrophone 
                style={{ 
                  fontSize: '9rem', 
                  color: 'var(--amber)', 
                  filter: 'drop-shadow(0 0 40px rgba(212,135,10,0.4))' 
                }} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
