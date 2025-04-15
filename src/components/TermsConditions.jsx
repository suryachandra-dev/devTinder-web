// components/pages/TermsConditions.js
import React from 'react';

const TermsConditions = () => {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6 text-center">Terms & Conditions</h1>
      <div className="space-y-4 text-base leading-relaxed">
        <p>
          Welcome to DevTinder. By using our platform, you agree to the following terms:
        </p>
        <ul className="list-disc ml-6">
          <li>You are responsible for the information you share and the people you connect with.</li>
          <li>Spamming, abuse, or any form of harassment is strictly prohibited.</li>
          <li>DevTinder reserves the right to remove content or terminate accounts violating our guidelines.</li>
        </ul>
        <p>
          These terms are subject to change. Continued use after updates means you accept the new terms.
        </p>
        <p>
          Contact us at <a className="text-blue-500" href="mailto:legal@devtinder.today">legal@devtinder.today</a> for more details.
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;