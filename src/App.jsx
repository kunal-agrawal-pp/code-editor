import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import NotFound from './pages/NotFoundPage';
import Home from './pages/Home';
// import Loading from './components/Loading';

// Lazy loading components
// const Home = lazy(() => import('./pages/Home'));

const App = () => {
  return (
    <Router>
      <main>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
};

export default App;