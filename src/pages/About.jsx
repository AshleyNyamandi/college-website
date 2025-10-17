import { Element} from 'react-scroll'
import aboutImage from '../assets/about_img.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import PageHeaders from '../components/PageHeaders'

library.add(fas, far, fab)

const About = () => {
  return (
    <Element name='about'>
      <section className='container mx-auto  mb-10'>
        <div className='flex flex-wrap justify-between items-center shadow-[0_0_20px_rgba(0,0,0,0.05)] p-10 gap-10 '>
          <div
            className="h-60 bg-cover bg-center w-60 shrink-0 relative grow max-w-80"
            style={{ backgroundImage: `url(${aboutImage})` }}
          >
            <FontAwesomeIcon icon="fa-solid fa-play" className='text-6xl text-red-600 hover:scale-125 hover:text-green-500 transition delay-70 ease-in absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 cursor-pointer' />
          </div>  
          <div className='basis-44 grow'>
              <PageHeaders 
                header1='About the College'
                header2='The Future, Forged Here!'
              />
            <p className='font-extralight'>
                Ready to trade confusion for code and make "I think so..." a confident "The model shows..."? Imagine the thrill of telling your friends, "I built that," instead of, "I wonder how that works." . <br />
                Stop guessing and start telling compelling stories that predict the future (or at least next quarter's sales). No magical powers required, just Python. <br />
                Does the "back end" of a website sound like a mysterious place you're not allowed to visit? Let's change that. Our Web Development program is your all-access pass. <br />
            </p>
          </div>
        </div>
      </section>
    </Element>
  )
}

export default About