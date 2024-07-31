import Loader from "/src/components/Loader";

import * as React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";

// pages import
const Home = React.lazy(() => import("/src/pages/Home"));
const Contact = React.lazy(() => import("/src/pages/Contato"));
const Projects = React.lazy(() => import("/src/pages/Projetos"));

function Routes() {
  return (
    <ReactRoutes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<Loader />}>
            <Home />
          </React.Suspense>
        }
      />
      <Route
        path="/contact"
        element={
          <React.Suspense fallback={<Loader />}>
            <Contact />
          </React.Suspense>
        }
      />
      <Route
        path="/projects"
        element={
          <React.Suspense fallback={<Loader />}>
            <Projects />
          </React.Suspense>
        }
      />
    </ReactRoutes>
  );
}

export default Routes;
