import React from 'react'
import { Carousel , Collections, TrendyProduct , Slides , Store , Bannar, BrandArea, Testimonials, BromoArea} from '../components'
import { useGetLocation } from '../hooks/useGetLocation'
const Home = () => {
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