import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Image from './components/image'
import './App.css'
import CardSection from './components/CardSection'
import Image from './components/image'

function App() {
  return (
    <>
      <h1 className="text-5xl text-red-500">
      Tailwind jalan
    </h1>
    <CardSection />
     <Image />
    </>
  )
}

export default App
