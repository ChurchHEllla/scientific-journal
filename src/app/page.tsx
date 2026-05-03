// app/page.tsx
import { SidebarMenu } from '@/components/SidebarMenu/SidebarMenu';
import { sidebarMenuData } from "@/data/SidebarMenuData";
import styles from './page.module.css';
import {Header} from "@components/Header/Header"; // Импортируем CSS модуль

export default function Page() {
    return (
        <div className={styles.page}>
            {/* Шапка с логотипом */}
            <Header></Header>
            {/* Основная часть: Сайдбар + Контент */}
            <div className={styles.container}>
                <aside className={styles.sidebarWrapper}>
                    <SidebarMenu items={sidebarMenuData} />
                </aside>

                <main className={styles.mainContent}>
                    <div className={styles.intro}>
                        <h1>Научный журнал</h1>
                        <p>
                            Добро пожаловать в электронный архив научных публикаций.
                            Выберите интересующий вас журнал в меню слева, чтобы ознакомиться
                            с последними выпусками и статьями.
                        </p>
                    </div>
                </main>
            </div>
        </div>
    );
}