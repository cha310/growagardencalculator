import { Metadata } from 'next';
import { TermsOfServicePage } from '@/components/TermsOfServicePage';
import { PageLayout } from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Grow a Garden Calculator Terms of Service',
  description: 'Grow a Garden Calculator website terms of service detailing user rights and obligations when using the website.',
  keywords: 'terms of service, user agreement, grow a garden calculator, website terms',
  openGraph: {
    title: 'Grow a Garden Calculator Terms of Service',
    description: 'Grow a Garden Calculator website terms of service detailing user rights and obligations',
    url: 'https://www.growagardencalculator.me/terms-of-service',
    images: [
      {
        url: '/icons/growagardencalculator.png',
        width: 1200,
        height: 630,
        alt: 'Terms of Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow a Garden Calculator Terms of Service',
    description: 'Grow a Garden Calculator website terms of service detailing user rights and obligations',
    images: ['/icons/growagardencalculator.png'],
  },
};

export default function TermsOfService() {
  return (
    <PageLayout>
      <TermsOfServicePage />
    </PageLayout>
  );
} 