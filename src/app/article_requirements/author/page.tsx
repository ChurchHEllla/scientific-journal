'use client'

import DocxViewer from "@components/DocxViewer";
import styles from "./page.module.css"
import sharedStyles from "@/styles/shared/styles.module.css"
import {useState} from "react";
export default function AuthorPage() {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div>
            <div className={styles.container}>
                <h3>Временное решение</h3>
                <a className={sharedStyles.link} href={"/assets/author.docx"} download={'author.docx'}>Скачать пример</a>
                <a
                    className={sharedStyles.link}
                    onClick={(e) => {
                        setIsOpen(!isOpen); e.preventDefault();
                    }
                    }
                >
                    {isOpen ? 'Скрыть пример' : 'Показать пример'}
                </a>
            </div>
            {isOpen && <DocxViewer fileUrl={"/assets/example.docx"}/>}
        </div>
    )
}