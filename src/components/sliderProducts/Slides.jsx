

// ** Components
import { sliderProducts } from '../../constants'
import SliderItem from './SliderItem'
import AliceCarousel from 'react-alice-carousel';

// ** css
import 'react-alice-carousel/lib/alice-carousel.css';
import './slider.css'

const Slides = () => {

  // ** vars
  const items=[]
    for(let i=1; i<sliderProducts.length-1; i++) {
        items.push(<SliderItem 
            key={i} 
            img={sliderProducts[i].img}
            name={sliderProducts[i].name}
            items={sliderProducts[i].items}
             />)
    }
    const responsive = {
        0: { items: 1 },
        575: { items: 2 },
        768: { items: 3 },
        992: { items: 3 },
        1200:{items:4},
        1300:{items:5}
    };
  
  return (
      
        <section className='slider py-4 my-4'>
          <div className="container">
          <AliceCarousel
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            autoPlay={true}
            infinite={true}
            autoPlayInterval={3000}
            />
          </div>
        </section>
    );
}

export default Slides
