import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 fixed bottom-0">
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved by DevTinder</p>
        <div className="flex flex-wrap justify-center gap-4 mt-2 text-sm">
          <Link to="/privacy-policy" className="link link-hover">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="link link-hover">Terms & Conditions</Link>
          <Link to="/refund-policy" className="link link-hover">Refund & Cancellation Policy</Link>
          <Link to="/contact" className="link link-hover">Contact Us</Link>
          <Link to="/about" className="link link-hover">About Us</Link>
          <Link to="/shipping-policy" className="link link-hover">Shipping Policy</Link>

        </div>
      </aside>
    </footer>
  );
};

export default Footer;
