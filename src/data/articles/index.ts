import { mockArticle1 } from '@data/articles/journals/files/article_1'
import type { ArticleFullItemResponse, Init, InitResponse } from '@/models/articles'
import { mockInitData } from '@data/articles/journals/mock/admin_mock'

const article1: InitResponse = mockArticle1
const article2: Init = mockInitData

export const journals = new Map<string, InitResponse>([
    [article1.children[0].journal.labelKey, article1],
])

export const items = new Map<string, ArticleFullItemResponse>([
    [article2.articles[0].articleItemId!, article2.articles[0]],
])
