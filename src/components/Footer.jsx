const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300 bg-white px-6 md:px-10 lg:px-16 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-20">

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">
           ADZ <span className="text-yellow-700">FURNITURE</span> 
          </h1>

          <p className="text-gray-400 leading-7 text-base md:text-lg">
            400 University Drive Suite 200 Coral <br />
            Gables, <br />
            FL 33134 USA
          </p>
        </div>

        <div>
          <h2 className="text-gray-400 text-lg mb-8 md:mb-12">
            Links
          </h2>

          <ul className="space-y-6 md:space-y-10 font-semibold text-black">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Shop</li>
            <li className="cursor-pointer">About</li>
          </ul>
        </div>

        <div>

          <h2 className="text-gray-400 text-lg mb-8 md:mb-12">
            Help
          </h2>

          <ul className="space-y-6 md:space-y-10 font-semibold text-black">
            <li className="cursor-pointer">Payment Options</li>
            <li className="cursor-pointer">Returns</li>
            <li className="cursor-pointer">Privacy Policies</li>
          </ul>
        </div>

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


            <button className="border-b border-black pb-2 text-sm font-semibold whitespace-nowrap">
              SUBSCRIBE
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;