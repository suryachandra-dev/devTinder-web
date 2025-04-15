// components/pages/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-10 max-w-2xl">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <div className="space-y-4 text-base leading-relaxed">
        <p>
          Have questions, feedback, or issues? We’re here to help!
        </p>
        <ul className="list-disc ml-6">
          <li>Email: <a className="text-blue-500" href="mailto:support@devtinder.today">support@devtinder.today</a></li>
          <li>Phone: +91-6303855068 (10am to 6pm IST)</li>
          <li>Address: DevTinder HQ, Hyderabad, Telangana, India</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;