import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import AppContainer from "./containers/AppContainer";
import { store } from "./redux/store";

ReactDOM.render(
  // <Provider store={store}>
  <AppContainer />,
  // </Provider>
  document.querySelector('[data-js="app"]')
);
