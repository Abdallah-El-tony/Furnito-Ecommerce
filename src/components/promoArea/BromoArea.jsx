
//** Icons */
import { Truck , ArrowClockwise, Lock , Gift } from "react-bootstrap-icons"

const BromoArea = () => {
  return (
    <section className='promo-area py-5 my-3'>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-lg-4">
                    <div className="promo__card  d-flex gap-4 align-items-center border p-4 mb-4">
                        <div className="promo_icon">
                            <span className="color-main">{<Truck size={40}/>}</span>
                        </div>
                        <div className="promo_text">
                            <h4>Free Shipping</h4>
                            <p className="text-secondary m-0">Order Over $90</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="promo__card  d-flex gap-4 align-items-center border p-4 mb-4">
                        <div className="promo_icon">
                            <span className="color-main">{<ArrowClockwise size={40}/>}</span>
                        </div>
                        <div className="promo_text">
                            <h4>Easy Return</h4>
                            <p className="text-secondary m-0">Within 15 Days</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="promo__card  d-flex gap-4 align-items-center border p-4 mb-4">
                        <div className="promo_icon">
                            <span className="color-main">{<Lock size={40}/>}</span>
                        </div>
                        <div className="promo_text">
                            <h4>Secure payment</h4>
                            <p className="text-secondary m-0">Online Shopping</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="promo__card  d-flex gap-4 align-items-center border p-4 mb-4">
                        <div className="promo_icon">
                            <span className="color-main">{<Gift size={30}/>}</span>
                        </div>
                        <div className="promo_text">
                            <h4>Best Offer</h4>
                            <p className="text-secondary m-0">Guaranteed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BromoArea