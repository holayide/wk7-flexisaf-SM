import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import LandingPage from "./pages/landing-page/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="landing" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
