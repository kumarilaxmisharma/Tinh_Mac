// components/nav.jsx
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from "lucide-react";
import Logo from '/public/images/logo/Logo.png';

const Navbar = () => {
  return (
    <header className="md:ml-0 fixed top-0 left-0 right-0 z-20 h-24 bg-white border-b border-gray-200 shadow-xs">
      <div className="container max-w-full h-full px-22 flex justify-between items-center">
        {/* Logo - Fixed structure and added pl-0 to remove padding */}
        <Link to ={"/"}className="flex items-center space-x-1 cursor-pointer">
          <img 
          src={Logo} 
          alt="Logo" 
          className="h-30 object-contain" />
        </Link>
        
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <input
            type="search"
            placeholder="Search"
            className="w-full h-10 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Right side items */}
         <div className="flex items-center space-x-10">            
            <Link
               to={"/wishlist"}
               className="flex flex-center gap-2 px-5 py-2 bg-[#004AAD] text-white rounded-full hover:bg-blue-600 transition-colors">
                <Heart className="h-5 w-5 fill-white text-white"/>
               Wishlist
            </Link>
          <div className="flex items-center space-x-4">
            <Link
               to={"/login-signup"}
               className="px-5 py-2 text-gray-600 bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 transition-colors">
               Log in / Sign up
            </Link>
            <Link 
               to={"/cart"}
               className="flex flex-center gap-2 px-5 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors ">
               <ShoppingCart className="h-5 w-5"/>
               Cart
            </Link>
         </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar