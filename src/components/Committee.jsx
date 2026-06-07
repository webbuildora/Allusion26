import React from 'react';
import { FiUser, FiMail, FiPhone } from 'react-icons/fi';

export default function Committee() {
  const committeeMembers = [
    { 
      role: 'Divisional Head — Announcing Division', 
      name: 'Dulara Bandaranayake', 
      email: 'dularabandaranayake@gmail.com', 
      phone: '0784 360 194' 
    },
    { 
      role: 'Chairperson — Allusion\'26', 
      name: 'Achira Adithya Hathurusinghe', 
      email: 'achiradithya@gmail.com', 
      phone: '0707 658 745' 
    },
    { 
      role: 'Finance Head — Allusion\'26', 
      name: 'Hashini Werahara', 
      email: 'hashiniwerahara@gmail.com', 
      phone: '0760 631 679' 
    },
  ];

  return (
    <section id="committee">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">The People Behind Allusion'26</span>
          <h2 className="section-title">Execution Committee</h2>
          <div className="section-line" />
          <p className="section-desc">
            Passionate students who dedicate themselves to making every announcing moment extraordinary.
          </p>
        </div>
        
        <div className="exec-grid">
          {committeeMembers.map((p) => (
            <div key={p.name} className="exec-card">
              <div className="exec-avatar">
                <FiUser />
              </div>
              <span className="exec-role">{p.role}</span>
              <div className="exec-name">{p.name}</div>
              <div className="exec-contact" style={{ marginTop: '0.5rem' }}>
                <a href={`mailto:${p.email}`} className="exec-contact-link">
                  <FiMail />
                  <span>{p.email}</span>
                </a>
                <span className="exec-phone-row">
                  <FiPhone />
                  <span>{p.phone}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
