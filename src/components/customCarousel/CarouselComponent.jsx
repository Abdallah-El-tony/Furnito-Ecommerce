// alice slider libiray
import AliceCarousel from 'react-alice-carousel';

// ** css
import 'react-alice-carousel/lib/alice-carousel.css';

// ** Components
import TrendySingleProduct from '../TrendySingleProduct';

const CustomCarousel = ({products}) => {

    // ** vars
    const items=[]
    for(let i=1; i<products.length-1; i++) {
        items.push(<TrendySingleProduct 
            key={i} 
            img={products[i].img}
            title={products[i].name}
            price={products[i].price}
            altPrice={products[i].altPrice}
            sales={products[i].sales}
            isSlider={true}
            id={products[i].id}
            object={products[i]}
            
             
             />)
    }
    const responsive = {
        0: { items: 1 },
        768: { items: 2 },
        1200: { items: 3 , itemsFit: 'contain' },
    };
    return (
        <>
            <AliceCarousel
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            autoPlay={true}
            infinite={true}
            autoPlayInterval={100000}
            />
        </>
    )
}
   
  export default CustomCarousel;