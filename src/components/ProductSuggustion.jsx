import React, { useEffect, useState } from 'react'
import './ourStore/store.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ProductSuggustion = ({value , hideShearchField}) => {
  const [suggestions,setsuggestions] = useState([])
  useEffect(()=>{
    const getSuggestions = async()=>{
      try {
        const result = await axios.get(`http://localhost:3000/Store?q=${value}`)
        setsuggestions(result.data)
      }catch(err) {
        console.log(err)
      }
    }
    getSuggestions()
  },[value])
  const handleClick = (e)=> {
    hideShearchField()
  }
  return (
    <>
      <ul className='product-suggestion mt-4'>
        {suggestions.map(sug=>(
          <Link to={`productdetails/:${sug.id}`} className='d-flex gap-4 align-items-center my-3 text-decoration-none' key={sug.id} onClick={handleClick}>
          <div className="suggestion__img border">
              <img src={sug.img} alt="product-img" />
          </div>
          <div className="suggestion__info">
              <h3>{sug.name}</h3>
              <div className='product__tax my-2'>
                  <span className='price text-black'>{sug.price}</span>
                  <span className='altPrice'>{sug.altPrice}</span>
              </div>
          </div>
      </Link>
        ))}
      </ul>
    </>
    
  )
}

export default ProductSuggustion