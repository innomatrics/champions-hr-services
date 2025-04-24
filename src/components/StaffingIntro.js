import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const StaffingIntro = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Add this

  const handleEmployerClick = () => {
    navigate("/employer-form");
  };

  const handleJobSeekerClick = () => {
    navigate("/jobs"); // Optional if you have a job seeker form
  };

  return (
    <>
      {location.pathname === "/" && (
        <section className="py-5 text-center bg-dark text-white">
          <div className="container">
            <h2 className="fw-bold display-5">Staffing, Recruitment and Compliance Services</h2>
            <hr className="mx-auto my-3" style={{ width: "60px", borderTop: "3px solid #fff" }} />
            <h5 className="mb-4">Champions HR Services</h5>
            <p className="mb-4" style={{ maxWidth: "900px", margin: "0 auto", lineHeight: "1.8" }}>
              Champions HR Services Bangalore Pvt Ltd is one of the leading player in staffing and recruitment ecosystem across the globe.
              Since 2018, Champions HR Services have built an unrivaled culture with unique & people-focused approach which yields competitive
              advantage for our clients and rewarding careers for our contractors. Champions HR Services provides full range of Staffing,
              recruitment & compliance servies with a passion of combining organizations with smart investments in intelligent technology and
              talented people with their true potential.
            </p>
            <p className="mb-4">Choose your options below and let us get associated.</p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <button className="btn btn-danger" onClick={handleEmployerClick}>
                For Employer
              </button>
              <button className="btn btn-danger" onClick={handleJobSeekerClick}>
                For Job Seeker
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default StaffingIntro;
