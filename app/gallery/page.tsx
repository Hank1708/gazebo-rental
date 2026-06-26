import Link from "next/link";
import { ArrowLeft, Camera, ImageIcon } from "lucide-react";

const galleryItems = [
  { id: "1", gradient: "from-emerald-400 via-teal-300 to-sky-400", caption: "Вид на водоём с пирса" },
  { id: "2", gradient: "from-amber-300 via-orange-400 to-rose-400", caption: "Закат над Сузгарьевским водоёмом" },
  { id: "3", gradient: "from-green-500 via-emerald-500 to-teal-500", caption: "Беседка «Лесная»" },
  { id: "4", gradient: "from-sky-400 via-cyan-400 to-blue-500", caption: "Вид с беседки «Рыбацкая»" },
  { id: "5", gradient: "from-rose-300 via-pink-400 to-fuchsia-400", caption: "Цветы на территории" },
  { id: "6", gradient: "from-yellow-300 via-amber-400 to-orange-500", caption: "Осенний пейзаж" },
  { id: "7", gradient: "from-indigo-400 via-purple-400 to-pink-400", caption: "Вечерние гирлянды" },
  { id: "8", gradient: "from-teal-400 via-emerald-400 to-green-500", caption: "Дорожка к беседкам" },
];

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-10 space-y-8">
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-green-700 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        На главную
      </Link>

      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-green-900">Фотогалерея</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Фотографии беседок, водоёма и территории отдыха</p>
      </section>

      <section>
        <div className="flex items-center gap-2 mb-6 text-gray-500">
          <Camera className="h-5 w-5" />
          <span className="text-sm">{galleryItems.length} фотографий</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative aspect-[4/3] overflow-hidden rounded-xl">
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-300 group-hover:scale-105`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageIcon className="h-10 w-10 text-white/40" />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 pt-8">
                <p className="text-sm font-medium text-white">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
