
// ** css
import './slider.css'

const SliderItem = ({img,name,items}) => {
  return (
    <div className='Slider__item text-center border mx-3 p-4'>
        <div className="slider__img">
          <img src={img} alt="" />
        </div>
        <div className="slider__descreption">
          <h3>{name}</h3>
          <p>{items}</p>
        </div>
    </div>
  )
}

export default SliderItem