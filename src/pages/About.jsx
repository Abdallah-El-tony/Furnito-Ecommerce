import React from 'react'
import { BreadCrumb, BromoArea } from '../components'
import { AboutStory, Clients, Counts, OurTeam  } from '../components/aboutPageComponents'
import { useGetLocation } from '../hooks/useGetLocation'
const About = () => {
  
  useGetLocation()

  return (
    <>
      <BreadCrumb title='About Us' url='about'/>
      <AboutStory/>
      <Counts/>
      
      <Clients/>
      <OurTeam/>
      <BromoArea/>
    </>
    
  )
}

export default About