// ** css
import './about.css'

const Member = ({person,name,job}) => {
  
  return (
    <div className='member__card'>
        <div className="card__content p-4">
            <div className="member__img">
                <img src={person} alt="" />
            </div>
            <div className="member__desc">
                <h3>{name}</h3>
                <p>{job}</p>
            </div>
        </div>
    </div>
  )
}

export default Member