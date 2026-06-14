'use client'

import styles from '@/app/(admin)/admin/page.module.css'
import SidebarMenu from '@components/site/SidebarMenu/SidebarMenu'
import { TreeBuilder } from '@components/admin/SidebarItems/SidebarMenuAdmin/mapper'
import { useMemo, useState } from 'react'
import type { ArticleFullItemResponse } from '@/models/articles'
import { getArticleById } from '@/api/client'
import { Init } from '@/models/articles'
import { useInit } from '@/app/(admin)/admin/provider'
import { mockInitData } from '@data/articles/journals/mock/admin_mock'

export default function SidebarItems() {
    const { init } = useInit()
    const [search, setSearch] = useState('')

    const [selectedArticle, setSelectedArticle] = useState<ArticleFullItemResponse | null>(null)

    const loadArticle = async () => {
        const article = await getArticleById('db6da3fb-db7a-41d4-b472-ab769eefb175')
        setSelectedArticle(article)
    }

    const filteredArticles = useMemo(() => {
        const q = search.toLowerCase()
        return init?.articles.filter(
            (a: ArticleFullItemResponse) =>
                a.articleItemTitle.toLowerCase().includes(q) ||
                a.articleItemId!.toLowerCase().includes(q)
        )
    }, [search, init])

    return (
        <div className={styles.sidebar}>
            <aside className={styles.sidebarWrapper}>
                <input
                    placeholder='Search article...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className={styles.input}
                />

                <div>
                    {search ? (
                        filteredArticles.map((article: ArticleFullItemResponse) => (
                            <div
                                key={article.articleItemId}
                                className={styles.articleItem}
                                onClick={() => loadArticle()}
                            >
                                <div>{article.articleItemTitle}</div>

                                <small>{article.articleItemId}</small>
                            </div>
                        ))
                    ) : (
                        <SidebarMenu items={TreeBuilder(init)} />
                    )}
                </div>
            </aside>
        </div>
    )
}
