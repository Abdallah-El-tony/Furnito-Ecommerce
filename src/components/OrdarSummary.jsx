
// ** hooks
import { useState } from 'react'
import CartItem from './cart/CartItem'

// ** redux
import { useSelector } from 'react-redux'

// ** constants
import {methods} from '../constants'

// random keies libirary
import { v4 as uuidv4 } from 'uuid';


// ** Components
import CustomBtn from './CustomBtn'
import Sign from './Sign';

const OrdarSummary = () => {

    // states
    const [signTitle , setSignTitle] = useState('')
    const [signDesc , setSignDesc] = useState('')
    const [sign,setSign] = useState(null)
    const [signType,setSignType] = useState('success')


    const handleRef = (ref)=>{
        setSign(ref)
    }

    // store
    const {cartList} = useSelector(state=>state.Cart)
    const [isChecked , setIsChecked] = useState(false)

    // ** vars
    var total  = 0;
    cartList.forEach(item=>{
      total+=parseFloat(item.price.replace('$', '').replace(',', '')) * item.quantity;
    })

    const selectMethod =(e)=>{
    const targetElm = e.target.closest('.payment-method')
    document.querySelector('.selected').classList.remove('selected')
    targetElm.classList.add('selected')
    }

    const clickHandler = ()=>{
        if(!isChecked) {
            setSignTitle('')
            setSignDesc('You need to agree to our Terms & Conditions to complete the order')
            setSignType('danger')
            sign.classList.add('show-sign')    
           
            const timeStart = setTimeout(()=>{
                sign.classList.remove('show-sign')
            },2000)
            
            sign.addEventListener('mouseover',()=>{
                clearInterval(timeStart)
            })
        }
    }
  return (
   <>
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
                        {methods.map((method,index)=>(
                            <button key={uuidv4()} className={`${index===0?'selected':''} payment-method`} onClick={selectMethod}>
                                <img src={method} alt="" onClick={selectMethod}/>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="agreement-terms d-flex gap-2 align-items-start my-2 pt-3">
                    <input type="checkbox" className='border p-2 rounded-0 mt-1' checked={isChecked} onChange={(e)=>setIsChecked(e.target.checked)}/>
                    <p className='text-black'>I have read and agree to the <span className='color-main fs-6'>website terms and conditions*</span></p>
                </div>
                <CustomBtn styleContainer='custom-btn w-100 mt-3 mb-2 py-3' title='Proceed to Checkout' onClick={clickHandler}/>
                <CustomBtn styleContainer='outline-color w-100 my-2 py-3' title='Return to Cart'/>
            </div>
       </div>
    </div>
    <Sign handleRef={handleRef} title={signTitle} descreption={signDesc} signType={signType}/>

   </>
  )
}

export default OrdarSummary