import { ArticleItem, InitResponse } from '@/app/(admin)/admin/page'

export default function TreeView({
    data,
    onSelect,
}: {
    data: InitResponse
    onSelect: (a: ArticleItem) => void
}) {
    return (
        <div>
            {data.journals.map((journal) => {
                const groups = data.groups.filter((g) => g.journal_id === journal.journal_id)

                return (
                    <div key={journal.journal_id} style={{ marginBottom: 20 }}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                gap: '10px',
                                alignItems: 'center',
                            }}
                        >
                            <h3 style={{ marginBottom: 0, marginTop: 0 }}>
                                {journal.article_title}
                            </h3>
                            <button
                                style={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                }}
                            >
                                {' '}
                                +{' '}
                            </button>
                        </div>
                        <div style={{ paddingLeft: 15 }}>
                            {groups.map((group) => {
                                const articles = data.articles.filter(
                                    (a) => a.article_group_id === group.article_group_id
                                )

                                return (
                                    <div key={group.article_group_id} style={{ marginBottom: 10 }}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                gap: '10px',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <b>{group.article_group_title}</b>
                                            <button
                                                style={{
                                                    backgroundColor: 'transparent',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                {' '}
                                                +{' '}
                                            </button>
                                        </div>

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
const styles: any = {
    link: {
        cursor: 'pointer',
        marginTop: 5,
    },
}
