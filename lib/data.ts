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
    image: "/images/Gazebo1.jpg",
    images: ["/images/Gazebo1.jpg", "/images/Gazebo2.jpg"],
  },
  {
    id: "gazebo-2", name: "Беседка «Средняя»", capacity: 12,
    description: "Уютная беседка для компании друзей или семьи.",
    fullDescription: "Беседка «Средняя» — отличный выбор для компании до 12 человек. Внутри — стол, скамейки, мангал рядом. Электричество проведено, есть освещение и розетки.",
    pricePerDay: 3000,
    image: "/images/Gazebo2.jpg",
    images: ["/images/Gazebo2.jpg", "/images/Gazebo1.jpg"],
  },
  {
    id: "gazebo-3", name: "Домик Рыбака", capacity: 4,
    description: "Уютный домик прямо у воды для рыбаков и романтиков.",
    fullDescription: "Домик Рыбака расположен прямо у кромки воды. Внутри — небольшой столик, мягкие сиденья, вечером включается гирлянда. Рядом есть место для кострища. Прекрасно подходит для рыбалки, свидания или тихого вечера.",
    pricePerDay: 2000,
    image: "/images/gazebo-cozy.webp",
    images: ["/images/gazebo-cozy.webp", "/images/pond-view.png", "/images/gazebo-forest.webp"],
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
    id: "gazebo-5", name: "Беседка «Рыбацкая»", capacity: 6,
    description: "Расположена прямо у воды. Свой пирс для рыбалки и место для лодки.",
    fullDescription: "«Рыбацкая» — мечта любого любителя рыбалки. Беседка стоит на сваях прямо над водой, с собственным небольшим пирсом. Можно рыбачить, не отходя от стола.",
    pricePerDay: 3500,
    image: "/images/gazebo-fishing.jpg",
    images: ["/images/gazebo-fishing.jpg", "/images/pond-view.png", "/images/gazebo-forest.webp"],
  },
  {
    id: "gazebo-6", name: "Беседка «Праздничная»", capacity: 20,
    description: "Самая большая беседка для свадеб, юбилеев и корпоративов.",
    fullDescription: "Самая большая и торжественная беседка на территории. Под её крышей свободно размещаются до 20 гостей. Имеется сцена для музыкантов или ведущего, профессиональная акустическая система.",
    pricePerDay: 10000,
    image: "/images/pond-view.png",
    images: ["/images/pond-view.png", "/images/gazebo-spacious.webp", "/images/cover.png"],
  },
];
