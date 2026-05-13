import RoomsInspiration from '../src/components/RoomsInspiration.jsx'
import Image from '../src/components/Image.jsx'
import heroImg from './assets/hero.png'
import Hero from './components/hero'
import './App.css'
import Layout from './layout/layout.jsx'
import CardSection from './components/CardSection'

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <CardSection />
        <RoomsInspiration />
        <Image />
      </Layout>    
    </>
  )
}

export default App
