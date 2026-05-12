import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "@/app/(main)/page.module.css";
import Header from "@components/Header/Header";
import SidebarMenu from "@components/SidebarMenu/SidebarMenu";
import {sidebar_menu_data} from "@data/sidebar/sidebar_menu_data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "НТБ МАДИ",
  description: "Каталог || Наука и техника в дорожной отрасли",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
      <div className={styles.page}>
          {/* Шапка с логотипом */}
          <Header></Header>
          {/* Основная часть: Сайдбар + Контент */}
          <div className={styles.container}>
              <aside className={styles.sidebarWrapper}>
                  <SidebarMenu items={sidebar_menu_data} />
              </aside>

              <main className={styles.mainContent}>
                  <div className={styles.intro}>
                      {children}
                  </div>
              </main>
          </div>
      </div>
      </body>
    </html>
  );
}
