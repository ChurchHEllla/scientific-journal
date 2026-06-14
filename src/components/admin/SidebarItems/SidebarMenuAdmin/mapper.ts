import { MenuItem } from '@/models/sidebar_menu'
import { Init, ArticleGroup, ArticleFullItemResponse } from '@/models/articles'
export function TreeBuilder(init: Init | null | undefined): MenuItem[] {
    // Для быстрого поиска групп по journalId
    const groupsByJournal = new Map<string, ArticleGroup[]>()
    // Для быстрого поиска статей по articleGroupId!
    const articlesByGroup = new Map<string, ArticleFullItemResponse[]>()

    // Заполняем мапы
    for (const group of init!.groups) {
        if (!groupsByJournal.has(group.journalId!)) {
            groupsByJournal.set(group.journalId!, [])
        }
        groupsByJournal.get(group.journalId!)!.push(group)
    }

    for (const article of init!.articles) {
        if (!articlesByGroup.has(article.articleGroupId!)) {
            articlesByGroup.set(article.articleGroupId!, [])
        }
        articlesByGroup.get(article.articleGroupId!)!.push(article)
    }

    // Основная функция преобразования
    const menu: MenuItem[] = []

    for (const journal of init!.journals) {
        const journalItem: MenuItem = {
            id: journal.journalId!,
            label: journal.title, // ← название журнала
            children: [],
        }

        const groups = groupsByJournal.get(journal.journalId!) || []

        for (const group of groups) {
            const groupItem: MenuItem = {
                id: group.articleGroupId!,
                label: group.articleGroupTitle, // ← название группы
                children: [],
            }

            const articles = articlesByGroup.get(group.articleGroupId!) || []

            for (const article of articles) {
                groupItem.children!.push({
                    id: article.articleItemId!,
                    label: article.articleItemTitle, // ← название статьи
                    href: `/admin/${article.articleItemId}`, // можно добавить при необходимости
                })
            }

            journalItem.children!.push(groupItem)
        }

        menu.push(journalItem)
    }

    return menu
}
