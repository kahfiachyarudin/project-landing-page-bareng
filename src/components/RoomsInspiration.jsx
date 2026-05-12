import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export default function RoomsInspiration() {
  const slides = [
    {
      id: 1,
      title: "Inner Peace",
      room: "Bed Room",
      image:
        "https://images.unsplash.com/photo-1642703168632-5a711d91b043?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Minimal Space",
      room: "Living Room",
      image:
        "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      title: "Modern Kitchen",
      room: "Kitchen",
      image:
        "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      title: "Cozy Corner",
      room: "Workspace",
      image:
        "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3NwYWNlfGVufDB8fDB8fHww",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <>
      <section className="w-full bg-[#f7f5f1] py-16 px-6 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          
          <div className="w-full lg:w-[35%]">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              50+ Beautiful rooms inspiration
            </h1>

            <p className="text-gray-500 mt-5 leading-relaxed">
              Our designer already made a lot of beautiful prototype
              of rooms that inspire you
            </p>

            <button className="mt-8 bg-[#c89b3c] hover:bg-[#b8892e] transition-all duration-300 text-white px-8 py-4 font-semibold">
              Explore More
            </button>
          </div>

          <div className="w-full lg:w-[65%] relative">
            <div className="flex gap-5 transition-all duration-500">
              
              <div className="relative min-w-full md:min-w-[420px] h-[500px] overflow-hidden">
                <img
                  src={slides[current].image}
                  alt={slides[current].title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-sm p-5 w-[80%]">
                  <p className="text-sm text-gray-500">
                    01 — {slides[current].room}
                  </p>

                  <div className="flex items-center justify-between mt-2">
                    <h2 className="text-3xl font-bold text-gray-900">
                      {slides[current].title}
                    </h2>

                    <button className="bg-[#c89b3c] text-white p-3">
                      <ArrowRight size={22} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="hidden md:block min-w-[250px] h-[500px] overflow-hidden">
                <img
                  src={
                    slides[(current + 1) % slides.length].image
                  }
                  alt="next"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:scale-110 transition"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:scale-110 transition"
            >
              <ChevronRight size={22} />
            </button>

            <div className="flex items-center gap-3 mt-6 justify-center lg:justify-start">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`transition-all duration-300 rounded-full ${
                    current === index
                      ? "w-6 h-6 border-2 border-[#c89b3c] flex items-center justify-center"
                      : "w-3 h-3 bg-gray-300"
                  }`}
                >
                  {current === index && (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#c89b3c]" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}