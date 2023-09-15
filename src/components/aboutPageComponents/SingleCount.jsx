// ** react hooks
import { useEffect, useState ,useRef } from 'react'

const SingleCounter = ({counter,title}) => {
    // hooks
    const counterRef = useRef()
    const [count , setCount] = useState(0)

    useEffect(()=>{
        let timer ;
        const handleScroll = ()=>{
            if(window.scrollY > 380) {
                 timer = setInterval(() => {
                    setCount((prevCount) => {
                        if(prevCount===counter) {
                            clearInterval(timer);
                            return prevCount
                        } else return prevCount+1;
                    });
                  },3000/counter);
        
            }
        }
       
          window.addEventListener('scroll',handleScroll)
        
          return () => {
                clearInterval(timer)
          };
        }, [counter]);

    
  return (
    <div className="col-6 col-md-4 col-lg-3">
        <div className="single-counter text-center mb-4 mb-lg-0" ref={counterRef}>
            <h2><span>{count}</span>+</h2>
            <p className='fs-5'>{title}</p>
        </div>
    </div>
  )
}

export default SingleCounter