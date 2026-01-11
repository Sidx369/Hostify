import { useState } from 'react'
import './App.css'
import { Landingpage } from './pages/Landingpage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Dashboard } from './pages/Dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen bg-black'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App
