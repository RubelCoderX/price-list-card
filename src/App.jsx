import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navber from './component/navbar/Navber'
import PriceList from './component/PriceList/PriceList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
    <Navber></Navber>
    <h1 className='text-7xl text-purple-200'>Hello tailwind</h1>
      <PriceList></PriceList>
    </div>
  )
}

export default App
