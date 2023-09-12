import { BreadCrumb, CartList, CustomBtn, TotalPrice } from '../components'
import '../components/cart/cart.css'
import { useSelector } from 'react-redux'
import { useGetLocation } from '../hooks/useGetLocation'

const CartPage = () => {
  useGetLocation()
  const {cartList} = useSelector(state=>state.Cart)
  
  return (
    <>
    <BreadCrumb title='Cart Page' url='cart'/>
        <section className='py-5 my-4'>
            <div className="container">
              {cartList.length < 1 ?
                  <div className='text-center'>
                    <h2>No Products In Your Cart</h2>
                    <CustomBtn title='Back To Home' styleContainer="custom-btn py-3 mt-3"/>
                  </div>
                  :
                  <div className="row">
                  <div className="col-12 col-xl-8">
                   <CartList items={cartList}/>
                  </div>
                  <div className="col-12 col-xl-4">
                   <TotalPrice/>
                  </div>
                </div>
              }
            </div>
    </section>
  </>
  )
}

export default CartPage