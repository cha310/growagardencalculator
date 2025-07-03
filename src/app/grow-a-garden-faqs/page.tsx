import { Metadata } from 'next';
import { FAQPage } from '../../components/FAQPage';
import { PageLayout } from '../../components/PageLayout';

export const metadata: Metadata = {
  title: 'Grow a Garden FAQ - Frequently Asked Questions | Garden Game Help',
  description: 'Grow a Garden game frequently asked questions and answers, including beginner guides, game mechanics, problem solutions and more. Find the answers you need quickly!',
  keywords: 'grow a garden faq, garden FAQ, game help, frequently asked questions, beginner guide, game guide',
  openGraph: {
    title: 'Grow a Garden FAQ - Frequently Asked Questions',
    description: 'Grow a Garden game frequently asked questions and answers, including beginner guides, game mechanics, problem solutions',
    url: '/grow-a-garden-faqs',
  },
};

export default function GrowAGardenFAQs() {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <FAQPage />
    </div>
  );
} 