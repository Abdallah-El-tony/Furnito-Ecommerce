// ** slider images 
import product1 from '../assets/images/slider-images/slider-img-1.png'
import product2 from '../assets/images/slider-images/slider-img-2.png'
import product3 from '../assets/images/slider-images/slider-img-3.png'
import product4 from '../assets/images/slider-images/slider-img-4.png'
import product5 from '../assets/images/slider-images/slider-img-5.png'
import product6 from '../assets/images/slider-images/slider-img-6.png'
import product7 from '../assets/images/slider-images/slider-img-7.png'

// ** payments methods images 
import method1 from '../assets/images/logos/method-1.png'
import method2 from '../assets/images/logos/method-2.png'
import method3 from '../assets/images/logos/methode-3.png'
import method4 from '../assets/images/logos/methode-4.png'
import method5 from '../assets/images/logos/methode-5.jpg'
import method6 from '../assets/images/logos/methode-6.png'
import method7 from '../assets/images/logos/method-7.png'
import method8 from '../assets/images/logos/method-8.png'
import methode9 from '../assets/images/logos/method-9.jpg'
import method10 from '../assets/images/logos/method-10.png'
import method11 from '../assets/images/logos/method-11.png'



// ** nav links
export const NavLinks =[
    {
        link:'Home',
        url:'/',
    },
    {
        link:'About',
        url:'/about',
    },
    {
        link:'Shop',
        url:'/shop',
    },
    {
        link:'Blog',
        url:'/blog',
    },
    {
        link:'Contact',
        url:'/contact',
    },
    {
        link:'OrderTrack',
        url:'/ordertrack',
    }
]


// ** services liinks
export const Services = [
    {
        link:'Free Shipping',
        url:'/',
    },
    {
        link:'Easy Return',
        url:'/',
    },
    {
        link:'Secure payment',
        url:'/',
    },
    {
        link:'Best Offer',
        url:'/',
    }
]

// ** slider Products
export const sliderProducts = [
    {
        img:product1,
        name:'Concrate Furniture',
        items:'0 Items'

    },
    {
        img:product2,
        name:'Bomby Furniture',
        items:'0 Items'

    },
    {
        img:product3,
        name:'Wooden Furniture',
        items:'20 Items'

    },
    {
        img:product4,
        name:'Bambo Furniture',
        items:'2 Items'

    },
    {
        img:product5,
        name:'Metal Furniture',
        items:'1 Items'

    },
    {
        img:product6,
        name:'Glass Furniture',
        items:'3Items'

    },
    {
        img:product7,
        name:'Plastice Furniture',
        items:'3 Items'

    }
]


// ** tabs btns
export const Tabs = [
    {
        target:'Description',
        targetContent :`
            <p className="m-0 text-danger">Fine Fabric Side Chairs-The utility fabric side chairs have the advantages of good permeability and comfortability. Upholstered seat and chair back filled with</p>
            <ul>
                <li>sponge are soft and full of elasticity.In a classic shape with an open back, so you feel free and airy even if you're chained to any desk or table.</li>
                <li>Modern design accent armchair, elegantly curved silhouette provides maximum comfort, is perfect for decor your living room bedroom dining room office.</li>
                <li>finish. Corners are glued, blocked and stapled. High-quality plush high-density foam cushioning is upholstered.</li>
                <li>EASY TO ASSEMBLE-The package of the chairs comes with a detailed instruction manual and all the accessories.</li>
            </ul>
        `
    },
    {
        target:'Reviews',
        targetContent:`
            <form>
                <h2>Hello! Let Us Get Started</h2>
                <h5>Sign in to continue.</h5>
                <input type='text' placeholder="Username" className="form-control mb-3"/>
                <input type='password' placeholder="Password"/>
                <a href='/login'>Sign In</a>
                <div>
                    <input type='checkbox' id='keep'/>
                    <label htmlFor="keep">Keep Me Sign In</label>
                </div>
                <p>Don't Have an Account ? <a href='/login'>Sign Up</a></p>
            </form>
        `
    },
    {
        target:"Ship & Return",
        targetContent:`
            <p>You can exchange any product in your order up to 30 days after delivery. Shipping on your first exchange for any item is free of charge. If you decide to exchange that item again (i.e. more than once) you will be responsible for any forward and return shipping fees.
            Please note: All exchanges must be made with the original Article packaging. If you don't have the original packaging on hand, there is an additional $50 repackaging fee per item.</p>
        `

    }

]


// ** shop tags filters
export const Tags = ['Table','Almirah','Bed','Cabient','Plastice Chair','Sofa','Stol','Bomby Chair','Chair']

// ** Blog tags filters
export const BlogTags = ['Tech' , 'Travel', 'Camira' , 'Watch' , 'Fashion' , 'Games' , 'Gadjet' , 'book']

// payments methods
export const methods = [method1,method2,method3,method4,method5,method6,method7,method8,method10,method11,methode9]