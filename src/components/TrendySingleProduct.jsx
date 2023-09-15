// ** Components
import CustomBtn from './CustomBtn'
import Sign from './Sign'
// ** Icons
import { Cart , SuitHeart ,Eye, ArrowRepeat } from 'react-bootstrap-icons'

// ** hooks
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

// ** store
import { cartAtions} from '../store/slices/cartSlice'
import { CompareActions } from '../store/slices/compareProductSlice'
import { WishlistActions } from '../store/slices/wishes'

const TrendySingleProduct = ({img,title,sales,price,altPrice ,id, customStyle , isSlider ,hasBtn , isBlog ,date , object , descount}) => {
    const {addItem} = cartAtions;
    const {addWishlistItem} = WishlistActions;
    const {addProdcut} = CompareActions;
    const {isAuth} = useSelector(state=>state.AuthReducer)

    

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [signTitle , setSignTitle] = useState('')
    const [signDesc , setSignDesc] = useState('')
    const [sign,setSign] = useState(null)
    const [signType,setSignType] = useState('success')
    const handleRef = (ref)=>{
        setSign(ref)
    }
    
    const item = {...object,quantity:1}
    
    const handleClick = (e,type,)=> {
        e.stopPropagation();
        switch (type) {
            case 'cart': {
                setSignTitle('Go To Cart')
                setSignDesc('Item Added to Cart')
                setSignType('success')

                // **** sign animation *****
               
                sign.classList.add('show-sign')    
                const timeStart = setTimeout(()=>{
                    sign.classList.remove('show-sign')
                },2000)
                
                sign.addEventListener('mouseover',()=>{
                    clearInterval(timeStart)
                })

                // *** add item in cart ***
                dispatch(addItem(item))
                break
                }

            case 'view':navigate(`/viewProduct/:${id}`); break

            case 'compare':{

                setSignTitle('')
                setSignType('success')
                setSignDesc('Item Added to Compare')
                dispatch(addProdcut(object))
                sign.classList.add('show-sign')
                const timeStart = setTimeout(()=>{
                    sign.classList.remove('show-sign')
                },2000)
                
                sign.addEventListener('mouseover',()=>{
                    clearInterval(timeStart)
                })
                break;
            }

            case 'wishlist':{
                if(isAuth) {
                    dispatch(addWishlistItem(object))
                    setSignType('success')
                    setSignTitle('')
                    setSignDesc('Item Added to WishList')
                    sign.classList.add('show-sign')
                    const timeStart = setTimeout(()=>{
                        sign.classList.remove('show-sign')
                    },2000)
                    
                    sign.addEventListener('mouseover',()=>{
                        clearInterval(timeStart)
                    })

                }else {
                    setSignTitle('')
                    setSignType('warning')
                    setSignDesc('If you want to add cart item into wishlist than you have to login first.')
                    console.log('login first')
                    sign.classList.add('show-sign')
                    const timeStart = setTimeout(()=>{
                        sign.classList.remove('show-sign')
                    },2000)
                    
                    sign.addEventListener('mouseover',()=>{
                        clearInterval(timeStart)
                    })
                }
                break;
            }
            default:
        }
        
        
    }
    
  return (
    <>
        <div className={`${isSlider?'':"col-sm-6 col-lg-4 col-xl-3 mb-5 mb-lg-0"}`}>
            <div className={`link ${customStyle?'products-content':''}`} onClick={()=>navigate(`${isSlider?`/productdetails/:${id}`:`productdetails/:${id}`}`)}>
                <div className={`single-product text-center mb-5`}>
                    <div className="product-img position-relative">
                        <img src={img} alt="trendy-product-img" />
                        {(sales || date) && <span className={`product__sales ${isBlog?'date':''}`}>{`${sales}`} {isBlog && <b>nov</b>}</span>}
                        {descount && <span>{descount}</span>}
                        {isBlog?'':<div className="product__controls">
                            <button  onClick={(e)=>handleClick(e,'cart')} >{<Cart size={20}/>}</button>
                            <button  onClick={(e)=>handleClick(e,'compare')} >{<ArrowRepeat size={20}/>}</button>
                            <button  onClick={(e)=>handleClick(e,'wishlist')} > {<SuitHeart size={20}/>}</button>
                            <button  onClick={(e)=>handleClick(e,'view')} >{<Eye size={20}/>}</button>
                        </div>}
                    </div>
                    <div className="product-body pt-3">
                        <h1 className='product__name'><a className='text-start lead' href="/">{title}</a></h1>
                        <div className='product__tax'>
                            <span className='price'>{price}</span>
                            <span className='altPrice'>{altPrice}</span>
                        </div>
                        {hasBtn && <CustomBtn title='Add to Cart' styleContainer='outline-color text-secondary fw-semibold' object={object} signRef={sign} setSignType={setSignType}/>}
                    </div>
                </div>
            </div>
        </div>
        <Sign handleRef={handleRef} title={signTitle} descreption={signDesc} signType={signType}/>
    </>
  )
}

export default TrendySingleProduct