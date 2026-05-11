import heroImg from '../assets/image/heroimage.png';
export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content Box */}
      <div className="relative z-10 flex justify-end items-center h-full px-6 md:px-20">
        <div className="bg-[#FFF3E3] p-6 md:p-10 rounded-md max-w-xl shadow-lg">
          <p className="text-sm font-semibold tracking-[3px] text-gray-700 mb-2">
            New Arrival
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-[#B88E2F] leading-tight mb-4">
            Discover Our <br />
            New Collection
          </h1>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>

          <button className="bg-[#B88E2F] text-white px-8 py-3 font-semibold hover:opacity-90 transition">
            BUY NOW
          </button>
        </div>
      </div>
    </section>
  );
}
