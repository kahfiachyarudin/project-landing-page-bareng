import { useState } from "react";

export default function Image() {
  const gambar = [
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",

    "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",

    "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",

    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    "https://plus.unsplash.com/premium_photo-1670360414946-e33a828d1d52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",

    "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",

    "https://images.unsplash.com/photo-1598300056393-4aac492f4344?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
  ];

  return (
    <section className="bg-[#f5f5f5] py-14 px-4 md:px-8 min-h-screen">
      <div className="text-center mb-10">
        <h3 className="text-gray-500 text-sm md:text-lg">
          Share your setup with
        </h3>

        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2">
          #AdzFurniture
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-4">
        <img
          src={gambar[0]}
          alt=""
          className="w-full h-full object-cover rounded-xl lg:row-span-2"
        />

        <img
          src={gambar[1]}
          alt=""
          className="w-full h-full object-cover rounded-xl lg:col-span-2"
        />

        <img
          src={gambar[2]}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />

        <img
          src={gambar[3]}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />

        <img
          src={gambar[4]}
          alt=""
          className="w-full h-full object-cover rounded-xl lg:col-span-2"
        />

        <img
          src={gambar[5]}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
        <img
          src={gambar[6]}
          alt=""
          className="w-full h-full object-cover rounded-xl lg:col-span-2"
        />
        <img
          src={gambar[7]}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </section>
  );
}
