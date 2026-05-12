import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Image from '../src/components/image.jsx'
import RoomsInspiration from '../src/components/RoomsInspiration.jsx'
import './App.css'
import Layout from './layout/layout.jsx'


function App() {
  return (
    <>
      <Layout>
        <RoomsInspiration />
        <Image />
      </Layout>    
    </>
  )
}

export default App
