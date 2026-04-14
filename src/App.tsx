import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const DerivifaiGallery = lazy(() => import('./pages/DerivifaiGallery'));
const RootToolGallery = lazy(() => import('./pages/RootToolGallery'));

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <Routes>
            <Route path="/" element={<PortfolioPage />} />
            <Route path="/derivifai" element={<DerivifaiGallery />} />
            <Route path="/roottool" element={<RootToolGallery />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;