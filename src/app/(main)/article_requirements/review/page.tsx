'use client'

import DocxViewer from "@components/DocxViewer"
import styles from "./page.module.css"
import sharedStyles from "@/shared/styles/styles.module.css"
import {useState} from "react"
export default function ReviewPage() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <div className={styles.container}>
                <h3>Временное решение</h3>

                <a className={sharedStyles.link} href={"/assets/rate.docx"} download={'rate.docx'}>Скачать пример</a>
                <a
                    className={sharedStyles.link}
                    href={'/view?file=rate.docx'}
                    target={'_blank'}
                >
                    Перейти посмотреть в новой вкладке
                </a>
                <a
                    className={sharedStyles.link}
                    onClick={(e) => {
                        setIsOpen(!isOpen); e.preventDefault()
                    }
                    }
                >
                    {isOpen ? 'Скрыть пример' : 'Показать пример'}
                </a>

            </div>
            {isOpen && <DocxViewer fileUrl={"/assets/rate.docx"}/>}
        </div>
    )
}