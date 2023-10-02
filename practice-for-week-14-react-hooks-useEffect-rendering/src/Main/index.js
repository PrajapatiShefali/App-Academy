import { useEffect,useState } from "react";

function Main() {
  useEffect(() => {
    console.log('UseEffect1 Ran');
  },[]);
  const [count, setCount] = useState(0);

  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);

  useEffect(() => {
    console.log('UseEffect2 Ran');
    if (toggleTwo)
      console.log('toggleTwo slice of state is true so this code runs');
  }, [toggleTwo]);
  console.log(
    `UseEffect3 cleanup ran.\nsetInterval number ${count} is being cleared out`
  );

      

  useEffect(() => { 
    const myInterval=()=>{setInterval(() => {
      console.log(`UseEffect3 with interval number ${count} is running`);
    }, 100);}
    myInterval()
    clearInterval(myInterval);

    return () => {
      console.log(
        `UseEffect3 cleanup ran.\nsetInterval number ${count} is being cleared out`
      );
      clearInterval(myInterval);
    };
   
  }, [count]);
  return (
    <div>
      {console.log('rendered or re-rendered')}
      <h1>Main Component</h1>
      <button onClick={() => setToggleOne(!toggleOne)}>ToggleOne</button>
      <button onClick={() => setToggleTwo(!toggleTwo)}>ToggleTwo</button>
      <button onClick={()=>setCount(count+1)}>Increment </button>
      <p>{count}</p>
    
    </div>
  );
}
export default Main;
