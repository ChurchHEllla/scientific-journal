// components/SidebarMenu/SidebarMenu.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Используем роутер Next.js для навигации без перезагрузки
import styles from './SidebarMenu.module.css';
import {MenuItem} from "@/models/SidebarMenu";

interface SidebarMenuProps {
    items: MenuItem[];
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ items }) => {
    return (
        <nav className={styles.sidebar}>
            <ul className={styles.menuList}>
                {items.map((item) => (
                    <SidebarMenuItem key={item.id} item={item} />
                ))}
            </ul>
        </nav>
    );
};

const SidebarMenuItem: React.FC<{ item: MenuItem; level?: number }> = ({
       item,
       level = 0
   }) => {
    const router = useRouter(); // Хук для навигации
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = item.children && item.children.length > 0;

    const handleToggle = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    const handleNavigate = () => {
        if (item.href) {
            router.push(item.href); // Навигация без перезагрузки страницы
        }
    };

    return (
        <li className={styles.menuItem} style={{ paddingLeft: `${level * 20}px` }}>
            {hasChildren ? (
                <>
                    <div className={styles.groupHeader}>
                        {/* Кнопка только для стрелки */}
                        <button
                            type="button"
                            className={`${styles.arrowButton} ${isOpen ? styles.open : ''}`}
                            onClick={handleToggle}
                        >
                            ▶
                        </button>

                        {/* Текст названия журнала. Если есть href - делаем кликабельным */}
                        {item.href ? (
                            <button
                                type="button"
                                className={styles.labelButton}
                                onClick={handleNavigate}
                            >
                                {item.label}
                            </button>
                        ) : (
                            <span className={styles.labelText}>
                                {item.label}
                            </span>
                        )}
                    </div>

                    {isOpen && (
                        <ul className={styles.subMenu}>
                            {item.children?.map((child) => (
                                <SidebarMenuItem key={child.id} item={child} level={level + 1} />
                            ))}
                        </ul>
                    )}
                </>
            ) : (
                // Конечный элемент. Можно использовать обычный <a> или button с router.push
                <button
                    type="button"
                    className={styles.leafButton}
                    onClick={() => item.href && router.push(item.href)}
                >
                    <span className={styles.leafArrow}>↳</span>
                    <span>{item.label}</span>
                </button>
            )}
        </li>
    );
};