import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  // let counter = 5
  const removeValue = () => { 
    if (counter > 0) {
      setCounter(counter - 1); 
      
      }
    
  }

  const addValue = () => {
    console.log("valuem added", counter );
    if (counter <  20) {
      setCounter(counter + 1);
    }
    else {
      console.log("value is greater than 20");
      ;
    }
    }

 
  
  return (
    <>
    <h1>Counter aur react  </h1>
    <h2>counter value: {counter}</h2>
    <button onClick= {addValue}>
      Add Value</button> <br></br><br></br>

    <button onClick= {removeValue}>removeValue </button>
      </> )
} 

export default App
