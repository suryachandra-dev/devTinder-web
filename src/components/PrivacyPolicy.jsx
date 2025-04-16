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
          <li>Cookies and similar technologies</li>
          <li>Payment and financial information (for transactions)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">How We Use Information</h2>
        <ul className="list-disc ml-6">
          <li>Match you with relevant connections</li>
          <li>Improve platform features and performance</li>
          <li>Send important updates and notifications</li>
          <li>Comply with legal, regulatory, or fraud prevention obligations</li>
        </ul>

        <p>
          We do not sell or share your personal data with third parties without your consent, except to comply with legal obligations or to provide services.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Cookies and Tracking</h2>
        <p>
          We use cookies and similar tracking technologies to enhance your experience, analyze usage, and serve relevant content. You may disable cookies via your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal data. To do so, email us at <a href="mailto:support@devtinder.today" className="text-blue-500">support@devtinder.today</a>.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Data Security</h2>
        <p>
          We use industry-standard security measures including SSL encryption and firewalls. However, no system is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Grievance Redressal</h2>
        <p>
          If you have any concerns regarding our privacy practices, you may contact our Grievance Officer:<br />
          Name: Privacy Grievance Officer<br />
          Email: grievance@devtinder.today<br />
          Address: DevTinder HQ, Hyderabad, India
        </p>

        <h2 className="text-2xl font-semibold mt-6">Changes to This Policy</h2>
        <p>
          We may update this policy periodically. Continued use of our services implies acceptance of the updated policy.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
