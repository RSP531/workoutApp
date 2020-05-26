import React, { Fragment } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Phases from "./components/pages/Phases";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NavBar from "./components/layout/NavBar";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
        </Fragment>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/phases" component={Phases} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
