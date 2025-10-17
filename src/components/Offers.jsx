import React, { useState } from 'react'
import MainLink from './MainLink'
import { programsOffered } from '../data'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

function Offers() {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleClick = idx => {
    setActiveIndex(activeIndex === idx ? null : idx)
  }

  return (
    programsOffered.map((programOffered, idx) => (
      <div
        className='basis-48 shrink-0 grow max-w-80 group'
        key={programOffered.program}
        onClick={() => handleClick(idx)}
      >
        <div
          className='h-48 bg-center bg-cover relative'
          style={{ backgroundImage: `url(${programOffered.backgroundImage})` }}
        >
          <div
            className={`absolute inset-0 bg-rose-200/50 flex flex-col items-center justify-around transition-all delay-75
              ${activeIndex === idx ? 'opacity-100 pt-0' : 'opacity-0 pt-[80%]'}
              group-hover:opacity-100 group-hover:pt-0`}
          >
            <span className='text-4xl text-slate-50'>{programOffered.icon}</span>
            <MainLink>
               Explore more <span className='ml-2'><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></span>
            </MainLink>
          </div>
        </div>
        <p className='text-slate-950 text-center pt-2 text-[1rem] font-light'>{programOffered.program}</p>
      </div>
    ))
  )
}

export default Offers