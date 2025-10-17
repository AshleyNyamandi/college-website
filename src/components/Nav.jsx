import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

const Nav = () => {
  const [sticky, setSticky] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleStickyNav)

    return () => {
      window.removeEventListener('scroll', handleStickyNav)
    }
  }, [])

  function handleStickyNav() {
    window.scrollY > 500 ? setSticky(true) : setSticky(false)

  }
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }
  const navBackground = useRef(null)

  const closeMobileNav = (e) => {
    if (e.target === navBackground.current) {
      setIsMenuOpen(!isMenuOpen)
    }
  }

  return (
    <nav className={`w-full fixed flex top-0 ${sticky ? 'bg-blue-600/90 transition delay-75 ease-linear' : ''}  z-10 xl:text-2xl py-2`}>
      <div className='w-full max-w-7xl mx-auto text-slate-50 py-1 px-3 flex items-center justify-between'>
        <div className='w-max sm:ml-7 sm:text-4xl text-green-500'>
          <a className=' font-medium pl-4'>
            <span>
              <FontAwesomeIcon icon="fa-solid fa-globe" />
            </span>NYMD
          </a>
        </div>
        <div className={`fixed
                          h-screen 
                          inset-0
                          z-20
                        bg-slate-950/90 
                          transition-transform
                          duration-300
                          ease-in-out
                          ${!isMenuOpen && 'translate-x-full'}
                          xl:absolute xl:h-fit xl:bg-transparent xl:translate-x-0 xl:z-auto`
                        }
                        ref={navBackground}
                        onClick={closeMobileNav}
                           
        >
          <div className='bg-blue-600/90 flex flex-col ml-auto w-8/12 xl:flex-row xl:bg-transparent'>
            <button onClick={toggleMenu} className='text-4xl ml-auto my-4 mr-4 xl:hidden'><FontAwesomeIcon icon="fa-solid fa-xmark" /></button>
            <ul className='flex flex-col cursor-pointer xl:flex-row'>
              <li className='inline-block my-3 mx-5 x'>
                <Link 
                  onClick={toggleMenu} 
                  to="home"
                  smooth={true}
                  spy={true}
                  // activeClass='active'
                  activeStyle={{borderBottom: '3px solid whitesmoke'}}
                  hashSpy={true}
                >Home
                </Link>
              </li>
              <li className='inline-block my-3 mx-5 cursor-pointer'>
                <Link 
                  onClick={toggleMenu} offset={-250}
                   to="programs" 
                   smooth={true}
                   spy={true}
                  activeStyle={{borderBottom: '3px solid whitesmoke'}}
                  hashSpy={true}
                  >Programs
                  </Link>
                </li>
              <li className='inline-block my-3 mx-5 cursor-pointer'>
                <Link onClick={toggleMenu}
                   offset={-250}
                  to="about"
                  smooth={true}
                  spy={true}
                  activeStyle={{borderBottom: '3px solid whitesmoke'}}
                  hashSpy={true}
                >About us
                </Link>
              </li>
              <li className='inline-block my-3 mx-5 cursor-pointer'>
                <Link 
                  onClick={toggleMenu} 
                  offset={-250} 
                  to="campus"
                  smooth={true}
                  spy={true}
                  activeStyle={{borderBottom: '3px solid whitesmoke'}}
                  hashSpy={true}
                  >Campus
                  </Link>
              </li>
              <li className='inline-block my-3 mx-5 cursor-pointer'>
                <Link 
                  onClick={toggleMenu}
                  offset={-250} 
                  to="testimonials"
                  smooth={true}
                  spy={true}
                  activeStyle={{borderBottom: '3px solid whitesmoke'}}
                  hashSpy={true}
                  >Testimonials
                  </Link>
              </li>
              <li className='inline-block my-3 mx-5 cursor-pointer'>
                <Link 
                  onClick={toggleMenu}
                  offset={-250} 
                  spy={true}
                  to="contact"
                  smooth={true}
                  activeStyle={{borderBottom: '3px solid whitesmoke'}}
                  hashSpy={true}
                  >Contact us
                  </Link>              
                </li>
            </ul>
          </div>
        </div>
        <button onClick={toggleMenu} className='xl:hidden text-3xl'>
          <FontAwesomeIcon icon="fa-solid fa-bars" />
          <span className='sr-only'>toggle menu</span>
        </button>
      </div>
    </nav>
  )
}

export default Nav