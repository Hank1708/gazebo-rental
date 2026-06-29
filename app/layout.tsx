import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { TreePine, Home, Phone, Star, Images } from "lucide-react";

export const metadata: Metadata = {
  title: "Аренда беседок у Сузгарьевского водоёма | Сузгарье",
  description: "Уютные беседки для отдыха у Сузгарьевского водоёма в Мордовии. Большая, Средняя, Домик Рыбака, Маленькие беседки. Волейбольная площадка. Живописное место для отдыха с семьёй и друзьями.",
  keywords: ["аренда беседок", "Сузгарьевский водоём", "Сузгарье", "Мордовия", "Рузаевка", "отдых на природе", "беседки Мордовия", "шашлыки"],
  openGraph: {
    title: "Аренда беседок у Сузгарьевского водоёма",
    description: "Уютные беседки для отдыха у Сузгарьевского водоёма в Мордовии.",
    type: "website",
    locale: "ru_RU",
    siteName: "Беседки у Сузгарьевского водоёма",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Беседки у Сузгарьевского водоёма",
  "description": "Аренда беседок и волейбольной площадки у Сузгарьевского водоёма в Мордовии",
  "url": "https://сузгарье.рф",
  "telephone": "8-927-640-68-71",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Рузаевский район",
    "addressRegion": "Мордовия",
    "addressCountry": "Россия",
    "streetAddress": "Сузгарьевский водоём"
  },
  "priceRange": "200 - 4000 ₽",
  "openingHours": "Mo-Su 08:00-22:00",
  "image": "https://сузгарье.рф/images/allview.jpg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-50 w-full border-b border-teal-100 bg-white/70 backdrop-blur-md">
          <div className="container mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-teal-800">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-sm">
                <TreePine className="h-4 w-4" />
              </div>
              <span className="hidden sm:inline">Сузгарье</span>
            </Link>
            <nav className="flex items-center gap-1">
              <Link href="/" className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-teal-600 hover:text-teal-800 hover:bg-teal-50 transition-colors">
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Главная</span>
              </Link>
              <Link href="/contacts" className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-teal-600 hover:text-teal-800 hover:bg-teal-50 transition-colors">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">Контакты</span>
              </Link>
              <Link href="/reviews" className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-teal-600 hover:text-teal-800 hover:bg-teal-50 transition-colors">
                <Star className="h-4 w-4" />
                <span className="hidden sm:inline">Отзывы</span>
              </Link>
              <Link href="/gallery" className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-teal-600 hover:text-teal-800 hover:bg-teal-50 transition-colors">
                <Images className="h-4 w-4" />
                <span className="hidden sm:inline">Галерея</span>
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-teal-100 bg-white/40">
          <div className="container mx-auto px-4 py-6 text-center text-sm text-teal-500">
            <p>© {new Date().getFullYear()} Беседки у Сузгарьевского водоёма | Мордовия, Рузаевский район</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
