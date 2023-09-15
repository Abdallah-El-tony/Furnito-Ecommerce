// ** Components
import { Carousel , Collections, TrendyProduct , Slides , Store , Bannar, BrandArea, Testimonials, BromoArea} from '../components'

// Functons & Hooks
import { useGetLocation } from '../hooks/useGetLocation'

const Home = () => {

  // get location to change web title according to path
  useGetLocation()

  return (
    <div className='Home-page'>
        <Carousel/>
        <Collections/>
        <TrendyProduct/>
        <Slides/>
        <Store/>
        <Bannar/>
        <BrandArea/>
        <Testimonials/>
        <BromoArea/>
    </div>
  )
}

export default Home