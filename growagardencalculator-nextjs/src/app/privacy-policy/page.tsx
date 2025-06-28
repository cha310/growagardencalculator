import { Metadata } from 'next';
import { PrivacyPolicyPage } from '@/components/PrivacyPolicyPage';
import { PageLayout } from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Grow a Garden Calculator Privacy Policy',
  description: 'Grow a Garden Calculator website privacy policy detailing how we collect, use and protect user data.',
  keywords: 'privacy policy, data protection, grow a garden calculator, user privacy',
  openGraph: {
    title: 'Grow a Garden Calculator Privacy Policy',
    description: 'Grow a Garden Calculator website privacy policy detailing how we collect, use and protect user data',
    url: 'https://www.growagardencalculator.me/privacy-policy',
    images: [
      {
        url: '/icons/growagardencalculator.png',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow a Garden Calculator Privacy Policy',
    description: 'Grow a Garden Calculator website privacy policy detailing how we collect, use and protect user data',
    images: ['/icons/growagardencalculator.png'],
  },
};

export default function PrivacyPolicy() {
  return (
    <PageLayout>
      <PrivacyPolicyPage />
    </PageLayout>
  );
} 