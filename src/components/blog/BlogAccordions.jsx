// react hooks
import { useEffect, useState } from 'react'

// ** Components
import {BlogTags } from '../../constants'

// css
import '../shop/shop.css'

// axios import
import axios from 'axios'

const BlogAccordions = ({getCategory , getTag}) => {

    const [categories, setCategories] =  useState([])

    const handleCategory = (e)=>{
        getCategory(e.target.textContent)
    }
    
    const handleClick = (e)=>{
        getTag(e.target.textContent)
            if(e.target.classList.contains('hide')) {
                e.target.classList.remove('hide')
            }else {
                e.target.classList.add('hide')
            }
    }

    useEffect(()=>{
        const getCatigories = async()=>{
            try {
                const result = await axios.get('https://my-server-rc7a.onrender.com/Blogs')
                setCategories(result.data)
            }catch(err) {
                console.log(err)
            }
        }
        getCatigories()
    },[])
  return (
    <ul className='accordions'>
        <li>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Category
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body ps-0">
                       <ul className='categories-btns'>
                        {categories.map(category=>(
                            <li key={category.id} className='d-flex justify-content-between align-items-center'>
                                <button onClick={handleCategory}><span>{category.catigory}</span></button>
                                <span>1</span>
                            </li>
                        ))}                            
                       </ul>
                    </div>
                </div>
            </div>
        </div>
        </li>
        <li>
            <div className="accordion" id="accordionExample6">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headinsix">
                    <button className="accordion-button border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="true" aria-controls="collapsesix">
                    Tags
                    </button>
                    </h2>
                    <div id="collapsesix" className="accordion-collapse collapse show" aria-labelledby="headingfive" data-bs-parent="#accordionExample6">
                        <div className='d-flex flex-wrap gap-2 mt-3 tags tag-btn'>
                            {BlogTags.map(tag=>(
                                <button onClick= {handleClick}key={tag} className='border border-2 py-1 text-secondary px-3 bg-transparent'>{tag}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
  )
}

export default BlogAccordions