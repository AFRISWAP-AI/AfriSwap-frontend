import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import AboutPage from './pages/About/About';
import SelectChainNetwork from './pages/SelectChainNetwork/SelectChainNetwork';
import Swap from './pages/Swap';
import Navbar from './components/Navbar/Navbar';
import ConnectWallet from './pages/ConnectWallet/ConnectWallet';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/select" element={<SelectChainNetwork />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/connectwallet" element={<ConnectWallet />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
