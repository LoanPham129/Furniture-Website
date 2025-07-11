import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <div className="absolute top-24 right-1/2 w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[400px] lg:h-[400px] bg-gray-300/20 rounded-full transition-all"></div>
       <Navbar/>
       <Home/>
    </div>
  )
}

export default App