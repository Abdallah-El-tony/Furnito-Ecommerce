import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cartAtions } from '../store/slices/cartSlice'

const CustomBtn = ({title , styleContainer , object , signRef}) => {
  const item = {...object,quantity:1}

  const dispatch = useDispatch()

  const {addItem} = cartAtions;

  const navigate = useNavigate()
  
  const handleNavigate = (e)=>{
    if(title==='Shop Now'){
      navigate('shop')
    }else if(title==='View Cart' || title==='Return to Cart'){
      navigate('/cart')
    }

    else if(title==='Add to Cart') {
      e.stopPropagation()
      dispatch(addItem(item))
      signRef.classList.add('show-sign')
        setTimeout(()=>{
            signRef.classList.remove('show-sign')
        },2000)
    }

    else if(title === 'Back To Home') {
      navigate('/')
    }
    else if(title === 'Proceed To Checkout' || title ==='Check Out') {
      navigate('/checkout')
    }
    else if(title === 'View Wishlist') {
      navigate('/wishlistpage')
    }
      
    }
  return (
    <button onClick={handleNavigate} className={styleContainer}>{title}</button>
  )
}

export default CustomBtn