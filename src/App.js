import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/index";
// import Counter from "./components/Counter";
// import NavBar from "./components/layout/NavBar";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        HI ROB
        {/* <NavBar />
        <Counter /> */}
      </div>
    </Provider>
  );
};

export default App;
