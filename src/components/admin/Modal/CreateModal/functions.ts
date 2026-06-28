import { apiUpdateArticle } from '@/api/client'
import { ArticleFullItemResponse } from '@/models/articles'

export async function articleModalUpdate(articleItemId: string, args: ArticleFullItemResponse) {
    await apiUpdateArticle(articleItemId, args)
}
