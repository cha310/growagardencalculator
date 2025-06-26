import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const TermsOfServicePage: React.FC = () => {
  // 确保页面标题被正确设置
  useEffect(() => {
    document.title = 'Terms of Service - Grow a Garden Calculator';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Terms of service for Grow a Garden Calculator - understand the rules and conditions for using our Roblox calculator tool.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <Helmet>
        <title>Terms of Service - Grow a Garden Calculator</title>
        <meta name="description" content="Terms of service for Grow a Garden Calculator - understand the rules and conditions for using our Roblox calculator tool." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-yellow-300 mb-2">Terms of Service</h1>
            <p className="text-gray-300 text-lg">Legal terms and conditions for using Grow a Garden Calculator</p>
            <p className="text-gray-400 text-sm mt-2">Effective Date: June 25, 2025</p>
          </div>

          {/* Content */}
          <div className="bg-gray-800 rounded-lg p-8 space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-yellow-300 mb-4">Introduction and Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                Welcome to Grow A Garden Calculator, a platform designed to help you calculate and plan your garden growth. By accessing or using our service at growagardencalculator.me, you agree to be bound by these Terms of Service. If you do not agree with any of these terms, please do not use our service.
              </p>
            </div>

            {/* Use of Service */}
            <div>
              <h2 className="text-2xl font-bold text-yellow-300 mb-4">Use of the Service</h2>
              <p className="text-gray-300 leading-relaxed">
                Grow A Garden Calculator provides users with tools to calculate garden growth, plan planting schedules, and optimize garden yields. You agree to use the service in accordance with all applicable local, state, national, and international laws and regulations.
              </p>
            </div>

            {/* User Accounts */}
            <div>
              <h2 className="text-2xl font-bold text-yellow-300 mb-4">User Accounts and Registration</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2">1. Account Creation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Most features of Grow A Garden Calculator are free and do not require registration. If you choose to create an account for additional features, you must provide accurate and complete information during the registration process.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2">2. Account Security</h3>
                  <p className="text-gray-300 leading-relaxed">
                    You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2">3. User Responsibilities</h3>
                  <p className="text-gray-300 leading-relaxed">
                    You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
                  </p>
                </div>
              </div>
            </div>

            {/* Content and IP */}
            <div>
              <h2 className="text-2xl font-bold text-yellow-300 mb-4">Content and Intellectual Property Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                All content provided through Grow A Garden Calculator, including but not limited to the website, code, and calculation algorithms, is protected under copyright law. The copyright owner of Grow A Garden Calculator is growagardencalculator.me.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">•</span>
                  <span>You acknowledge that you do not own the underlying technology or intellectual property that makes up the Grow A Garden Calculator service, and you agree to respect the intellectual property rights of growagardencalculator.me and any third parties.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">•</span>
                  <span>While you retain ownership of your custom content and feedback, the core Grow A Garden Calculator platform and its database remain the property of growagardencalculator.me.</span>
                </li>
              </ul>
            </div>

            {/* Prohibited Activities */}
            <div>
              <h2 className="text-2xl font-bold text-yellow-300 mb-4">Prohibited Activities</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You agree not to engage in any of the following prohibited activities while using Grow A Garden Calculator:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 mt-1">•</span>
                  <span>Unauthorized access to or distribution of our proprietary code and algorithms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 mt-1">•</span>
                  <span>Reselling or redistributing Grow A Garden Calculator content without authorization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 mt-1">•</span>
                  <span>Interfering with or disrupting the security or performance of the service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 mt-1">•</span>
                  <span>Using the service for any illegal or unauthorized purpose</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 mt-1">•</span>
                  <span>Attempting to bypass any security features of the service</span>
                </li>
              </ul>
            </div>

            {/* Privacy and Data */}
            <div>
              <h2 className="text-2xl font-bold text-yellow-300 mb-4">Privacy and Data Collection</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Grow A Garden Calculator collects the following types of data:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">•</span>
                  <span><strong>Usage Details:</strong> Data related to your activity on our service (e.g., calculations performed, garden plans created)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">•</span>
                  <span><strong>Device Information:</strong> Information about the device you use to access our service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">•</span>
                  <span><strong>Cookies:</strong> Data that helps us enhance your experience with our service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">•</span>
                  <span><strong>Contact Information:</strong> If you contact us or register, we may collect your email address</span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                For more details on data collection practices, please refer to our separate Privacy Policy.
              </p>
            </div>

            {/* Pricing */}
            <div>
              <h2 className="text-2xl font-bold text-yellow-300 mb-4">Pricing and Payments</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">•</span>
                  <span>Grow A Garden Calculator is free to use. If any paid features are introduced in the future, terms will be updated accordingly.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">•</span>
                  <span>All purchases (if any) are final and non-refundable unless otherwise required by law</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">•</span>
                  <span>Prices are subject to change with notice to users</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">•</span>
                  <span>You agree to pay all charges associated with your selected plan (if applicable)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">•</span>
                  <span>Payment terms are based on your selected payment method and plan</span>
                </li>
              </ul>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-2xl font-bold text-yellow-300 mb-4">Termination</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to terminate or suspend your access to the service at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users of the service, us, or third parties.
              </p>
            </div>

            {/* Disclaimer */}
            <div>
              <h2 className="text-2xl font-bold text-yellow-300 mb-4">Disclaimer of Warranties</h2>
              <p className="text-gray-300 leading-relaxed">
                The service is provided on an "as is" and "as available" basis. We make no warranties or representations about the accuracy, reliability, or availability of the service and disclaim all warranties to the fullest extent permitted by law.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold text-yellow-300 mb-4">Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                To the fullest extent permitted by law, growagardencalculator.me shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from the use of or inability to use the service.
              </p>
            </div>

            {/* Indemnification */}
            <div>
              <h2 className="text-2xl font-bold text-yellow-300 mb-4">Indemnification</h2>
              <p className="text-gray-300 leading-relaxed">
                You agree to indemnify and hold harmless growagardencalculator.me, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including attorneys' fees) arising from your use of the service or violation of these Terms.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-bold text-yellow-300 mb-4">Governing Law and Dispute Resolution</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which growagardencalculator.me operates, without regard to its conflict of law provisions. Any disputes arising from these Terms or the service will be resolved through binding arbitration in accordance with applicable laws.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-2xl font-bold text-yellow-300 mb-4">Changes to These Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to update or modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of the service after any changes signifies your acceptance of the new terms.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold text-yellow-300 mb-4">Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about these Terms, please contact us at{' '}
                <a href="mailto:support@growagardencalculator.me" className="text-green-400 hover:text-green-300 underline">
                  support@growagardencalculator.me
                </a>
              </p>
            </div>

            {/* Acceptance */}
            <div className="bg-gray-700 rounded-lg p-6 border-l-4 border-yellow-300">
              <p className="text-gray-300 leading-relaxed font-medium">
                By using Grow A Garden Calculator, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. Thank you for choosing Grow A Garden Calculator!
              </p>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mb-8 mt-8">
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