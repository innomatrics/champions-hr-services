import React, { useState, useEffect } from "react";
import { useJobContext } from "./context/JobContext"; // ✅ Import context

const Jobs = () => {
  const { jobs } = useJobContext(); // ✅ Use shared job list from context

  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    experience: "",
  });
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    filterJobs();
  }, [searchTerm, filters, jobs]); // ✅ Re-run when jobs update

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filterJobs = () => {
    const filtered = jobs.filter((job) => {
      const matchesSearch = job.position.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filters.category ? job.category === filters.category : true;
      const matchesLocation = filters.location ? job.jobLocation.includes(filters.location) : true;
      const matchesExperience = filters.experience ? job.experience === filters.experience : true;

      return matchesSearch && matchesCategory && matchesLocation && matchesExperience;
    });

    setFilteredJobs(filtered);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold text-danger">Job Openings</h2>

      {/* Search and Filters */}
      <div className="row mb-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control border-danger"
            placeholder="Search job position..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className="col-md-2">
          <select
            className="form-select border-danger"
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
          >
            <option value="">All Categories</option>
            <option value="HR">HR</option>
            <option value="Hospitals">Hospitals            </option>
            <option value="Manufacturing & Engineering ">Manufacturing & Engineering            </option>
            <option value="Retail">Retail</option>
            <option value="Pharma">Pharma</option>
            <option value="E-commerce"> E-commerce
            </option>
            <option value="Jewellery">Jewellery</option>
            <option value="Healthcare & Pharmaceuticals">Healthcare & Pharmaceuticals</option>
            <option value="Preschools & Educational Institutions">Preschools & Educational Institutions</option>
            <option value="Medical Colleges">Medical Colleges
            </option>
            <option value="BPO & KPO (Voice, Non-Voice, and Backend Operations)">BPO & KPO (Voice, Non-Voice, and Backend Operations)</option>
            <option value="Logistics & Supply Chain">Logistics & Supply Chain
            </option>
            <option value="IBFSI & FinTech">BFSI & FinTech</option> 
          </select>
        </div>

        <div className="col-md-2">
          <select
            className="form-select border-danger"
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
          >
            <option value="">All STATES</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Bihar">Bihar</option>
          </select>
        </div>

        <div className="col-md-2">
          <select
            className="form-select border-danger"
            name="experience"
            value={filters.experience}
            onChange={handleFilterChange}
          >
            <option value="">All Experience</option>
            
            <option value="0 to 6 Years">0 to 6 Years</option>
            <option value="6 to 12 Years">6 to 12 Years</option>
            <option value=" 12+ Years"> 12+ Years</option>
          </select>
        </div>
      </div>

      {/* Job Listings */}
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <div key={job.id} className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">
                <strong>Position:</strong> {job.position}
              </h5>
              <p className="card-text">
                <strong>#Exp:</strong> {job.experience},{" "}
                <strong>#Job Location:</strong> {job.jobLocation},{" "}
                {job.driveLocation && (
                  <>
                    <strong>#Drive Location:</strong> {job.driveLocation},{" "}
                  </>
                )}
                <strong>#Education:</strong> {job.education}
              </p>
              <p className="mb-1 text-muted">
                <i className="bi bi-briefcase"></i> {job.category}
              </p>
              <p className="mb-1 text-muted">
                <i className="bi bi-geo-alt"></i> {job.jobLocation}
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScRvVyo6og6ntYbH9Y12OaxBD1lCZcq_iv7TFRNpW3BbTralg/viewform"
                className="text-danger"
              >
                More Details →
              </a>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-muted">
          No jobs found matching your criteria.
        </div>
      )}
    </div>
  );
};

export default Jobs;
