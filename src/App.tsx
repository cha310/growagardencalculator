import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { FAQPage } from './components/FAQPage';
import { WikiPage } from './components/WikiPage';
import { CropsPage } from './components/CropsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wiki" element={<WikiPage />} />
        <Route path="/crops" element={<CropsPage />} />
        <Route path="/faqs" element={<FAQPage />} />
      </Routes>
    </Router>
  );
}

export default App;