// components/SidebarMenu/SidebarMenu.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation' // Используем роутер Next.js для навигации без перезагрузки
import styles from './SidebarMenu.module.css'
import type { MenuItem } from '@/models/sidebar_menu'

export default function SidebarMenu({
    items,
    isAdm = false,
}: {
    items: MenuItem[]
    isAdm?: boolean
}) {
    return (
        <div>
            <nav className={styles.sidebar}>
                <ul className={styles.menuList}>
                    {items.map((item) => (
                        <SidebarMenuItem isAdm={isAdm} key={item.id} item={item} />
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export function SidebarMenuItem({
    isAdm,
    item,
    level = 0,
}: {
    isAdm?: boolean
    item: MenuItem
    level?: number
}) {
    const router = useRouter() // Хук для навигации
    const [isOpen, setIsOpen] = useState(false)
    const hasChildren = item.children && item.children.length > 0

    const handleToggle = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setIsOpen(!isOpen)
    }

    return (
        <li className={styles.menuItem} style={{ paddingLeft: `${level * 20}px` }}>
            {hasChildren ? (
                <>
                    <div className={styles.groupHeader}>
                        {/* Кнопка только для стрелки */}
                        <button
                            type='button'
                            className={`${styles.arrowButton} ${isOpen ? styles.open : ''}`}
                            onClick={handleToggle}
                        >
                            ▶
                        </button>

                        {/* Текст названия журнала. Если есть href - делаем кликабельным */}
                        <div>
                            {item.children ? (
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <button
                                        type='button'
                                        className={styles.labelButton}
                                        onClick={handleToggle}
                                    >
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            {item.label}
                                            {isAdm && (
                                                <small
                                                    style={{
                                                        whiteSpace: 'nowrap',
                                                        color: 'gray',
                                                        fontWeight: 'normal',
                                                    }}
                                                >
                                                    {item.id}
                                                </small>
                                            )}
                                        </div>
                                    </button>
                                </div>
                            ) : (
                                <span className={styles.labelText}>{item.label}</span>
                            )}
                        </div>
                    </div>

                    {isOpen && (
                        <ul className={styles.subMenu}>
                            {item.children?.map((child) => (
                                <SidebarMenuItem
                                    isAdm={isAdm}
                                    key={child.id}
                                    item={child}
                                    level={level + 1}
                                />
                            ))}
                        </ul>
                    )}
                </>
            ) : (
                <button
                    type='button'
                    className={styles.leafButton}
                    onClick={() => item.href && router.push(item.href)}
                >
                    <span className={styles.leafArrow}>↳</span>
                    <span>{item.label}</span>
                </button>
            )}
        </li>
    )
}
