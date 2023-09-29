import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from '/src/components/Loader';

// pages import
const Home = React.lazy(() => import('/src/pages/Home'));
const Contact = React.lazy(() => import('/src/pages/Contato'));
const Projects = React.lazy(() => import('/src/pages/Projetos'));

function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={<React.Suspense fallback={<Loader />}><Home /></React.Suspense>}
      />

      <Route
        path="/contato"
        element={<React.Suspense fallback={<Loader />}><Contact /></React.Suspense>}
      />

      <Route
        path="/projetos"
        element={<React.Suspense fallback={<Loader />}><Projects /></React.Suspense>}
      />
    </Routes>
  );
}

export default AppRouter;