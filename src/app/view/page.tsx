'use client'

import dynamic from 'next/dynamic'
import { use } from 'react'

const DocxViewer = dynamic(() => import('@/components/DocxViewer'), {
    ssr: false,
    loading: () => <p>Загрузка DOCX viewer...</p>,
})

export default function ViewPage({ searchParams }: { searchParams: Promise<{ file?: string }> }) {
    const { file } = use(searchParams)
    if (!file) {
        return <div>Файл не найден</div>
    }
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <DocxViewer fileUrl={'/assets/' + file} withWrapper={false} />
            </div>
        </div>
    )
}
