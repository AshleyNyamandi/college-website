import React from 'react'
import { Element} from 'react-scroll';
import Hero from '../components/Hero'

function Home() {
  return (
    <Element name='home'>
      <section>
        <Hero />
      </section>
    </Element>
  )
}

export default Home