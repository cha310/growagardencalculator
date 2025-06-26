import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <Helmet>
        <title>Privacy Policy - Grow a Garden Calculator</title>
        <meta name="description" content="Privacy policy for Grow a Garden Calculator - learn how we protect your data and what information we collect when you use our Roblox calculator tool." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-yellow-300 mb-2">Privacy Policy</h1>
            <p className="text-gray-300 text-lg">How we handle your data at Grow a Garden Calculator</p>
            <p className="text-gray-400 text-sm mt-2">Effective Date: June 25, 2025</p>
          </div>

          {/* Content */}
          <div className="bg-gray-800 rounded-lg p-8 space-y-8">
            <div>
              <p className="text-yellow-300 font-semibold mb-2">Effective Date: June 25, 2025</p>
              <p>
                Welcome to growagardencalculator.me. This privacy policy outlines how we collect, use, and protect your information while you explore our content about Grow a Garden Calculator.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="text-green-400 font-semibold mb-2">a. Personal Data:</h3>
                  <p>
                    We may collect personal information that you voluntarily provide while interacting with our Grow a Garden Calculator website, such as your name and email address when you subscribe to updates or contact our support team.
                  </p>
                </div>
                <div>
                  <h3 className="text-green-400 font-semibold mb-2">b. Non-Personal Data:</h3>
                  <p>
                    We use web cookies and analytics tools to collect non-personal data about how visitors interact with our Grow a Garden Calculator content and features. This helps us improve your experience and optimize our website.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">2. Use of Your Information</h2>
              <p>
                We use collected information to enhance your experience with our Grow a Garden Calculator website and improve our content. This includes personalizing content, analyzing site usage, and providing game updates. Your information is not shared with third parties except as required for basic site analytics and essential services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">3. Data Protection</h2>
              <p>
                We implement industry-standard security measures to protect your data while you explore our Grow a Garden Calculator content. This includes secure SSL encryption, regular security audits, and strict data access controls. Your privacy and security are paramount to us.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">4. Updates to This Privacy Policy</h2>
              <p>
                This privacy policy may be updated periodically to reflect changes in our practices or legal requirements. All changes will be posted on this page with an updated effective date, and significant changes will be notified through our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">5. Contact Us</h2>
              <p>
                If you have questions about our privacy policy or how we handle your data while using our Grow a Garden Calculator website, please contact us at{' '}
                <a href="mailto:support@growagardencalculator.me" className="text-green-400 hover:text-green-300 underline">
                  support@growagardencalculator.me
                </a>
              </p>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mb-8">
            <Link 
              to="/" 
              className="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              ← Back to Calculator
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}; 