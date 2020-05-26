import React, { useRef } from "react";

const NavBar = () => {
  const text = useRef("");
  const onChange = e => {
    console.log(text.current.value);
    //something here
    // searchLogs(text.current.value);
  };
  return (
    <nav style={{ marginBottom: "30px" }} className="green">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search Logs..."
              ref={text}
              onChange={onChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i
              className="material-icons"
              onClick={() => {
                text.current.value = "";
                //not done, need to get the logs
              }}
            >
              close
            </i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
