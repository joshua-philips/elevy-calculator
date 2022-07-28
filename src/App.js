import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HowCalculated from "./pages/HowCalculated";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/how" element={<HowCalculated />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
