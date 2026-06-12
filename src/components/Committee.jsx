import React from 'react';
import { FiUser, FiMail, FiPhone } from 'react-icons/fi';

export default function Committee() {
  const committeeMembers = [
    {
      role: 'Divisional Head — Announcing Division',
      name: 'Dulara Bandaranayake',
      email: 'dularabandaranayake@gmail.com',
      phone: '078 436 0194',
      photo: '/Committee/dulra.jpeg'
    },
    {
      role: "Assistant Chairperson — Allusion'26",
      name: 'Achira Adithya Hathurusinghe',
      email: 'achiradithya@gmail.com',
      phone: '070 765 8745',
      photo: '/Committee/achira.jpeg'
    },
    {
      role: "Assistant Chairperson — Allusion'26",
      name: 'Pravijah Ganeshan',
      email: 'pravijahganeshan@gmail.com',
      phone: '076 719 7886',
      photo: 'Committee/pravija.jpeg'
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
                <img src={p.photo} alt={p.name} />
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
