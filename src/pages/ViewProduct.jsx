import React, { useEffect, useState } from 'react'
import SingleProductDetails from '../components/SingleProductDetails'
import { Link, useParams } from 'react-router-dom'
import { X } from 'react-bootstrap-icons';
import axios from 'axios';
import { useGetLocation } from '../hooks/useGetLocation'
  
const ViewProduct = () => {
    useGetLocation()
    let {id} = useParams();
    id = id.match(/\d+/g)[0];
    const [targetProduct , setTargetProduct] = useState({})

    useEffect(()=>{
      let result;
      const getTargetProduct = async()=>{
        if(Number(id) >= 22 ) {
          result = await axios.get(`http://localhost:3000/TrendyProducts/${id}`)
        }else {
          result = await axios.get(`http://localhost:3000/Store/${id}`)
        }
        setTargetProduct(result.data)
      }
      getTargetProduct()
    },[id])

  return (
    <section className='py-4 overflow-hidden w-100 mt-0' style={{position:'absolute' , top:'0'}}>
        <div className="container">
            <div className="productDtsl position-relative p-5 rounded bg-white" style={{zIndex:'99'}}>
                <SingleProductDetails 
                id={targetProduct.id}
                img={targetProduct.img}
                name={targetProduct.name}
                price={targetProduct.price}
                altPrice={targetProduct.altPrice}
                sales={targetProduct.sales}
                object={targetProduct}
                />
                <Link to='/' style={{color:'#599a8d',position:'absolute',top:'15px',right:'15px'}}>{<X size={30}/>}</Link>
            </div>
        </div>
        <div className="overlay show bg-black"></div>
    </section>
  )
}

export default ViewProduct