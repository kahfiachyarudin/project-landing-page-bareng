import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

gsap.registerPlugin(useGSAP);

const CardData = [
  {
    title: "Dining",
    imageUrl:
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGluaW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Living",
    imageUrl:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=500&h=600",
  },
  {
    title: "Bedroom",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1671269704807-5479855d03fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJlZHJvb218ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Bathroom",
    imageUrl:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=500&h=600",
  },
  {
    title: "Kitchen",
    imageUrl:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=500&h=600",
  },
  {
    title: "Office",
    imageUrl:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=500&h=600",
  },
];

export default function CardSection() {
  const [index, setIndex] = useState(0);
  const container = useRef();

  useGSAP(() => {
    const cards = gsap.utils.toArray(".card");

    cards.forEach((card, i) => {
      if (i === index) {
        // KARTU TENGAH (INTI)
        gsap.to(card, {
          x: 0,
          scale: 1,
          opacity: 1,
          zIndex: 10,
          duration: 0.5,
          ease: "power2.out",
        });
      } else if (
        i === index - 1 ||
        (index === 0 && i === CardData.length - 1)
      ) {
        // KARTU KIRI
        gsap.to(card, {
          x: -500,
          scale: 0.8,
          opacity: 0.6,
          zIndex: 5,
          duration: 0.5,
        });
      } else if (
        i === index + 1 ||
        (index === CardData.length - 1 && i === 0)
      ) {
        // KARTU KNN
        gsap.to(card, {
          x: 500,
          scale: 0.8,
          opacity: 0.6,
          zIndex: 5,
          duration: 0.5,
        });
      } else {
        // KARTU YANG LAEN
        gsap.to(card, {
          x: 0,
          scale: 0.5,
          opacity: 0,
          zIndex: 0,
          duration: 0.5,
        });
      }
    });
  }, [index]);

  const nextCard = () => setIndex((prev) => (prev + 1) % CardData.length);
  const prevCard = () =>
    setIndex((prev) => (prev - 1 + CardData.length) % CardData.length);

  const onHover = (e) => {
    if (e.currentTarget.style.zIndex === "10") {
      gsap.to(e.currentTarget, { scale: 1.1, duration: 0.3 });
    }
  };

  const onHoverLeave = (e) => {
    if (e.currentTarget.style.zIndex === "10") {
      gsap.to(e.currentTarget, { scale: 1, duration: 0.3 });
    }
  };

  return (
    <>
      <div className="text-center -mb-10">
        <h2 className="text-black text-3xl font-bold">Browse The Range</h2>

        <p className="text-gray-500 mt-2">
          Explore various room inspirations designed to make your home more
          comfortable and stylish.
        </p>
      </div>
      <div
        ref={container}
        className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Area Kartu */}
        <div className="relative w-full h-112.5 flex items-center justify-center">
          {/* Kartu */}
          {CardData.map((card, i) => (
            <div
              key={i}
              onMouseEnter={onHover}
              onMouseLeave={onHoverLeave}
              className="card absolute w-125 bg-white rounded-2xl shadow-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-full object-cover"
                // kalo URLnya ora bisa, ganti jadi placeholder
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/500x600?text=${card.title}`;
                }}
              />
              <div className="p-4 text-center">
                <h2 className="text-xl font-bold text-slate-800">
                  {card.title}
                </h2>
              </div>
            </div>
          ))}
          {/* tombol navigasi */}
          <div className="flex gap-10 w-full justify-between absolute z-10 *:top-1/2 transform -translate-y-1/2 px-10">
            <button
              onClick={prevCard}
              className="p-2 bg-white shadow-md border text-black rounded-full hover:bg-white  transition"
            >
              <IconChevronLeft size={24} />
            </button>
            <button
              onClick={nextCard}
              className="p-2 bg-white shadow-md border text-black rounded-full hover:bg-white  transition"
            >
              <IconChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
