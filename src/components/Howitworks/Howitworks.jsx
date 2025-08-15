import React from 'react'
import './Howitworks.css'

const Howitworks = () => {
  return (
   <section className="how-it-works fade-up">
        <h2>How It Works</h2>
        <p className="subtitle">
          Three simple steps to access DeFi across Africa
        </p>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Connect Your Wallet</h3>
            <p>
              Link your MetaMask, Trust Wallet, or any Web3 wallet. We support
              all major wallets.
            </p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Tell Our AI What You Want</h3>
            <p>
              Type "Swap 1 ETH to AVAX" or "Buy 1000 naira airtime". Our AI
              understands natural language.
            </p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>We Handle Everything</h3>
            <p>
              Cross-chain bridging, optimal routing, airtime delivery – all
              automated with AI insights.
            </p>
          </div>
        </div>
      </section>

  )
}

export default Howitworks
