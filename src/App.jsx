import "/src/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "/src/components/Header";
import Routes from "./routes";

import * as React from "react";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes />
    </React.Fragment>
  );
}

export default App;
