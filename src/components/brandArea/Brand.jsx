import React from 'react'
import './brand.css'
const Brand = ({brand}) => {
  return (
    <div className='brand'>
        <img src={brand} alt="" />
    </div>
  )
}

export default Brand