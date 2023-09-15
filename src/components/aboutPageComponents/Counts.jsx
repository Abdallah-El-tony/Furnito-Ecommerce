// ** Components
import SingleCount from './SingleCount'

// ** css
import './about.css'

const Counts = () => {
  return (
    <section className='counts overflow-hidden'>
        <div className="container">
            <div className="row counters">
                <SingleCount counter={1000} title="Total Products"/>
                <SingleCount counter={1500} title="Total Variant"/>
                <SingleCount counter={500} title="Total User"/>
                <SingleCount counter={1200} title="Total Sell"/>
            </div>
        </div>
    </section>
  )
}

export default Counts