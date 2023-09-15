// ** Icons
import { Facebook , Twitter , Linkedin, Pinterest } from 'react-bootstrap-icons'

// ** css
import './wishlist/wishlist.css'

const ShareIcons = () => {
  return (
    <ul className='position-absolute share-icons'>
        <li>
            <button className='facebook-color'><Facebook/></button>
        </li>
        <li>
            <button className='twitter-color'><Twitter/></button>
        </li>
        <li>
            <button className='in-color'><Linkedin/></button>
        </li>
        <li>
            <button className='pintrest-color'><Pinterest/></button>
        </li>
    </ul>
  )
}

export default ShareIcons