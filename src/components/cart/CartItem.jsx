// css
import './cart.css'

const CartItem = ({img,name,price,itemsNumber,qty , customStyle}) => {
  
  return (
    <div className='cart d-flex justify-content-between align-items-center mb-3'>
        <div className="cart__info d-flex align-items-center gap-3">
          <img src={img} alt=""  style={{width:'70px',height:'70px',objectFit:'cover',borderRadius:'0'}}/>
            <div className="cart__item">
              <h3>{name}</h3>
              <h5 className={`${customStyle?'text-secondary':'' } fw-normal`} style={{color:'#599a8d',fontSize:`${customStyle?'16px':'18px'}`, marginTop:"7px"}}>{customStyle?'Quantity:':''}{price}</h5>
            </div>
        </div>
        <div><span className='fw-semibold text-black pe-2 quantity'>{qty}</span></div>
    </div>
  )
}

export default CartItem