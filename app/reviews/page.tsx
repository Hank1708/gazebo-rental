import Link from "next/link";
import { ArrowLeft, Star, MessageSquareText, ExternalLink } from "lucide-react";
import { reviews } from "@/lib/data";

function formatDate(isoDate: string): string {
  const d = new Date(isoDate + "T00:00:00Z");
  const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
  return `${d.getUTCDate()} ${months[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

export default function ReviewsPage() {
  return (
    <div className="container mx-auto px-4 py-10 space-y-8">
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-green-700 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        На главную
      </Link>

      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-green-900">Отзывы гостей</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Что говорят наши посетители об отдыхе у Сузгарьевского водоёма</p>
      </section>

      <section className="text-center">
        <a
          href="https://yandex.ru/profile/188654077164"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-xl transition-colors shadow-md"
        >
          <Star className="h-5 w-5 fill-current" />
          Оставить отзыв на Яндекс.Картах
          <ExternalLink className="h-4 w-4" />
        </a>
        <p className="text-sm text-gray-500 mt-2">Ваш отзыв поможет другим гостям выбрать место для отдыха</p>
      </section>

      <section>
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-6 space-y-3 border border-white/50">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-lg text-teal-900">{review.name}</h3>
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
                <p className="text-gray-600">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
