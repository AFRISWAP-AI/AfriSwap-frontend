import React, { useState } from 'react';
import SearchableSelect from '../SearchableSelect/SearchableSelect';
import { chains, networks } from '../../data/Chain';
import './ChainNetwork.css';

const ChainNetwork = ({ onSubmit }) => {
  const [selectedChain, setSelectedChain] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState('');
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const newErrors = {};
    
    if (!selectedChain) {
      newErrors.chain = 'Please select a chain';
    }
    if (!selectedNetwork) {
      newErrors.network = 'Please select a network';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onSubmit({ chain: selectedChain, network: selectedNetwork });
  };

  return (
    <div className="chain-container">
      <div className="chain-header">
        <h1>Select Chain and Network</h1>
        <p>Choose your preferred blockchain and network to start swapping</p>
      </div>

      <div className="chain-form">
        <div className="form-group">
          <label>Blockchain Chain *</label>
          <SearchableSelect
            options={chains}
            value={selectedChain}
            onChange={setSelectedChain}
            placeholder="Select a blockchain chain..."
          />
          {errors.chain && <p className="error">{errors.chain}</p>}
        </div>

        <div className="form-group">
          <label>Network *</label>
          <SearchableSelect
            options={networks}
            value={selectedNetwork}
            onChange={setSelectedNetwork}
            placeholder="Select a network..."
          />
          {errors.network && <p className="error">{errors.network}</p>}
        </div>

        <div className="button-wrapper">
          <button onClick={handleNext} className="next-btn">
            Next
            <svg className="next-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
            </svg>
          </button>
        </div>

        {selectedChain && selectedNetwork && (
          <div className="selected-info">
            <p>
              <strong>Selected:</strong> {chains.find(c => c.value === selectedChain)?.label} on {networks.find(n => n.value === selectedNetwork)?.label}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChainNetwork;
