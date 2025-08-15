import './ConnectWalletButton.css';
import React, { useState, useEffect } from 'react';

const ConnectWalletButton = ({ navigate }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    checkWalletConnection();

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      }
    };
  }, []);

  const checkWalletConnection = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          setIsConnected(true);
        }
      } catch (err) {
        console.error('Error checking wallet connection:', err);
      }
    }
  };

  const handleAccountsChanged = (accounts) => {
    if (accounts.length > 0) {
      setWalletAddress(accounts[0]);
      setIsConnected(true);
    } else {
      setWalletAddress('');
      setIsConnected(false);
    }
    setIsDropdownOpen(false);
  };

  const handleChainChanged = () => {
    window.location.reload();
  };

  const handleConnect = () => {
    if (!isConnected) {
      if (navigate) {
        navigate('connect-wallet');
      }
    } else {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setWalletAddress('');
    setIsDropdownOpen(false);
  };

  const formatAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    setIsDropdownOpen(false);
  };

  return (
    <div className="connect-wallet-container">
      <button onClick={handleConnect} className="connect-wallet-btn">
        {isConnected ? (
          <>
            <div className="status-dot"></div>
            <span>{formatAddress(walletAddress)}</span>
            <svg className="dropdown-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </>
        ) : (
          <>
            <svg className="wallet-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v2" />
            </svg>
            <span>Connect Wallet</span>
          </>
        )}
      </button>

      {isConnected && isDropdownOpen && (
        <div className="wallet-dropdown">
          <div className="wallet-dropdown-header">
            <div className="wallet-dropdown-header-icon">🦊</div>
            <div>
              <div className="wallet-dropdown-title">MetaMask</div>
              <div className="wallet-dropdown-status">Connected</div>
            </div>
          </div>

          <div className="wallet-address-section">
            <div className="wallet-address-label">Address</div>
            <div className="wallet-address">{formatAddress(walletAddress)}</div>
          </div>

          <div className="wallet-dropdown-actions">
            <button onClick={copyAddress} className="wallet-action-btn">
              <svg className="wallet-action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Copy Address</span>
            </button>

            <button onClick={handleDisconnect} className="wallet-action-btn disconnect">
              <svg className="wallet-action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Disconnect</span>
            </button>
          </div>
        </div>
      )}

      {isDropdownOpen && (
        <div className="wallet-backdrop" onClick={() => setIsDropdownOpen(false)} />
      )}
    </div>
  );
};

export default ConnectWalletButton;
