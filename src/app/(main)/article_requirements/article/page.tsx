'use client'

import dynamic from 'next/dynamic'

const PdfViewer = dynamic(() => import('@/components/PdfViewer'), {
    loading: () => <p>Загрузка PDF...</p>,
})

export default function AboutPage() {
    return (
        <div>
            <PdfViewer fileUrl='/assets/article.pdf' />
        </div>
    )
}
