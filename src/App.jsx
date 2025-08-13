import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Swap from "./pages/Swap";
import MainLayout from "./Layout/MainLayout";
import About from "./pages/About";

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<Homepage />} />
            <Route path="/swap" element={<Swap />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
