import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { FAQPage } from './components/FAQPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faqs" element={<FAQPage />} />
      </Routes>
    </Router>
  );
}

export default App;