// ** Components
import BreadCrump from '../components/BreadCrumb'
import SearchFilter from '../components/shop/SearchFilter'
import BlogAccordions from '../components/blog/BlogAccordions'
import BlogProducts from '../components/blog/BlogProducts'

// ** css
import '../components/shop/shop.css'

// ** functinos & Hooks
import { useGetLocation } from '../hooks/useGetLocation'
import { useState } from 'react'

const Blog = () => {

  // ** Hooks
  useGetLocation()
  const [filterData,setFilterData] = useState('')
  const [isSort , setIsSort] = useState(false)


  // ** filter functions 
  const handleChange =(value) =>{
    setFilterData(value)
    setIsSort(false)
  }
    const getCategory = (category)=> {
      setFilterData(category)
      setIsSort(false)
  }
  const getTag = (tag)=> {
    setFilterData(tag)
    setIsSort(false)
  }
  const resetData = (value)=>{
    setFilterData(value)
    setIsSort(false)
  }
  const getSort  = (value)=> {
    setFilterData(value)
    setIsSort(true)
  }

  
  return (
    <>
      <BreadCrump title='Blogs' url='blog'/>
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
                        <BlogAccordions getCategory={getCategory} getTag={getTag}/>
                      </div>
                    </div>
                  </div>
                <aside className='d-none d-md-block'>
                    <SearchFilter onchangeData={handleChange}/>
                    <BlogAccordions getCategory={getCategory} getTag={getTag}/>
                  </aside>
                </div>
                <div className="col-md-8 col-lg-9">
                    <BlogProducts filterData = {filterData} resetData={resetData} getSort={getSort} isSort={isSort}/>
                </div>
              </div>

            </div>
          </div>
      </section>  
    </>
  )
}

export default Blog