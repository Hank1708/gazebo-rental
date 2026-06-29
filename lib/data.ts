export interface Gazebo {
  id: string;
  name: string;
  capacity: number;
  description: string;
  fullDescription: string;
  pricePerHour?: number;
  pricePerDay?: number;
  image: string;
  images: string[];
}

export interface ContactInfo {
  address: string;
  addressFull: string;
  phone: string;
  phoneDisplay: string;
  messenger: string;
  messengerDisplay: string;
  coordinates: { lat: number; lon: number };
}

export interface Review {
  id: string;
  name: string;
  date: string;
  rating: number;
  text: string;
}

export const reviews: Review[] = [
  { id: "review-1", name: "Андрей Я.", date: "2026-06-23", rating: 5, text: "Хорошее место, спокойное, можно пожарить шашлык, искупаться, даже возможно получится порыбачить)" },
  { id: "review-2", name: "Виталий О.", date: "2026-06-23", rating: 5, text: "Отличное место на свежей природе, беседки убраны, из них открывается хороший вид на Сузгарский водоем, в шаговой доступности пляж и купальная зона." },
  { id: "review-3", name: "Влад С.", date: "2026-06-23", rating: 5, text: "Уютное хорошее место почти на берегу водоема. Все понравилось. Чисто и спокойно. Рекомендую" },
  { id: "review-4", name: "Валерия К.", date: "2026-06-23", rating: 5, text: "Отличное место! Отдыхали с семьей несколько раз и с друзьями, все очень понравилось!!!" },
  { id: "review-5", name: "Екатерина Ф.", date: "2026-06-23", rating: 5, text: "Очень уютно и чисто" },
];

export const contact: ContactInfo = {
  address: "Республика Мордовия, Рузаевский район, Сузгарьевский водоём",
  addressFull: "Сузгарьевский водоём, Рузаевский район, Республика Мордовия, Россия",
  phone: "+79276406871",
  phoneDisplay: "8-927-640-68-71",
  messenger: "https://vk.ru/arendabesedok1",
  messengerDisplay: "Вконтакте",
  coordinates: { lat: 54.091932, lon: 44.911509 },
};

export interface GalleryPhoto {
  id: string;
  src: string;
  caption: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "gallery-1",
    src: "/images/allview.jpg",
    caption: "Добро пожаловать!",
  },
];

export const gazebos: Gazebo[] = [
  {
    id: "gazebo-1", name: "Беседка «Большая»", capacity: 40,
    description: "Большая беседка для шумных компаний. Идеальна для праздников и корпоративов.",
    fullDescription: "Беседка «Большая» расположена среди берёз. Внутри — стол на 40 персон, скамейки, розетка для зарядки устройств и LED-подсветка. Рядом находится мангальная зона с решёткой и шампурами.",
    pricePerDay: 4000,
    image: "/images/big1.jpg",
    images: ["/images/big1.jpg", "/images/big2.jpg", "/images/big3.jpg"],
  },
  {
    id: "gazebo-2", name: "Беседка «Средняя»", capacity: 20,
    description: "Уютная беседка для компании друзей или семьи.",
    fullDescription: "Беседка «Средняя» — отличный выбор для компании до 12 человек. Внутри — стол, скамейки, мангал рядом. Электричество проведено, есть освещение и розетки.",
    pricePerDay: 3000,
    image: "/images/medium.jpg",
    images: ["/images/medium.jpg"],
  },
  {
    id: "gazebo-3", name: "Домик Рыбака", capacity: 4,
    description: "Уютный домик с видом на Сузгарьевский водоём.",
    fullDescription: "Домик Рыбака расположен прямо у кромки воды. Внутри — небольшой столик, мягкие сиденья, вечером включается гирлянда. Рядом есть место для кострища. Прекрасно подходит для рыбалки, свидания или тихого вечера.",
    pricePerDay: 4000,
    image: "/images/fish1.jpg",
    images: ["/images/fish1.jpg", "/images/fish2.jpg", "/images/fish3.jpg", "/images/fish4.jpg"],
  },
  {
    id: "gazebo-4", name: "Волейбольная площадка", capacity: 12,
    description: "Играйте в волейбол на свежем воздухе с видом на водоём.",
    fullDescription: "Просторная волейбольная площадка с профессиональной сеткой и разметкой. Отличное место для активного отдыха с друзьями или семьёй.",
    pricePerHour: 200,
    image: "/images/volleyball.jpg",
    images: ["/images/volleyball.jpg"],
  },
  {
    id: "gazebo-5", name: "Беседка «Маленькая 1»", capacity: 8,
    description: "Уютная беседка для небольшой компании.",
    fullDescription: "Беседка «Маленькая 1» — отличный вариант для компании до 8 человек. Внутри — стол, скамейки, мангал рядом. Уютная атмосфера для отдыха с друзьями или семьёй.",
    pricePerDay: 2000,
    image: "/images/small1.jpg",
    images: ["/images/small1.jpg"],
  },
  {
    id: "gazebo-6", name: "Беседка «Маленькая 2»", capacity: 8,
    description: "Уютная беседка для небольшой компании.",
    fullDescription: "Беседка «Маленькая 2» — отличный вариант для компании до 8 человек. Внутри — стол, скамейки, мангал рядом. Уютная атмосфера для отдыха с друзьями или семьёй.",
    pricePerDay: 1000,
    image: "/images/small2.jpg",
    images: ["/images/small2.jpg"],
  },
];
