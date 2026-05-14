import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <img src='/header.png' alt='TCNM Journal Logo' className={styles.logo} />
    </header>
  )
}
