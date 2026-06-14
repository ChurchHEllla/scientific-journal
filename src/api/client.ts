import { ArticleFullItemResponse, Author } from '@/models/articles'
const BASE_URL = process.env.BASE_URL
export async function getArticleById(id: string) {
    const url = `${BASE_URL}/api/articles/${id}`

    const res = await fetch(url)

    const text = await res.json()

    return text
}

export async function getInit() {
    const url = `${BASE_URL}/api/init`

    const res = await fetch(url)

    const text = await res.json()

    return text
}

export async function getUnusedAuthors() {
    const url = `${BASE_URL}/api/authors`

    const res = await fetch(url)

    const text = await res.json()

    return text
}

export async function deleteAuthor(id: string) {
    const url = `${BASE_URL}/author/${id}`

    const err = await fetch(url, { method: 'delete' })
}

export async function createArticle(args: ArticleFullItemResponse) {
    const response = await fetch(`${BASE_URL}/api/article`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            articleGroupId: args.articleGroupId,
            articleItemTitle: args.articleItemTitle,
            reference: args.references,
            abstract: args.abstract,
            keywords: args.keywords,
        }),
    })
    const data = await response.json()

    return data
}
export async function createAuthor(args: Author) {
    const response = await fetch(`${BASE_URL}/api/author`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            fullName: args.fullName,
            bio: args.bio,
            email: args.email,
        }),
    })
    const data = await response.json()

    return data
}

export async function addAuthor(article_item_id: string | undefined, author_id: string) {
    const response = await fetch(`${BASE_URL}/api/author/move`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            article_item_id: article_item_id,
            author_id: author_id,
        }),
    })

    const data = await response.json()
    return data
}
