export interface Gazebo {
  id: string;
  name: string;
  capacity: number;
  description: string;
  fullDescription: string;
  pricePerHour: number;
  pricePerDay: number;
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

export const gazebos: Gazebo[] = [
  {
    id: "gazebo-1", name: "Беседка «Лесная»", capacity: 6,
    description: "Уютная беседка в тени деревьев с видом на водоём. Идеальна для небольшой компании.",
    fullDescription: "Беседка «Лесная» расположена в тихом уголке среди сосен и берёз. Деревянный настил, резные перила и уютная крыша создают атмосферу загородного отдыха. Внутри — стол на 6 персон, удобные скамейки, розетка для зарядки устройств и LED-подсветка. Рядом находится мангальная зона с решёткой и шампурами.",
    pricePerHour: 500, pricePerDay: 2500,
    image: "/gazebo-rental/images/gazebo-forest.webp",
    images: ["/gazebo-rental/images/gazebo-forest.webp", "/gazebo-rental/images/cover.png", "/gazebo-rental/images/pond-view.png"],
  },
  {
    id: "gazebo-2", name: "Беседка «Просторная»", capacity: 12,
    description: "Большая беседка для шумных компаний. Есть мангал и стол на всю компанию.",
    fullDescription: "Просторная беседка — центральное место для больших компаний. Под крышей свободно размещаются 12 человек за длинным столом. Беседка оборудована стационарным мангалом, рабочей зоной для приготовления и двумя дополнительными столиками.",
    pricePerHour: 1000, pricePerDay: 5000,
    image: "/gazebo-rental/images/gazebo-spacious.webp",
    images: ["/gazebo-rental/images/gazebo-spacious.webp", "/gazebo-rental/images/pond-view.png", "/gazebo-rental/images/cover.png"],
  },
  {
    id: "gazebo-3", name: "Беседка «Уютная»", capacity: 4,
    description: "Маленькая беседка для романтического вечера или отдыха вдвоём у воды.",
    fullDescription: "Самая маленькая и романтичная беседка на территории. Рассчитана на 2–4 человек, расположена прямо у кромки воды — из неё открывается лучший вид на закат. Внутри — небольшой столик и мягкие сиденья.",
    pricePerHour: 400, pricePerDay: 2000,
    image: "/gazebo-rental/images/gazebo-cozy.webp",
    images: ["/gazebo-rental/images/gazebo-cozy.webp", "/gazebo-rental/images/pond-view.png", "/gazebo-rental/images/gazebo-forest.webp"],
  },
  {
    id: "gazebo-4", name: "Беседка «Семейная»", capacity: 8,
    description: "Просторная беседка с детской площадкой рядом. Подходит для семей с детьми.",
    fullDescription: "«Семейная» создана для отдыха с детьми. Рядом с беседкой обустроена небольшая детская площадка: качели, горка и песочница под присмотром родителей.",
    pricePerHour: 800, pricePerDay: 4000,
    image: "/gazebo-rental/images/gazebo-family.webp",
    images: ["/gazebo-rental/images/gazebo-family.webp", "/gazebo-rental/images/cover.png", "/gazebo-rental/images/gazebo-cozy.webp"],
  },
  {
    id: "gazebo-5", name: "Беседка «Рыбацкая»", capacity: 6,
    description: "Расположена прямо у воды. Свой пирс для рыбалки и место для лодки.",
    fullDescription: "«Рыбацкая» — мечта любого любителя рыбалки. Беседка стоит на сваях прямо над водой, с собственным небольшим пирсом. Можно рыбачить, не отходя от стола.",
    pricePerHour: 700, pricePerDay: 3500,
    image: "/gazebo-rental/images/gazebo-fishing.jpg",
    images: ["/gazebo-rental/images/gazebo-fishing.jpg", "/gazebo-rental/images/pond-view.png", "/gazebo-rental/images/gazebo-forest.webp"],
  },
  {
    id: "gazebo-6", name: "Беседка «Праздничная»", capacity: 20,
    description: "Самая большая беседка для свадеб, юбилеев и корпоративов. Есть музыкальная аппаратура.",
    fullDescription: "Самая большая и торжественная беседка на территории. Под её крышей свободно размещаются до 20 гостей. Имеется сцена для музыкантов или ведущего, профессиональная акустическая система.",
    pricePerHour: 2000, pricePerDay: 10000,
    image: "/gazebo-rental/images/pond-view.png",
    images: ["/gazebo-rental/images/pond-view.png", "/gazebo-rental/images/gazebo-spacious.webp", "/gazebo-rental/images/cover.png"],
  },
];
