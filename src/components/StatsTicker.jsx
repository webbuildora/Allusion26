import React from 'react';
import { FiMic } from 'react-icons/fi';

export default function StatsTicker() {
  const items = [
    { num: '600+', label: 'Active Members' },
    { num: '11', label: 'Faculties Represented' },
    { num: '26K+', label: 'Facebook Followers' },
    { num: '16.7K+', label: 'YouTube Subscribers' },
    { num: '100+', label: 'Projects per Year' },
    { num: '3', label: 'Languages' },
    { num: '#1', label: 'Largest Uni Media Org' },
  ];
  
  const doubled = [...items, ...items];
  
  return (
    <div className="stats-ticker">
      <div className="stats-ticker-inner">
        {doubled.map((s, i) => (
          <div key={i} className="stat-item">
            <span className="stat-num">{s.num}</span>
            <span className="stat-label">{s.label}</span>
            <FiMic className="stat-sep-icon" />
          </div>
        ))}
      </div>
    </div>
  );
}
