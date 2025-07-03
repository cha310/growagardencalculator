import { Metadata } from 'next';
import { TermsOfServicePage } from '@/components/TermsOfServicePage';
import { PageLayout } from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Terms of Service - Grow a Garden Calculator | Garden Calculator Terms of Use',
  description: 'Grow a Garden Calculator terms of service, understand our service terms and user agreements.',
  keywords: 'terms of service, service terms, user agreement, terms of use',
  openGraph: {
    title: 'Terms of Service - Grow a Garden Calculator',
    description: 'Grow a Garden Calculator terms of service and user agreements',
    url: 'https://www.growagardencalculator.me/terms-of-service',
  },
};

export default function TermsOfService() {
  return (
      <TermsOfServicePage />
  );
} 