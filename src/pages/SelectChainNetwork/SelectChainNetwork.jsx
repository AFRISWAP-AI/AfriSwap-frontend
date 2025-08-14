import React from 'react';
import './SelectChainNetwork.css';
import ChainNetwork from '../../components/ChainNetwork/ChainNetwork';

const SelectChainNetwork = ({ navigate }) => {
  const handleSubmit = ({ chain, network }) => {
    navigate('swap', { chain, network });
  };

  return (
    <div className="select-chain-page">
      <div className="content-wrapper">
        <div className="form-container">
          <ChainNetwork onSubmit={handleSubmit} />

          <div className="back-section">
            <button onClick={() => navigate('home')} className="back-btn">
              <svg
                className="back-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectChainNetwork;
