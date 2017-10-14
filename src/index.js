import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers } from "redux";
import { localeReducer } from "react-localize-redux";
import { Provider } from "react-redux";
import { initialize, addTranslation } from "react-localize-redux";

const store = createStore(
  combineReducers({
    locale: localeReducer
  })
);

const languages = ["en", "fr"];
store.dispatch(initialize(languages));
store.dispatch(addTranslation(require("./languages/text.json")));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
