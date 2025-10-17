import MainLink from './MainLink'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

function Hero() {

  return ( 
    <header
        className='w-full min-h-screen bg-cover bg-center text-slate-50 hero-bg flex justify-center items-center'
    >
        <div className='mx-auto max-w-5xl text-center px-4'>
            <h1 className='text-4xl lg:text-5xl xl:text-6xl font-bold'>The Future of Learning Starts Here</h1>
            <p className='py-4 tracking-wide'>Welcome to Nymd Group of Schools, where education is reimagined for a new generation. We are a vibrant learning community dedicated to nurturing curiosity, fostering innovation, and equipping students with the critical thinking and creative skills they need to thrive in tomorrow's world. Join us as we build the future, one student at a time</p>
            <MainLink>
               Explore more <span className='ml-2'><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></span>
            </MainLink>
        </div>
    </header>
  )
}

export default Hero