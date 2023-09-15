// ** redux
import { useDispatch } from 'react-redux'

// ** Hooks
import { useNavigate } from 'react-router-dom'

// ** store
import { cartAtions } from '../store/slices/cartSlice'

const CustomBtn = ({title , styleContainer , object , signRef , onClick , setSignType}) => {

  const item = {...object,quantity:1}

  // ** hooks
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {addItem} = cartAtions;

  
  
  const handleNavigate = (e)=>{

    if(onClick) {
      onClick()
    }
    if(title==='Shop Now'){
      navigate('shop')
    }else if(title==='View Cart' || title==='Return to Cart'){
      navigate('/cart')
    }

    else if(title==='Add to Cart') {
      setSignType('success')
      e.stopPropagation()
      dispatch(addItem(item))
      signRef.classList.add('show-sign')
      const timeStart = setTimeout(()=>{
        signRef.classList.remove('show-sign')
    },2000)
    
    signRef.addEventListener('mouseover',()=>{
        clearInterval(timeStart)
    })
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