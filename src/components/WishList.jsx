// ** css
import './Navbar/navbar.css'

// ** Icons
import {SuitHeart} from 'react-bootstrap-icons'

// ** redux
import { useSelector } from 'react-redux'

// ** Components
import CartItem from './cart/CartItem'
import CustomBtn from './CustomBtn'

const WishList = () => {
  // ** hook
  const {wishlist}  = useSelector(state=>state.Wishlist)
  
  return (
    <li className='position-relative wishlist'>
        <button>{<SuitHeart size={23}/>}</button>
        <span className='circle'>{wishlist.length}</span>
        <div className='popup'>
            {wishlist?.length < 1?
            'No Item In Wishlist'
            :
            <div className='items_container'>
                <div className="items">
                  {wishlist.map(product=>(
                    <CartItem 
                    key={product.id}
                     img={product.img}
                      name={product.name}
                       price={product.price}
                        qty={product.quantity}
                        />
                  ))}
                </div>
                <CustomBtn styleContainer='outline-color w-100 my-3' title='View Wishlist'/>
            </div>}
        </div>
    </li>
  )
}

export default WishList