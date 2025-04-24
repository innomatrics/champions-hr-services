import React from 'react';
import missionIcon from '../assets/mission.png';
import valuesIcon from '../assets/values.png';
import missionImage from '../assets/mission-img.png'; // Add the image you want for 'Our Mission'

function MissionVisionValues() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold text-danger mb-5 animate__animated animate__fadeInDown">
          Mission, Vision & Values
        </h2>

        <div className="row g-4 justify-content-center">
          {/* Our Mission */}
          <div className="col-md-6">
            <div className="border p-4 bg-white h-100 text-center hover-shadow animate__animated animate__fadeInLeft">
              <img src={missionIcon} alt="Mission" width="80" className="mb-3" />
              <h4 className="text-danger fw-semibold mb-3">Our Mission</h4>
              <p className="text-muted">
                To empower organizations with the right people and the right practices,
                creating workplaces that are compliant, capable, and future-ready.
              </p>

              {/* Add the mission image below */}
              <img src={missionImage} alt="Our Mission Visual" className="img-fluid mt-4" />

            </div>
          </div>

          {/* Our Vision and Values */}
          <div className="col-md-6">
            <div className="border  p-4 bg-white h-100 text-center hover-shadow animate__animated animate__fadeInRight">
              <img src={valuesIcon} alt="Vision and Values" width="80" className="mb-3" />
              <h4 className="text-danger fw-semibold mb-3">Our Vision & Values</h4>
              <p className="text-muted text-start">
                Our vision is to be a trusted partner in workforce transformation—helping businesses thrive through strategic staffing,
                innovative solutions, and a human-centric approach. We believe in the power of <strong>Integrity in Every Action</strong>,
                transparency, and excellence in all we do. Our values focus on building lasting relationships by understanding client needs
                and aligning our efforts with their goals.
              </p>
              <p className="text-muted text-start">
                We're committed to <strong>Excellence</strong> and delivering personalized solutions that create measurable impact—empowering talent,
                optimizing operations, and driving growth. With a <strong>Personalized Approach</strong> and a focus on
                <strong> Long-Term Partnerships</strong>, we aim to deliver value through professionalism, adaptability, and a relentless pursuit of quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVisionValues;
