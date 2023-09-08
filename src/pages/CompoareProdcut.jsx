import { useDispatch, useSelector } from 'react-redux'
import { BreadCrumb } from '../components'
import { CompareActions } from '../store/slices/compareProductSlice'
import { useGetLocation } from '../hooks/useGetLocation'

const CompoareProdcut = () => {
  useGetLocation()
  const {compareList} = useSelector(state=>state.Compare)
  const dispatch = useDispatch()

  const {removProduct} = CompareActions
  const removeProductHandler = (item)=>{
  dispatch(removProduct(item))
  }
  return (
    <>
      <BreadCrumb title="Compare Product" url='compareproduct'/>
      <section className='py-5 my-4'>
        <div className="container">
            {compareList.length < 1 ? 
                <div className='text-center'><h2>No Procuts To Compare </h2></div>:
                <div className="row">
                {compareList.map(product=>(
                  <div className="col-sm-6 col-md-4 col-lg-3">
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
    </>
  )
}

export default CompoareProdcut