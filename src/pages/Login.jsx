// ** Components
import BreadCrump from '../components/BreadCrumb'
import { LoginForm } from '../components'

// ** Hook & Functions
import { useGetLocation } from '../hooks/useGetLocation'


const Login = () => {

  // Chang wet Title
  useGetLocation()

  return (
    <>
      <BreadCrump title='User Login' url='login'/>
      <section className='py-5 my-4'>
        <div className="container">
          <div className="row justify-content-center">
            <LoginForm/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login