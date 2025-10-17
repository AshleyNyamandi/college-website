import React from 'react'

const Footer = () => {
  return (
    <div className='container mx-auto bg-slate-950 text-slate-50/65 text-center'>
        <div className=' border-b-2 border-gray-500 py-12 mb-6 lg:flex lg:justify-between'>
            <ul className=''>
                <li className='text-slate-50 font-bold text-2xl'>The Univesity</li>
                <li className='font-extralight my-2 hover:text-white'>Academic Schools</li>
                <li className='font-extralight my-2 hover:text-white'>Visist Us</li>
                <li className='font-extralight my-2 hover:text-white'>Contact us</li>
                <li className='font-extralight my-2 hover:text-white'>Emergency contacts</li>
                <li className='font-extralight my-2 hover:text-white'>Public information</li>
            </ul>
            <ul>
                <li className='text-slate-50 font-bold text-2xl'>Our facilities</li>
                <li className='font-extralight my-2 hover:text-white'>Libraries</li>
                <li className='font-extralight my-2 hover:text-white'>Conferences</li>
                <li className='font-extralight my-2 hover:text-white'>Research equipment</li>
                <li className='font-extralight my-2 hover:text-white'>IT support</li>
                <li className='font-extralight my-2 hover:text-white'>Sport</li>
            </ul>
            <ul>
                <li className='text-slate-50 font-bold text-2xl'>Connect with us</li>
                <li className='font-extralight my-2 hover:text-white'>New Students</li>
                <li className='font-extralight my-2 hover:text-white'>Alumni</li>
                <li className='font-extralight my-2 hover:text-white'>Blogs</li>
            </ul>
            <ul>
                <li className='text-slate-50 font-bold text-2xl'>Quick links</li>
                <li className='font-extralight my-2 hover:text-white'>Job opportunities</li>
                <li className='font-extralight my-2'>Intranet</li>
                <li className='font-extralight my-2 hover:text-white'>Media center</li>
                <li className='font-extralight my-2 hover:text-white'>people</li>
                <li className='font-extralight my-2 hover:text-white'>Research portal</li>
            </ul>
        </div>
        <div className='py-4 text-center'>
            <p className='text-sm'>Copyright Nymd College. Registered under UNPD</p>
        </div>
    </div>
  )
}

export default Footer