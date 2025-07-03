import React from 'react';
import Link from 'next/link';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#1f2937', color: 'white' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '32px 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h1 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            color: '#fde047', 
            marginBottom: '8px',
            fontFamily: "'Press Start 2P', cursive"
          }}>Privacy Policy</h1>
          <p style={{ color: '#d1d5db', fontSize: '12px', marginBottom: '16px' }}>How we handle your data at Grow a Garden Calculator</p>
          <p style={{ color: '#9ca3af', fontSize: '12px', marginTop: '8px' }}>Effective Date: June 25, 2025</p>
        </div>

        {/* Content */}
        <div style={{ backgroundColor: '#252f3f', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <p>
              Welcome to growagardencalculator.me. This privacy policy outlines how we collect, use, and protect your information while you explore our content about Grow a Garden Calculator.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fde047', marginBottom: '12px' }}>1. Information We Collect</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#4ade80', marginBottom: '8px' }}>a. Personal Data:</h3>
                <p>
                  We may collect personal information that you voluntarily provide while interacting with our Grow a Garden Calculator website, such as your name and email address when you subscribe to updates or contact our support team.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#4ade80', marginBottom: '8px' }}>b. Non-Personal Data:</h3>
                <p>
                  We use web cookies and analytics tools to collect non-personal data about how visitors interact with our Grow a Garden Calculator content and features. This helps us improve your experience and optimize our website.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fde047', marginBottom: '12px' }}>2. Use of Your Information</h2>
            <p>
              We use collected information to enhance your experience with our Grow a Garden Calculator website and improve our content. This includes personalizing content, analyzing site usage, and providing game updates. Your information is not shared with third parties except as required for basic site analytics and essential services.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fde047', marginBottom: '12px' }}>3. Data Protection</h2>
            <p>
              We implement industry-standard security measures to protect your data while you explore our Grow a Garden Calculator content. This includes secure SSL encryption, regular security audits, and strict data access controls. Your privacy and security are paramount to us.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fde047', marginBottom: '12px' }}>4. Updates to This Privacy Policy</h2>
            <p>
              This privacy policy may be updated periodically to reflect changes in our practices or legal requirements. All changes will be posted on this page with an updated effective date, and significant changes will be notified through our website.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fde047', marginBottom: '12px' }}>5. Contact Us</h2>
            <p>
              If you have questions about our privacy policy or how we handle your data while using our Grow a Garden Calculator website, please contact us at{' '}
                <a href="mailto:support@growagardencalculator.me" style={{ color: '#4ade80', textDecoration: 'underline', transition: 'all 0.2s ease' }}>
                support@growagardencalculator.me
              </a>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div style={{ textAlign: 'center', marginBottom: '24px', marginTop: '24px' }}>
          <Link 
            href="/" 
            style={{ 
              backgroundColor: '#4ade80', 
              color: '#1f2937', 
              padding: '8px 12px', 
              borderRadius: '8px', 
              fontWeight: 'bold', 
              fontFamily: "'Press Start 2P', cursive",
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
          >
            ← Back to Calculator
          </Link>
        </div>
      </div>
    </div>
  );
}; 