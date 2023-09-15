// ** react hooks
import { useState } from 'react'
import { useNavigate } from 'react-router'

// ** Icons
import { Plus , Dash , X } from 'react-bootstrap-icons'
import { cartAtions, updateCartData } from '../../store/slices/cartSlice'

// ** css
import './cart.css'

// ** redux
import { useDispatch, useSelector } from 'react-redux'

// ** components
import Sign from '../Sign'

const CartList = ({items}) => {

    // store 
    const {increase,decrease , change , removeItem , clearAll} = cartAtions

    // ** Hooks 
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    // ** states
    const [sign,setSign] = useState(null)
    const {userId} = useSelector(state=>state.AuthReducer)
    const {cartList} = useSelector(state=>state.Cart)

    const handleRef = (ref)=>{
        setSign(ref)
    }
    const showSign = ()=>{
        sign.classList.add('show-sign')
        setTimeout(()=>{
            sign.classList.remove('show-sign')
        },2000)
    }

    const amountHandler = (e,item)=>{
       dispatch(change(item))
    }
    const decreaseHandler = (e,item)=>{
        dispatch(decrease(item))
        showSign()

    }
    const increaseHandler =(e,item)=>{
        dispatch(increase(item))
        showSign()
    }

    const RemoveItemHandler = (e,item)=>{
        dispatch(removeItem(item))
        dispatch(updateCartData({id:userId , cart:cartList}))
    }
    const clearAllHandler = ()=>{
        dispatch (clearAll())
        dispatch(updateCartData({id:userId , cart:cartList}))
    }
  return (
    <>
     <table className='w-100 border d-none d-lg-table'>
        <thead className='cart__header w-100'>
          <td className='ps-4'>Product</td>
          <td className='text-center'>Price</td>
          <td className='text-center'>Quantity</td>
          <td className='text-center1' style={{width:'110px'}}>Sub Total</td>
          <td className='text-center'>Action</td>
        </thead>
        <tbody className='cart__item'>
           {items.map(item=>(
             <tr className='p-5' key={item.id}>
             <td className='cart__info d-flex align-items-center gap-3 ps-3 pe-3 pe-lg-5'>
                 <img src={item.img} alt="thumnail" />
                 <h3 className=''>{item.name} <span className=''>Normal</span></h3>
             </td>
             <td>
                 <h3 className='pe-3'>{item.price}.00</h3>
             </td>
             <td>
                 <div className='d-flex cart__quantity-btns gap-2 justify-content-center'>
                     <button onClick={(e)=>decreaseHandler(e,item)}><Dash/></button>
                     <input type="text" className='border' value={item.quantity} onChange={(e)=>amountHandler(e,item)}/>
                     <button onClick={(e)=>increaseHandler(e,item)}><Plus/></button>
                 </div>
             </td>
             <td className='text-center'><h3>${parseFloat(item.price.replace('$', '').replace(',', '')) * item.quantity}.00</h3></td>
             <td className='text-center'><button onClick={(e)=>RemoveItemHandler(e,item)}><X size={23}/></button></td>
         </tr>
           ))}
            
        </tbody>
        </table>
        <table className='w-100 d-table d-lg-none border'>
            {items.map(item=>(
                <tbody className='cart__item table-responsivie' key={item.id}>
                <tr>
                    <th>Product</th>
                    <td className='cart__info text-end '>
                            <img src={item.img} alt="" width={100} height={100} />
                            <h3 className='mt-2 text-end'>{item.name} <span className='ms-2 fs-6'>Normal</span></h3>
                    </td>
                </tr>
                <tr>
                    <th>Price</th>
                    <td><h3>{item.price}.00</h3></td>
                </tr>
                <tr>
                    <th>Quantity</th>
                    <td>
                        <div className='d-flex cart__quantity-btns gap-2 justify-content-end'>
                            <button onClick={(e)=>decreaseHandler(e,item)}><Dash/></button>
                            <input type="text" value={item.quantity} onChange={(e)=>amountHandler(e,item)}  className='border'/>
                            <button onClick={(e)=>increaseHandler(e,item)}><Plus/></button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>Sub Total</th>
                    <td><h3>${parseFloat(item.price.replace('$', '').replace(',', '')) * item.quantity}.00</h3></td>
                </tr>
                <tr>
                    <th>Remove</th>
                    <td><button onClick={(e)=>RemoveItemHandler(e,item)}><X size={23}/></button></td>
                </tr>
            </tbody>
            ))}
        </table>
        <div className="footer-btns mt-4">
            <button onClick = {()=>navigate('/shop')} className='border py-2 px-4'>Continue Shopping</button>
            <button onClick = {clearAllHandler} className='ms-3 py-2 px-4'>Clear Cart</button>
        </div>
        <Sign title='Cart Updated' handleRef={handleRef}/>
    </>
  )
}

export default CartList