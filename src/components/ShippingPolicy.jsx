// components/pages/ShippingPolicy.js
import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6 text-center">Shipping & Delivery Policy</h1>
      <div className="space-y-4 text-base leading-relaxed">
        <p><strong>Last Updated: April 16, 2025</strong></p>

        <p>
          At <strong>devtinder.today</strong>, we offer purely digital services in the form of membership subscriptions. As such, there is no physical shipping involved.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. Digital Delivery</h2>
        <p>
          Upon successful payment and confirmation, users gain instant access to their selected membership tier (Silver or Gold). Access details will be available via the user's dashboard or email confirmation.
        </p>

        <h2 className="text-xl font-semibold mt-6">2. Delivery Timeline</h2>
        <p>
          Membership access is granted immediately after payment confirmation. If you experience any delays in activation, please contact us through our <a className="text-blue-500 underline" href="https://devtinder.today/contact" target="_blank" rel="noopener noreferrer">Contact Page</a>.
        </p>

        <h2 className="text-xl font-semibold mt-6">3. No Physical Products</h2>
        <p>
          We do not ship any physical goods. All services and content are delivered online only.
        </p>

        <h2 className="text-xl font-semibold mt-6">4. Customer Support</h2>
        <p>
          For any support related to access or membership activation, please reach out to <a className="text-blue-500" href="mailto:support@devtinder.today">support@devtinder.today</a>.
        </p>
      </div>
    </div>
  );
};

export default ShippingPolicy;
