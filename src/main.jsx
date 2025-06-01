import { HashRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

import App from "./App";
import "/src/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }}
  >
    <App />
  </HashRouter>
);
