// ** Icons
import { X , BorderAll } from "react-bootstrap-icons"
import CustomSelect from "./CustomSelect"
import { StarFill } from "react-bootstrap-icons"

// Hooks
import { useRef} from "react"


const ShopHeader = ({setIsVirtical , filterSelected ,currentDataLenght ,resetData , getSort , isBlog}) => {

    // Hooks ** 
    const filterRef = useRef()


    // ** vars
    let isPrice = false;
    let isRate = false;

    isPrice = (/\d{2,}/.test(filterSelected));  // check if filterdata is price
    isRate = (/\d{1}/.test(filterSelected)); // check if filter data is rating

    // functions
    const handleChangeBg = (e)=> {
        document.querySelector('.btn-active').classList.remove('btn-active')
        e.target.classList.toggle('btn-active')
        setIsVirtical(e.target.id)
       
    }
    const handleClear = (e,value)=> {
        resetData(value)
        e.target.classList.add('d-none')
    }
    const getSortValue = (sort)=>{
        getSort(sort)
    }


  return (
    <div className="row mb-5 ms-1 me-sm-0 justify-content-between flex-wrap ps-2 ps-md-0 pe-2 align-items-center">
        <div className="col-12 col-md-6 my-3 my-md-0 p-0">
            {filterSelected && <div className="filtred-selectd text-secondary d-flex flex-wrap gap-2 align-items-center" ref={filterRef}>
                <span>Selected Filter:</span>
                <span className="d-flex gap-2 position-relative">
                    {filterSelected}{isPrice?'$':isRate?<StarFill/>:''}
                    </span>
                <button onClick = {(e)=>handleClear(e,`All`)} className="border-0 bg-transparent text-secondary clear-btn ms-3">Clear<span className="close-mark">{<X size={23}/>}</span> </button>
            </div>}
        </div>
        <div className="col-6 p-0 col-12 col-md-6">
            <div className="right-side d-flex justify-content-start justify-content-md-end flex-wrap align-items-center gap-2">
                <p className="m-0">Showing <span>{currentDataLenght}</span> - <span>29</span> of 29 Results</p>
                <CustomSelect getSortValue={getSortValue}  isBlog={isBlog}/>
                <div className="d-flex flex-wrap align-items-center gap-1 shop-btns">
                    <button id='virtical' onClick={handleChangeBg} className="Bar-icon"><i className="bg-secondary"></i><i className="bg-secondary"></i><i className="bg-secondary"></i></button>
                    <button id="horizontal" onClick={handleChangeBg} className="text-secondary border-0 btn-active">{<BorderAll size={22}/>}</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopHeader