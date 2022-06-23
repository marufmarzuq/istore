import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Router from "./components/router/Router";

const App = () => {
  return (
    <Provider store={store}>
      <div className="root">
        <Router />
      </div>
    </Provider>
  );
};

export default App;
