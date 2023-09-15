// ** icons
import { Telephone ,Envelope , Geo } from "react-bootstrap-icons"

// ** css
import './contact.css'

const ContactInfo = () => {
  return (
    <div className="col-md-4">
        <div className="contact__details">
            <div className="contact__title"></div>
                <h2 className="mb-4">Contact with us</h2>
                <p className="mb-4">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore.</p>
            </div>
            <div className="contact__info">
                <div className="d-flex gap-3 align-items-center my-4">
                    <a href="/">{<Telephone size={25}/>}</a>
                    <div><h4>Phone</h4><p className="m-0">(208) 000-0002</p></div>
                </div>
                <div className="d-flex gap-3 align-items-center my-4">
                    <a href="/">{<Envelope size={25}/>}</a>
                    <div><h4>Email</h4><p className="m-0">hexfashion@furnito.com</p></div>
                </div>
                <div className="d-flex gap-3 align-items-center my-4">
                    <a href="/">{<Geo size={25}/>}</a>
                    <div><h4>Address</h4><p className="m-0">2715 Ash Dr. San Jose, South Dakota 83475</p></div>
                </div>
            </div>
        
        
    </div>
  )
}

export default ContactInfo