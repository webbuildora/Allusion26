import React from 'react';
import { BsMicFill } from 'react-icons/bs';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-topline" />
      
      {/* Floating mic decorations with BsMicFill */}
      <BsMicFill className="hero-mic" />
      <BsMicFill className="hero-mic2" />

      <div className="hero-eyebrow">
        Organized by J'PURA VOICE · University of Sri Jayewardenepura
      </div>
      <h1 className="hero-title">
        <span className="hero-title-main">ALLUSION</span>
        <span className="hero-title-year">'26</span>
      </h1>
      <p className="hero-subtitle">Transcription for the Next Big Speech</p>
      <p className="hero-tagline">Trilingual Inter-University & Inter-School Announcing Competition</p>

      <div className="hero-meta">
        <div className="hero-meta-item">
          <span className="hero-meta-label">Date</span>
          <span className="hero-meta-value">July 2026</span>
        </div>
        <div className="hero-meta-sep" />
        <div className="hero-meta-item">
          <span className="hero-meta-label">Venue</span>
          <span className="hero-meta-value">University of Sri Jayewardenepura</span>
        </div>
        <div className="hero-meta-sep" />
        <div className="hero-meta-item">
          <span className="hero-meta-label">Format</span>
          <span className="hero-meta-value">Duo-Based</span>
        </div>
        <div className="hero-meta-sep" />
        <div className="hero-meta-item">
          <span className="hero-meta-label">Languages</span>
          <span className="hero-meta-value">SIN · ENG · TAM</span>
        </div>
      </div>

      <div className="hero-buttons">
        <a href="#register" className="btn-primary">Register Now</a>
        <a href="#about" className="btn-secondary">Learn More</a>
      </div>
    </section>
  );
}
