import { Search, Heart, ShoppingCart, User } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold text-gray-900">
            ADZ <span className="text-yellow-700">FURNITURE</span>
          </h1>
        </div>

        {/* MENU */}
        <ul className="hidden md:flex items-center gap-10 text-gray-700 font-medium">

          {/* HOME */}
          <li>
            <a
              href="#home"
              className="hover:text-yellow-700 duration-300"
            >
              Home
            </a>
          </li>

          {/* SHOP */}
          <li>
            <a
              href="https://www.ikea.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-700 duration-300"
            >
              Shop
            </a>
          </li>

          {/* ABOUT */}
          <li>
            <a
              href="https://github.com/kahfiachyarudin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-700 duration-300"
            >
              About
            </a>
          </li>

          {/* CONTACT */}
          <li>
            <a
              href="https://wa.me/628xxxxxxxxxx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-700 duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* ICON */}
        <div className="flex items-center gap-6 text-gray-700">

          <a
            href="https://www.ikea.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <User className="w-5 h-5 cursor-pointer hover:text-yellow-700 duration-300" />
          </a>

          <a
            href="https://www.ikea.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Search className="w-5 h-5 cursor-pointer hover:text-yellow-700 duration-300" />
          </a>

          <a
            href="https://www.ikea.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Heart className="w-5 h-5 cursor-pointer hover:text-yellow-700 duration-300" />
          </a>

          <a
            href="https://www.ikea.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-yellow-700 duration-300" />
          </a>

        </div>
      </nav>
    </header>
  );
};

export default Header;