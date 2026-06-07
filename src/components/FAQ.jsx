import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FAQS = [
  {
    q: "Who can participate?",
    a: "Both university undergraduates and school students are eligible. Participants compete as duos."
  },
  {
    q: "What is the duo-based concept?",
    a: "Two participants team up and compete together on stage across all rounds of the competition."
  },
  {
    q: "In which languages can we compete?",
    a: "Sinhala, English, or Tamil. Each language track is judged separately."
  },
  {
    q: "Where and when is Allusion'26?",
    a: "July 2026 at the University of Sri Jayewardenepura."
  },
  {
    q: "How do I register?",
    a: "Fill in the registration form in the Register section above. Both duo partners' details are required."
  },
  {
    q: "What is J'PURA VOICE?",
    a: "The Official Media & Broadcasting Unit of the University of Sri Jayewardenepura — the largest university media organization in Sri Lanka with 600+ members across 11 faculties."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="alt-bg">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">Common Questions</span>
          <h2 className="section-title">FAQ</h2>
          <div className="section-line" />
        </div>
        
        <div className="faq-list">
          {FAQS.map((item, i) => (
            <div key={i} className="faq-item">
              <button 
                className="faq-q" 
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span className="faq-icon">
                  {open === i ? <FiMinus /> : <FiPlus />}
                </span>
              </button>
              <div className={`faq-a${open === i ? ' open' : ''}`}>
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
