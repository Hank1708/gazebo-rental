import Link from "next/link";
import { TreePine, Users, Clock, Sun } from "lucide-react";

const gazebos = [
  {
    id: "gazebo-1",
    name: 'Беседка «Лесная»',
    capacity: 6,
    description: "Уютная беседка в тени деревьев с видом на водоём.",
    pricePerHour: 500,
    pricePerDay: 2500,
  },
  {
    id: "gazebo-2",
    name: 'Беседка «Просторная»',
    capacity: 12,
    description: "Большая беседка для шумных компаний.",
    pricePerHour: 1000,
    pricePerDay: 5000,
  },
  {
    id: "gazebo-3",
    name: 'Беседка «Уютная»',
    capacity: 4,
    description: "Маленькая беседка для романтического вечера у воды.",
    pricePerHour: 400,
    pricePerDay: 2000,
  },
  {
    id: "gazebo-4",
    name: 'Беседка «Семейная»',
    capacity: 8,
    description: "Просторная беседка с детской площадкой рядом.",
    pricePerHour: 800,
    pricePerDay: 4000,
  },
  {
    id: "gazebo-5",
    name: 'Беседка «Рыбацкая»',
    capacity: 6,
    description: "Расположена прямо у воды. Свой пирс для рыбалки.",
    pricePerHour: 700,
    pricePerDay: 3500,
  },
  {
    id: "gazebo-6",
    name: 'Беседка «Праздничная»',
    capacity: 20,
    description: "Самая большая беседка для свадеб и корпоративов.",
    pricePerHour: 2000,
    pricePerDay: 10000,
  },
];

function formatPrice(price: number): string {
  return price.toLocaleString("ru-RU") + " ₽";
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-10 space-y-10">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-green-900">
            Беседки у Сузгарьевского водоёма
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Отдохните на природе в уютных беседках с видом на воду.
          </p>
        </section>

        <section>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gazebos.map((gazebo) => (
              <div key={gazebo.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                  <TreePine className="h-16 w-16 text-white/80" />
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="text-lg font-semibold">{gazebo.name}</h2>
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full text-xs font-medium">
                      <Users className="h-3 w-3" />
                      {gazebo.capacity} чел.
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-2">{gazebo.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 pt-2 border-t">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {formatPrice(gazebo.pricePerHour)}/час
                    </span>
                    <span className="flex items-center gap-1">
                      <Sun className="h-4 w-4" />
                      {formatPrice(gazebo.pricePerDay)}/день
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
