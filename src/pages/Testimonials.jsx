import React from 'react'
import { Element } from 'react-scroll'
import default_user_profile from '../assets/default_user.png'

import PageHeaders from '../components/PageHeaders'
import ReadMore from '../components/ReadMore'
import Ratings from '../components/Ratings'
import { students } from '../data'

// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules'


const Testimonials = () => {
  return (
    <Element name="testimonials">
      <section className='container mb-10 '>
        <div className='shadow-[0_0_20px_rgba(0,0,0,0.05)] p-4 '>
            <div className='text-center'>
                <PageHeaders 
                    header1 = 'testimonials'
                    header2 = 'What Other Students say...'
                />
            </div>
            <div className='mt-10'>
              <div className=''>
                
                  <div className='max-w-5xl mx-auto h-fit cursor-grabbing'>
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={5}
                      breakpoints={
                        {
                          "768": {
                            slidesPerView : 2
                          },
                        }
                      }
                      pagination={{clickable:true, dynamicBullets: true}}
                      navigation
                      modules={[Pagination, Navigation]}
                    >
                      {students.map(student => ( 
                        
                            <SwiperSlide>
                              <div
                                className="select-none max-w-xs bg-amber-50/20 p-4 rounded-sm mx-auto"
                                key={student.id}
                                >
                                  <ReadMore>{student.testimony}</ReadMore>
                                  <div className='flex justify-between   items-center mt-4'> 
                                    <div className='flex items-center gap-4'>
                                      <img className='w-10 h-10 object-cover border-2 border-blue-500 rounded-full' src={student.img? student.img : default_user_profile} alt={student.img? student.name : "default profile"} />
                                      <span>{student.name}</span>
                                    </div>
                                    <div className='flex'>
                                      <Ratings rating={student.rating} />
                                    </div>
                                </div>
                              </div>
                            </SwiperSlide>
                      ))}
                  </Swiper>
                  </div>
                
              </div>
            </div>
          </div>
      </section>
    </Element>
  )
}

export default Testimonials