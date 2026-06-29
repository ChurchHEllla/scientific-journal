import { index } from '@data/sidebar'
import JournalArticle from '@components/site/JournalArticle/JournalArticle'
import { getInit } from '@/api/client'
import { findMenuItemById } from '@/utils/find_menu_item'
import { journals } from '@data/articles'

interface Props {
    params: Promise<{
        labelKey: string
    }>
}

export default async function JournalPage({ params }: Props) {
    const { labelKey } = await params
    const init = await getInit()
    const key = '2-2023'
    const article = journals.get(labelKey)

    // 1. Ищем данные журнала в вашем массиве по ID
    const journal = findMenuItemById(index(init), key)
    if (!journal || !article) {
        return <div>только мок 2-2023 доступен</div>
    }
    return (
        <div>
            <p>Это страница журнала с ID: {labelKey}</p>
            <JournalArticle a={article.children[0]} />
        </div>
    )
}
