import './About.css';
import { FaLock } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa";
import { GoRuby } from "react-icons/go";
import { LuAlarmClock } from "react-icons/lu";

const AboutPage = () => {
  const features = [
    { title: 'Secure Token Swaps', description: 'Advanced security protocols protect your assets during every transaction', icon: <FaLock /> },
    { title: 'Multi-Chain Support', description: 'Ethereum, Polygon, BSC, Avalanche, and Fantom networks supported', icon: <TbWorld /> },
    { title: 'Real-Time Pricing', description: 'Live market data ensures you get the best possible swap rates', icon: <FaArrowTrendUp /> },
    { title: 'AI-Powered Suggestions', description: 'Smart routing algorithms find the most efficient swap paths', icon: <FaRobot /> },
    { title: 'Low Transaction Fees', description: 'Competitive fees across all networks with transparent pricing', icon: <GoRuby /> },
    { title: '24/7 Availability', description: 'Trade anytime with our always-on decentralized platform', icon: <LuAlarmClock /> }
  ];

  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-section">
          <h1 className="about-title">About AfriSwap</h1>
          <p className="about-paragraph">
            AfriSwap is a decentralized exchange platform that enables seamless token swapping across multiple blockchain networks. Our mission is to bridge the gap between different blockchain ecosystems, providing users with a unified, secure, and efficient trading experience.
          </p>
          <p className="about-paragraph">
            Built on the principles of decentralization and user empowerment, AfriSwap eliminates the complexities traditionally associated with cross-chain trading. Whether you're a DeFi veteran or new to crypto, our platform provides the tools and infrastructure you need to swap tokens with confidence.
          </p>
        </div>

        <div className="features-section">
          <h2 className="features-title">Platform Features</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mission-section">
          <h2 className="mission-title">Our Mission</h2>
          <p className="mission-text">
            To democratize cross-chain trading by providing a secure, efficient, and user-friendly platform that makes decentralized finance accessible to everyone, regardless of their technical expertise or blockchain preference.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value blue">5+</div>
            <div className="stat-label">Blockchain Networks</div>
          </div>
          <div className="stat-card">
            <div className="stat-value green">$10M+</div>
            <div className="stat-label">Total Volume Traded</div>
          </div>
          <div className="stat-card">
            <div className="stat-value purple">50K+</div>
            <div className="stat-label">Successful Swaps</div>
          </div>
          <div className="stat-card">
            <div className="stat-value red">99.9%</div>
            <div className="stat-label">Uptime</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
