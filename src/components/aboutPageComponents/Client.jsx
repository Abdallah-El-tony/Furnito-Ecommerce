// ** bootstrap Icons
import { StarFill, StarHalf } from 'react-bootstrap-icons'

// images import
import quateIcon from '../../assets/images/icons/quate-icon.png'

// css
import './about.css'

const Client = ({avatar,name,rate,feedback , i}) => {
  return (
    <div className={`cleint__card ${i===0?'bg-main-bg':''}`}>
          <div className="client__avatar">
              <img src={avatar} alt="avatar" />
          </div>
      <div className="feedbac__desc">
          <p>{feedback}</p>
          <div className="client__info d-flex justify-content-between align-items-center">
            <h3>{name}</h3>
            <img src={quateIcon} alt="quate" className='quate-img' />
          </div>
          <div className="client__rate">
          <span className='text-warning mx-1'>{<StarFill size={12}/>}</span>
          <span className='text-warning mx-1'>{<StarFill size={12}/>}</span>
          <span className='text-warning mx-1'>{<StarFill size={12}/>}</span>
          <span className='text-warning mx-1'>{<StarFill size={12}/>}</span>
          <span className='text-warning mx-1'>{<StarHalf size={12}/>}</span>
          </div>
      </div>
    </div>
  )
}

export default Client