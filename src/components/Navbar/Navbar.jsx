import './navbar.css'
// ** react router imports
import { Link } from 'react-router-dom';

// ** images imports
import logo from '../../assets/images/logos/main-logo.png'
import togglarIcon from '../../assets/images/icons/togglar-icon.png'
import closeIcon from '../../assets/images/icons/close-icon.png'

// constants
import {NavLinks} from '../../constants/index'

// ** Icons
import { ArrowRepeat , Cart , Person , SuitHeart } from 'react-bootstrap-icons';

// ** Components
import CartItems from '../CartItems';
import SearchBtn from '../SearchBtn';
import WishList from '../WishList';
import Account from '../Account';
import Scroll from '../Scroll';

// hooks
import { useState } from 'react';

// ** animate css libirary
import 'animate.css';
import { useSelector } from 'react-redux';



const Navbar = () => {

  const {isAuth} = useSelector(state=>state.AuthReducer)

  const [toggle,setToggle] = useState(false)
  const toogleBarIcon = ()=>{
    setToggle(!toggle)
  }
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex justify-content-between">
          <Link className="navbar-brand" to="/"><img src={logo} alt="logo" /></Link>
          <button onClick = {toogleBarIcon}className="border-0 bg-white fs-4 d-block d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <img src={toggle?closeIcon:togglarIcon} alt="bar-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {NavLinks.map(item=>(
                <li className="nav-item" key={item.link}>
                    <Link className="nav-link active" aria-current="page" to={item.url.toLocaleLowerCase()}>{item.link}</Link>
              </li>
              ))}
            </ul>
          </div>
          <ul className='nav-controls d-none d-lg-flex align-items-center'>
                <SearchBtn/>
                <li>
                  <Link to='/compareproduct'><button className='compare-btn'>{<ArrowRepeat size={24}/>}</button></Link>
                </li>
                  <WishList/>
                  <CartItems/>
                  <Account/>
          </ul>
        </div> 
      </nav>
      <div className="bottom-header d-flex d-lg-none">
        <div className="container">
        <ul className='nav__controls-responsive'>
                <Link to='/cart'><button>{<Cart size={18}/>}</button><h6>Cart</h6></Link>
                <Link to='/compareProduct'><button>{<ArrowRepeat size={20}/>}</button><h6>Compare</h6></Link>
                <Link to='/wishlistpage'><button>{<SuitHeart size={20}/>}</button><h6>Wishast</h6></Link>
                <Link to='/login'><button>{<Person size={20}/>}</button><h6>{isAuth?'Log out':'Log In'}</h6></Link>
                
          </ul>
        </div>
      </div>
      <Scroll/>
    </header>
    
  )
}

export default Navbar