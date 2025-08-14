import React from "react";
import { FaRegMessage } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";
import "./Features.css";

const Features = () => {
  return (
    <section className="features fade-up">
      <span className="badge">Powered by AI</span>
      <h2>DeFi Made Simple for Africa</h2>
      <p className="subtitle">
        No more complex interfaces or technical jargon. Just tell our AI what
        you want to do, and we handle the rest across multiple blockchains.
      </p>
      <div className="feature-grid">
        <div className="card">
          <div className="icon-box">
            <span className="span-icons">
              <FaRegMessage size={25} />
            </span>
          </div>
          <h3>AI-Powered Commands</h3>
          <p>
            Just say 'Swap 2 AVAX to SUI' and our AI handles everything. No
            complex interfaces.
          </p>
        </div>
        <div className="card">
          <div className="icon-box">
            <span className="span-icons">
              <TfiWorld size={30} />
            </span>
          </div>
          <h3>Cross-Chain Swaps</h3>
          <p>
            Bridge between 15+ blockchains using Wormhole technology. AVAX, SUI,
            ETH, BNB and more.
          </p>
        </div>
        <div className="card">
          <div className="icon-box">
            <span className="span-icons">
              <IoIosPhonePortrait size={30} />
            </span>
          </div>
          <h3>Airtime & Data</h3>
          <p>
            Buy mobile credit across Africa. MTN, Airtel, Safaricom, Vodacom –
            all supported.
          </p>
        </div>
        <div className="card">
          <div className="icon-box">
            <span className="span-icons">
              <FaArrowTrendUp size={30} />
            </span>
          </div>
          <h3>Smart Insights</h3>
          <p>
            AI analyzes market conditions to suggest optimal trading times and
            save you money.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
