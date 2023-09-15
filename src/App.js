import './App.css';

// ** Components
import { Footer, Navbar } from './components';
import { Route , Routes } from 'react-router-dom';

// ** Pages
import { About, Blog, CartPage, CheckOut, CompoareProdcut, Contact, ForgetPassword, Home , Login, NotFound, OrderTrack, ProductDetails, Shop, SignUp, ViewProduct, WishListPage } from './pages';

// ** redux
import { useDispatch, useSelector } from 'react-redux';

// hooks
import { useEffect } from 'react';

// store
import { getCartData, updateCartData } from './store/slices/cartSlice';
import { getUsers } from './store/slices/userSlice';
import { getWishlistData, updateWishlistData } from './store/slices/wishes';


function App() {

  // store
  const {cartList} = useSelector(state=>state.Cart)
  const {wishlist} = useSelector(state=>state.Wishlist)
  const {isAuth , userId} = useSelector(state=>state.AuthReducer)

  // redux
  const dispatch = useDispatch()

  useEffect(()=>{

    dispatch(getUsers())
    
    if(isAuth) {
      dispatch(getCartData(userId))
      dispatch(getWishlistData(userId))
    }
    
  
  },[dispatch, isAuth, userId])

  useEffect(()=>{
  // *** updatae the user cart  and wishList ***
  if(isAuth) {
    dispatch(updateCartData({id:userId , cart:cartList}))
    dispatch(updateWishlistData({id:userId, wishlist}))

  }
   
  },[cartList, dispatch, isAuth, userId, wishlist])

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/wishlistpage' element={<WishListPage/>}/>
        <Route path='/ordertrack' element={<OrderTrack/>}/>
        <Route path='/compareproduct' element={<CompoareProdcut/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/forgetpassword' element={<ForgetPassword/>}/>
        <Route path='/productdetails/:id' element={<ProductDetails/>}/>
        <Route path='/viewProduct/:id' element={<ViewProduct/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
