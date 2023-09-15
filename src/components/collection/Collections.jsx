// ** Components
import CollectionPart from './CollectionPart'

// ** images imports
import chair from '../../assets/images/main-images/chair.png'
import flower from '../../assets/images/main-images/flours.png'

const Collections = () => {
  return (
    <section className="collections my-4 py-4">
        <div className="container">
            <div className="row">
               <CollectionPart title='Furniture Collection' img={chair} containerStyle={{backgroundColor:'rgb(240, 241, 250)'}}/>
               <CollectionPart title='Plant Collection' img={flower} containerStyle={{backgroundColor:'rgb(250, 246, 242)'}}/>
            </div>
        </div>
    </section>
  )
}

export default Collections