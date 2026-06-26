import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Беседки у Сузгарьевского водоёма",
  description: "Аренда беседок у Сузгарьевского водоёма",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
