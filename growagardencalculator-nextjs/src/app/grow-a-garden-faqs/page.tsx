import { Metadata } from 'next';
import { FAQPage } from '@/components/FAQPage';
import { PageLayout } from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Grow a Garden FAQ - Frequently Asked Questions',
  description: 'Frequently asked questions about Grow a Garden game, including game mechanics, crop growing, pet care, gear usage and more helpful answers.',
  keywords: 'grow a garden faq, frequently asked questions, game help, farming game guide, roblox game help',
  openGraph: {
    title: 'Grow a Garden FAQ - Frequently Asked Questions',
    description: 'Frequently asked questions about Grow a Garden game mechanics, crop growing, pet care and more',
    url: 'https://www.growagardencalculator.me/grow-a-garden-faqs',
    images: [
      {
        url: '/icons/growagardencalculator.png',
        width: 1200,
        height: 630,
        alt: 'Grow a Garden FAQ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow a Garden FAQ - Frequently Asked Questions',
    description: 'Frequently asked questions about Grow a Garden game mechanics, crop growing, pet care and more',
    images: ['/icons/growagardencalculator.png'],
  },
};

export default function GrowAGardenFAQs() {
  return (
    <PageLayout>
      <FAQPage />
    </PageLayout>
  );
} 