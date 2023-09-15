
// ** hooks
import { useEffect, useRef, useState } from 'react'
import { ChevronUp } from 'react-bootstrap-icons'

const Scroll = () => {

  // Hooks
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const scrollRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollingUp = prevScrollPos > currentScrollPos;

      if (scrollingUp) {
        scrollRef.current.classList.add('show-btn-scroll')
        
      } else {
        scrollRef.current.classList.remove('show-btn-scroll')
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll) };
  }, [prevScrollPos]);

  const backToTop = () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
}
  return (
    <div className="back-to-top" ref={scrollRef} onClick={backToTop}>
        <span><ChevronUp size={25}/></span>
      </div>
  )
}

export default Scroll