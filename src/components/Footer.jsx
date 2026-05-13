const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300 bg-white px-6 md:px-10 lg:px-16 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-20">

        {/* LOGO */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">
            ADZ <span className="text-yellow-700">FURNITURE</span>
          </h1>

          <p className="text-gray-400 leading-7 text-base md:text-lg">
            Modern furniture inspiration for your
            dream home with elegant and minimalist style.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h2 className="text-gray-400 text-lg mb-8 md:mb-12">
            Links
          </h2>

          <ul className="space-y-6 md:space-y-10 font-semibold text-black">

            <li>
              <a
                href="#home"
                className="hover:text-yellow-700 duration-300"
              >
                Home
              </a>
            </li>

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

          </ul>
        </div>

        {/* HELP */}
        <div>

          <h2 className="text-gray-400 text-lg mb-8 md:mb-12">
            Contact
          </h2>

          <ul className="space-y-6 md:space-y-10 font-semibold text-black">

            <li>
              <a
                href="https://wa.me/628xxxxxxxxxx"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-700 duration-300"
              >
                WhatsApp
              </a>
            </li>

            <li>
              <a
                href="mailto:example@gmail.com"
                className="hover:text-yellow-700 duration-300"
              >
                Email
              </a>
            </li>

            <li>
              <a
                href="https://github.com/kahfiachyarudin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-700 duration-300"
              >
                GitHub
              </a>
            </li>

          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h2 className="text-gray-400 text-lg mb-8 md:mb-12">
            Newsletter
          </h2>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">

            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border-b border-black outline-none pb-2 text-sm w-full placeholder:text-gray-400"
            />

            <a
              href="https://www.ikea.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-black pb-2 text-sm font-semibold whitespace-nowrap hover:text-yellow-700 duration-300"
            >
              SUBSCRIBE
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;