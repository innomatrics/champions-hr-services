import React from "react";
import "../components/WhyChooseUs.css"; // Optional for custom styling
import highJoin from "../assets/icons/high-join.png";
import growth from "../assets/icons/growth.png";
import opportunity from "../assets/icons/opportunity.png";
import success from "../assets/icons/success.png";
import responsibilities from "../assets/icons/responsibilities.png";
import onboarding from "../assets/icons/onboarding.png";

const features = [
  {
    icon: highJoin,
    title: "High Joining Ratio",
    description: "85% Joining Ratio – maintained consistently across customers",
  },
  {
    icon: growth,
    title: "Superb Growth",
    description: "81% Average – YoY Growth since 2006",
  },
  {
    icon: opportunity,
    title: "Equal Opportunity",
    description: "70% Women Workforce – mentored through D&I Program",
  },
  {
    icon: success,
    title: "High Success Ratio",
    description: "1000+ consultants – placed in their dream jobs",
  },
  {
    icon: responsibilities,
    title: "Responsibilities",
    description: "CSR – Employability as our theme",
  },
  {
    icon: onboarding,
    title: "Specialized Onboarding",
    description: "Specialized Recruiters – DEDICATED onboarding",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-5 text-center bg-white">
      <div className="container">
        <h2 className="fw-bold text-danger">Why Choose Champions HR Services</h2>
        <div className="divider mx-auto mb-4"></div>

        <div className="row g-4">
          {features.map((item, index) => (
            <div className="col-12 col-sm-6 col-md-4" key={index}>
              <div className="feature-box px-3">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="mb-3"
                  style={{ width: "80px", height: "80px" }}
                />
                <h3 className="fw-bold text-danger">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
