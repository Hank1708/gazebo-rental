import Link from "next/link";
import { TreePine, Users, Clock, Sun, MapPin, Phone, MessageCircle, Star, MessageSquareText } from "lucide-react";
import { gazebos, contact, reviews } from "@/lib/data";

function formatPrice(price: number): string {
  return price.toLocaleString("ru-RU") + " ₽";
}

function formatDate(isoDate: string): string {
  const d = new Date(isoDate + "T00:00:00Z");
  const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
  return `${d.getUTCDate()} ${months[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
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
      <div className="container mx-auto px-4 py-10 space-y-16">
        
        {/* Шапка */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-green-900">
            Беседки у Сузгарьевского водоёма
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Отдохните на природе в уютных беседках с видом на воду. Выберите подходящий вариант для вашей компании.
          </p>
        </section>

        {/* Каталог беседок */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-6">Наши беседки</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gazebos.map((gazebo, index) => (
              <div key={gazebo.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className={`h-48 bg-gradient-to-br ${gradients[index]} flex items-center justify-center`}>
                  <TreePine className="h-16 w-16 text-white/80" />
                </div>
                <div className="p-5 space-y-3 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold">{gazebo.name}</h3>
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
                      {formatPrice(gazebo.pricePerDay)}/день
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Контакты */}
        <section className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6">Контакты</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-start gap-3">
              <MapPin className="h-6 w-6 text-green-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Адрес</h3>
                <p className="text-sm text-gray-600">{contact.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-6 w-6 text-green-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Телефон</h3>
                <a href={`tel:${contact.phone}`} className="text-sm text-gray-600 hover:text-green-700">{contact.phoneDisplay}</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MessageCircle className="h-6 w-6 text-green-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Мессенджер</h3>
                <a href={contact.messenger} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-green-700">{contact.messengerDisplay}</a>
              </div>
            </div>
          </div>
        </section>

        {/* Отзывы */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-6">Отзывы гостей</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-xl shadow-md p-6 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-sm text-gray-500">{formatDate(review.date)}</p>
                  </div>
                  <span className="flex gap-0.5">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < review.rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`} />
                    ))}
                  </span>
                </div>
                <div className="flex gap-3">
                  <MessageSquareText className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600">{review.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
