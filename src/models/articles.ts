/*
Модель описания статей
*/
export interface Journal {
    journalId?: string
    labelKey: string
    data: string
    articleTitle: string
}
export interface ArticleGroup {
    journalId?: string
    articleGroupId?: string
    articleGroupTitle: string
}

export interface ArticleItem {
    articleGroupId?: string
    articleItemId?: string
    articleItemTitle: string
    abstract: string
    keywords?: string[]
    references?: string[]
    authors?: Author[]
}

export interface Author {
    id?: string
    fullName: string
    bio: string
    email?: string
}

export interface InitArticleNode {
    article: ArticleItem;
}

export interface InitGroupNode {
    group: ArticleGroup;
    children: InitArticleNode[];
}

export interface InitJournalNode {
    journal: Journal;
    children: InitGroupNode[];
}

// --- Корневой ответ ---

export interface InitResponse {
    children: InitJournalNode[];
}
