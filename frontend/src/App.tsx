import { useState } from 'react'
import './App.css'
import { Landingpage } from './pages/Landingpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen bg-black'><Landingpage/></div>
  )
}

export default App
