'use client'

import styles from '@components/admin/ArticleActions/styles.module.css'
import { useInit } from '@/app/(admin)/admin/provider'
import { useEffect, useState } from 'react'
import ArticleModal from '@components/admin/Modal/CreateModal/ArticleModal'
import { ArticleFullItemResponse, Init } from '@/models/articles'
import { deleteArticle, getInit } from '@/api/client'

interface Props {
    a: ArticleFullItemResponse
}
export default function ArticleActions({ a }: Props) {
    const { init, setInit } = useInit()
    const [Open, setOpen] = useState(false)
    const [isUpdate, setIsUpdate] = useState(false)

    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <button
                className={styles.myButton}
                onClick={() => {
                    setOpen(true)
                }}
            >
                Добавить еще
            </button>

            <button
                className={styles.myButton}
                onClick={async () => {
                    setIsUpdate(true)
                    setOpen(true)
                    setInit(await getInit())
                }}
            >
                Редактировать
            </button>

            <button
                className={styles.myButton}
                onClick={async () => {
                    await deleteArticle(a.articleItemId!)
                    setInit(await getInit())
                }}
            >
                Удалить
            </button>
            {Open && (
                <ArticleModal
                    data={isUpdate ? a : undefined}
                    init={init}
                    onClose={() => {
                        setOpen(false)
                        setIsUpdate(false)
                    }}
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
