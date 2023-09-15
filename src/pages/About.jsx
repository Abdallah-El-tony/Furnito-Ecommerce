 // Components **
import { BreadCrumb, BromoArea } from '../components'
import { AboutStory, Clients, Counts, OurTeam  } from '../components/aboutPageComponents'

// functions **
import { useGetLocation } from '../hooks/useGetLocation'

const About = () => {

  // ** get location to change  web title
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