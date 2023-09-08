import React from 'react'
import './slider.css'
import {ChevronLeft} from "react-bootstrap-icons"
export const CustomPrevArrow = (slidecount,props) => (
    <button {...props} className="custom-prev-arrow prev-btn">
    {<ChevronLeft/>}
  </button>
  );