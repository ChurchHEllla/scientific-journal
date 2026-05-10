import DocxViewer from "@components/DocxViewer";
import styles from "./page.module.css"
export default function reviewPage() {
    return (
        <div>
            <div style={{marginBottom:'20px'}}>
                <h3>Временное решение</h3>
                <a className={styles.link} href={"/assets/rate.docx"} download={'rate.docx'}>Скачать</a>
            </div>
            {<DocxViewer fileUrl={"/assets/rate.docx"}/>}
        </div>
    )
}