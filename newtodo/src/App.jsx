import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import AddtoDo from './components/AddtoDo'

function App() {
   

  return (
    <>
       <h1> Learn redux</h1>
       < Todo/>
       < AddtoDo />
    </>
  )
}

export default App
