import React from 'react'
import './slider.css'
import { ChevronRight } from 'react-bootstrap-icons';
export const CustomNextArrow = (props) => (
    <button {...props} className="custom-next-arrow next-btn">
      {<ChevronRight/>}
    </button>
  );