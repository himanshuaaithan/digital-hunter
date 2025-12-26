import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Hero2 from './components/hero2'

const App = () => {
  return (
    <div className='h-screen w-full bg-[#1D1D1D]'>
      <Navbar />
      <Hero />
      <Hero2 />
    </div>
  )
}

export default App