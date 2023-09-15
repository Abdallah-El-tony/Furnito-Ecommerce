// ** css
import './collection.css'
// ** react router
import { Link } from 'react-router-dom'

const CollectionPart = ({title,img,containerStyle}) => {
  return (
        <div className="col-12 col-lg-6">
           <div className="furniture p-2 p-md-4 mb-4 mb-lg-0" style={containerStyle}>
           <div className="row align-items-center m-3">
                <div className="col-12 col-md-6 order-2 order-md-0">
                    <div className="collection__text text-center text-md-start">
                        <h2 className='collection__title mb-3'>{title}</h2>
                        <Link to="/shop">Shop Now</Link>
                    </div>
                </div>
                <div className="col-12 col-md-6 order-0 order-md-2">
                    <div className="collection__img mb-4 mb-md-0 text-center text-start">
                        <img src={img} alt="furniture-img"/>
                    </div>
                </div>
            </div>
           </div>
        </div>

  )
}

export default CollectionPart