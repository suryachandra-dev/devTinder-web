// components/pages/RefundPolicy.js
import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6 text-center">Refund & Cancellation Policy</h1>
      <div className="space-y-4 text-base leading-relaxed">
        <p>
          DevTinder offers subscription-based services. Please read the following refund & cancellation terms:
        </p>
        <ul className="list-disc ml-6">
          <li>Subscriptions can be cancelled anytime from your profile settings.</li>
          <li>Refunds are only processed if a technical issue on our part prevents access to the service.</li>
          <li>Refund requests must be submitted within 7 days of payment.</li>
        </ul>
        <p>
          For refund support, contact <a className="text-blue-500" href="mailto:billing@devtinder.today">billing@devtinder.today</a>.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;