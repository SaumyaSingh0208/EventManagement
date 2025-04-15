import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.png"; // adjust path as per your logo

export default function Footer() {
  return (
    <footer className="footer-section text-light pt-5 pb-4">
      <div className="container">
        <div className="row gy-4">
          {/* Logo & Description */}
          <div className="col-md-4">
            <div className="p-4 bg-maroon rounded">
              <img
                src={logo}
                alt="Verve Management"
                className="mb-3"
                style={{ maxWidth: "180px" }}
              />
              <p className="footer-desc">
                We are UAE’s business-facilitating platform that connects
                people, partners, and ideas
              </p>
              <div className="d-flex gap-3 mt-3">
                <i className="bi bi-facebook fs-4 text-white social-icon"></i>
                <i className="bi bi-twitter fs-4 text-white social-icon"></i>
                <i className="bi bi-instagram fs-4 text-white social-icon"></i>
                <i className="bi bi-youtube fs-4 text-white social-icon"></i>
                <i className="bi bi-linkedin fs-4 text-white social-icon"></i>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="col-md-4 d-flex justify-content-between">
            <div>
              <h5 className="text-maroon fw-bold">QUICK LINKS</h5>
              <ul className="list-unstyled">
                <li>About us</li>
                <li>Careers</li>
                <li>News & Articles</li>
                <li>Events Calendar</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h5 className="text-maroon fw-bold">USEFUL LINKS</h5>
              <ul className="list-unstyled">
                <li>Bespoke Engagements</li>
                <li>2024 Events</li>
                <li>2025 Events</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="col-md-4">
            <h5 className="text-maroon fw-bold">CONTACT INFORMATION</h5>
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-geo-alt-fill me-2"></i>1702 & 1706, Mazaya
                Business Avenue BB2, Al Thanya Fifth, JLT, Dubai, UAE
              </li>
              <li>
                <i className="bi bi-telephone-fill me-2"></i>+971 4 243 4677/88
              </li>
              <li>
                <i className="bi bi-envelope-fill me-2"></i>
                info@verve-management.com
              </li>
            </ul>
            <div className="mt-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.9575146770153!2d55.14342787543136!3d25.069429077793345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6cafd619c309%3A0xfa853f4a41d8970!2sMazaya%20Business%20Avenue%20BB2!5e0!3m2!1sen!2sin!4v1744751228824!5m2!1sen!2sin"
                width="400"
                height="100"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4 pt-3 border-top border-secondary">
          <p className="mb-0 small">
            Copyright 2024 <strong>Verve Management DMCC</strong>. All rights
            reserved.
            <span className="footer-links ms-2">
              <a href="/privacy-policy" className="mx-2">
                Privacy Policy
              </a>{" "}
              |
              <a href="/terms-conditions" className="mx-2">
                Terms & Condition
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
