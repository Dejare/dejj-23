import { useEffect, useState } from "react";
import Main from "./Main";
import Loader from "./components/loader/Loader";
import Cursor from "./components/Cursor";

const App = () => {
  const [count, setCount] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let value = 0;
    let exitTimer;
    let doneTimer;
    const tick = setInterval(() => {
      value += Math.floor(Math.random() * 3) + 2;
      if (value >= 100) {
        value = 100;
        clearInterval(tick);
        exitTimer = setTimeout(() => setExiting(true), 300);
        doneTimer = setTimeout(() => setDone(true), 1250);
      }
      setCount(value);
    }, 32);

    return () => {
      clearInterval(tick);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  return (
    <div className="bg-ink">
      {!done && <Loader LoadingValue={count} exiting={exiting} />}
      {(exiting || done) && <Main />}
      <Cursor />
    </div>
  );
};

export default App;
