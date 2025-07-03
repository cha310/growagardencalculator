import { Metadata } from 'next';
import { PrivacyPolicyPage } from '@/components/PrivacyPolicyPage';
import { PageLayout } from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy - Grow a Garden Calculator | Garden Calculator Privacy Terms',
  description: 'Grow a Garden Calculator privacy policy, learn how we collect, use and protect your personal information.',
  keywords: 'privacy policy, personal information protection, data security',
  openGraph: {
    title: 'Privacy Policy - Grow a Garden Calculator',
    description: 'Grow a Garden Calculator privacy policy, learn how we protect your personal information',
    url: 'https://www.growagardencalculator.me/privacy-policy',
  },
};

export default function PrivacyPolicy() {
  return (
      <PrivacyPolicyPage />
  );
} 