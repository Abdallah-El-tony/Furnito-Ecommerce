import { LoginForm, OrdarSummary } from '../components'
import BreadCrumb from '../components/BreadCrumb'
import { useGetLocation } from '../hooks/useGetLocation'
const CheckOut = () => {
    useGetLocation()
    
  return (
    <>  
        <BreadCrumb title="Check Out" url="checkout"/>
        <section className='my-5 py-4'>
            <div className="container">
                <div className="row">
                    <LoginForm customStyle={true}/>
                    <OrdarSummary/>
                </div>
            </div>
        </section>
    </>
  )
}

export default CheckOut