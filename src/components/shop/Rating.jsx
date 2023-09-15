// ** Icons
import { Star , StarFill} from 'react-bootstrap-icons'

// ** ginirate random key libirary
import { v4 as uuidv4 } from 'uuid';

const Rates = ({ star, starFill, id ,handleChange}) => {

    const changeHandler = (e)=>{
        handleChange(starFill)
    }

    // ** vars
    let stars = [];

    // render star filled
    for (let i = 1; i < starFill + 1; i++) {
      stars.push(
        <span key={uuidv4()} className="text-warning mx-1">
          {<StarFill size={20} />}
        </span>
      );
    }

    // render starts not filled
    for (let i = starFill; i < 5; i++) {
      stars.push(
        <span key={uuidv4()} className="text-warning mx-1">
          {<Star size={20} />}
        </span>
      );
    }
    
    return (
      <div className="d-flex gap-3 my-2">
        <input type="radio" id={id} name="rate" className='border' style={{cursor:"pointer", width:"18px"}} onChange={changeHandler} />
        <label htmlFor={id} style={{cursor:'pointer'}}>{stars}</label>
      </div>
    );
  };
  
  const Rating = ({handleGetRate}) => {
    const handleChange = (rate)=>{
        handleGetRate(rate)
    }
    return (
      <>
        <div className="mt-3">
            
          <Rates starFill={5} star={0} id="one" handleChange={handleChange}/>
          <Rates starFill={4} star={1} id="two"  handleChange={handleChange}/>
          <Rates starFill={3} star={2} id="three"  handleChange={handleChange}/>
          <Rates starFill={2} star={3} id="four" handleChange={handleChange} />
          <Rates starFill={1} star={4} id="four" handleChange={handleChange} />
        </div>
      </>
    );
  };
  
  export default Rating;