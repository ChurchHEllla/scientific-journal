import { useCallback, useEffect, useMemo, useState } from 'react'
import { ArticleFullItemResponse, Author, Init } from '@/models/articles'
import {
    addAuthor,
    createArticle,
    createAuthor,
    deleteAuthor,
    getUnusedAuthors,
} from '@/api/client'
import AuthorInputs from '@components/admin/Modal/CreateModal/AuthorInputs'
import styles from './styles.module.css'
export default function ArticleModal({
    init,
    onClose,
    onCreated,
    data,
}: {
    init: Init | null
    data?: ArticleFullItemResponse
    onClose: () => void
    onCreated: (article: ArticleFullItemResponse) => void
}) {
    const [clickCount, setClickCount] = useState<number>(0)

    const [title, setTitle] = useState('')

    const [abstract, setAbstract] = useState('')

    const [keywords, setKeywords] = useState('')

    const [journalId, setJournalId] = useState('')

    const [groupId, setGroupId] = useState('')

    const [authors, setAuthors] = useState<Author[]>([])

    const [references, setReferences] = useState('')

    const [draftAuthor, setDraftAuthor] = useState<Author>({
        fullName: '',
        bio: '',
        email: '',
    })

    const availableGroups = useMemo(() => {
        return init?.groups.filter((g) => g.journalId === journalId)
    }, [journalId, init?.groups])

    const updateAuthor = (index: number, updated: Author) => {
        setAuthors((prev) => {
            const copy = [...prev]
            copy[index] = updated
            return copy
        })
    }
    useEffect(() => {
        async function loadAuthors() {
            try {
                const res = await getUnusedAuthors()
                setAuthors(res ?? [])
            } catch (e) {
                console.error('Failed load authors', e)
                setAuthors([])
            }
        }

        loadAuthors()
    }, [clickCount])

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <h2>Create ArticleItem</h2>

                    <button onClick={onClose}>X</button>
                </div>

                <input
                    placeholder='Title'
                    value={data ? data.articleItemTitle : title}
                    onChange={(e) => setTitle(e.target.value)}
                    className={styles.input}
                />

                <textarea
                    placeholder='Abstract'
                    value={data ? data.abstract : abstract}
                    onChange={(e) => setAbstract(e.target.value)}
                    className={styles.textarea}
                />

                <input
                    placeholder='Keywords'
                    value={data ? data.keywords : keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    className={styles.input}
                />

                <textarea
                    placeholder='References'
                    value={data ? data.references?.join('\n') : references}
                    onChange={(e) => setReferences(e.target.value)}
                    className={styles.input}
                />

                <select
                    value={journalId}
                    onChange={(e) => setJournalId(e.target.value)}
                    className={styles.input}
                >
                    <option value=''>Select journal</option>

                    {init?.journals.map((j) => (
                        <option key={j.journalId} value={j.journalId}>
                            {j.title}
                        </option>
                    ))}
                </select>

                <select
                    value={groupId}
                    onChange={(e) => setGroupId(e.target.value)}
                    className={styles.input}
                >
                    <option value=''>Select group</option>

                    {availableGroups?.map((g) => (
                        <option key={g.articleGroupId} value={g.articleGroupId}>
                            {g.articleGroupTitle}
                        </option>
                    ))}
                </select>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    Список уже добавленных
                    <div>
                        {authors?.map((author, index) => (
                            <div
                                key={index}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'left',
                                    gap: '10px',
                                    marginBottom: '10px',
                                }}
                            >
                                <AuthorInputs
                                    isChange={false}
                                    value={author}
                                    onChange={(updated) => updateAuthor(index, updated)}
                                />
                                <button
                                    onClick={() => {
                                        setAuthors((prev) => prev.filter((_, i) => i !== index))
                                        deleteAuthor(author.id!)
                                    }}
                                >
                                    Удалить
                                </button>
                            </div>
                        ))}
                    </div>
                    Новый автор
                    <AuthorInputs value={draftAuthor} onChange={setDraftAuthor} />
                    <button
                        disabled={!draftAuthor.fullName || !draftAuthor.bio}
                        onClick={() => {
                            if (draftAuthor.fullName === '' || draftAuthor.bio === '') {
                                return
                            } else {
                                createAuthor(draftAuthor)
                                setClickCount((prev) => prev + 1)
                                setAuthors((prev) => [
                                    ...prev,
                                    {
                                        ...draftAuthor,
                                    },
                                ])

                                setDraftAuthor({
                                    fullName: '',
                                    bio: '',
                                    email: '',
                                })
                            }
                        }}
                    >
                        Добавить автора
                    </button>
                </div>

                <button
                    className={styles.createButton}
                    onClick={async () => {
                        for (const author of authors) {
                            if (author.fullName === '' || author.bio === '') {
                                return
                            }
                        }
                        const args: ArticleFullItemResponse = {
                            articleItemTitle: title,
                            abstract: abstract,
                            keywords: keywords,
                            references: references.split('\n'),
                            articleGroupId: groupId,
                        }
                        const article: ArticleFullItemResponse = await createArticle(args)
                        onCreated(article)
                        if (authors.length > 0) {
                            for (const author of authors) {
                                const err = await addAuthor(article.articleItemId, author.id!)
                            }
                            onClose()
                        }
                    }}
                >
                    Create
                </button>
            </div>
        </div>
    )
}
