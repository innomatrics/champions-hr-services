import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row">

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Contact Info</h5>
            <p>
              Champions HR Services a global provider of, Recruitment Solutions, and HR Staffing & Compliance Services in India.
            </p>
            <p>
              <i className="fas fa-map-marker-alt me-2"></i>
              <strong>Head Office Address:</strong><br />
              1st main,7th cross,Shree kanteshwar nagar mahalakshimi layout-560096,LandMark behind Ashok heights
            </p>
            <p>
              <i className="fas fa-phone me-2"></i> Phone: +91-9632492563<br />
              {/* <i className="fas fa-mobile-alt me-2"></i> Mobile: +91-844-844-0454 */}
            </p>
          </div>

          {/* Recent Posts */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Recent Posts</h5>
            <ul className="list-unstyled small">
              <li className="mb-3">
                <strong>How to Price Staffing Services in India?</strong><br />
                <small>May 31, 2024 / 0 Comments</small>
              </li>
              <li className="mb-3">
                <strong>7 Job Hunting Tips to Secure Your Dream Job</strong><br />
                <small>May 24, 2024 / 0 Comments</small>
              </li>
              <li>
                <strong>What is VMS in Staffing and How it Works?</strong><br />
                <small>May 15, 2024 / 0 Comments</small>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Our Services</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link"><i className="fas fa-home me-2"></i>Home</a></li>
              <li><a href="/jobs" className="footer-link"><i className="fas fa-briefcase me-2"></i>Jobs</a></li>
              <li><a href="#" className="footer-link"><i className="fas fa-concierge-bell me-2"></i>Our Services</a></li>
              <li><a href="/" className="footer-link"><i className="fas fa-blog me-2"></i>Blog</a></li>
              <li><a href="company" className="footer-link"><i className="fas fa-users me-2"></i>About Us</a></li>
              <li><a href="contact" className="footer-link"><i className="fas fa-envelope me-2"></i>Contact Us</a></li>

            </ul>
          </div>


          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="staffing" className="footer-link">Recruitment</a></li>
              <li><a href="compliance" className="footer-link">Contract Staffing</a></li>
              <li><a href="industries" className="footer-link">Services</a></li>
              <li><a href="#" className="footer-link">Terms of Use</a></li>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>

            </ul>
            <h6 className="fw-bold mt-3">Follow Us</h6>
            <div>
              <a href="#" className="btn btn-outline-light btn-sm me-1"><i className="fab fa-twitter"></i></a>
              <a href="#" className="btn btn-outline-light btn-sm me-1"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="btn btn-outline-light btn-sm me-1"><i className="fab fa-instagram"></i></a>
              <a href="#" className="btn btn-outline-light btn-sm me-1"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="btn btn-outline-light btn-sm"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center border-top pt-3 mt-3">
          <p className="mb-0 small">© {new Date().getFullYear()} Champions HR Services. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
