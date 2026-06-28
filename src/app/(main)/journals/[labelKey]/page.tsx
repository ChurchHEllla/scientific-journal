import { index } from '@data/sidebar'
import JournalArticle from '@components/site/JournalArticle/JournalArticle'
import { journals } from '@data/articles'
import { useInit } from '@/app/(admin)/admin/provider'
import { getArticleById } from '@/api/client'

interface Props {
    params: Promise<{
        labelKey: string
    }>
}

export default async function JournalPage({ params }: Props) {
    const { labelKey } = await params

    const article = getArticleById(labelKey)

    const journal = labelKey
    if (!journal || !article) {
        return <div>art</div>
    }
    return (
        <div>
            <p>Это страница журнала с ID: {labelKey}</p>
            <JournalArticle a={article} />
        </div>
    )
}
