'use client'

import styles from '@components/admin/ArticleActions/styles.module.css'
export default function ArticleActions() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <button className={styles.myButton} onClick={async () => {}}>
                Редактировать
            </button>
            <button className={styles.myButton} onClick={async () => {}}>
                Удалить
            </button>
        </div>
    )
}
