import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const Home = lazy(() => import("/src/pages/Home"));
const Contact = lazy(() => import("/src/pages/Contact"));
const Projects = lazy(() => import("/src/pages/Projects"));

const Routes = () => {
  const routes = [
    { index: true, element: <Home /> },
    { path: "contact", element: <Contact /> },
    { path: "projects", element: <Projects /> },
  ];

  return useRoutes(routes);
};

export default Routes;
