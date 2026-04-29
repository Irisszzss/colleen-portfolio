import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Import your components from the barrel file
import { Navbar, Footer, ScrollToTop, Loader } from './components'; 

const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const DerivifaiGallery = lazy(() => import('./pages/DerivifaiGallery'));
const RootToolGallery = lazy(() => import('./pages/RootToolGallery'));

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Logic-only component, usually goes here */}
      <div className="App">
        <Navbar />
        
        <Suspense fallback={<Loader />}> 
          <Routes>
            <Route path="/" element={<PortfolioPage />} />
            <Route path="/derivifai" element={<DerivifaiGallery />} />
            <Route path="/roottool" element={<RootToolGallery />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </Router>
  );
}

export default App;