import Link from "next/link";
import { MapPin, Phone, MessageCircle, ArrowLeft } from "lucide-react";
import { contact } from "@/lib/data";

export default function ContactsPage() {
  return (
    <div className="container mx-auto px-4 py-10 space-y-8">
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-green-700 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        На главную
      </Link>

      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-green-900">Контакты</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Как с нами связаться и где мы находимся</p>
      </section>

      <section>
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-md p-6 space-y-2">
              <h2 className="flex items-center gap-2 font-semibold text-lg">
                <MapPin className="h-5 w-5 text-green-600" />
                Адрес
              </h2>
              <p className="text-gray-600">{contact.address}</p>
              <p className="text-sm text-gray-400">{contact.addressFull}</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 space-y-2">
              <h2 className="flex items-center gap-2 font-semibold text-lg">
                <Phone className="h-5 w-5 text-green-600" />
                Телефон
              </h2>
              <a href={`tel:${contact.phone}`} className="text-lg font-semibold text-green-700 hover:text-green-800">
                {contact.phoneDisplay}
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 space-y-2">
              <h2 className="flex items-center gap-2 font-semibold text-lg">
                <MessageCircle className="h-5 w-5 text-green-600" />
                Мессенджер
              </h2>
              <a href={contact.messenger} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-green-700 hover:text-green-800">
                {contact.messengerDisplay}
              </a>
              <p className="text-sm text-gray-500">Напишите нам в Вконтакте — ответим на все вопросы</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="flex items-center gap-2 font-semibold text-lg mb-4">
              <MapPin className="h-5 w-5 text-green-600" />
              Схема проезда
            </h2>
            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border">
              <iframe
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${contact.coordinates.lon - 0.02}%2C${contact.coordinates.lat - 0.015}%2C${contact.coordinates.lon + 0.02}%2C${contact.coordinates.lat + 0.015}&layer=mapnik&marker=${contact.coordinates.lat}%2C${contact.coordinates.lon}`}
                width="100%" height="100%" allowFullScreen loading="lazy"
                className="w-full h-full"
                title="Карта Сузгарьевского водоёма"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
