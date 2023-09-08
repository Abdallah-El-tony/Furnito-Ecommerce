import React, { useEffect, useRef} from 'react'
import { Check, X } from 'react-bootstrap-icons'


const Sign= ({handleRef , title , descreption ,signType}) => {

const signRef = useRef() 
const progressRef = useRef()
  useEffect(() => {
    if(signType === 'warning') {
      signRef.current.classList.add('warning-bg')
      progressRef.current.classList.add('warning-bg-anim')
    }else{
      signRef.current.classList.remove('warning-bg')
      progressRef.current.classList.remove('warning-bg-anim')
    }
    handleRef(signRef.current);
  }, [handleRef ,signType]);

  const closeSign = ()=>{
    signRef.current.classList.remove('show-sign')
  }

  return (
    <div className={`sign rounded align-items-start}`} ref={signRef}>
        <div className='d-flex align-items-center gap-1'>
            <span><Check size={35}/></span>
            <div>
                <span>{title || title === ''?title:'Go To Cart'} </span>
                <p className='mb-0 text-light'>{descreption?descreption:'Item Added to Cart'}</p>
            </div>
        </div>
        <button onClick={closeSign}><X size={30}/></button>
        <div ref={progressRef} className={`animate_progress`}></div>
    </div>
  )
}

export default Sign
