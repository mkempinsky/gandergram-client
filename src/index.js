import React from "react";
import { render } from "react-dom";
import { BrowserRouter, withRouter } from "react-router-dom";
import App from "./App";

const AppContainer = withRouter(props => <App {...props} />);

// console.log(store.getState())
render(
  <BrowserRouter>
    <AppContainer />
  </BrowserRouter>,

  document.getElementById("root")
);
