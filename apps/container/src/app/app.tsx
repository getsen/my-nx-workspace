import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './app.css';

// Loading component
const LoadingFallback = () => (
  <div className="loading">
    <p>Loading Micro Frontend...</p>
  </div>
);

// Lazy load MFEs using dynamic imports with Module Federation
// @ts-expect-error - Module Federation remote imports
const MFE1 = lazy(() => import('mfe1/App'));
// @ts-expect-error - Module Federation remote imports
const MFE2 = lazy(() => import('mfe2/App'));

export const App = () => {
  return (
    <BrowserRouter>
      <div className="container-app">
        <nav className="navbar">
          <h1>Container - Micro Frontend Shell</h1>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mfe1">MFE 1</Link>
            </li>
            <li>
              <Link to="/mfe2">MFE 2</Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mfe1/*" element={<MFE1Wrapper />} />
            <Route path="/mfe2/*" element={<MFE2Wrapper />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

const Home = () => (
  <div className="home">
    <h2>Welcome to the Micro Frontend Container</h2>
    <p>Navigate to view the micro frontends:</p>
    <ul>
      <li>
        <strong>MFE1</strong> - Remote Micro Frontend 1 (port 4201)
      </li>
      <li>
        <strong>MFE2</strong> - Remote Micro Frontend 2 (port 4202)
      </li>
    </ul>
  </div>
);

const MFE1Wrapper = () => (
  <Suspense fallback={<LoadingFallback />}>
    <MFE1 />
  </Suspense>
);

const MFE2Wrapper = () => (
  <Suspense fallback={<LoadingFallback />}>
    <MFE2 />
  </Suspense>
);

export default App;
