import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useGetLocation = (id) => {
        
  const location = useLocation();

  const getPageTitleFromPathname = (pathname) => {

    // Logic to determine the page title based on the pathname
    if (pathname === '/') {
      return 'Home - Furnito';
    } 
    else if (pathname === '/about') {
        return 'About - Furnito';
    } 
    else if (pathname==='/blog') {
      return 'Blog - Furnito';
    }
    else if (pathname==='/login') {
      return 'Log in - Furnito'
    }
    else if (pathname==='/signup') {
      return 'Sign Up - Furnito';
    }
    else if (pathname==='/shop') {
            return 'Shop - Furnito';
    }
    else if (pathname==='/contact') {
            return 'contact - Furnito';
    }
    else if (pathname==='/cart') { 
            return 'Cart - Furnito';
    }
    else if (pathname==='/wishlistpage') {
            return 'WishList - Furnito';
    }
    else if (pathname==='/ordertrack') {
            return 'Order Track - Furnito';
    }
    else if (pathname==='/compareProduct') {
            return 'Compare - Furnito';
    }
    else if (pathname==='/shop') {
            return 'Shop - Furnito';
    }
    else if (pathname==='/checkout') {
            return 'Check Out - Furnito';
    }
    else if (pathname==='/forgetpassword') {
            return 'Forget Password - Furnito';
    }
    else if (pathname.match(/\/productdetails\/:\d+/)) {
            
            return 'Product Details - Furnito';
            
    }
    else if (pathname.match(/\/viewProduct\/:\d+/)) {
            return 'View Product - Furnito';
    }else {
        return '404 Not Found'
    }
  }

  useEffect(() => {
    const { pathname } = location;
    const pageTitle = getPageTitleFromPathname(pathname);

     // Update the document title
    document.title = pageTitle; 
   
  }, [location]);
};