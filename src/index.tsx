import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

import { ComingSoon } from "./ComingSoon";

ReactDOM.render(<ComingSoon />, document.getElementById(
  "root"
) as HTMLElement);
registerServiceWorker();
