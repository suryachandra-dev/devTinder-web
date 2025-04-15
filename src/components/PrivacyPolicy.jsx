// components/pages/PrivacyPolicy.js
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
      <div className="space-y-4 text-base leading-relaxed">
        <p>
          At DevTinder, we are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Information We Collect</h2>
        <ul className="list-disc ml-6">
          <li>Profile details you provide during registration</li>
          <li>Usage data such as visited pages and clicked links</li>
          <li>Technical data like IP address, device type, browser, etc.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6">How We Use Information</h2>
        <p>
          We use your information to:
        </p>
        <ul className="list-disc ml-6">
          <li>Match you with relevant connections</li>
          <li>Improve platform features and performance</li>
          <li>Send important updates and notifications</li>
        </ul>
        <p>
          We do not sell or share your personal data with third parties without your consent.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Data Security</h2>
        <p>
          We use industry-standard security measures such as encryption and firewalls to protect your data.
        </p>
        <p>
          If you have any concerns, please email us at <a className="text-blue-500" href="mailto:support@devtinder.today">support@devtinder.today</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;