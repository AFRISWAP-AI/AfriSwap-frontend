
import { createContext, useContext, useState } from 'react';

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState(null);
  const [connecting, setConnecting] = useState(false);

  const connect = async () => {
    setConnecting(true);
    // TODO: Replace with actual wallet connection logic
    // Simulate connection delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setConnected(true);
    setAddress('0x1234567890123456789012345678901234567890');
    setConnecting(false);
  };

  const disconnect = async () => {
    setConnected(false);
    setAddress(null);
  };

  return (
    <WalletContext.Provider value={{ connected, address, connect, disconnect, connecting }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};