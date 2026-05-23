'use client'

import styles from './page.module.css'
import sharedStyles from '@/shared/styles/styles.module.css'
import { useState } from 'react'
import dynamic from "next/dynamic"

const DocxViewer = dynamic(
    () => import('@/components/DocxViewer'),
    {
        loading: () => <p>Загрузка DOCX viewer...</p>,
    }
)

export default function AuthorPage() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <div className={styles.container}>
                <h3>Временное решение</h3>
                <a
                    className={sharedStyles.link}
                    href={'/assets/author.docx'}
                    download={'author.docx'}
                >
                    Скачать пример
                </a>
                <a className={sharedStyles.link} href={'/view?file=author.docx'} target={'_blank'}>
                    Перейти посмотреть в новой вкладке (норм вариант)
                </a>

                <a
                    className={sharedStyles.link}
                    onClick={(e) => {
                        setIsOpen(!isOpen)
                        e.preventDefault()
                    }}
                >
                    {isOpen ? 'Скрыть пример' : 'Показать пример'}
                </a>
            </div>
            {isOpen && <DocxViewer fileUrl={'/assets/author.docx'} />}
        </div>
    )
}
