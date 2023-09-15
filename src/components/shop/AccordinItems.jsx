// ** hooks
import { useEffect, useState } from 'react'

// ** Components
import Rating from './Rating'
import { Tags } from '../../constants'
import Colors from './Colors'

// ** css
import './shop.css'

// axios import
import axios from 'axios'

const AccordinItems = ({getCategory , getPrice , getTag , getRate ,getColor}) => {

    // stats
    const [categories, setCategories] =  useState([])
    const [priceValue , setPriceValue] = useState(0)


    // ** functions
    const handleCategory = (e)=>{
        getCategory(e.target.textContent)
    }
    const handleChangePrice = (e)=>{
        setPriceValue(e.target.value)
        getPrice(e.target.value);

    }
    const handleClick = (e)=>{
        getTag(e.target.textContent)
            if(e.target.classList.contains('hide')) {
                e.target.classList.remove('hide')
            }else {
                e.target.classList.add('hide')
            }
    }
    const handleGetRate = (rate)=>{
        getRate (rate)
    }

    const handleGetColor = (color)=>{
        getColor(color)
    }

    // ** fetch apis
    useEffect(()=>{
        const getCatigories = async()=>{
            try {
                const result = await axios.get('https://my-server-rc7a.onrender.com/Catigory')
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
                                <li key={category} className='d-flex justify-content-between align-items-center'>
                                    <button onClick={handleCategory}><span>{category}</span></button>
                                </li>

                            ))}                         
                           </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div className="accordion" id="accordionExample2">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headintwo">
                    <button className="accordion-button border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwo" aria-expanded="true" aria-controls="collapsetwo">
                    Prices
                    </button>
                    </h2>
                    <div id="collapsetwo" className="accordion-collapse collapse show" aria-labelledby="headingtwo" data-bs-parent="#accordionExample2">
                        <div className="accordion-body ps-0">
                            <input type="range" min="0" max="10000" className='p-0 w-100' value={priceValue} onChange={handleChangePrice}/>
                            <div className='price d-flex align-items-center gap-2 mt-2'> <h5>price: <span className='fw-semibold'>$0 - <strong>{priceValue}$</strong></span></h5></div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div className="accordion" id="accordionExample3">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headinthree">
                    <button className="accordion-button border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapsethree" aria-expanded="true" aria-controls="collapsethree">
                    Size
                    </button>
                    </h2>
                    <div id="collapsethree" className="accordion-collapse collapse show" aria-labelledby="headingthree" data-bs-parent="#accordionExample2">
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div className="accordion" id="accordionExample4">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headinfour">
                    <button className="accordion-button border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="true" aria-controls="collapsefour">
                    Colors
                    </button>
                    </h2>
                    <div id="collapsefour" className="accordion-collapse collapse show" aria-labelledby="headingfour" data-bs-parent="#accordionExample4">
                        <Colors handleGetColor={handleGetColor}/>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div className="accordion" id="accordionExample5">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headinfour">
                    <button className="accordion-button border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="true" aria-controls="collapsefive">
                    Rating
                    </button>
                    </h2>
                    <div id="collapsefive" className="accordion-collapse collapse show" aria-labelledby="headingfive" data-bs-parent="#accordionExample5">
                        <Rating handleGetRate={handleGetRate}/>
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
                            {Tags.map(tag=>(
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

export default AccordinItems