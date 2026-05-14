import type { ArticleItem } from '@/models/articles'
import { useState } from 'react'
import styles from './JournalItem.module.css'
import sharedStyles from '@/shared/styles/styles.module.css'

export default function JournalItem({ a }: { a: ArticleItem }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <a
        onClick={(e) => {
          e.preventDefault()
          setIsOpen(!isOpen)
        }}
        aria-expanded={isOpen}
        className={`${sharedStyles.link} ${styles.labelLink}`}
      >
        {a.articleItemTitle}
      </a>
      <p style={{ textAlign: 'justify', marginBottom: '10px' }}>
        <b>Авторы:</b>
      </p>
      {a.authors.map((author) => (
        <p style={{ textAlign: 'justify' }} key={author.fullName}>
          <b>{author.fullName}, </b>
          {author.bio},{' '}
          <a className={sharedStyles.link} href={'mailto:' + author.email}>
            {author.email}
          </a>
        </p>
      ))}

      <div className={`${styles.content} ${isOpen ? styles.open : ''}`}>
        <div style={{ textAlign: 'justify' }}>
          <b>Аннотация:</b>
          <br />
          <i>{a.abstract}</i>
        </div>
        <br />
        <div style={{ textAlign: 'justify' }}>
          <b>Список литературы</b>
          <br />
        </div>
        <ol>
          {a.references.map((ref, index) => (
            <li key={index}>
              {index + 1}. {ref}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
