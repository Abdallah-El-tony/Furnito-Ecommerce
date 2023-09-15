// react hooks
import { useEffect, useState } from 'react'

// ** images imports
import quateIcon from '../../assets/images/icons/quate-icon.png'

// ** css
import './testimonias.css'

// ** Icons
import { StarFill } from 'react-bootstrap-icons';
import { StarHalf } from 'react-bootstrap-icons';

// ** Components
import Slider from 'react-slick';

// ** axios import
import axios from 'axios';

const Testimonials = () => {

  // ** hooks
    const [testimonials,setTestimonials] = useState([])

    // ** fetch apis
    useEffect(()=>{
        const getTestimonials = async()=>{
            const result = await axios.get('https://my-server-rc7a.onrender.com/Clients')
            setTestimonials(result.data)
        }
        getTestimonials()
    },[])


    // ** vars
        var settings = {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          speed: 500,
          cssEase: "linear",
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
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
                <Slider {...settings}>
                  {testimonials.map((tes,index)=>(
                    <div className={`tes__card ${index===1?'bg-main-bg':''}`} key={tes.clientName}>
                        <div className="quate-icon">
                            <img src={quateIcon} alt="quate" />
                        </div>
                        <div className="tes__desc">
                            <p>{tes.feedback}</p>
                            <h3>{tes.clientName}</h3>
                            <span className='text-warning mx-2'>{<StarFill/>}</span>
                            <span className='text-warning mx-2'>{<StarFill/>}</span>
                            <span className='text-warning mx-2'>{<StarFill/>}</span>
                            <span className='text-warning mx-2'>{<StarFill/>}</span>
                            <span className='text-warning mx-2'>{<StarHalf/>}</span>
                        </div>
                    </div>
                  ))}
                </Slider>
            </div>
        </section>
      )
    }

export default Testimonials