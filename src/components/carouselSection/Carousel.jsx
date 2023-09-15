// ** css
import "../carouselSection/carousel.css"

// ** Components
import CustomBtn from '../CustomBtn'

// ** bootstrap Icons
import {ChevronLeft} from "react-bootstrap-icons"
import {ChevronRight} from "react-bootstrap-icons"

// ** images import
import carouselImg from '../../assets/images/main-images/landing-img.png'

const Carousel = () => {
  
  return (
    <div className="carousel-section">
        <div className="container position-relative">
          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="5000">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6 order-2 order-lg-0">
                        <div className="carousel__text-content">
                            <h1 className='carousel__title animate__animated animate__flipInX'>Decorate Your Home</h1>
                            <p className='carousel__subtitle mt-3'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat pulvinar enim hendrerit pellentesque Pharetra consectetur quam.</p>
                            <CustomBtn title='Shop Now' styleContainer='carousel__btn custom-btn animate__animated animate__zoomIn'/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 order-0 order-lg-2">
                        <div className="carousel__img mb-5 mb-lg-0 animate__animated animate__zoomIn">
                            <img src={carouselImg} alt="landing-img" className='img-fluid' />
                        </div>
                    </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="5000">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6 order-2 order-lg-0">
                        <div className="carousel__text-content">
                            <h1 className='carousel__title animate__animated animate__flipInX'>Decorate Your Home</h1>
                            <p className='carousel__subtitle mt-3'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat pulvinar enim hendrerit pellentesque Pharetra consectetur quam.</p>
                            <CustomBtn title='Shop Now' styleContainer='carousel__btn custom-btn animate__animated animate__zoomIn'/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 order-0 order-lg-2">
                        <div className="carousel__img mb-5 mb-lg-0 animate__animated animate__zoomIn">
                            <img src={carouselImg} alt="landing-img" className='img-fluid' />
                        </div>
                    </div>
                </div>
              </div>
            </div>
          
          </div>
          <div className='carousel__controles'>
                <button className="prev-btn" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                  <span>{<ChevronLeft size={20}/>}</span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="next-btn" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                  <span>{<ChevronRight size={20}/>}</span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
        </div>
    </div>
  
  )
}

export default Carousel