// ** Components
import BreadCrump from '../components/BreadCrumb'
import SearchFilter from '../components/shop/SearchFilter'
import AccordinItems from '../components/shop/AccordinItems'
import ShopProducts from '../components/shop/ShopProducts'

// ** css
import '../components/shop/shop.css'

// ** Hooks & Custom Hooks
import { useState } from 'react'
import { useGetLocation } from '../hooks/useGetLocation'

const Shop = () => {

  // ** change web title
  useGetLocation()

  // ** states
  const [filterData,setFilterData] = useState('')
  const [isSort , setIsSort] = useState(false)

  // ** filter  functins
  const handleChange =(value) =>{
    setFilterData(value)
    setIsSort(false)
  }
    const getCategory = (category)=> {
      setFilterData(category)
      setIsSort(false)
  }
  const getPrice = (price) => {
    setFilterData(price)
    setIsSort(false)
  }
  const getTag = (tag)=> {
    setFilterData(tag)
    setIsSort(false)
  }
  const resetData = (defaultValue)=>{
    setFilterData(defaultValue)
    setIsSort(false)
  }
  const getRate = (rate)=>{
    setFilterData(rate)
    setIsSort(false)
  }
  const getColor = (color)=>{
    setFilterData(color)
    setIsSort(false)
  }
  const getSortValue = (value)=>{
    setFilterData(value)
    setIsSort(true)
  }
  return (
    <>
      <BreadCrump title="Shop" url='shop'/>
      <section className='shop'>
        <div className="container">
          <div className="shop__content">
            <div className="row">
              <div className="col-md-4 col-lg-3">
                <div className="d-block d-md-none">
                  <button className="Bar-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i></i><i></i><i></i></button>
                  <div className="offcanvas offcanvas-start overflow-auto" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div className="offcanvas-header justify-content-end">
                      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                      <SearchFilter onchangeData={handleChange}/>
                      <AccordinItems getCategory={getCategory} getPrice={getPrice} getTag={getTag} getRate={getRate} getColor={getColor}/>
                    </div>
                  </div>
                </div>
                <aside className='d-none d-md-block'>
                    <SearchFilter onchangeData={handleChange}/>
                    <AccordinItems getCategory={getCategory} getPrice={getPrice} getTag={getTag} getRate={getRate} getColor={getColor}/>
                </aside>
              </div>
              <div className="col-md-8 col-lg-9">
                  <ShopProducts filterData = {filterData} resetData = {resetData} getSortValue={getSortValue} isSort={isSort}/>
              </div>
            </div>
            
          </div>
        </div>
      </section>

    </>
  )
}

export default Shop