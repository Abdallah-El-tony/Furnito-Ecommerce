import BreadCrump from '../components/BreadCrumb'
import { useGetLocation } from '../hooks/useGetLocation'
import { LoginForm } from '../components'

const Login = () => {
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