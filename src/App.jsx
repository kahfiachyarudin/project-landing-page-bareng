import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Image from '../src/components/image.jsx'
import './App.css'
import Layout from './layout/layout.jsx'


function App() {
  return (
    <>
      <Layout>
        <Image />
      </Layout>
    </>
  )
}

export default App
