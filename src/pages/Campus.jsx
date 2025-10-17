import React from 'react'
import { Element} from 'react-scroll';
import PageHeaders from '../components/PageHeaders'
import { gallery } from '../data'

const Campus = () => {
  return (
    <Element name='campus'>
        <section className='container mx-auto mb-10'>
            <div className='shadow-[0_0_20px_rgba(0,0,0,0.05)] py-4'>
                <div className='text-center'>
                    <PageHeaders 
                        header1='Gallery'
                        header2= 'Campus Photos'
                    />
                </div>
                <div className='flex flex-col sm:flex-row flex-wrap gap-0.5 items-center justify-center my-4'>
                    {gallery.map(item => (
                        <div 
                            className='max-w-72 grow shrink-0 border-2 border-transparent hover:border-blue-400/90 hover:scale-105 transition-all delay-75 ease-in shadow-[0_0_10px_rgba(0,0,0,0.5)  h-auto  max-h-96 overflow-hidden rounded-sm'
                            key={item.id}
                        >
                            <img className='aspect-16/9 object-cover' src={item.img} alt='Nymd campus' />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </Element>
  )
}

export default Campus