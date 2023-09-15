// ** components
import CustomBtn from '../CustomBtn'

// ** css
import './cart.css'

// react hooks
import { useSelector } from 'react-redux'

const TotalPrice = () => {

  //** redux */
  const {cartList} = useSelector(state=>state.Cart)

  // ** vars
  var total  = 0;

  // ** calculate total price
  cartList.forEach(item=>{
    total+=parseFloat(item.price.replace('$', '').replace(',', '')) * item.quantity;
  })

  return (
    <div className="cart__total border mt-4 mt-xl-0">
        <div className="row">
            <div className="col-12 col-md-5 mx-auto col-xl-12">
                <h2>Cart Total:</h2>
                <ul className='total__info mt-4'>
                    <li><h3>Sub Total</h3><span className='fw-semibold'>${total}.00</span></li>
                    <li><h3>Tax (Incl. --%)</h3><span className='fw-semibold'>--</span></li>
                    <li><h3>Total Amount</h3><span className='fw-semibold'>${total}.00</span></li>
                    <CustomBtn title ='Proceed To Checkout' styleContainer='custom-btn w-100 py-2'/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default TotalPrice