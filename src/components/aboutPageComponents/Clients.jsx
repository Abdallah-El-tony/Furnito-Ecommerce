// axios import
import axios from 'axios'

// ** react imports
import { useState } from 'react'
import { useEffect } from 'react'
import Slider from 'react-slick'

// Components
import Client from './Client'
const Clients = () => {

    // ** Hooks
    const [feedbacks,setFeedbacks] = useState([])
    useEffect(()=>{
        const getTestimonials = async()=>{
            const result = await axios.get('https://my-server-rc7a.onrender.com/Clients')
            setFeedbacks(result.data)

        }

        getTestimonials()
        
    },[])
        var settings = {
          dots: true,
          infinite: true,
          slidesToShow: 4,
          speed: 500,
          cssEase: "linear",
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
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
              <h2 className='mb-4'>Clients Feedback</h2>
                <Slider {...settings}>
                  {feedbacks.map((client,index)=>(
                   <Client avatar ={client.avatar} name={client.clientName} feedback={client.feedback} rate={client.rate} key={client.clientName} i ={index}/>
                  ))}
                </Slider>
            </div>
        </section>
      )
    }

export default Clients