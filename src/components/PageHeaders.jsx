import React from 'react'

const PageHeaders = ({header1, header2 }) => {
  return (
    <>
        <h2 className='uppercase font-light text-blue-600'>{header1}</h2>
        <p className='text-blue-900 font-medium text-2xl lg:text-3xl pt-1'>{header2}</p>
    </>
  )
}

export default PageHeaders