// ** Components
import CustomBtn from './CustomBtn'

// ** images
import bannerImg from '../assets/images/main-images/arrival11669021970.png'

const Bannar = () => {
  return (
    <section className='py-4 mx-3 mx-md-4 bg-main-bg'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-lg-6">
                    <div className="mb-5 mb-lg-0">
                        <img src={bannerImg} alt="newArrival-img" className='img-fluid' />
                    </div>
                </div>
               <div className="col-12 col-lg-6">
               <div className="carousel__text-content ps-0 ps-lg-5 ms-0 ms-lg-5">
                    <h1 className='bannar__title'>New Arrival 2022</h1>
                    <p className='bannar__subtitle mt-3 mt-lg-4'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat pulvinar enim hendrerit pellentesque Pharetra consectetur quam.</p>
                    <CustomBtn title='Shop Now' styleContainer='carousel__btn custom-btn'/>
                </div>
               </div>
            </div>
        </div>
    </section>
  )
}

export default Bannar