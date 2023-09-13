import React, { useEffect, useState } from 'react'
import { BreadCrumb, CustomCarousel , TapsDetails} from '../components'
import axios from 'axios'
import SingleProductDetails from '../components/SingleProductDetails'
import { useParams } from 'react-router-dom'
import { useGetLocation } from '../hooks/useGetLocation'
import '../components/customCarousel/carousel.css'

const ProductDetails = () => {
  let {id} = useParams();
  id = id.match(/\d+/g)[0];
  const [targetProduct , setTargetProduct] = useState({})
  const [filtredProducts,setFiltredProducts]=useState([])
  useGetLocation(id)

  useEffect(()=>{
    let result;
    const getTargetProduct = async()=>{
      if(Number(id) >= 22 ) {
        result = await axios.get(`https://my-server-rc7a.onrender.com/TrendyProducts/${id}`)
      }else {
        result = await axios.get(`https://my-server-rc7a.onrender.com/Store/${id}`)
      }
      const response = await axios.get(`https://my-server-rc7a.onrender.com/Store?catigory=${result.data.catigory}`)
      setTargetProduct(result.data)
      setFiltredProducts(response.data)
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