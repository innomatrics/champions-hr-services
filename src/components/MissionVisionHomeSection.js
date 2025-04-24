import React from "react";
import { useLocation } from "react-router-dom";
import missionVisionImage from "../assets/mission-vision.png";
import icon1 from "../assets/goal.png";
import icon2 from "../assets/target.png";

const MissionVisionHomeSection = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && (
        <section className="py-5 bg-white text-dark">
          <div className="container">
            <h2 className="text-center fw-bold text-danger mb-4">Champions HR Services Mission and Vision</h2>
            <hr className="mx-auto mb-5" style={{ width: "80px", borderTop: "3px solid red" }} />

            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="mb-4 d-flex align-items-start">
                  <img src={icon2} alt="Mission" width="50" className="me-3" />
                  <div>
                    <h4 className="fw-bold">Mission</h4>
                    <p>
                      To serve the right business solutions in the most ethical, highly qualitative and superior manner that integrate People, Process and emerging Technology with the least Turn Around Time to achieve the business goals cost-effectively.
                    </p>
                  </div>
                </div>
                <hr />
                <div className="d-flex align-items-start">
                  <img src={icon1} alt="Vision" width="50" className="me-3" />
                  <div>
                    <h4 className="fw-bold">Vision</h4>
                    <p>
                      To be the most recognized “Perfect”, “Reliable” & “Professional” human resource partner across the globe.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 text-center">
                <img src={missionVisionImage} alt="Illustration" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default MissionVisionHomeSection;
