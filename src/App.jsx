import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from '../src/Pages/Homepage/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className='w-full h-[100vh] bg-slate-800'>
            <Home /> 
      </div>    
    
  )
}

export default App
