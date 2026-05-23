'use client'

import { useMemo, useState } from 'react'

type Journal = {
    journal_id: string
    article_title: string
}

type Group = {
    article_group_id: string
    journal_id: string
    article_group_title: string
}

type Article = {
    article_item_id: string
    article_group_id: string
    article_item_title: string
    abstract: string
    keywords: string
}

type Author = {
    author_id: string
    full_name: string
    email: string
}

type FullArticle = Article & {
    content: string
    authors: Author[]
}

type InitResponse = {
    journals: Journal[]
    groups: Group[]
    articles: FullArticle[]
    authors: Author[]
}

const mockData: InitResponse = {
    journals: [
        {
            journal_id: '1',
            article_title: 'Tech Journal',
        },
        {
            journal_id: '2',
            article_title: 'Science Review',
        },
    ],

    groups: [
        {
            article_group_id: 'g1',
            journal_id: '1',
            article_group_title: 'Distributed Systems',
        },
        {
            article_group_id: 'g2',
            journal_id: '1',
            article_group_title: 'Frontend',
        },
        {
            article_group_id: 'g3',
            journal_id: '2',
            article_group_title: 'Physics',
        },
    ],

    articles: [
        {
            article_item_id: 'a1',
            article_group_id: 'g1',
            article_item_title: 'Introduction to Go',

            abstract: 'This article explains basics of Go language.',

            keywords: 'go, backend, concurrency',

            content: `
Go is a programming language developed by Google.

Main topics:
- Goroutines
- Channels
- Interfaces
- HTTP services
      `,

            authors: [
                {
                    author_id: 'u1',
                    full_name: 'John Doe',
                    email: 'john@example.com',
                },
            ],
        },

        {
            article_item_id: 'a2',
            article_group_id: 'g2',
            article_item_title: 'React Server Components',

            abstract: 'Understanding modern React architecture.',

            keywords: 'react, nextjs',

            content: `
React Server Components allow splitting rendering
between client and server.
      `,

            authors: [
                {
                    author_id: 'u2',
                    full_name: 'Alice Smith',
                    email: 'alice@example.com',
                },
            ],
        },
    ],

    authors: [
        {
            author_id: 'u1',
            full_name: 'John Doe',
            email: 'john@example.com',
        },

        {
            author_id: 'u2',
            full_name: 'Alice Smith',
            email: 'alice@example.com',
        },
    ],
}

export default function AdminPage() {
    const [data] = useState(mockData)

    const [search, setSearch] = useState('')

    const [selectedArticle, setSelectedArticle] = useState<FullArticle | null>(null)

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
                    + New Article
                </button>

                <input
                    placeholder='Search...'
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
                        <TreeView data={data} onSelect={setSelectedArticle} />
                    )}
                </div>
            </aside>

            <main style={styles.content}>
                {selectedArticle ? (
                    <ArticleView article={selectedArticle} />
                ) : (
                    <div>Select article</div>
                )}
            </main>

            {showCreate && <CreateModal data={data} onClose={() => setShowCreate(false)} />}
        </div>
    )
}

function TreeView({ data, onSelect }: { data: InitResponse; onSelect: (a: FullArticle) => void }) {
    return (
        <div>
            {data.journals.map((journal) => {
                const groups = data.groups.filter((g) => g.journal_id === journal.journal_id)

                return (
                    <div key={journal.journal_id} style={{ marginBottom: 20 }}>
                        <h3>{journal.article_title}</h3>

                        <div style={{ paddingLeft: 15 }}>
                            {groups.map((group) => {
                                const articles = data.articles.filter(
                                    (a) => a.article_group_id === group.article_group_id
                                )

                                return (
                                    <div key={group.article_group_id} style={{ marginBottom: 10 }}>
                                        <b>{group.article_group_title}</b>

                                        <div style={{ paddingLeft: 15 }}>
                                            {articles.map((article) => (
                                                <div
                                                    key={article.article_item_id}
                                                    style={styles.link}
                                                    onClick={() => onSelect(article)}
                                                >
                                                    {article.article_item_title}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

function ArticleView({ article }: { article: FullArticle }) {
    return (
        <div>
            <h1>{article.article_item_title}</h1>

            <p>
                <b>Abstract:</b>
            </p>

            <p>{article.abstract}</p>

            <p>
                <b>Keywords:</b>
            </p>

            <p>{article.keywords}</p>

            <p>
                <b>Authors:</b>
            </p>

            <ul>
                {article.authors.map((a) => (
                    <li key={a.author_id}>{a.full_name}</li>
                ))}
            </ul>

            <p>
                <b>Content:</b>
            </p>

            <pre style={styles.pre}>{article.content}</pre>
        </div>
    )
}

function CreateModal({ data, onClose }: { data: InitResponse; onClose: () => void }) {
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
                    <h2>Create Article</h2>

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
