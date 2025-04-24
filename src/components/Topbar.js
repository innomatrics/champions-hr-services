import React from 'react';

function Topbar() {
  return (
    <div className="bg-danger text-white py-1 small shadow-sm">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        {/* Left Side */}
        <div className="d-flex align-items-center gap-3 flex-wrap">
          
          <span>
            Job Enquiries: <i className="fas fa-phone-alt me-1"></i> +91-903-568-5266
          </span>
          <span>
            <i className="fas fa-envelope me-1"></i> jobs@championshrservices.com
          </span>
          <span>|</span>
          <a href="/privacy" className="text-white text-decoration-none">Privacy Policy</a>
          <span>|</span>
          <a href="/terms" className="text-white text-decoration-none">Terms of Use</a>
        </div>

        {/* Right Side - Social Icons */}
        <div className="d-flex align-items-center gap-2">
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-white">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
