import JournalItem from '@components/site/JournalArticle/JournalItem'
import ArticleActions from '@components/admin/ArticleActions/ArticleActions'
import { getArticleById } from '@/api/client'
import { ArticleFullItemResponse } from '@/models/articles'

export default async function ArticleView({ params }: { params: Promise<{ articleId: string }> }) {
    const { articleId } = await params
    const article: ArticleFullItemResponse = await getArticleById(articleId)

    return (
        <div>
            <h3>{article.articleGroupId}</h3>
            <JournalItem a={article} />
            <ArticleActions a={article} />
        </div>
    )
}
