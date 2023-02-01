import React, { useState } from "react";
import "./assets/styles/main.scss";
import Loader from "./components/loader/Loader";
import Main from "./Main";
import './assets/styles/ls.css'


const App = () => {
  const [Loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false)
  }, 3000)

  return (
    <div>
      {
        Loading ? <Loader /> : <>

          <Main />

        </>
      }
    </div>
  );
};

export default App;
