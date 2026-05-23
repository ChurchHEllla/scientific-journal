import { index } from '@data/sidebar'
import { findMenuItemById } from '@/utils/find_menu_item'
import type { Journal } from '@/models/articles'
import JournalArticle from '@components/JournalArticle/JournalArticle'
import { journals } from '@data/articles'

interface Props {
    params: Promise<{
        labelKey: string
    }>
}

export default async function JournalPage({ params }: Props) {
    const { labelKey } = await params

    const article: Journal = journals[labelKey]

    // 1. Ищем данные журнала в вашем массиве по ID
    const journal = findMenuItemById(index, labelKey)
    // 2. Если журнал не найден (например, пользователь ввел несуществующий ID)
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
