'use client'

import { useMemo, useState } from 'react'
import CreateModal from '@components/admin/Modal/CreateModal'
import type { ArticleItem} from '@/models/responses'
import mockData from '@data/articles/journals/mock/admin_mock'
import SidebarMenu from '@components/site/SidebarMenu/SidebarMenu'
import { mapper } from '@/models/mapper/mapper'


export default function AdminPage() {
    const [data] = useState(mockData)

    const [search, setSearch] = useState('')

    const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null)

    const [showCreate, setShowCreate] = useState(false)

    const filteredArticles = useMemo(() => {
        const q = search.toLowerCase()

        return data.articles.filter(
            (a) =>
                a.article_item_title.toLowerCase().includes(q) ||
                a.article_item_id.toLowerCase().includes(q)
        )
    }, [search, data])

    return (
        <div style={styles.layout}>
            <aside style={styles.sidebar}>
                <button style={styles.createButton} onClick={() => setShowCreate(true)}>
                    + New ArticleItem
                </button>

                <input
                    placeholder='Search article...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={styles.input}
                />

                <div>
                    {search ? (
                        filteredArticles.map((article) => (
                            <div
                                key={article.article_item_id}
                                style={styles.articleItem}
                                onClick={() => setSelectedArticle(article)}
                            >
                                <div>{article.article_item_title}</div>

                                <small>{article.article_item_id}</small>
                            </div>
                        ))
                    ) : (
                        <SidebarMenu items={mapper(data)} />
                    )}
                </div>
            </aside>

            <main style={styles.content}></main>

            {showCreate && <CreateModal data={data} onClose={() => setShowCreate(false)} />}
        </div>
    )
}

const styles: any = {
    layout: {
        display: 'flex',
        height: '100vh',
        fontFamily: 'Arial',
    },

    sidebar: {
        width: 320,
        borderRight: '1px solid #ccc',
        padding: 15,
        overflow: 'auto',
    },

    content: {
        flex: 1,
        padding: 20,
        overflow: 'auto',
    },

    createButton: {
        width: '100%',
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
        cursor: 'pointer',
    },

    input: {
        width: '100%',
        padding: 8,
        marginBottom: 10,
        boxSizing: 'border-box',
    },

    textarea: {
        width: '100%',
        minHeight: 100,
        marginBottom: 10,
        padding: 8,
        boxSizing: 'border-box',
    },

    articleItem: {
        border: '1px solid #ccc',
        padding: 10,
        marginBottom: 10,
        cursor: 'pointer',
    },

    link: {
        cursor: 'pointer',
        marginTop: 5,
    },

    pre: {
        whiteSpace: 'pre-wrap',
        background: '#eee',
        padding: 10,
    },

    modalOverlay: {
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.4)',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    modal: {
        width: 700,
        maxHeight: '90vh',
        overflow: 'auto',

        background: 'white',
        padding: 20,
    },

    modalHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    checkbox: {
        display: 'block',
        marginTop: 5,
    },
}
