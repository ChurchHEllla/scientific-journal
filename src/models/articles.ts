/*
Модель описания статей
*/
export interface Journal {
    journalId?: string
    labelKey: string
    data: string
    articleTitle: string
    articleGroups: ArticleGroup[]
}
export interface ArticleGroup {
    articleGroupId?: string
    articleGroupTitle: string
    articleItems: ArticleItem[]
}

export interface ArticleItem {
    articleItemId?: string
    articleItemTitle: string
    authors: Author[]
    abstract: string
    keywords?: string[]
    references: string[]
}

export interface Author {
    id?: string
    fullName: string
    bio: string
    email?: string
}
