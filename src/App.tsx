import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortfolioPage from './pages/PortfolioPage';
import DerivifaiGallery from './pages/DerivifaiGallery'; // Make sure this path is correct

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Main Portfolio Landing Page */}
          <Route path="/" element={<PortfolioPage />} />

          {/* Dedicated Page for Derivifai Gallery */}
          <Route path="/derivifai" element={<DerivifaiGallery />} />
          
          {/* Optional: Catch-all route to redirect back home if URL is wrong */}
          <Route path="*" element={<PortfolioPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;