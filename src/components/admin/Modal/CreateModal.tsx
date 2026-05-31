import { useMemo, useState } from 'react'
import type {ArticleGroup, ArticleItem, Author, Journal} from "@/models/responses";

export interface InitResponse {
    journals: Journal[]
    groups: ArticleGroup[]
    articles: ArticleItem[]
    authors: Author[]
}

export default function CreateModal({
    data,
    onClose,
}: {
    data: InitResponse
    onClose: () => void
}) {
    const [title, setTitle] = useState('')

    const [abstract, setAbstract] = useState('')

    const [keywords, setKeywords] = useState('')

    const [journalId, setJournalId] = useState('')

    const [groupId, setGroupId] = useState('')

    const [content, setContent] = useState('')

    const [selectedAuthors, setSelectedAuthors] = useState<string[]>([])

    const availableGroups = useMemo(() => {
        return data.groups.filter((g) => g.journal_id === journalId)
    }, [journalId, data.groups])

    return (
        <div style={styles.modalOverlay}>
            <div style={styles.modal}>
                <div style={styles.modalHeader}>
                    <h2>Create ArticleItem</h2>

                    <button onClick={onClose}>X</button>
                </div>

                <input
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={styles.input}
                />

                <textarea
                    placeholder='Abstract'
                    value={abstract}
                    onChange={(e) => setAbstract(e.target.value)}
                    style={styles.textarea}
                />

                <input
                    placeholder='Keywords'
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    style={styles.input}
                />

                <select
                    value={journalId}
                    onChange={(e) => setJournalId(e.target.value)}
                    style={styles.input}
                >
                    <option value=''>Select journal</option>

                    {data.journals.map((j) => (
                        <option key={j.journal_id} value={j.journal_id}>
                            {j.article_title}
                        </option>
                    ))}
                </select>

                <select
                    value={groupId}
                    onChange={(e) => setGroupId(e.target.value)}
                    style={styles.input}
                >
                    <option value=''>Select group</option>

                    {availableGroups.map((g) => (
                        <option key={g.article_group_id} value={g.article_group_id}>
                            {g.article_group_title}
                        </option>
                    ))}
                </select>

                <div>
                    <b>Authors</b>

                    {data.authors.map((author) => (
                        <label key={author.author_id} style={styles.checkbox}>
                            <input
                                type='checkbox'
                                checked={selectedAuthors.includes(author.author_id)}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setSelectedAuthors((prev) => [...prev, author.author_id])
                                    } else {
                                        setSelectedAuthors((prev) =>
                                            prev.filter((id) => id !== author.author_id)
                                        )
                                    }
                                }}
                            />

                            {author.full_name}
                        </label>
                    ))}
                </div>

                <textarea
                    placeholder='Content'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    style={{
                        ...styles.textarea,
                        height: 200,
                    }}
                />

                <button style={styles.createButton}>Create</button>
            </div>
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
