import React from 'react'
import './InnerCategorycss.css'


const InnerCatComp = ({src,name}) => {

  return (
    <>
    <div className='innercatcomp'>
        <div className='Innercontent'>
        <img
        src={src}
        alt="catImage"
        className='catImage'
        />
        </div>
        <div>
            <h6>{name}</h6>
        </div>
    </div>

    </>
  )
}

export default InnerCatComp