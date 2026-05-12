'use client'

import {useRouter, useSearchParams} from "next/navigation";
import DocxViewer from "@components/DocxViewer";
import styles from "@/shared/styles/styles.module.css"
export default function ViewPage() {
    const query = useSearchParams();
    const router = useRouter();

    const file = query.get("file");

    if (!file) {
        return (
            <div>Файл не найден</div>
        );
    }
    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <a className={styles.link}
               href={'#'}
               onClick={(e) => {
                e.preventDefault();
                router.back();
            }}></a>
            <div style={{display: "flex", justifyContent: "center"}}>
                <DocxViewer fileUrl={'/assets/'+ file} withWrapper={false}/>
            </div>
        </div>
    );
}