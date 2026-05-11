

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300 bg-white px-16 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-20">

        <div>
          <h1 className="text-4xl font-bold text-black mb-12">
            Logo
          </h1>

          <p className="text-gray-400 leading-8 text-lg">
            400 University Drive Suite 200 Coral <br />
            Gables, <br />
            FL 33134 USA
          </p>
        </div>

        <div>
          <h2 className="text-gray-400 text-lg mb-12">
            Links
          </h2>

          <ul className="space-y-10 font-semibold text-black">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Shop</li>
            <li className="cursor-pointer">About</li>
          </ul>
        </div>

        <div>
          <h2 className="text-gray-400 text-lg mb-12">
            Help
          </h2>

          <ul className="space-y-10 font-semibold text-black">
            <li className="cursor-pointer">Payment Options</li>
            <li className="cursor-pointer">Returns</li>
            <li className="cursor-pointer">Privacy Policies</li>
          </ul>
        </div>

        <div>
          <h2 className="text-gray-400 text-lg mb-12">
            Newsletter
          </h2>

          <div className="flex items-center gap-4">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border-b border-black outline-none pb-2 text-sm w-full placeholder:text-gray-400"
            />

            <button className="border-b border-black pb-2 text-sm font-semibold">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;