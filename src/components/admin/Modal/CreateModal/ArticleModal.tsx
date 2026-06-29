import { useEffect, useMemo, useState } from 'react'
import { ArticleFullItemResponse, Author, Init } from '@/models/articles'
import {
    apiAddAuthor,
    apiCreateArticle,
    apiCreateAuthor,
    apiRemoveAuthor,
    apiUpdateArticle,
    deleteAuthor,
    getArticleById,
    getUnusedAuthors,
} from '@/api/client'
import AuthorInputs from '@components/admin/Modal/CreateModal/AuthorInputs'
import styles from './styles.module.css'

interface Props {
    init: Init | null
    data?: ArticleFullItemResponse
    onClose: () => void
    onCreated: (article: ArticleFullItemResponse) => void
}

export default function ArticleModal({ init, onClose, onCreated, data }: Props) {
    const [title, setTitle] = useState(data?.articleItemTitle ?? '')
    const [abstract, setAbstract] = useState(data?.abstract ?? '')
    const [keywords, setKeywords] = useState(data?.keywords ?? '')
    const [references, setReferences] = useState(data?.references?.join('\n') ?? '')
    const [groupId, setGroupId] = useState(data?.articleGroupId ?? '')
    const [journalId, setJournalId] = useState(() => {
        if (!data?.articleGroupId || !init) return ''
        const group = init.groups.find((g) => g.articleGroupId === data.articleGroupId)
        return group?.journalId ?? ''
    })

    const [authors, setAuthors] = useState<Author[]>(data?.authors ?? [])
    const [initialAuthorIds] = useState<Set<string>>(
        () => new Set((data?.authors ?? []).map((a) => a.id!))
    )

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
        if (data) return

        async function loadUnusedAuthors() {
            const res = await getUnusedAuthors()
            setAuthors(res ?? [])
        }

        loadUnusedAuthors()
    }, [])

    const handleRemoveAuthor = (index: number, author: Author) => {
        setAuthors((prev) => prev.filter((_, i) => i !== index))
        if (!data && author.id) {
            deleteAuthor(author.id)
        }
    }

    const handleAddDraftAuthor = async () => {
        if (!draftAuthor.fullName || !draftAuthor.bio) return

        const created: Author = await apiCreateAuthor(draftAuthor)
        setAuthors((prev) => [...prev, created])
        setDraftAuthor({ fullName: '', bio: '', email: '' })
    }

    const handleSubmit = async () => {
        for (const author of authors) {
            if (!author.fullName || !author.bio) return
        }

        const args: ArticleFullItemResponse = {
            articleItemId: data?.articleItemId,
            articleItemTitle: title,
            abstract,
            keywords,
            references: references
                .split(/\r?\n/)
                .map((r) => r.trim())
                .filter(Boolean),
            articleGroupId: groupId,
        }

        const article: ArticleFullItemResponse = data
            ? await apiUpdateArticle(data.articleItemId!, args)
            : await apiCreateArticle(args)

        onCreated(article)

        if (data) {
            const finalAuthorIds = new Set(authors.map((a) => a.id!))

            for (const id of initialAuthorIds) {
                if (!finalAuthorIds.has(id)) {
                    await apiRemoveAuthor(article.articleItemId!, id)
                }
            }
            for (const author of authors) {
                if (!initialAuthorIds.has(author.id!)) {
                    await apiAddAuthor(article.articleItemId, author.id!)
                }
            }
        } else {
            for (const author of authors) {
                await apiAddAuthor(article.articleItemId, author.id!)
            }
        }
        const fresh = await getArticleById(article.articleItemId!)
        onCreated(fresh)
        onClose()
    }

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <h2>{data ? 'Редактировать статью' : 'Создать статью'}</h2>
                    <button className={styles.closeButton} onClick={onClose}>
                        X
                    </button>
                </div>

                <input
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className={styles.input}
                />

                <textarea
                    placeholder='Abstract'
                    value={abstract}
                    onChange={(e) => setAbstract(e.target.value)}
                    className={styles.textarea}
                />

                <input
                    placeholder='Keywords'
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    className={styles.input}
                />

                <textarea
                    placeholder='References'
                    value={references}
                    onChange={(e) => setReferences(e.target.value)}
                    className={styles.input}
                />

                <select
                    value={journalId}
                    onChange={(e) => {
                        setJournalId(e.target.value)
                        setGroupId('')
                    }}
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
                    <span>Список добавленных авторов</span>
                    <div>
                        {authors.map((author, index) => (
                            <div
                                key={author.id ?? index}
                                style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}
                            >
                                <AuthorInputs
                                    isChange={false}
                                    value={author}
                                    onChange={(updated) => updateAuthor(index, updated)}
                                />
                                <button onClick={() => handleRemoveAuthor(index, author)}>
                                    Удалить
                                </button>
                            </div>
                        ))}
                    </div>

                    <span>Новый автор</span>
                    <AuthorInputs value={draftAuthor} onChange={setDraftAuthor} />
                    <button
                        disabled={!draftAuthor.fullName || !draftAuthor.bio}
                        onClick={handleAddDraftAuthor}
                    >
                        Добавить автора
                    </button>
                </div>

                <button className={styles.createButton} onClick={handleSubmit}>
                    {data ? 'Изменить' : 'Создать'}
                </button>
            </div>
        </div>
    )
}
