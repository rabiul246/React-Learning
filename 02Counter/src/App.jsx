import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  // let counter = 10;

  const addValue = () =>{
    if (counter >= 20){
      return;
    }
    else
    {
      counter = counter + 1;
    }
    // counter = counter + 1;
    setCounter(counter);
  }

  const decreaseValue = () =>{
    if (counter <= 0){
      return;
    }
    else
    {
      counter = counter - 1;
    }
    setCounter(counter);
  }



  return (
    <>
        <h1>React Started</h1>
        <h2>Counter Value: {counter}</h2>
        <br />
        <button onClick={addValue}>Add Value</button>
        <br />
        <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
