import { useState } from 'react'
import Navbar from './component/Navbar'
import Landing from './component/Landing'
import Features from './component/Features'
import About from './component/About'
import Services from './component/Services'
import Gallery from './component/Gallery'
import Testimonials from './component/Testimonials'
import Team from './component/Team'
import Contact from './component/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Landing />
      <Features/>
      <About/>
      <Services/>
      <Gallery/>
      <Testimonials/>
      <Team/>
      <Contact/>
    </>

  )
}

export default App
