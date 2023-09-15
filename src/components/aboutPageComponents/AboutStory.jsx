// ** images import
import storyImg from '../../assets/images/main-images/about01.jpg'

// ** css
import './about.css'

const AboutStory = () => {
  
  return (
    <section className='about__story'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="story__img pe-0 pe-lg-5 mb-4 mb-lg-0">
              <img src={storyImg} alt="about-img" />
            </div>
          </div>
          <div className="col-lg-6 px-0 px-xl-5">
            <div className="story__text">
                <h2 className='mx-2 mx-sm-0'>Our Story</h2>
                <p className='mt-3 mx-2 mx-sm-0'>Mutley, you snickering, floppy eared hound. When courage is needed, you’re never around. Those medals you wear on your moth-eaten chest should be there for bungling at which you are best. So, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon. Howwww! Nab him, jab him, tab him, grab him, stop that pigeon now. Mutley, you snickering, floppy eared hound. When courage is needed, you’re never around. Those medals you wear on your moth-eaten chest should be there for bungling at which you are best. So, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon. Howwww! Nab him, jab him, tab him, grab him, stop that pigeon now.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutStory