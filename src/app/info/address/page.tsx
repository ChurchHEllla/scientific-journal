import styles from "./page.module.css"
export default function AddressPage() {

    return (
        <div>
            <table className={styles.tableBordered}>
                <thead>
                    <tr style={{ border: '1px solid #ddd' }}>
                        <th>Должность</th>
                        <th>ФИО</th>
                        <th>Кабинет</th>
                        <th>E-Mail</th>
                        <th>Телефон</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td >Заместитель начальника редакционно-издательского отдела</td>
                        <td>САФИНА Лилиана Михайловна</td>
                        <td>815н</td>
                        <td><a className={styles.link} href={'mailto:' + 'vestnik@madi.ru'}>vestnik@madi.ru</a></td>
                        <td>8 (499) 346-01-68 доб. 3152</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}