import React from 'react';
import './SelectChainNetwork.css';
import { Link } from 'react-router-dom';
import ChainNetwork from '../../components/ChainNetwork/ChainNetwork';

const SelectChainNetwork = () => {
  const handleSubmit = ({ chain, network }) => {
    // We'll update this navigation later when swap route is set up
    console.log('Selected:', chain, network);
  };

  return (
    <div className="select-chain-page">
      <div className="content-wrapper">
        <div className="form-container">
          <ChainNetwork onSubmit={handleSubmit} />

          <div className="back-section">
            <Link to="/" className="back-btn">
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectChainNetwork;
