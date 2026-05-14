import { editors } from '@data/editors'
import styles from './page.module.css'
export default function EditorPage() {
    return (
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
            <h2
                style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    marginTop: '40px',
                    marginBottom: '20px',
                }}
            >
                Члены:
            </h2>

            <table
                className={styles.tableBordered}
                style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '40px' }}
            >
                <tbody>
                    {editors.chiefEditors.map((editor, index) => (
                        <tr key={index}>
                            <td style={{ verticalAlign: 'top', width: '40%' }}>{editor.name}</td>
                            <td style={{ verticalAlign: 'top' }}>
                                <strong>{editor.title}</strong>
                                <br />
                                {editor.degree && <span>{editor.degree}, </span>}
                                {editor.affiliation}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Члены редакционной коллегии */}
            <h2
                style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    marginTop: '40px',
                    marginBottom: '20px',
                }}
            >
                Члены редакционной коллегии:
            </h2>

            <table
                className={styles.tableBordered}
                style={{ width: '100%', borderCollapse: 'collapse' }}
            >
                <tbody style={{ border: '1px' }}>
                    {editors.editorialCouncil.map((editor, index) => (
                        <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                            <td style={{ padding: '10px', verticalAlign: 'top', width: '40%' }}>
                                {editor.name}
                            </td>
                            <td style={{ padding: '10px', verticalAlign: 'top' }}>
                                {editor.degree && <span>{editor.degree}, </span>}
                                {editor.title && <span>{editor.title}, </span>}
                                {editor.affiliation}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
