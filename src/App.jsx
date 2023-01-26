import { useState } from 'react'
import BestCards from './components/BestCards'
import Categories from './components/Categories'
import Food from './components/Food'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <BestCards />
      <Food  />
      <Categories />
      <footer className='text-center bg-black/70 p-4'>
        <p className='text-white text-sm'>Develop by Wajih from { (new Date().getFullYear()) } </p>
      </footer>
    </div>
  )
}

export default App
