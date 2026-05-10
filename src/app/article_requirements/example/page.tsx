import DocxViewer from "@components/DocxViewer";
import styles from "./page.module.css"
export default function examplePage() {
    return (
        <div>
            <div style={{marginBottom:'20px'}}>
                <h3>Временное решение</h3>
                <a className={styles.link} href={"/assets/example.docx"} download={'example.docx'}>Скачать</a>
            </div>
            {<DocxViewer fileUrl={"/assets/example.docx"}/>}
        </div>
    )
}