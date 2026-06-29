"use client";

import { useState } from "react";
import { TreePine, Users, Clock, Sun, ChevronLeft, ChevronRight } from "lucide-react";
import { gazebos } from "@/lib/data";

function formatPrice(price: number): string {
  return price.toLocaleString("ru-RU") + " ₽";
}

const gradients = [
  "from-emerald-400 to-teal-600",
  "from-sky-400 to-blue-600",
  "from-amber-400 to-orange-600",
  "from-green-400 to-emerald-600",
  "from-blue-400 to-indigo-600",
  "from-teal-400 to-cyan-600",
];

function ImageCarousel({ images, name }: { images: string[]; name: string }) {
  const [index, setIndex] = useState(0);

  if (images.length === 0 || images[0] === "gradient") {
    return null;
  }

  return (
    <div className="relative h-48 group">
      <img src={images[index]} alt={name} className="h-full w-full object-cover" />
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIndex((i) => (i - 1 + images.length) % images.length);
            }}
            className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-1.5 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIndex((i) => (i + 1) % images.length);
            }}
            className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-1.5 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <div key={i} className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/40"}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-10 space-y-10">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-teal-800">
            Беседки у Сузгарьевского водоёма
          </h1>
          <p className="text-lg text-teal-600/80 max-w-2xl mx-auto">
            Отдохните на природе в уютных беседках с видом на воду. Выберите подходящий вариант для вашей компании.
          </p>
        </section>

        <section>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gazebos.map((gazebo, index) => (
              <div key={gazebo.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col border border-white/50">
                {gazebo.image === "gradient" ? (
                  <div className={"h-48 bg-gradient-to-br " + gradients[index] + " flex items-center justify-center"}>
                    <TreePine className="h-16 w-16 text-white/80" />
                  </div>
                ) : (
                  <ImageCarousel images={gazebo.images} name={gazebo.name} />
                )}
                <div className="p-5 space-y-3 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="text-lg font-semibold text-teal-900">{gazebo.name}</h2>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-teal-50 rounded-full text-xs font-medium text-teal-700 shrink-0">
                      <Users className="h-3 w-3" />
                      {gazebo.capacity} чел.
                    </span>
                  </div>
                  <p className="text-sm text-teal-600/70 line-clamp-2 flex-1">{gazebo.description}</p>
                  <div className="flex items-center gap-4 text-sm text-teal-600 pt-2 border-t border-teal-100">
                    {gazebo.pricePerHour ? (
                      <span className="flex items-center gap-1.5 font-medium">
                        <Clock className="h-4 w-4 text-teal-500" />
                        {formatPrice(gazebo.pricePerHour)}/час
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 font-medium">
                        <Sun className="h-4 w-4 text-amber-500" />
                        {gazebo.pricePerDay && formatPrice(gazebo.pricePerDay)}/день
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
