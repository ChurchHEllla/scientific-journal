import { MenuItem } from '@/models/sidebar_menu'

export function mapper(init: InitResponse): MenuItem[] {
    // Для быстрого поиска групп по journal_id
    const groupsByJournal = new Map<string, Group[]>()
    // Для быстрого поиска статей по article_group_id
    const articlesByGroup = new Map<string, ArticleItem[]>()

    // Заполняем мапы
    for (const group of init.groups) {
        if (!groupsByJournal.has(group.journal_id)) {
            groupsByJournal.set(group.journal_id, [])
        }
        groupsByJournal.get(group.journal_id)!.push(group)
    }

    for (const article of init.articles) {
        if (!articlesByGroup.has(article.article_group_id)) {
            articlesByGroup.set(article.article_group_id, [])
        }
        articlesByGroup.get(article.article_group_id)!.push(article)
    }

    // Основная функция преобразования
    const menu: MenuItem[] = []

    for (const journal of init.journals) {
        const journalItem: MenuItem = {
            id: journal.journal_id,
            label: journal.article_title, // ← название журнала
            children: [],
        }

        const groups = groupsByJournal.get(journal.journal_id) || []

        for (const group of groups) {
            const groupItem: MenuItem = {
                id: group.article_group_id,
                label: group.article_group_title, // ← название группы
                children: [],
            }

            const articles = articlesByGroup.get(group.article_group_id) || []

            for (const article of articles) {
                groupItem.children!.push({
                    id: article.article_item_id,
                    label: article.article_item_title, // ← название статьи
                    // href: `/articles/${article.article_item_id}`, // можно добавить при необходимости
                })
            }

            journalItem.children!.push(groupItem)
        }

        menu.push(journalItem)
    }

    return menu
}
