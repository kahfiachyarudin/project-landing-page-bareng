import Image from '../src/components/image.jsx'
import RoomsInspiration from '../src/components/RoomsInspiration.jsx'
import heroImg from './assets/hero.png'
import Hero from './components/hero'
import './App.css'
import Layout from './layout/layout.jsx'


function App() {
  return (
    <>
      <Layout>
        <Hero />
        <RoomsInspiration />
        <Image />
      </Layout>    
    </>
  )
}

export default App
