import React from 'react';
import Link from 'next/link';

export const TermsOfServicePage: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#1f2937', color: 'white' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '32px 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#fde047', marginBottom: '8px', fontFamily: "'Press Start 2P', cursive" }}>Terms of Service</h1>
          <p style={{ color: '#d1d5db', fontSize: '12px', marginBottom: '16px' }}>Legal terms and conditions for using Grow a Garden Calculator</p>
          <p style={{ color: '#9ca3af', fontSize: '12px', marginTop: '8px' }}>Effective Date: June 25, 2025</p>
        </div>

        {/* Content */}
        <div style={{ backgroundColor: '#252f3f', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Introduction */}
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fde047', marginBottom: '12px' }}>Introduction and Acceptance of Terms</h2>
            <p style={{ color: '#d1d5db', fontSize: '12px', lineHeight: '1.2' }}>
              Welcome to Grow A Garden Calculator, a platform designed to help you calculate and plan your garden growth. By accessing or using our service at growagardencalculator.me, you agree to be bound by these Terms of Service. If you do not agree with any of these terms, please do not use our service.
            </p>
          </div>

          {/* Use of Service */}
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fde047', marginBottom: '12px' }}>Use of the Service</h2>
            <p style={{ color: '#d1d5db', fontSize: '12px', lineHeight: '1.2' }}>
              Grow A Garden Calculator provides users with tools to calculate garden growth, plan planting schedules, and optimize garden yields. You agree to use the service in accordance with all applicable local, state, national, and international laws and regulations.
            </p>
          </div>

          {/* User Accounts */}
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fde047', marginBottom: '12px' }}>User Accounts and Registration</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#4ade80', marginBottom: '8px' }}>1. Account Creation</h3>
                <p style={{ color: '#d1d5db', fontSize: '12px', lineHeight: '1.2' }}>
                  Most features of Grow A Garden Calculator are free and do not require registration. If you choose to create an account for additional features, you must provide accurate and complete information during the registration process.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#4ade80', marginBottom: '8px' }}>2. Account Security</h3>
                <p style={{ color: '#d1d5db', fontSize: '12px', lineHeight: '1.2' }}>
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#4ade80', marginBottom: '8px' }}>3. User Responsibilities</h3>
                <p style={{ color: '#d1d5db', fontSize: '12px', lineHeight: '1.2' }}>
                  You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
                </p>
              </div>
            </div>
          </div>

          {/* Content and IP */}
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fde047', marginBottom: '12px' }}>Content and Intellectual Property Rights</h2>
            <p style={{ color: '#d1d5db', fontSize: '12px', lineHeight: '1.2' }}>
              All content provided through Grow A Garden Calculator, including but not limited to the website, code, and calculation algorithms, is protected under copyright law. The copyright owner of Grow A Garden Calculator is growagardencalculator.me.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#4ade80', marginRight: '8px', marginTop: '2px' }}>•</span>
                <span>You acknowledge that you do not own the underlying technology or intellectual property that makes up the Grow A Garden Calculator service, and you agree to respect the intellectual property rights of growagardencalculator.me and any third parties.</span>
              </li>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#4ade80', marginRight: '8px', marginTop: '2px' }}>•</span>
                <span>While you retain ownership of your custom content and feedback, the core Grow A Garden Calculator platform and its database remain the property of growagardencalculator.me.</span>
              </li>
            </ul>
          </div>

          {/* Prohibited Activities */}
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fde047', marginBottom: '12px' }}>Prohibited Activities</h2>
            <p style={{ color: '#d1d5db', fontSize: '12px', lineHeight: '1.2' }}>
              You agree not to engage in any of the following prohibited activities while using Grow A Garden Calculator:
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#f87171', marginRight: '8px', marginTop: '2px' }}>•</span>
                <span>Unauthorized access to or distribution of our proprietary code and algorithms</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#f87171', marginRight: '8px', marginTop: '2px' }}>•</span>
                <span>Reselling or redistributing Grow A Garden Calculator content without authorization</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#f87171', marginRight: '8px', marginTop: '2px' }}>•</span>
                <span>Interfering with or disrupting the security or performance of the service</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#f87171', marginRight: '8px', marginTop: '2px' }}>•</span>
                <span>Using the service for any illegal or unauthorized purpose</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#f87171', marginRight: '8px', marginTop: '2px' }}>•</span>
                <span>Attempting to bypass any security features of the service</span>
              </li>
            </ul>
          </div>

          {/* Privacy and Data */}
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fde047', marginBottom: '12px' }}>Privacy and Data Collection</h2>
            <p style={{ color: '#d1d5db', fontSize: '12px', lineHeight: '1.2' }}>
              Grow A Garden Calculator collects the following types of data:
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#3b82f6', marginRight: '8px', marginTop: '2px' }}>•</span>
                <span><strong>Usage Details:</strong> Data related to your activity on our service (e.g., calculations performed, garden plans created)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#3b82f6', marginRight: '8px', marginTop: '2px' }}>•</span>
                <span><strong>Device Information:</strong> Information about the device you use to access our service</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#3b82f6', marginRight: '8px', marginTop: '2px' }}>•</span>
                <span><strong>Cookies:</strong> Data that helps us enhance your experience with our service</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#3b82f6', marginRight: '8px', marginTop: '2px' }}>•</span>
                <span><strong>Contact Information:</strong> If you contact us or register, we may collect your email address</span>
              </li>
            </ul>
            <p style={{ color: '#d1d5db', fontSize: '12px', lineHeight: '1.2', marginTop: '12px' }}>
              For more details on data collection practices, please refer to our separate Privacy Policy.
            </p>
          </div>

          {/* Pricing */}
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fde047', marginBottom: '12px' }}>Pricing and Payments</h2>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#4ade80', marginRight: '8px', marginTop: '2px' }}>•</span>
                <span>Grow A Garden Calculator is free to use. If any paid features are introduced in the future, terms will be updated accordingly.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#4ade80', marginRight: '8px', marginTop: '2px' }}>•</span>
                <span>All purchases (if any) are final and non-refundable unless otherwise required by law</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#4ade80', marginRight: '8px', marginTop: '2px' }}>•</span>
                <span>Prices are subject to change with notice to users</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#4ade80', marginRight: '8px', marginTop: '2px' }}>•</span>
                <span>You agree to pay all charges associated with your selected plan (if applicable)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#4ade80', marginRight: '8px', marginTop: '2px' }}>•</span>
                <span>Payment terms are based on your selected payment method and plan</span>
              </li>
            </ul>
          </div>

          {/* Termination */}
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fde047', marginBottom: '12px' }}>Termination</h2>
            <p style={{ color: '#d1d5db', fontSize: '12px', lineHeight: '1.2' }}>
              We reserve the right to terminate or suspend your access to the service at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users of the service, us, or third parties.
            </p>
          </div>

          {/* Disclaimer */}
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fde047', marginBottom: '12px' }}>Disclaimer of Warranties</h2>
            <p style={{ color: '#d1d5db', fontSize: '12px', lineHeight: '1.2' }}>
              The service is provided on an "as is" and "as available" basis. We make no warranties or representations about the accuracy, reliability, or availability of the service and disclaim all warranties to the fullest extent permitted by law.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fde047', marginBottom: '12px' }}>Limitation of Liability</h2>
            <p style={{ color: '#d1d5db', fontSize: '12px', lineHeight: '1.2' }}>
              To the fullest extent permitted by law, growagardencalculator.me shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from the use of or inability to use the service.
            </p>
          </div>

          {/* Indemnification */}
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fde047', marginBottom: '12px' }}>Indemnification</h2>
            <p style={{ color: '#d1d5db', fontSize: '12px', lineHeight: '1.2' }}>
              You agree to indemnify and hold harmless growagardencalculator.me, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including attorneys' fees) arising from your use of the service or violation of these Terms.
            </p>
          </div>

          {/* Governing Law */}
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fde047', marginBottom: '12px' }}>Governing Law and Dispute Resolution</h2>
            <p style={{ color: '#d1d5db', fontSize: '12px', lineHeight: '1.2' }}>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which growagardencalculator.me operates, without regard to its conflict of law provisions. Any disputes arising from these Terms or the service will be resolved through binding arbitration in accordance with applicable laws.
            </p>
          </div>

          {/* Changes to Terms */}
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fde047', marginBottom: '12px' }}>Changes to These Terms</h2>
            <p style={{ color: '#d1d5db', fontSize: '12px', lineHeight: '1.2' }}>
              We reserve the right to update or modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of the service after any changes signifies your acceptance of the new terms.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fde047', marginBottom: '12px' }}>Contact Information</h2>
            <p style={{ color: '#d1d5db', fontSize: '12px', lineHeight: '1.2' }}>
              If you have any questions about these Terms, please contact us at{' '}
              <a href="mailto:support@growagardencalculator.me" style={{ color: '#4ade80', textDecoration: 'underline', transition: 'all 0.2s ease' }}>
                support@growagardencalculator.me
              </a>
            </p>
          </div>

          {/* Acceptance */}
          <div style={{ backgroundColor: '#252f3f', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ color: '#d1d5db', fontSize: '12px', lineHeight: '1.2', fontWeight: 'bold' }}>
              By using Grow A Garden Calculator, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. Thank you for choosing Grow A Garden Calculator!
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
              textDecoration: 'none'
            }}
          >
            ← Back to Calculator
          </Link>
        </div>
      </div>
    </div>
  );
}; 