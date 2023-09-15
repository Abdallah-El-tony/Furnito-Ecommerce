// ** Compontes
import { BreadCrumb, CustomCarousel , Loader, TapsDetails} from '../components'
import SingleProductDetails from '../components/SingleProductDetails'

// ** react Hooks & custom Hooks
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetLocation } from '../hooks/useGetLocation'

// ** css
import '../components/customCarousel/carousel.css'

// ** axios import 
import axios from 'axios'

// ** redux  import 
import { useSelector } from 'react-redux'

const ProductDetails = () => {
  
  // ** store
  const {loading}  = useSelector(state=>state.LoaderReducer)

  // ** vars
  let {id} = useParams();
  id = id.match(/\d+/g)[0];
  
  // ** states
  const [targetProduct , setTargetProduct] = useState({})
  const [filtredProducts,setFiltredProducts]=useState([])
  const [isLoading , setIsLoading] = useState(loading)

  // ** change web title
  useGetLocation(id)

  // fetch apis
  useEffect(()=>{
    let result;
    const getTargetProduct = async()=>{
      try {
        setIsLoading(true)

        if(Number(id) >= 22 ) {
          result = await axios.get(`https://my-server-rc7a.onrender.com/TrendyProducts/${id}`)
        }
        else {
          result = await axios.get(`https://my-server-rc7a.onrender.com/Store/${id}`)
        }

        const response = await axios.get(`https://my-server-rc7a.onrender.com/Store?catigory=${result.data.catigory}`)

        setTargetProduct(result.data)
        setFiltredProducts(response.data)
        setIsLoading(false)

      } catch (error) {
        console.log('error')
      }
    }

    getTargetProduct()

    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  },[id])

  return (
    <>
      <BreadCrumb title={targetProduct.name}/>
      <section className='my-5 py-4 overflow-hidden'>
        <div className="container">
          {isLoading && <Loader/>}
          <SingleProductDetails 
            id={targetProduct.id}
            img={targetProduct.img}
            name={targetProduct.name}
            price={targetProduct.price}
            altPrice={targetProduct.altPrice}
            sales={targetProduct.sales}
            object={targetProduct}
          />
          <div className="tabs-details py-5 my-5">
              <div className="row">
                <TapsDetails/>
              </div>
          </div>
          <div className="relatec-product">
            <h2 className='mb-5 ms-3'>Related Products</h2>
            <CustomCarousel products={filtredProducts}/>
          </div>
        </div>
        
      </section>
    </>
  )
}

export default ProductDetails