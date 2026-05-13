import PdfViewer from "@components/PdfViewer"

export default async function AboutPage() {
    return (
        <div>
            <PdfViewer fileUrl='/assets/about.pdf'/>
        </div>
    )
}