import React from "react";
import "../components/ClientsSection.css";
import logo from "../assets/clients/logo 1.webp";

const ClientsSection = () => {
  return (
    <section style={{ backgroundColor: "#f8f9fa", padding: "60px 0" }}>
      <div className="container text-center">
        {/* Find a Job Section */}
        <h2 className="fw-bold mb-3">Find a Job</h2>
        <div
          style={{
            width: "100px",
            height: "3px",
            backgroundColor: "red",
            margin: "0 auto 30px auto",
          }}
        ></div>
        <p style={{ margin: "0 auto", fontSize: "1.1rem" }}>
          We are the best Staffing and Recruitment Agency in India and Global. We have a proven
          track record of being one of the top recruiters in India. We are placement agencies in
          India and have been rewarded the best Job Consultancy and Recruiters in India.
        </p>

        {/* Single Client Section */}
        <h2 className="fw-bold mt-5 mb-3 text-danger">Our Client</h2>
        <div
          style={{
            width: "100px",
            height: "3px",
            backgroundColor: "red",
            margin: "0 auto 30px auto",
          }}
        ></div>

        <img src={logo} alt="client-logo" className="client-logo mx-auto" />
      </div>
    </section>
  );
};

export default ClientsSection;
