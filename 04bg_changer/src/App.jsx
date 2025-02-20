import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
    <div className="w-full h-screen duration-1000" 
    style={{backgroundColor: color}}>

      <div className='fixed flex flex-wrap 
      justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center 
        gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
          <button onClick={() => setColor('red')}
          className='outline-none px-4'
          style={{backgroundColor: 'red'}}>Red</button> 
          
          <button onClick={() => setColor('green')}
          className='outline-none px-4'
          style={{backgroundColor: 'green'}}>Green</button> 
          
          <button onClick={() => setColor('lavender')}
          className='outline-none px-4'
          style={{backgroundColor: 'lavender'}}>lavender</button>

         
          
          <button onClick={() => setColor('yellow')}
          className='outline-none px-4'
          style={{backgroundColor: 'yellow'}}>Yellow</button> 
          
          <button onClick={() => setColor('orange')}
          className='outline-none px-4'
          style={{backgroundColor: 'orange'}}>orange</button> 
          
          <button onClick={() => setColor('violet')}
          className='outline-none px-4'
          style={{backgroundColor: 'violet'}}>Violet</button> 
          
          <button onClick={() => setColor('white')}
          className='outline-none px-4'
          style={{backgroundColor: 'white'}}>White</button> 
          
        </div>
      </div>
    
    </div>
    
    </>
  )
}

export default App
