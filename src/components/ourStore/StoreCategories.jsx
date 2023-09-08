import axios from 'axios'
import './store.css'
import React, { useEffect, useState } from 'react'
const StoreCategories = ({setCurrentCaetegory}) => {
    const [categories,setCategories] = useState([])
    // const [currentCategory,setCurrentCategory] = useState('')
    useEffect(()=>{
        const getCategories = async()=>{
            try{
                const result = await axios.get('http://localhost:3000/Catigory')
                setCategories(result.data)
            }catch(err){
                return err.message
            }
        }   
        getCategories()
        
    },[])
    const handlClick = (event)=>{
        const currentBtn = event.target;
        document.querySelector('.active-btn').classList.remove('active-btn')
        currentBtn.classList.add('active-btn')
        setCurrentCaetegory(currentBtn.innerText)
    }
  return (
    <div className="row">
        <div className="categories flex flex-wrap">
        {categories.map((category,index)=>(
           <button onClick={handlClick} key={category} className={index ===0 ? 'active-btn':''}>{category}</button>
        ))}
        </div>
    </div>
  )
}

export default StoreCategories