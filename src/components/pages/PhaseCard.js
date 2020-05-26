import React from "react";
import { Link } from "react-router-dom";

const PhaseCard = ({ workout }) => {
  // console.log(workout);
  return (
    <div className=" col-md-3 h-25">
      <div className="card mb-4 shadow">
        <div className="card-body bg-info d-flex justify-content-center">
          Phase {"_"}
          <strong>{workout.phase}</strong>
        </div>
        <div className="card-body" style={{ width: "200px" }}>
          <p className="card-text">{workout.days.length} Days</p>
          <small className="text-muted">Week {workout.weeks.toString()}</small>
          <div className="d-flex justify-content-between align-items-center mt-1">
            <div className="btn-group">
              <Link
                type="button"
                className="btn btn-sm btn-outline-secondary"
                to="/singlePhase"
              >
                View
              </Link>
              <Link
                type="button"
                className="btn btn-sm btn-outline-secondary"
                to="/"
              >
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhaseCard;
