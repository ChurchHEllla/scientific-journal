'use client'

import type { InitJournalNode, InitGroupNode, InitArticleNode } from '@/models/articles'
import JournalItem from '@components/site/JournalArticle/JournalItem'
export default function JournalArticle({ a }: { a: InitJournalNode }) {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{a.journal.articleTitle}</h1>
            <div>
                <h4 style={{ textAlign: 'justify' }}>Содержание</h4>
                <hr />
                {a.children.map((g: InitGroupNode) => (
                    <section key={g.group.articleGroupTitle}>
                        <h3 style={{ textAlign: 'center' }}>{g.group.articleGroupTitle}</h3>
                        {g.children.map((item: InitArticleNode) => (
                            <div key={item.article.articleItemTitle}>
                                <JournalItem a={item.article} />
                            </div>
                        ))}
                    </section>
                ))}
            </div>
        </div>
    )
}
