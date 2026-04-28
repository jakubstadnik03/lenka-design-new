import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/vendor/metismenu.css";
import "./style/style.css";

import App from "./App";

const rootElement = document.getElementById("root");

const tree = (
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// react-snap prerendering hydration
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, tree);
} else {
  ReactDOM.createRoot(rootElement).render(tree);
}
