import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Image from '../src/components/image.jsx'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
     <Image />

      <Header />
      <Footer/>
    </>
  )
}

export default App
