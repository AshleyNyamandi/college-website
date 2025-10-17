import React from 'react'
import { Element } from 'react-scroll'
import Offers from '../components/Offers'
import PageHeaders from '../components/PageHeaders'

const Programs = () => {
  return (
    <Element name='programs'>
    <section  className='container my-9 '>
      <div className='shadow-[0_0_20px_rgba(0,0,0,0.05)] py-6'>
        <div className='text-center'>
          <PageHeaders 
            header1='Our Programs' 
            header2='What We Offer'
          />
        </div>
        <div className='w-11/12 max-w-[1536px] mx-auto flex justify-center flex-wrap gap-x-6 gap-y-4'>
            <Offers />
        </div>
      </div>
    </section>
    </Element>
  )
}

export default Programs