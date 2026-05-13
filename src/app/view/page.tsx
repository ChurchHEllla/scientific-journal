import DocxViewer from "@components/DocxViewer";
import type {SearchParams} from "next/dist/server/request/search-params";

export default async function ViewPage({searchParams}: {searchParams: SearchParams}) {

    const file = (await searchParams).file
    if (!file) {
        return (
            <div>Файл не найден</div>
        );
    }
    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <div style={{display: "flex", justifyContent: "center"}}>
                <DocxViewer fileUrl={'/assets/'+ file} withWrapper={false}/>
            </div>
        </div>
    );
}