import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import '@cmsgov/design-system/dist/css/index.css';
import './styles/App.css';
// import { Header, USABanner } from '@cmsgov/design-system';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';

// Import pages
import InstructionPage from './pages/InstructionPage';
import ComplainantDetails from './pages/ComplainantDetails';
import ComplaintSelectType from './pages/ComplaintSelectType';

function App() {
  return (
    <Router>
      <div className="ds-l-container flex ds-u-flex-direction--column ds-u-min-height--100vh">
        <Header />
        <main className="  ds-u-padding-bottom--4 ds-u-flex--1">
          <Routes>
            <Route path="/" element={<InstructionPage />} />
            <Route path="/complainant-details" element={<ComplainantDetails />} />
            <Route path="/complaint-type" element={<ComplaintSelectType />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App; 