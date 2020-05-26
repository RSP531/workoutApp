import React from "react";

const PhaseCard = () => {
  return (
    <div className="col-md-3 h-25">
      <div className="card mb-4 shadow">
        <div className="card-body bg-info d-flex justify-content-center">
          Phase I
        </div>
        <div className="card-body" style={{ width: "200px" }}>
          <p className="card-text">5 Days</p>
          <small className="text-muted">Week 1,2,3</small>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhaseCard;
