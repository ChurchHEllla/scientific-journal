'use client'

import type { Journal, ArticleGroup, ArticleItem } from '@/models/articles'
import JournalItem from '@components/JournalArticle/JournalItem'
export default function JournalArticle({ a }: { a: Journal }) {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{a.articleTitle}</h1>
            <div>
                <h4 style={{ textAlign: 'justify' }}>Содержание</h4>
                <hr />
                {a.articleGroups.map((group: ArticleGroup) => (
                    <section key={group.articleGroupTitle}>
                        <h3 style={{ textAlign: 'center' }}>{group.articleGroupTitle}</h3>
                        {group.articleItems.map((item: ArticleItem) => (
                            <div key={item.articleItemTitle}>
                                <JournalItem a={item} />
                            </div>
                        ))}
                    </section>
                ))}
            </div>
        </div>
    )
}
