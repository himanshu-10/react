import { useState } from 'react'

import './App.css'

function App() {
  
  let [counter,setCounter] = useState(15);
  

  const incVal = () =>{  
    setCounter(counter+1);
  }

  const desVal = () =>{
    setCounter(counter -1);
  }

  return (
    <>
      <h2>Counter : {counter}</h2>

      <button
        onClick={incVal}      
      >Increase Value </button>

      <br />

      <button
        onClick={desVal}      
      >Decrease Value</button>
       
    </>
  )
}

export default App
