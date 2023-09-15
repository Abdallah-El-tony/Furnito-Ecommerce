import Slider from 'react-slick'

// ** axios import
import axios from 'axios';

// react Hooks impmorts
import { useEffect, useState } from 'react';

// ** Components
import Member from './Member';

const OurTeam = () => {
    const [team,setTeam] =useState([])
    useEffect(()=>{
        const getTeam = async()=>{
            const result = await axios.get('https://my-server-rc7a.onrender.com/Team')
            setTeam(result.data)
        }
        getTeam()
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
    <section className='team py-5 overflow-hidden'>
        <div className="container">
          <h2 className='mb-4'>Our Team</h2>
        <Slider {...settings}>
            {team.map(person=>(
                <Member person={person.person} name={person.name} job={person.job} key={person.id}/>
            ))}
        </Slider>
        </div>
    </section>
    
)
}

export default OurTeam