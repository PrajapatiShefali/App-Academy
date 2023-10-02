import './UseState.css';
import {useState} from 'react';

const UseState = () => {
 
  const [theme,setTheme]=useState('light');
  const [count,setCount]=useState(0);
  const changeTheme=()=>{
    theme==='dark'?setTheme('light'):setTheme('dark')
  }
  const increment=(prevCount)=>{
    setCount((prevCount) => prevCount + 1)
  };
  const decrement=()=>{
    setCount((prevCount) => prevCount - 1)
  };
  return (
    <div className={'state ' +theme}>
      <h1>UseState Component</h1>
      <button onClick={changeTheme}>Dark</button>
      <button onClick={changeTheme}>Light</button>

      <h2>DISPLAY COUNT HERE {count}</h2>
      <button onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default UseState;