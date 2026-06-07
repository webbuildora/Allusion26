import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';

const OBJECTIVES = [
  "Encourage undergraduates and school students to compete as duos in the field of announcing.",
  "Fulfill the mission of the Official Media & Broadcasting Unit by promoting announcing skills.",
  "Develop individuals with the confidence required to meet future professional demands.",
  "Inspire participants through guidance from reputed announcing industry professionals.",
  "Create a platform where individuals can expand knowledge and skills in announcing.",
  "Encourage participants to pursue their passion while building their own path.",
  "Provide support and guidance expected from the Official Media & Broadcasting Unit.",
  "Promote J'PURA VOICE and the unique concept of ALLUSION'26 among schools & universities.",
];

export default function Objectives() {
  return (
    <section id="objectives">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">Why Allusion'26</span>
          <h2 className="section-title">Project Objectives</h2>
          <div className="section-line" />
          <p className="section-desc">
            Every voice deserves a stage. Allusion'26 is built to discover, nurture, and elevate announcing talent across Sri Lanka.
          </p>
        </div>
        
        <div className="obj-grid">
          {OBJECTIVES.map((obj, i) => (
            <div key={i} className="obj-item">
              <span className="obj-num">{String(i + 1).padStart(2, '0')}</span>
              <p className="obj-text">
                <BsArrowRightCircle className="obj-text-icon" />
                <span>{obj}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
