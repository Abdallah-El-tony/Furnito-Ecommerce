// ** Components
import {Cart} from 'react-bootstrap-icons'
import CartItem from './cart/CartItem'
import CustomBtn from './CustomBtn'

// ** css
import '../components/cart/cart.css'

// ** redux
import { useSelector } from 'react-redux'

// ** css
import '../components/cart/cart.css'

const CartItems = () => {
  const {cartList} = useSelector(state=>state.Cart)

  
  var total  = 0;
  cartList.forEach(item=>{

    //calculate the total price
    total+=parseFloat(item.price.replace('$', '').replace(',', '')) * item.quantity;
  })
  return (
    <li className='position-relative cart'>
        <button>{<Cart size={23}/>}</button>
        <span className='circle'>{cartList.length}</span>
        <div className='popup'>
            {cartList.length < 1?
            'No Item In Cart'
            :
            <div className='items_container'>
                <div className="items">
                  {cartList.map(product=>(
                    <CartItem 
                    key={product.id}
                     img={product.img}
                      name={product.name}
                       price={product.price}
                        qty={product.quantity}
                        />
                  ))}
                </div>
                <div className="cart__total-amount d-flex justify-content-between align-items-center pt-3">
                  <h3>Total Amount</h3>
                  <h3 className='text-secondary'>${total}.00</h3>
                </div>
                <CustomBtn styleContainer='custom-btn w-100 mt-3 mb-2' title='Check Out'/>
                <CustomBtn styleContainer='outline-color w-100 my-2' title='View Cart'/>
            </div>}
        </div>
    </li> 

  )
}

export default CartItems