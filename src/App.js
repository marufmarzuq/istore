import React from "react";
import { Provider } from "react-redux";
import store from "./setup/store";
import Router from "./setup/router";

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
