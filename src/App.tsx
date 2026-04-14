import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PortfolioPage from './pages/PortfolioPage';
import DerivifaiGallery from './pages/DerivifaiGallery'; 
import RootToolGallery from './pages/RootToolGallery'; // 1. Import the new gallery

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Main Portfolio Landing Page */}
          <Route path="/" element={<PortfolioPage />} />

          {/* Dedicated Page for Derivifai Gallery */}
          <Route path="/derivifai" element={<DerivifaiGallery />} />

          {/* 2. Dedicated Page for RootTool Gallery */}
          <Route path="/roottool" element={<RootToolGallery />} />
          
          {/* 3. Catch-all: Redirects to home instead of just rendering it */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;