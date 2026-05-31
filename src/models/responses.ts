export interface Journal {
    journal_id: string // uuid.UUID -> string
    label_key: string
    data: string
    article_title: string
    created_at: string // time.Time -> ISO string
}

export interface ArticleGroup {
    article_group_id: string // uuid.UUID -> string
    journal_id: string // uuid.UUID -> string
    article_group_title: string
    created_at: string // time.Time -> ISO string
}

export interface ArticleItem {
    article_item_id: string // uuid.UUID -> string
    article_group_id: string // uuid.UUID -> string
    article_item_title: string
    abstract: string
    keywords: string
    created_at: string // time.Time -> ISO string
}

export interface Author {
    author_id: string // uuid.UUID -> string
    full_name: string
    bio: string
    email: string | null // *string -> string | null
    created_at: string // time.Time -> ISO string
}
