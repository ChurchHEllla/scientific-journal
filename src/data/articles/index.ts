import { mockArticle1 } from '@data/articles/journals/files/article_1'
import type { InitResponse } from '@/models/articles'

const article1: InitResponse = mockArticle1

export const journals = new Map<string, InitResponse>([
    [article1.children[0].journal.labelKey, article1],
])
