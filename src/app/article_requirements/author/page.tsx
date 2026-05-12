'use client'

import DocxViewer from "@components/DocxViewer";
import styles from "./page.module.css"
import {useState} from "react";
export default function AuthorPage() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className={styles.container}>
                <h3>Временное решение</h3>
                <a className={styles.link} href={"/assets/author.docx"} download={'author.docx'}>Скачать</a>
                <a
                    className={styles.link}
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