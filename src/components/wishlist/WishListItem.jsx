
// Components
import CustomBtn from "../CustomBtn"


const WishListItem = ({img,name,price,qty}) => {
    return (
      <div className='cart d-flex justify-content-between align-items-center mb-3'>
          <div className="cart__info">
              <div className="cart__item">
                <h2>My Favourits</h2>
                <div>
                    <img src={img} alt="" />
                </div>
                <p>{name}</p>
                <CustomBtn title='View WishList' styleContainer='outline-color py-3 w-100'/>
              </div>
          </div>
          <div><span className='fw-semibold text-black pe-2 quantity'>{qty}</span></div>
      </div>
    )
  }
  
  export default WishListItem