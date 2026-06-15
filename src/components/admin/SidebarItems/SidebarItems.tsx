'use client'

import styles from '@/app/(admin)/admin/page.module.css'
import SidebarMenu from '@components/site/SidebarMenu/SidebarMenu'
import { TreeBuilder } from '@components/admin/SidebarItems/SidebarMenuAdmin/mapper'
import { useMemo, useState } from 'react'
import type { ArticleFullItemResponse } from '@/models/articles'
import { useInit } from '@/app/(admin)/admin/provider'
import { Init } from '@/models/articles'
import { useRouter } from 'next/navigation'

export default function SidebarItems() {
    const router = useRouter()
    const { init } = useInit()
    const [search, setSearch] = useState('')
    const initData: Init = init

    const filteredArticles = useMemo(() => {
        const q = search.toLowerCase()
        return initData?.articles.filter(
            (a: ArticleFullItemResponse) =>
                a.articleItemTitle.toLowerCase().includes(q) ||
                a.articleItemId!.toLowerCase().includes(q)
        )
    }, [search, initData])

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
                                onClick={() => {
                                    router.push(
                                        `/admin/${
                                            initData.articles.find(
                                                (a) => a.articleItemId === article.articleItemId
                                            )?.articleItemId
                                        }`
                                    )
                                }}
                            >
                                <div>{article.articleItemTitle}</div>

                                <small>{article.articleItemId}</small>
                            </div>
                        ))
                    ) : (
                        <SidebarMenu isAdm={true} items={TreeBuilder(initData)} />
                    )}
                </div>
            </aside>
        </div>
    )
}
