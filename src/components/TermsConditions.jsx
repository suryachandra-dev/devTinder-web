// components/pages/TermsConditions.js
import React from 'react';

const TermsConditions = () => {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6 text-center">Terms & Conditions</h1>
      <div className="space-y-4 text-base leading-relaxed">
        <p><strong>Last Updated: April 16, 2025</strong></p>

        <p>
          Welcome to <strong>devtinder.today</strong>. These Terms and Conditions govern your use of our platform and the services provided through our membership plans. By accessing or using our website, you agree to be bound by these terms.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. Overview</h2>
        <p>
          devtinder.today provides coding-related content and services through membership tiers – Silver and Gold. Access to content, features, and community support varies based on the chosen plan.
        </p>

        <h2 className="text-xl font-semibold mt-6">2. Membership Plans</h2>
        <ul className="list-disc ml-6">
          <li><strong>Silver Membership</strong>: Access to basic features, curated content, and community tools.</li>
          <li><strong>Gold Membership</strong>: Includes Silver features plus premium tools, advanced content, and early feature access.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">3. Payment and Billing</h2>
        <p>
          Payments are processed via secure third-party gateways. Subscribing authorizes us to charge you accordingly. Plans are non-transferable.
        </p>

        <h2 className="text-xl font-semibold mt-6">4. Refund and Cancellation</h2>
        <p>
          See our <a href="https://devtinder.today/refund-policy" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Refund Policy</a> for full details. Refunds are not guaranteed once content has been accessed.
        </p>

        <h2 className="text-xl font-semibold mt-6">5. User Conduct</h2>
        <p>
          You must not engage in plagiarism, bot activity, or unauthorized content distribution. Violations will result in account suspension or ban.
        </p>

        <h2 className="text-xl font-semibold mt-6">6. Intellectual Property</h2>
        <p>
          All content on devtinder.today is owned by us. You may not reuse or distribute it without written permission.
        </p>

        <h2 className="text-xl font-semibold mt-6">7. Modification of Terms</h2>
        <p>
          We reserve the right to update these terms at any time. Continued use implies acceptance of changes.
        </p>

        <h2 className="text-xl font-semibold mt-6">8. Limitation of Liability</h2>
        <p>
          We are not responsible for indirect or incidental damages from the use of our platform.
        </p>

        <h2 className="text-xl font-semibold mt-6">9. Contact</h2>
        <p>
          Reach out to us via our <a href="https://devtinder.today/contact" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Contact Page</a>.
        </p>

        <h2 className="text-xl font-semibold mt-6">10. Governing Law and Jurisdiction</h2>
        <p>
          These Terms are governed by Indian law. Disputes fall under the courts of Hyderabad, Telangana.
        </p>

        <h2 className="text-xl font-semibold mt-6">11. Eligibility</h2>
        <p>
          You must be at least 18 years old and legally capable of entering into a binding agreement to use this platform.
        </p>

        <h2 className="text-xl font-semibold mt-6">12. Prohibited Activities</h2>
        <p>
          Users are prohibited from using the platform for any unlawful purposes including, but not limited to: fraud, gambling, adult content, or selling illegal goods/services.
        </p>

        <h2 className="text-xl font-semibold mt-6">13. Suspension and Termination</h2>
        <p>
          We reserve the right to suspend or terminate any account for breaches of these Terms or due to regulatory or security concerns, with or without notice.
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
