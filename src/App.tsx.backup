import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageLayout } from './components/PageLayout';
import { HomePage } from './components/HomePage';
import { FAQPage } from './components/FAQPage';
import { WikiPage } from './components/WikiPage';
import { CropsPage } from './components/CropsPage';
import { PetsPage } from './components/PetsPage';
import { GearsPage } from './components/GearsPage';
import { EggsPage } from './components/EggsPage';
import { CodesPage } from './components/CodesPage';
import { StockPage } from './components/StockPage';
import { MutationsPage } from './components/MutationsPage';
import { ValuesPage } from './components/ValuesPage';
import { EventsPage } from './components/EventsPage';
import { SummerHarvestEventPage } from './components/SummerHarvestEventPage';
import { EasterEvent2025Page } from './components/EasterEvent2025Page';
import { BizzyBeeEventPage } from './components/BizzyBeeEventPage';
import { LunarGlowEventPage } from './components/LunarGlowEventPage';
import { BloodMoonEventPage } from './components/BloodMoonEventPage';
import { AngryPlantEventPage } from './components/AngryPlantEventPage';
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
          <Route path="/grow-a-garden-wiki-pets" element={<PetsPage />} />
          <Route path="/grow-a-garden-wiki-gears" element={<GearsPage />} />
          <Route path="/grow-a-garden-wiki-eggs" element={<EggsPage />} />
          <Route path="/grow-a-garden-wiki-mutations" element={<MutationsPage />} />
          <Route path="/grow-a-garden-values" element={<ValuesPage />} />
          <Route path="/grow-a-garden-codes" element={<CodesPage />} />
          <Route path="/grow-a-garden-stock" element={<StockPage />} />
          <Route path="/grow-a-garden-events" element={<EventsPage />} />
          <Route path="/grow-garden-summer-harvest" element={<SummerHarvestEventPage />} />
          <Route path="/grow-garden-Easter-Event-2025" element={<EasterEvent2025Page />} />
          <Route path="/grow-garden-Bizzy-Bee-Event" element={<BizzyBeeEventPage />} />
          <Route path="/grow-garden-Lunar-Glow-Event" element={<LunarGlowEventPage />} />
          <Route path="/grow-garden-Blood-Moon-Event" element={<BloodMoonEventPage />} />
          <Route path="/grow-garden-Angry-Plant-Event" element={<AngryPlantEventPage />} />
          <Route path="/grow-a-garden-faqs" element={<FAQPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;