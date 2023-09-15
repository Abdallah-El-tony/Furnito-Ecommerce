
// ** Hooks
import { useRef, useState } from 'react'

// ** Components
import {Tabs} from '../constants/index'

// ** css
import './ourStore/store.css'

const TapsDetails = () => {

    // ** hooks
    const contentRef = useRef()
    const [content,setContent] = useState({
        target:'Description',
        targetContent :`
            <p className="m-0 text-danger">Fine Fabric Side Chairs-The utility fabric side chairs have the advantages of good permeability and comfortability. Upholstered seat and chair back filled with</p>
            <ul>
                <li>sponge are soft and full of elasticity.In a classic shape with an open back, so you feel free and airy even if you're chained to any desk or table.</li>
                <li>Modern design accent armchair, elegantly curved silhouette provides maximum comfort, is perfect for decor your living room bedroom dining room office.</li>
                <li>finish. Corners are glued, blocked and stapled. High-quality plush high-density foam cushioning is upholstered.</li>
                <li>EASY TO ASSEMBLE-The package of the chairs comes with a detailed instruction manual and all the accessories.</li>
            </ul>
        `
    })


    const handleClick=(el,i)=>{
        setContent(Tabs[i])
        
        if(contentRef.current.classList.contains('show-content')){
            contentRef.current.classList.remove('show-content')
        }else{
            contentRef.current.classList.add('show-content')
        }
           
        document.querySelector('.activ-tab').classList.remove('activ-tab')
        el.target.classList.add('activ-tab')
        
    }
  return (
    <>
    <div className="tabs d-flex justify-content-center gap-3">
        {Tabs.map((tab , i)=>(
            <button key={tab.target} onClick={(e)=>handleClick(e,i)} className={`${i===0?'activ-tab':''}`}>{tab.target}</button>
        ))}
    </div>
    <div ref={contentRef} className='tabs-content' dangerouslySetInnerHTML={{ __html: content.targetContent }}></div>
    </>
  )
}

export default TapsDetails