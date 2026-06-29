import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { galleryPhotos } from "@/lib/data";

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-10 space-y-8">
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-green-700 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        На главную
      </Link>

      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-green-900">Добро пожаловать!</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Общий вид территории Сузгарьевского водоёма</p>
      </section>

      <section className="max-w-4xl mx-auto">
        {galleryPhotos.map((photo) => (
          <div key={photo.id} className="rounded-xl overflow-hidden shadow-md">
            <img src={photo.src} alt={photo.caption} className="w-full h-auto" />
          </div>
        ))}
      </section>
    </div>
  );
}
