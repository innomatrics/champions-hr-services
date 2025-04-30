import React, { useState } from 'react';
import './HeroSection.css';
import heroImg from '../assets/hero-img.png';
import { TypeAnimation } from 'react-type-animation';

function HeroSection() {
  // State to manage the current step of the form
  const [step, setStep] = useState(1);

  // States for form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [option, setOption] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, option, contact, message });
  };

  // Handle next step
  const handleNext = () => {
    if (step === 1) {
      setStep(2); // Move to step 2 (message form)
    } else {
      handleSubmit(); // Submit the form when on the last step
    }
  };

  // Handle previous step
  const handlePrevious = () => {
    if (step === 2) {
      setStep(1); // Go back to step 1 (basic info form)
    }
  };

  return (
    <section className="hero-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-6">
            <h1>
              <strong>
                We are{' '}
                <span className="text-danger">
                  <TypeAnimation
                    sequence={[
                      
                      'Staffing Company',
                      2000,
                      'Recruitment Agency',
                      2000,
                      
                      
                      'HR Compliance Services',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </strong>
            </h1>

            <p className="text-muted">
  {/* Champions HR Services is one of India’s leading <strong>staffing and recruitment consultancies</strong>, 
  offering <strong>full-time, one-time placements, and bulk hiring solutions</strong>
   across a wide range of industries. we are committed to delivering excellence through quality processes,
    strict compliance, and a client-centric approach. */}

Champions HR Services is one of India’s leading <strong>staffing and recruitment consultancies</strong>,
 providing <strong> full-time placements, one-time hiring solutions, 
 and bulk recruitment</strong> services across diverse industries. 
 We are committed to delivering excellence through robust quality processes, strict compliance, 
and a client-centric approach.
</p>


            {/* Step 1: Basic Info Form */}
            {step === 1 && (
              <form className="row g-2">
                <div className="col-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control border-danger"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-6">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control border-danger"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="col-6">
                  <select
                    className="form-select border-danger"
                    value={option}
                    onChange={(e) => setOption(e.target.value)}
                    required
                  >
                    <option value="Choose your option">Choose your option</option>
                    {/* <option value="I am looking for IT Staffing">I am looking for IT Staffing</option> */}
                    <option value="looking for a Job">Looking for a Job
                    </option>
                    <option value=" looking for Services">Looking for Staffing Services
                    </option>
                    <option value="Looking for HR Compliance Services">Looking for HR Compliance Services</option>
                  </select>
                </div>
                <div className="col-6">
                  <input
                    type="tel"
                    placeholder="Contact No."
                    className="form-control border-danger"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                  />
                </div>
                <div className="col-12">
                  <button type="button" onClick={handleNext} className="btn btn-danger w-100">
                    NEXT &gt;
                  </button>
                </div>
              </form>
            )}

            {/* Step 2: Message Form */}
            {step === 2 && (
              <form className="row g-2" onSubmit={handleSubmit}>
                <div className="col-12">
                  <textarea
                    className="form-control border-danger"
                    placeholder="Message"
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                {/* Previous Button (only visible when step === 2) */}
                <div className="col-6">
                  <button type="button" onClick={handlePrevious} className="btn btn-danger w-100">
                    &lt; Previous
                  </button>
                </div>

                <div className="col-6">
                  <button type="submit" className="btn btn-danger w-100">
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Image */}
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img src={heroImg} alt="Hero Illustration" className="img-fluid" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
