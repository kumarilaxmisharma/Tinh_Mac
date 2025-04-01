// components/nav.jsx
// import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="md:ml-0 fixed top-0 left-0 right-0 z-20 h-24 bg-white border-b border-gray-200 shadow-xs">
      <div className="container mx-auto h-full px-5 flex justify-between items-center">
        {/* Logo - Fixed structure and added pl-0 to remove padding */}
        <div className="pl-0">
          <img src="/images/Logo.png" alt="Logo" className="h-30" />
        </div>
        
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
            <a
              //  to="/For-Dentist"
               className="px-6 py-2 bg-[#004AAD] text-white rounded-full hover:bg-blue-600 transition-colors">
               Wishlist
            </a>
          <div className="flex items-center space-x-4">
            <a
              //  to="/Login"
               className="px-6 py-2 text-gray-600 bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 transition-colors">
               Log in / Sign up
            </a>
            <a
              //  to="/Signup"
               className="px-6 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors">
               Cart
            </a>
         </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;