// ** react
import React from 'react'
import Slider from 'react-slick'

// ** Components
import Brand from './Brand';

// ** branch imags impors
import Brand1 from '../../assets/images/logos/brand-1.png'
import Brand2 from '../../assets/images/logos/brand-2.png'
import Brand3 from '../../assets/images/logos/brand-3.png'
import Brand4 from '../../assets/images/logos/brand-4.png'
import Brand5 from '../../assets/images/logos/brand-5.png'

const brandArea = () => {
    var settings = {
      dots: true,
      infinite: true,
      outoplay:true,
      slidesToShow: 4,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
           
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
           
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };
  return (
    <section className='brand-area py-5 my-5 overflow-hidden'>
        <div className="container">
            <div>
              <Slider {...settings}>
                <Brand brand={Brand1}/>
                <Brand brand={Brand2}/>
                <Brand brand={Brand3}/>
                <Brand brand={Brand4}/>
                <Brand brand={Brand5}/>
                
              </Slider>
            </div>
        </div>
    </section>
  )
}

export default brandArea