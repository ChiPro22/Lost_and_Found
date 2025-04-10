import { useState } from 'react'
import React from 'react'
import Footer from './components/Footer'
import './App.css'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home></Home>
      <Footer></Footer>
    </>
  )
}

export default App
