// ** Icons
import { Search , X} from 'react-bootstrap-icons';

// ** hooks
import { useRef, useState } from 'react';

// ** Components
import ProductSuggustion from './ProductSuggustion';

// ** css
import './ourStore/store.css'

const SearchBtn = () => {
    const [value,setValue] = useState('')
    const overlay = useRef(null)
    const suggestion = useRef(null)


    const handleChange = (e)=>{
        setValue(e.target.value)
        openSuggestion()
        
    }
    const searchFieldRef = useRef(null)
    const handleClick = ()=>{
        if(searchFieldRef.current.classList.contains('showField')){
            closeField()        
        }else {
            searchFieldRef.current.classList.add('showField')
        }
    }
    function openSuggestion(){
        suggestion.current.classList.add('show')
        overlay.current.classList.add('show')
    }

    function closeField() {
        searchFieldRef.current.classList.remove('showField')
        suggestion.current.classList.remove('show')
        overlay.current.classList.remove('show')
    }
  return (
    <>  
        <li className='position-relative searn-btn'><button onClick={handleClick}><Search size={20}/></button>
            <div className='searchField' ref={searchFieldRef}>
                <a href="/"><span><Search/></span></a>
                <input type="text" placeholder='search here...' value={value} onChange={handleChange}/>
                <button onClick={closeField} className='closeSearch'><X size={30}/></button>
            </div>
            <div className='suggestions' ref={suggestion}>
                <div className="title"><h2>Product Suggestions</h2></div>
                <ProductSuggustion value={value} hideShearchField={closeField}/>
            </div>
        </li>
        <div ref={overlay} className="overlay">

        </div>
    </>
  )
}

export default SearchBtn