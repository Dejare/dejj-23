import { useEffect, useState } from "react";
import Main from "./Main";
import Loader from "./components/loader/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const loadingVal = setInterval(() => {
      setCount((count) => Math.min(100, count + 2));
    }, 30);

    const done = setTimeout(() => {
      clearInterval(loadingVal);
      setCount(100);
      setIsLoading(false);
    }, 1500);

    return () => {
      clearInterval(loadingVal);
      clearTimeout(done);
    };
  }, []);

  return <div>{isLoading ? <Loader LoadingValue={count} /> : <Main />}</div>;
};

export default App;
