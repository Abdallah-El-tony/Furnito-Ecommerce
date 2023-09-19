
// ** Icons
import { Plus , Dash , ArrowRepeat ,Share ,Gift, SuitHeart } from "react-bootstrap-icons"

// ** redux
import { useDispatch, useSelector } from "react-redux"
import { cartAtions } from "../store/slices/cartSlice"

// ** Hooks
import { useState } from "react"
import { useNavigate } from "react-router"

// ** css
import '../components/ourStore/store.css'

// ** Components
import Sign from "./Sign"
import { WishlistActions } from "../store/slices/wishes"
import { CompareActions } from "../store/slices/compareProductSlice"
import ShareIcons from "./ShareIcons"

// ** css
import './wishlist/wishlist.css'

const SingleProductDetails = ({img,name,price,altPrice,sales , object}) => {

    // ** store
    const {addWishlistItem} = WishlistActions;
    const {addProdcut} = CompareActions;
    const {isAuth} = useSelector(state=>state.AuthReducer)

    // ** states
    const [signTitle , setSignTitle] = useState('')
    const [signDesc , setSignDesc] = useState('')
    const [signType,setSignType] = useState('success')
    const [sign,setSign] = useState(null)
    
    const handleRef = (ref)=>{
        setSign(ref)
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {addItem} = cartAtions;
    const [amount,setAmount] = useState(1)
    const item = {...object,quantity:amount}
    

    const increaseHandler = ()=>{
       setAmount(amount+1)
    }
    const decreaseHandler = ()=>{
        if(amount > 1) {
            setAmount(amount-1)
        }
        
    }
    const handleChangeAmount = (e)=>{
        if(e.target.value <= 1 ) {
            setAmount(1)
        }else {
            setAmount(+(e.target.value))
        }
    }
    const addToCart = ()=>{
        dispatch(addItem(item))
        setSignType('success')
        setSignTitle('Go to Cart ')
        setSignDesc('Item Added to Cart')
        sign.classList.add('show-sign')
            setTimeout(()=>{
                sign.classList.remove('show-sign')
            },2000)
        }

        const clickHander = (type)=>{
            if(type === 'wishlist') {
                if(isAuth) {
                    dispatch(addWishlistItem(object))
                    setSignType('success')
                    setSignTitle('')
                    setSignDesc('Item Added to WishList')
                    sign.classList.add('show-sign')
                    setTimeout(()=>{
                    sign.classList.remove('show-sign')
                    },2000)

                }else {
                    setSignTitle('')
                    setSignType('warning')
                    setSignDesc('If you want to add cart item into wishlist than you have to login first.')
                    console.log('login first')
                    sign.classList.add('show-sign')
                    setTimeout(()=>{
                    sign.classList.remove('show-sign')
                    },2000)
                }

            }else {
                setSignTitle('')
                setSignType('success')
                setSignDesc('Item Added to Compare')
                dispatch(addProdcut(object))
                sign.classList.add('show-sign')
                setTimeout(()=>{
                    sign.classList.remove('show-sign')
                },2000)
            }
        }
  return (
    <>
    <div className="row d-flex">
        <div className="col-lg-6">
            <div className="product__img">
                <img src={img} alt="product-img" className='rounded' />
            </div>
        </div>
        <div className="col-lg-6">
            <div className="product__info ms-0 ms-lg-5 mt-5 mt-lg-0">
                <div className="mb-4">
                    <h2>{name}</h2>
                    <span className='product__sales position-relative top-0 end-0'>{sales}</span>
                </div>
                <div className='mt-3'>
                    <span className='me-4 fw-semibold text-secondary'>Status</span>
                    <span className='text-success fw-semibold'>In Stock</span>
                </div>
                <div className="d-flex gap-3 mt-3 align-items-center">
                    <h5>{price}</h5>
                    <h5 className='alt-price'>{altPrice}</h5>
                </div>
                <div className="product-controls d-flex gap-3 align-items-center mt-3 flex-wrap">
                    <h3 style={{fontSize:'18px'}}>Quantiy:</h3>
                    <div className="product__increment d-flex gpa-2">
                        <button onClick={decreaseHandler} className="border-0 mx-2" >{<Dash size={23}/>}</button>
                        <input value={amount} type="text" className="border-0 text-center" style={{width:'68px', outline:"none",backgroundColor:'#f0f0f0'}} onChange={handleChangeAmount} />
                        <button onClick={increaseHandler} className="border-0 mx-2">{<Plus size={23}/>}</button>
                    </div>
                    <span className="text-success">Only! 80 Item Left</span>
                </div>
                <div className="quantity-btns mt-4 d-flex gap-3">
                    <button onClick={addToCart} className="bg-dark text-light">Add To Cart</button>
                    <button onClick={()=>navigate('/checkout')} className="bg-muted">Buy Now</button>
                </div>
                <div className="wihshlis-compare d-flex gap-2 mt-4">
                    <button className="hasTooltib" onClick={()=>clickHander('wishlist')}data-tooltip="Add To WishList">{<SuitHeart/>}</button>
                    <button className="hasTooltib" onClick={()=>clickHander('compare')} data-tooltip="Add To Compare">{<ArrowRepeat/>}</button>
                    <button className="position-relative share-btn">{<Share/>}
                        <ShareIcons/>
                    </button>
                </div>
                <div className="shop-details mt-4">
                    <p className="fw-semibold mt-4">Wooden furnitue | Wooden Table | Wooden Hoppily Table</p>
                    <div className="my-3"><span>Unit: </span><a href="##" className="text-secondary fw-semibold">1 Pice</a></div>
                    <div className="mb-4"><span>SKU: </span><a href="##" className="text-secondary fw-semibold">tab101-1</a></div>
                    <div className="promotion d-flex gap-3 mt-4 pb-4 flex-wrap">
                        <div className="delivery-item mb-3 mb-sm-0">
                            <span>{<Gift size={25}/>}</span>
                            <h6>Estimated Delivery</h6>
                            <p className="m-0">With 4 Days</p>
                        </div>
                        <div className="delivery-item">
                            <span>{<Gift size={25}/>}</span>
                            <h6>7 Days Return</h6>
                            <p className="m-0">Without any damage</p>
                        </div><br/>
                    </div>
                    <div className="footer mt-4 mp-3"><h6>Guaranteed Safe Checkout</h6></div>
                </div>
            </div>
        </div>
    </div>
    <Sign handleRef={handleRef} title={signTitle} descreption={signDesc} signType={signType}/>
    </>
  )
}

export default SingleProductDetails