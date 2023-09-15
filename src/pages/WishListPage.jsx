// ** Components
import { BreadCrumb } from '../components'
import { WishlistActions } from '../store/slices/wishes'

// ** custom Hook
import { useGetLocation } from '../hooks/useGetLocation'

// ** redux
import { useDispatch, useSelector } from 'react-redux'


const WishListPage = () => {

  useGetLocation()
  
  const {removeWishlistItem} = WishlistActions;
  const dispatch = useDispatch()

  const {wishlist} = useSelector(state=>state.Wishlist)
  const removeProductHandler = (item)=>{
    dispatch(removeWishlistItem(item))
  }
  return (
   <>
      <BreadCrumb title="WishList Page" url='wishlistpage'/>
      <section>
      <section className='py-5 my-4'>
        <div className="container">
            {wishlist?.length < 1 ? 
                <div className='text-center'><h2>No Procuts in Wishlist </h2></div>:
                <div className="row">
                {wishlist.map(product=>(
                  <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
                  <div className="prodcut mb-4">
                    <div className="product__img">
                      <img src={product.img} alt="" />
                    </div>
                    <div className="product__info mt-3">
                      <h3>{product.name}</h3>
                      <h5>{product.price}</h5>
                      <button onClick = {()=>removeProductHandler(product)} className='bg-transparent light-color mt-2 py-1 remove-btn'>Remove</button>
                    </div>
                        </div>
                    </div>
                ))}
              </div>}
        </div>
      </section>
      </section>
   </>
  )
}

export default WishListPage