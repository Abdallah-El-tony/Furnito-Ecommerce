import { useNavigate } from 'react-router'
import notFound from '../assets/images/logos/404.png'
import { useGetLocation } from '../hooks/useGetLocation'

const NotFound = () => {

  // Hooks **
  useGetLocation()
  const navigate = useNavigate()

  return (
   <section className='not-found'>
      <div className="page-title text-center mt-4 pt-4 mx-2">
        <h2>Page Not Found :</h2>
        <p>Oops! 😖 The requested URL was not found on this server.</p>
        <button onClick={()=>navigate('/')}>Back to Home</button>
      </div>
      <div className="not-found-img">
        <img src={notFound} alt="not found" />
      </div>
   </section>
  )
}

export default NotFound