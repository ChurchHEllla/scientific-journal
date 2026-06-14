export interface JournalResponse {
    journalId: string
    labelKey: string
    data: string
    title: string
    createdAt?: string
}

export interface ArticleGroupResponse {
    articleGroupId: string
    journalId: string
    articleGroupTitle: string
    createdAt?: string
}

export interface ArticleItemResponse {
    articleItemId: string
    articleGroupId: string
    articleItemTitle: string
    references: string[]
    abstract: string
    keywords: string
    createdAt?: string
}

export interface AuthorResponse {
    authorId: string
    fullName: string
    bio: string
    email: string | null
    createdAt?: string
}
