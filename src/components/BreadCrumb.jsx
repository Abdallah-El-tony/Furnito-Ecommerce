
// ** react router
import { Link } from 'react-router-dom'

const BreadCrumb = ({title , url}) => {
  return (
    <section className='bread-crumb breadcrum-bg py-5'>
        <div className="container">
            <div className="bread-crumb__title text-center">
                <h2>{title}</h2>
                <h4><Link to="/">Home</Link> <span className='mx-2 text-secondary fs-6'>|</span> <Link>{title}</Link></h4>
            </div>
        </div>
    </section>
  )
}

export default BreadCrumb