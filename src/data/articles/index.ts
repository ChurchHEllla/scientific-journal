import { mockArticle1 } from '@data/articles/journals/files/article_1'
import { mockArticle2 } from '@data/articles/journals/files/article_2'
import type { Journal } from '@/models/articles'

interface JournalList {
    [key: string]: Journal
}
const article1: Journal = mockArticle1
const article2: Journal = mockArticle2

export const journals: JournalList = {
    [article1.labelKey]: article1,
    [article2.labelKey]: article2,
}
