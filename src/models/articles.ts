/*
Модель описания статей
*/
export interface Journal {
    journalId?: string
    labelKey: string
    data: string
    title: string
}
export interface ArticleGroup {
    journalId?: string
    articleGroupId?: string
    articleGroupTitle: string
}

export interface ArticleFullItemResponse {
    articleGroupId?: string
    articleItemId?: string
    articleItemTitle: string
    abstract: string
    keywords?: string
    references?: string[]
    authors?: Author[]
    createdAt?: string
}

export interface Author {
    id?: string
    fullName: string
    bio: string
    email?: string
}

export interface Init {
    journals: Journal[]
    groups: ArticleGroup[]
    articles: ArticleFullItemResponse[]
}

export interface InitArticleNode {
    article: ArticleFullItemResponse
}

export interface InitGroupNode {
    group: ArticleGroup
    children: InitArticleNode[]
}

export interface InitJournalNode {
    journal: Journal
    children: InitGroupNode[]
}

export interface InitResponse {
    children: InitJournalNode[]
}
