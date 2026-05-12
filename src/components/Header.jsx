import { Search, Heart, ShoppingCart, User } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold text-gray-900">
            ADZ <span className="text-yellow-700">FURNITURE</span> 
          </h1>
        </div>

        <ul className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
          <li className="hover:text-yellow-700 duration-300 cursor-pointer">
            Home
          </li>

          <li className="hover:text-yellow-700 duration-300 cursor-pointer">
            Shop
          </li>

          <li className="hover:text-yellow-700 duration-300 cursor-pointer">
            About
          </li>

          <li className="hover:text-yellow-700 duration-300 cursor-pointer">
            Contact
          </li>
        </ul>
        


        <div className="flex items-center gap-6 text-gray-700">
          <User className="w-5 h-5 cursor-pointer hover:text-yellow-700 duration-300" />

          <Search className="w-5 h-5 cursor-pointer hover:text-yellow-700 duration-300" />

          <Heart className="w-5 h-5 cursor-pointer hover:text-yellow-700 duration-300" />

          <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-yellow-700 duration-300" />
        </div>
      </nav>
    </header>
  );
};

export default Header;