import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ConnectWallet.css';

const ConnectWallet = ({ navigate }) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    checkWalletConnection();
  }, []);

  const checkWalletConnection = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setConnectedWallet({ address: accounts[0], type: 'MetaMask' });
        }
      } catch (err) {
        console.error('Error checking wallet connection:', err);
      }
    }
  };

  const connectWallet = async (walletType) => {
    if (isConnecting) return;
    setIsConnecting(true);
    setError('');

    try {
      switch (walletType) {
        case 'metamask':
          await connectMetaMask();
          break;
        case 'walletconnect':
          setError('WalletConnect integration coming soon!');
          break;
        case 'coinbase':
          setError('Coinbase Wallet integration coming soon!');
          break;
        default:
          setError('Unsupported wallet type');
      }
    } catch (err) {
      setError(err.message || 'Failed to connect wallet');
    } finally {
      setIsConnecting(false);
    }
  };

  const connectMetaMask = async () => {
    if (!window.ethereum) throw new Error('MetaMask is not installed. Please install it and try again.');

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      if (accounts.length > 0) {
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        setConnectedWallet({ address: accounts[0], type: 'MetaMask', chainId });
        setTimeout(() => navigate('select'), 2000);
      }
    } catch (err) {
      if (err.code === 4001) throw new Error('Please connect to MetaMask.');
      throw new Error('An error occurred connecting to MetaMask.');
    }
  };

  const disconnectWallet = () => {
    setConnectedWallet(null);
    setError('');
  };

  const formatAddress = (address) => `${address.slice(0, 6)}...${address.slice(-4)}`;

  const walletOptions = [
    { id: 'metamask', name: 'MetaMask', description: 'Connect using browser wallet', icon: '🦊', popular: true, available: !!window.ethereum },
    { id: 'walletconnect', name: 'WalletConnect', description: 'Scan QR code with mobile wallet', icon: '📱', popular: true, available: false },
    { id: 'coinbase', name: 'Coinbase Wallet', description: 'Connect using Coinbase Wallet', icon: '💙', popular: false, available: false }
  ];

  if (connectedWallet) {
    return (
      <div className="page connected-page">
        <div className="container">
          <div className="card text-center">
            <div className="icon success-icon">
              <svg viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h1>Wallet Connected!</h1>
            <div className="wallet-info">
              <div className="wallet-type">
                <span>{connectedWallet.type === 'MetaMask' ? '🦊' : '💼'}</span>
                <span>{connectedWallet.type}</span>
              </div>
              <div className="wallet-address">{formatAddress(connectedWallet.address)}</div>
            </div>
            <button className="btn primary" onClick={() => navigate('select')}>Continue to Swap</button>
            <button className="btn secondary" onClick={disconnectWallet}>Disconnect Wallet</button>
            <p className="redirect-text">You'll be redirected to chain selection automatically in a few seconds...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page connect-page">
      <div className="container">
        <div className="card">
          <div className="text-center">
            <div className="icon wallet-icon">👛</div>
            <h1>Connect Your Wallet</h1>
            <p>Choose your preferred wallet to start swapping tokens</p>
          </div>
          {error && <div className="error-box">{error}</div>}
          <div className="wallet-options">
            {walletOptions.map((wallet) => (
              <button
                key={wallet.id}
                onClick={() => connectWallet(wallet.id)}
                disabled={!wallet.available || isConnecting}
                className={`wallet-option ${!wallet.available ? 'disabled' : ''}`}
              >
                <span className="wallet-icon">{wallet.icon}</span>
                <div className="wallet-details">
                  <span className="wallet-name">{wallet.name}</span>
                  {wallet.popular && <span className="badge">Popular</span>}
                  {!wallet.available && <span className="badge gray">Coming Soon</span>}
                  <p className="wallet-description">{wallet.description}</p>
                </div>
              </button>
            ))}
          </div>
          <div className="info-box">
            <h3>New to wallets?</h3>
            <p>A wallet lets you connect to ETH Enugu AfriSwap AI and manage your crypto. We recommend starting with MetaMask.</p>
          </div>
          <Link to="/" className="back-btn">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
