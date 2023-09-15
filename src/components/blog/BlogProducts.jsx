import axios from 'axios'

// ** react hooks
import { useEffect, useState } from 'react'

// ** Components
import TrendySignleProduct from '../TrendySingleProduct'
import Loader from '../loaders/Loader'
import VirticalSingleProduct from '../shop/VirticalSingleProduct'
import ShopHeader from '../shop/ShopHeader'

// ** css
import '../shop/shop.css'

const BlogProducts = ({filterData , resetData , getSort ,isSort}) => {
    
    // states
    const [products,setProducts] = useState([])
    const [isloading,setIsLoading] = useState(true)
    const [direction,setDirection] = useState('horizontal')

    // ** functions
    const setIsVirtical = (direction)=>{
        setDirection(direction)
    }
    const getSortValue = (sort)=>{
        getSort(sort)
    }
   
    //** fetch apies */
    useEffect(()=>{
        setIsLoading(true)
        let result;
        const getProductds = async()=>{
            try {
                if(filterData === '' || filterData === undefined || filterData === 'All') {
                    result = await axios.get(`https://my-server-rc7a.onrender.com/Blogs`)
                }else if (isSort) {
                    result = await axios.get(`https://my-server-rc7a.onrender.com/Blogs?_sort=${filterData}&_order=asc`)
                }
                else
                 result = await axios.get(`https://my-server-rc7a.onrender.com/Blogs?q=${filterData}`)
                    setProducts(result.data)
                    setIsLoading(false)
                }catch(Err) {console.log(Err)}
        }
        getProductds()
    },[filterData, isSort, products.length])
  return (
   <>
    {isloading?<div className='shop-loader'><Loader/></div>:<div className="product-container">
   <div className="row ms-md-0 ms-md-5 justify-content-center">
            <ShopHeader setIsVirtical={setIsVirtical} filterSelected={filterData} currentDataLenght={products.length} resetData={resetData} isBlog={true} getSort={getSortValue}/>

           {products.length === 0?
            <div className='d-flex align-items-center justify-content-center mt-5 pt-5'><p className='text-warning mt-5 fs-4'>No Blog Found</p></div>           :
           <div className="row p-0 justify-content-center justify-content-md-start mx-2 mx-sm-0">
                {direction==='virtical'?(products.map(product=>(
                    <VirticalSingleProduct
                        key={product.id}
                        id={product.id}
                        img={product.img}
                        isSlider={true}
                        title={product.name}
                        customStyle={false}
                        hasBtn={true}
                        isBlog={true}
                    />
                )))
                :
                (products.map(product=>(
                    <div key={product.id} className="col-sm-6 col-lg-4 blog-product">
                        <TrendySignleProduct 
                        id={product.id}
                        img={product.img}
                        price={product.price}
                        altPrice={product.altPrice}
                        sales={product.date}
                        isSlider={true}
                        title={product.name}
                        customStyle={true}
                        isBlog={true}
                        />
                    </div>
                )))}
           </div>}
       </div>
    </div>}
   </>
  )
}

export default BlogProducts