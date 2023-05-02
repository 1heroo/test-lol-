import React, {Suspense} from "react";
import Layout from "./components/Layout/Layout";


function App() {

  return (
    <Suspense fallback={'Loading...'}>
        <div>
            <Layout/>
        </div>
    </Suspense>
  );
}

export default App;
