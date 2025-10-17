import React, { useState } from 'react'

const ReadMore = ({children}) => {

    const text = children
    const [isReadMore, setIsReadMore] = useState(true)
    const toggleSeeMore = () => {
        setIsReadMore(!isReadMore)
        console.log(isReadMore)
    }

    return (
            <div>
                <p className="font-extralight inline">{isReadMore ? text.slice(0, 100) : text}</p>
                <button onClick={toggleSeeMore} className='text-green-500 cursor-pointer font-medium'>{isReadMore ? " ...see more" :" show less" }</button>
            </div>
  )
}

export default ReadMore