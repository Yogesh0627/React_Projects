import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Allroutes from './Components/Allroutes'
import Navbar from './Components/Navbar'
import Counter from './Components/Counter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Allroutes/>
      {/* <Counter/> */}
    </div>
  )
}

export default App
