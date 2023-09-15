// ** hooks
import  { useState } from 'react'

// ** Icons
import { ArrowRepeat, Eye, Heart } from 'react-bootstrap-icons'

// ** components
import CustomBtn from '../CustomBtn'
import { useNavigate } from 'react-router'
import { CompareActions } from '../../store/slices/compareProductSlice'
import { WishlistActions } from '../../store/slices/wishes'
import Sign from '../Sign'

// ** css
import './shop.css'

// ** redux
import { useDispatch, useSelector } from 'react-redux'


const VirticalSingleProduct = ({img,title,sales,hasBtn,price,altPrice,isBlog , object,id}) => {

    // hooks
    const navigat = useNavigate()

    // ** states
    const [sign,setSign] = useState(null)
    const [signTitle , setSignTitle] = useState('')
    const [signDesc , setSignDesc] = useState('')
    const [signType,setSignType] = useState('success')


    

    // ** redux
    const {addProdcut} = CompareActions;
    const dispatch = useDispatch()
    const {isAuth} = useSelector(state=>state.AuthReducer)
    const {addWishlistItem} = WishlistActions;

    // ** functions
    const handleRef = (ref)=>{
        setSign(ref)
    }

    const handleClick = (e,type)=>{
        switch (type) {

            case 'view':navigat(`/viewProduct/:${id}`); break

            case 'compare':{

                setSignTitle('')
                setSignType('success')
                setSignDesc('Item Added to Compare')
                dispatch(addProdcut(object))
                sign.classList.add('show-sign')
                setTimeout(()=>{
                    sign.classList.remove('show-sign')
                },2000)
                break;
            }

            case 'wishlist':{
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
                break;
            }
            default:
        }
    }

  return (
    <>
    <div className="row p-0 small-shadow align-items-center mb-4 products-content">
        <div className="col-12 col-lg-6 p-0">
            <div className="product__img position-relative">
                <img src={img} alt="product"/>
                {sales && <span className='product__sales'>{sales}</span>}
            </div>
        </div>
        <div className="col-12 col-lg-6">
            <div className="product__content pe-0 ms-0 ms-lg-4">
                <div className="product-body pt-3 border-bottom-1">
                    <h3 className='product__name'><a href="/">{title}</a></h3>
                    <div className='product__tax justify-content-start'>
                        <span className='price'>{price}</span>
                        <span className='altPrice'>{altPrice}</span>
                    </div>
                </div>
                {isBlog?
                    <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush place. These tried for way joy wrote witty. In mr began music weeks after at begin. Education no dejection so
                    </p>
                    :
                    <div className="product__links pt-3 pt-lg-5 mt-3 mt-lg-5 gap-2 gap-md-3 flex-wrap">
                    {hasBtn && <CustomBtn title='Add to Cart' styleContainer='custom-btn py-2 px-3' object={object} signRef={sign} setSignType={setSignType}/>}
                    <button onClick={(e)=>handleClick(e,'wishlist')}>{<Heart size={20}/>}</button>
                    <button onClick={(e)=>handleClick(e,'compare')}>{<ArrowRepeat size={20}/>}</button>
                    <button onClick={(e)=>handleClick(e,'view')}>{<Eye size={20}/>}</button>
                </div>}
            </div>
        </div>
        
    </div>
    <Sign handleRef={handleRef} title={signTitle} descreption={signDesc} signType={signType}/>

    </>
  )
}

export default VirticalSingleProduct