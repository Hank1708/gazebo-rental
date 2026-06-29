import { TreePine, Users, Clock, Sun } from "lucide-react";
import { gazebos } from "@/lib/data";

function formatPrice(price: number): string {
  return price.toLocaleString("ru-RU") + " ₽";
}

const gradients = [
  "from-emerald-400 to-emerald-600",
  "from-sky-400 to-sky-600",
  "from-amber-400 to-amber-600",
  "from-teal-400 to-teal-600",
  "from-blue-400 to-blue-600",
  "from-rose-400 to-rose-600",
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-10 space-y-10">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-green-900">
            Беседки у Сузгарьевского водоёма
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Отдохните на природе в уютных беседках с видом на воду. Выберите подходящий вариант для вашей компании.
          </p>
        </section>

        <section>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gazebos.map((gazebo, index) => (
              <div key={gazebo.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  {gazebo.image === "gradient" ? (
                    <div className={"w-full h-full bg-gradient-to-br " + gradients[index] + " flex items-center justify-center"}>
                      <TreePine className="h-16 w-16 text-white/80" />
                    </div>
                  ) : (
                    <img src={gazebo.image} alt={gazebo.name} className="h-full w-full object-cover" />
                  )}
                </div>
                <div className="p-5 space-y-3 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="text-lg font-semibold">{gazebo.name}</h2>
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full text-xs font-medium shrink-0">
                      <Users className="h-3 w-3" />
                      {gazebo.capacity} чел.
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-2 flex-1">{gazebo.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 pt-2 border-t">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {formatPrice(gazebo.pricePerHour)}/час
                    </span>
                    <span className="flex items-center gap-1">
                      <Sun className="h-4 w-4" />
                      {gazebo.pricePerDay && formatPrice(gazebo.pricePerDay)}/день
                    </span>
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
