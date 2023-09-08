import React from 'react'
import CartItem from './cart/CartItem'
import { useSelector } from 'react-redux'
import {methods} from '../constants'
import CustomBtn from './CustomBtn'

const OrdarSummary = () => {
    const {cartList} = useSelector(state=>state.Cart)
    var total  = 0;
    cartList.forEach(item=>{
      total+=parseFloat(item.price.replace('$', '').replace(',', '')) * item.quantity;
    })
  return (
    <div className="col-12 col-xl-4">
       <div className="order-summary border">
        <h2 className='mb-3'>Ordar Summary</h2>
            <ul className='order-summary__content'>
                <li>
                    <form action="" className='d-flex gap-4'>
                        <input type="text" placeholder='Coupon Code'/>
                        <button className='w-100'>Apply Coupon</button>
                    </form>
                </li>
                <li>
                {cartList.map(product=>(
                    <CartItem 
                    key={product.id}
                     img={product.img}
                      name={product.name}
                       price={product.quantity}
                        qty={product.price}
                        customStyle={true}
                        />
                  ))}
                </li>
                <li>
                    <div className="subTotal d-flex flex-wrap justify-content-between align-items-center">
                        <span className='fw-semibold'>Sub Total</span>
                        <span className='fw-semibold'>${total}.00</span>
                    </div>
                </li>
                <li>
                    <ul className="descount-area">
                        <li className='d-flex align-items-center justify-content-between py-2'>
                            <span className='secondary-color'>Tax (Incl)</span>
                            <span className='secondary-color'>0%</span>
                        </li>
                        <li className='d-flex align-items-center justify-content-between py-2'>
                            <span className='secondary-color'>Coupon Discount (-)</span>
                            <span className='secondary-color'>0%</span>
                        </li>
                        <li className='d-flex align-items-center justify-content-between py-2'>
                            <span className='secondary-color'>Shipping Cost (+)</span>
                            <span className='secondary-color'>--</span>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className="footer">
                <div className="subTotal d-flex flex-wrap justify-content-between align-items-center">
                    <span className='fw-semibold'>Total Amount</span>
                    <span className='fw-semibold'>${total}</span>
                </div>
                <div className="payment-methods">
                    <h5 className='mb-3 mt-4'>Select Payment Method</h5>
                    <div className='methodes d-flex flex-wrap gap-2'>
                        {methods.map(method=>(
                            <div className='border payment-method'>
                                <img src={method} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="agreement-terms d-flex gap-2 align-items-start my-2 pt-3">
                    <input type="checkbox" className='border p-2 rounded-0 mt-1'/>
                    <p className='text-black'>I have I have read and agree to the <span className='color-main fs-6'>website terms and conditions*</span></p>
                </div>
                <CustomBtn styleContainer='custom-btn w-100 mt-3 mb-2 py-3' title='Proceed to Checkout'/>
                <CustomBtn styleContainer='outline-color w-100 my-2 py-3' title='Return to Cart'/>
            </div>
       </div>
    </div>
  )
}

export default OrdarSummary