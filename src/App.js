import { useEffect, useState } from "react";
import Main from "./Main";
import Loader from "./components/loader/Loader";

const App = () => {
  const [isLoading, setisLoading] = useState(true)
  const [count, setCount] = useState(0)

  useEffect(()=> {

    const loadingVal = setInterval(()=> {
      setCount(count => count+=1)
      }, 30)
setTimeout(()=> {
 clearInterval(loadingVal)
setisLoading(false)
}, 1500)
  }, [])
  return (
    <div>
   {isLoading ? <Loader LoadingValue={count}/> : <Main/> }
    </div>
  );
};

export default App;
