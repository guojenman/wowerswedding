import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import { AppConstruction } from "./appConstruction";

ReactDOM.render(
  <BrowserRouter>
    <AppConstruction />
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement
);
