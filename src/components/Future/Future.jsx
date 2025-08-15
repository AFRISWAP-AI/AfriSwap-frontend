import React from "react";
import { IoPeopleOutline } from "react-icons/io5";
import "./Future.css";

const Future = () => {
  return (
    <section className="future-section">
      <div className="future-content">
        <h1>Ready to Bridge the Future?</h1>
        <p>
          Join the DeFi revolution built for Africa. Start swapping, earning,
          and connecting across blockchains today.
        </p>
      </div>
      <div className="future-buttons">
        <button className="future-btn-primary">Launch AfriSwap AI →</button>
        <button className="future-btn-secondary">
          Join Community <span><IoPeopleOutline /></span>
        </button>
      </div>
    </section>
  );
};

export default Future;