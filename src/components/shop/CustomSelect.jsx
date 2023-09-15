
// react hooks
import { useRef } from 'react'
import {useState} from 'react'

// ** icons
import { ChevronDown ,ChevronUp } from 'react-bootstrap-icons'

// ** css
import './shop.css'

const CustomSelect = ({getSortValue ,isBlog}) => {

    // ** states
    const [isShowed,setIsShowed] = useState(false)
    const [value,setValue] = useState(`${isBlog?'Sort By Descending':'Sort By Date'}`)
    const formRef = useRef(null)
    const filterBtn = useRef(null)


    // functions
    const handleClick = (e)=>{
        setIsShowed(!setIsShowed) 
       formRef.current.classList.toggle('show-select')
    }

    const preventpropagation = (e)=> {
        e.stopPropagation();
    }
    const handleChange = (e,fileter)=> {
        document.querySelector('.active-filtred').classList.remove('active-filtred')
        e.target.classList.add('active-filtred')
        setValue(e.target.textContent)
        getSortValue(fileter)
    }
    
  return (
    <div>
        <button ref={filterBtn} onClick={handleClick} className='border-1 text-secondary bg-transparent rounded p-2 px-3 position-relative'>{value} {isShowed?<ChevronUp size={12}/>:<ChevronDown size={12}/>}
            <form onClick={preventpropagation} ref={formRef} action="" className='form-control position-absolute select rounded-0 px-0'>
                <input type="text" className='form-control py-2 border-1 rounded' placeholder='...'/>
                <ul className='border-1'>
                    <li onClick={(e)=>handleChange(e,'name')} className='active-filtred mt-2'>{isBlog?'Sory By Descending':'Sort By Date'}</li>
                    <li onClick={(e)=>handleChange(e,'name')}>Sort By Name</li>
                    <li onClick={(e)=>handleChange(e,'name')}>{isBlog?'Sort By Ascending':'Sort By Pobularity'}</li>
                    
                    {!isBlog &&
                    <>
                     <li onClick={(e)=>handleChange(e,'name')}>Lowest To Heighest</li>
                     <li onClick={(e)=>handleChange(e,'name')}>Height To Lowest</li>
                    </>}
                   
                </ul>
            </form>
        </button>
        
    </div>
  )
}

export default CustomSelect