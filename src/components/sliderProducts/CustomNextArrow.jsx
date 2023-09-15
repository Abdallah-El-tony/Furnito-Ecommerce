// ** css
import './slider.css'

// ** icons
import { ChevronRight } from 'react-bootstrap-icons';

export const CustomNextArrow = (props) => (
    <button {...props} className="custom-next-arrow next-btn">
      {<ChevronRight/>}
    </button>
  );