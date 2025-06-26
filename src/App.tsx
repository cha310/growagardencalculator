import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageLayout } from './components/PageLayout';
import { HomePage } from './components/HomePage';
import { FAQPage } from './components/FAQPage';
import { WikiPage } from './components/WikiPage';
import { CropsPage } from './components/CropsPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsOfServicePage } from './components/TermsOfServicePage';

function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/grow-a-garden-wiki" element={<WikiPage />} />
          <Route path="/grow-a-garden-wiki-crops" element={<CropsPage />} />
          <Route path="/grow-a-garden-faqs" element={<FAQPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;