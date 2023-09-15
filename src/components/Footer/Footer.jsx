// ** images imports
import logo from '../../assets/images/logos/main-logo.png'
import payments from '../../assets/images/main-images/png1672834115.png'

// ** icons
import { Telephone , Envelope , HouseDoor , ChevronRight , Facebook , Twitter , Youtube , Instagram} from 'react-bootstrap-icons'

// constans imports
import { NavLinks , Services } from '../../constants'

// ** css
import './footer.css'

// ** react router
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                    <div className='footer__logo'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='footer__contacts mt-4'>
                        <a href="/"><span>{<Telephone/>}</span>+60-001-004</a>
                        <a href="/"><span>{<Envelope/>}</span>example@furniture.com</a>
                        <a href="/"><span>{<HouseDoor/>}</span> 123 Main Street Anytown, USA 12345</a>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                    <h3>Important Link</h3>
                    <div className="footer__links mt-4">
                        {NavLinks.map(item=>(
                            <Link key={item.link} className='d-flex gap-1' to={item.url}><span>{<ChevronRight size={12}/>}</span>{item.link}</Link>
                        ))}
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                    <h3>Services</h3>
                    <div className="footer__links mt-4">
                        {Services.map(item=>(
                            <Link key={item.link} className='d-flex gap-1' to={item.url}><span>{<ChevronRight size={12}/>}</span>{item.link}</Link>
                        ))}
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                    <h3>Subscribe Updates</h3>
                    <div className="footer__subscrbe mt-4">
                        <p>Sign up to our mailing list now!</p>
                        <form onSubmit={(e)=>e.preventDefault()}>
                        <input type="email" placeholder='Enter Your Email' className='w-100 mb-4 p-3 border-0 shadow-sm rounded'/>
                        <input type="submit" className='custom-btn w-100 py-3 px-2'/>
                        </form>
                    </div>
                </div>
            </div>
            <div className="copyright d-flex align-items-center justify-content-center pt-5 flex-column flex-lg-row gap-5">
                <div className="footer__social-icons d-flex gap-2">
                    <a href="/">{<Facebook/>}</a>
                    <a href="/">{<Twitter/>}</a>
                    <a href="/">{<Youtube/>}</a>
                    <a href="/">{<Instagram/>}</a>
                </div>
                <p className='mb-0 text-center'>&copy; 2023 Copyright All Right Reserved by Furnito</p>
                <div className='payments mb-4 mb-md-0'>
                    <img src={payments} alt="payments" />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer