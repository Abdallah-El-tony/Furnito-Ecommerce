// ** react Hooks
import { useEffect, useState } from 'react'

// functions
import StoreCategories from './StoreCategories'

// components
import TrendySingleProduct from '../TrendySingleProduct'
import Loader from '../loaders/Loader'

// ** redux
import { useSelector } from 'react-redux'

// ** axios import
import axios from 'axios'


const Store = () => {
    const {loading} = useSelector(state=>state.LoaderReducer)
    const [products,setProducts] = useState([])
    const [currentCategory,setCurrentCaetegory] = useState('')
    const [isloading,setIsLoading] = useState(loading)
    useEffect(()=>{
       const getStoreProducts = async()=>{
            setIsLoading(true)
            try {
                let result;
             if(currentCategory === '')
                setCurrentCaetegory('All')
                result = await axios.get(`https://my-server-rc7a.onrender.com/Store?catigory=${currentCategory}`)
                setProducts(result.data)
                setIsLoading(false)
            }catch(err) {
                console.log(err)
            }
        }
        getStoreProducts()
    },[currentCategory])
  return (
    <section className='my-5 py-4 overflow-hidden position-static'>
        <div className="container position-static">
            <div className="section-title">
                <h3>Our Store</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vivamus morbi et ornare est Orci et sed commodo.</p>
            </div>
            <div className="row mb-5">
                <StoreCategories setCurrentCaetegory={setCurrentCaetegory}/>
            </div>
            <div className="row">
                {isloading && <Loader/>}
                {products.map(product=>(
                    <TrendySingleProduct
                     img={product.img}
                     customStyle={true}
                     key={product.id}
                     title={product.name}
                     price={product.price}
                     altPrice={product.altPrice}
                     id={product.id}
                     hasBtn={true}
                     object={product}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Store