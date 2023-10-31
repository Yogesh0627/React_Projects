import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
  <div className='w-full h-screen' style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button onClick={()=>setColor('red')} className=' outline-none text-white px-4 py-1 rounded-full shadow-lg'
        style = {{backgroundColor:'red'}}>Red</button>
        <button onClick={()=>setColor('Blue')} className=' outline-none text-white px-4 py-1 rounded-full shadow-lg'
        style = {{backgroundColor:'Blue'}}>Blue</button>
        <button onClick={()=>setColor('Green')} className=' outline-none text-white px-4 py-1 rounded-full shadow-lg bg-green-700'>Green</button>
        <button onClick={()=>setColor('Yellow')} className=' outline-none text-black px-4 py-1 rounded-full shadow-lg'
        style = {{backgroundColor:'Yellow'}}>Yellow</button>
        <button onClick={()=>setColor('Orange')} className=' outline-none text-white px-4 py-1 rounded-full shadow-lg'
        style = {{backgroundColor:'Orange'}}>Orange</button>
        <button onClick={()=>setColor('Maroon')} className=' outline-none text-white px-4 py-1 rounded-full shadow-lg'
        style = {{backgroundColor:'Maroon'}}>Maroon</button>
        <button onClick={()=>setColor('Pink')} className=' outline-none text-white px-4 py-1 rounded-full shadow-lg'
        style = {{backgroundColor:'Pink'}}>Pink</button>
        <button onClick={()=>setColor('SkyBlue')} className=' outline-none text-white px-4 py-1 rounded-full shadow-lg'
        style = {{backgroundColor:'SkyBlue'}}>SkyBlue</button>
      </div>
    </div>
  </div>
  )
}

export default App
