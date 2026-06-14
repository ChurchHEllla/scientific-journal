'use client'

import { useEffect, useMemo, useState } from 'react'
import ArticleModal from '@components/admin/Modal/CreateModal/ArticleModal'
import type { ArticleFullItemResponse } from '@/models/articles'
import styles from './page.module.css'
import { Init } from '@/models/articles'
import { useInit } from '@/app/(admin)/admin/provider'

export default function AdminPage() {
    const { init, setInit } = useInit()

    const [showCreate, setShowCreate] = useState(false)

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <button onClick={() => setShowCreate(true)} className={styles.createButton}>
                    Добавить статью
                </button>
                <button className={styles.createButton}>Добавить группу</button>
                <button className={styles.createButton}>Добавить журнал</button>
            </div>
            {showCreate && (
                <ArticleModal
                    init={init}
                    onClose={() => setShowCreate(false)}
                    onCreated={(article: ArticleFullItemResponse) => {
                        setInit((prev: Init) => ({
                            ...prev!,
                            articles: [...prev!.articles, article],
                        }))
                    }}
                />
            )}
        </div>
    )
}
