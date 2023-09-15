// ** Compponents
import { BreadCrumb } from '../components'

// ** functions & Hooks
import { useGetLocation } from '../hooks/useGetLocation'

const ForgetPassword = () => {
// ** get location for changing web title
  useGetLocation()

  return (
    <>
        <BreadCrumb title="Forget Password" url='forgetpassword'/>
        <div className="container my-5 py-4">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6">
                <div className="order-track text-center">
                  <h2 className='mb-4'>Forget Password ?</h2>
                  <form className='text-start'>
                    <input  id="track" type="email" placeholder='Username' className='form-control' />
                    <input type="submit" className='custom-btn my-2 px-4 py-2 mt-4' value='Send Rest Mail' />
                  </form>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default ForgetPassword