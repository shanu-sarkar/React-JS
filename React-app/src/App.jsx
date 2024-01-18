import { useState } from 'react'
import './App.css'
import RendomNumber from './RendomNumber'
function App() {

  const [count, setCount] = useState(0)

  return<> <h1 style={{background: "red"}}>
    <h2 style={{color: "black"}}>
    Jai shree ram
    </h2>
  </h1>
    <RendomNumber/>
    </>
}

export default App
