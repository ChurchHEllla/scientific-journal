import JournalItem from '@components/site/JournalArticle/JournalItem'
import ArticleActions from '@components/admin/ArticleActions/ArticleActions'
import { getArticleById } from '@/api/client'

export default async function ArticleView({ params }: { params: Promise<{ articleId: string }> }) {
    const { articleId } = await params

    const article = await getArticleById(articleId)

    return (
        <div>
            <h3>Хватит это пиздец</h3>
            <JournalItem a={article} />
            <ArticleActions />
        </div>
    )
}
