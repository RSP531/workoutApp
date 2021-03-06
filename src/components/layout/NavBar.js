import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  //const text = useRef("");
  // const onChange = e => {
  //   console.log(text.current.value);
  //   //something here
  //   // searchLogs(text.current.value);
  // };
  const isAuthenticated = false;
  //const { isAuthenticated, logoutUser, user } = authContext;

  const authLinks = <Fragment>//tbd</Fragment>;

  const guestLinks = (
    <Fragment>
      <li className="nav-item">
        <Link className="nav-link active bg-warning" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link bg-warning" to="/phases">
          Phases
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link bg-warning" to="/about">
          About
        </Link>
      </li>
    </Fragment>
  );
  return (
    <div className="navbar bg-info mb-2">
      <i className="fas fa-dumbbell fa-2x"></i>
      <h1> Rob's Workout App</h1>
      <ul className="nav justify-content-end">
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </div>
  );
};

export default NavBar;
