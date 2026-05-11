import React from "react";

const Card = [
  {
    title: "Judul",
    description: "Deskripsi",
    imageUrl: "https://placehold.co/500x600",
  },
  {
    title: "Judul 2",
    description: "Deskripsi 2",
    imageUrl: "https://placehold.co/500x600",
  },
  {
    title: "Judul 3",
    description: "Deskripsi 3",
    imageUrl: "https://placehold.co/500x600",
  },
];

export default function CardSection() {
  return (
    <div className="w-full flex flex-col items-center gap-y-5">
      <h1>Card Section</h1>
      <div className="flex min-w-full gap-x-5 justify-center">
        {Card.map((card, index) => (
          <div
            key={index}
            className="card bg-amber-50  flex flex-col items-center rounded-lg  transition-transform duration-200 group-hover:scale-105"
          >
            <img src={card.imageUrl} alt={card.title} />
            <h2>{card.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
