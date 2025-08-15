<<<<<<< HEAD
import React from "react";
import Homepage from "./pages/Homepage/Homepage";
import AboutPage from "./pages/About/About";
import SelectChainNetwork from "./pages/SelectChainNetwork/SelectChainNetwork";
import Swap from "./pages/Swap";

const useRouter = () => {
  const [currentRoute, setCurrentRoute] = React.useState(() => {
    const path = window.location.pathname;
    const params = new URLSearchParams(window.location.search);
    return {
      path: path === "/" ? "home" : path.substring(1),
      params: Object.fromEntries(params),
    };
  });

  const navigate = (path, params = {}) => {
    const route = path === "/" ? "home" : path;
    setCurrentRoute({ path: route, params });

    const searchParams = new URLSearchParams(params);
    const url =
      path === "/"
        ? "/"
        : `/${route}${
            searchParams.toString() ? "?" + searchParams.toString() : ""
          }`;
    window.history.pushState(null, "", url);
  };

  React.useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const params = new URLSearchParams(window.location.search);
      setCurrentRoute({
        path: path === "/" ? "home" : path.substring(1),
        params: Object.fromEntries(params),
      });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return { currentRoute, navigate };
};

const App = () => {
  const { currentRoute, navigate } = useRouter();

  const renderPage = () => {
    switch (currentRoute.path) {
      case "home":
        return <Homepage navigate={navigate} />;
      case "about":
        return <AboutPage />;
      case "select":
        return <SelectChainNetwork navigate={navigate} />;
      case "swap":
        return <Swap navigate={navigate} params={currentRoute.params} />;
      default:
        return <Homepage navigate={navigate} />;
    }
  };
  console.log("Current route:", currentRoute.path);

  return <div className="min-h-screen bg-gray-50">{renderPage()}</div>;
=======
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
>>>>>>> Zee
};

export default App;
