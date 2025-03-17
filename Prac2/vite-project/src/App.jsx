import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
function App() {
  return(
    <>
    <Navbar/>
    <div className='container mx-auto'>
        <div className='bg-amber-500'>
            <h1>Your Todos</h1>
        </div>
    </div>
    </>
  )
}

export default App
