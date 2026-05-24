import { ArticleItem, InitResponse } from '@/app/(admin)/admin/page'


export default function TreeView({ data, onSelect }: { data: InitResponse; onSelect: (a: ArticleItem) => void }) {
    return (
        <div>
            <button style={{marginTop: 20}}>Добавить журнал</button>
            {data.journals.map((journal) => {
                const groups = data.groups.filter((g) => g.journal_id === journal.journal_id)

                return (
                    <div key={journal.journal_id} style={{ marginBottom: 20 }}>
                        <h3 style={{ marginBottom: 0 , marginTop: 0}}>{journal.article_title}</h3>
                        <div style={{ paddingLeft: 15 }}>
                            <button style={{marginTop: 20}}>Добавить группу</button>
                            {groups.map((group) => {
                                const articles = data.articles.filter(
                                    (a) => a.article_group_id === group.article_group_id
                                )

                                return (
                                    <div key={group.article_group_id} style={{ marginBottom: 10 }}>
                                        <b>{group.article_group_title}</b>

                                        <div style={{ paddingLeft: 15 }}>
                                            {articles.map((article) => (
                                                <div
                                                    key={article.article_item_id}
                                                    style={styles.link}
                                                    onClick={() => onSelect(article)}
                                                >
                                                    {article.article_item_title}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export function ArticleView({ article }: { article: ArticleItem }) {
    return (
        <div>
            <h1>{article.article_item_title}</h1>

            <p>
                <b>Abstract:</b>
            </p>

            <p>{article.abstract}</p>

            <p>
                <b>Keywords:</b>
            </p>

            <p>{article.keywords}</p>

            <p>
                <b>Authors:</b>
            </p>

            <ul>
                {article.authors.map((a) => (
                    <li key={a.author_id}>{a.full_name}</li>
                ))}
            </ul>

            <p>
                <b>Content:</b>
            </p>

            <pre style={styles.pre}>{article.content}</pre>
        </div>
    )
}

const styles: any = {
    link: {
        cursor: 'pointer',
        marginTop: 5,
    },
}