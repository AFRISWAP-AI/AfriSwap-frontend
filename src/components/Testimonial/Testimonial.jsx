import React from 'react'
import './Testimonial.css'

const Testimonial = () => {
  return (
    <section className="testimonials fade-up">
        <div className="Testimonial-header">
          <h2>Trusted Across Africa</h2>
          <p>Join thousands of users already using AfricaBridge</p>
        </div>
        <div className="Testimonial-container">
          <div className="Testimonial-card">
            <h5>
              "Finally, a crypto platform that understands Africa. Buying
              airtime with USDC is a game-changer!"
            </h5>
            <div className="testimonial-subtext">
              <p className="My-p1">Kwame Asante</p>
              <p>Ghana</p>
            </div>
          </div>

          <div className="Testimonial-card">
            <h5>
              "The AI assistant makes crypto trading so simple. I can swap
              tokens just by typing what I want."
            </h5>
            <div className="testimonial-subtext">
              <p className="My-p1">Amina Hassan</p>
              <p>Nigeria</p>
            </div>
          </div>

          <div className="Testimonial-card">
            <h5>
              "Best fees I've found for cross-chain swaps. The USSD feature is
              brilliant for my rural customers."
            </h5>
            <div className="testimonial-subtext">
              <p className="My-p1">Thabo Mthembu</p>
              <p>South Africa</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Testimonial
