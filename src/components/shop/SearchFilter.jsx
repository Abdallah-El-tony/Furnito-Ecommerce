import React, { useState } from 'react'
import { Search } from 'react-bootstrap-icons'
import './shop.css'
const SearchFilter = ({onchangeData}) => {
  const [value,setValue] = useState('')
  const handleFilter = (e)=>{
    setValue(e.target.value)
    onchangeData(value)
  }
  return (
    <form action="" className='form__left-side'>
        <div className="filter-search">
            <input type="text" placeholder='Search Product' onChange={handleFilter} value={value}/>
            <button className='' type='submit'>{<Search size={25}/>}</button>
        </div>
    </form>
  )
}

export default SearchFilter