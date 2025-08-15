import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero fade-up">
      <h1>
        Africa's First <br />
        <span>AI DeFi Bridge</span>
      </h1>
      <p>
        Swap crypto, buy airtime, send money across 15+ blockchains using 
        simple English. Built for Africa, powered by Wormhole.
      </p>
      
      <div className="hero-buttons">
        <button className="btn-primary">
          Launch App →
        </button>
        <button className="btn-secondary">
          Watch Demo
        </button>
      </div>
      
      <div className="metrics">
        <div>
          <strong>15+</strong>
          <span>Blockchain Networks</span>
        </div>
        <div>
          <strong>$2M+</strong>
          <span>Volume Processed</span>
        </div>
        <div>
          <strong>50+</strong>
          <span>African Countries</span>
        </div>
        <div>
          <strong>99.9%</strong>
          <span>Uptime</span>
        </div>
      </div>
    </section>
  )
}

export default Hero;