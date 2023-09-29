import '/src/styles/globals.css';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '/src/components/Header';
import AppRouter from '/src/utils/Router';

function App() {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
}

export default App;