import styles from "./page.module.css"
import sharedStyles from "@/shared/styles/styles.module.css"
import {StaffMember} from "@/models/address"
import {addressData} from "@data/address"
export default function AddressPage() {
    return (
        <div>
            <div style={{overflowX: 'auto'}}>
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
                    {/* 3. Рендерим список сотрудников через map */}
                    {addressData.people.map((person: StaffMember, index) => (
                        <tr key={index}>
                            <td>{person.position}</td>
                            <td>{person.fullName}</td>
                            <td>{person.roomNumber}</td>
                            <td>
                                <a className={sharedStyles.link} href={`mailto:${person.email}`}>
                                    {person.email}
                                </a>
                            </td>
                            <td>{person.phone}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <br />
            <div>
                <p>{addressData.address}</p>

                {/* 4. Ссылка на сайт */}
                <a className={sharedStyles.link} href={addressData.url} target="_blank" rel="noopener noreferrer">
                    Перейти на сайт МАДИ
                </a>
            </div>
        </div>
    )
}