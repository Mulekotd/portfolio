import { Header } from "/src/components/Header";
import { Loader } from "/src/components/Loader";

import Routes from "/src/Routes";
import { Fragment, Suspense } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes />
      </Suspense>
    </Fragment>
  );
}

export default App;
