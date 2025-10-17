import React from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import Programs from './pages/Programs'
import About from './pages/About'
import Campus from './pages/Campus'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <main>
        <Programs />
        <About />
        <Campus />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App