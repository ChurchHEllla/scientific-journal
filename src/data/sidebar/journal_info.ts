import {MenuItem} from "@/models/sidebar_menu";

const journal_info = '/info'

export const journalInfo: MenuItem = {
    id: 'journal-info',
    label: 'Информация',
    href: `${journal_info}/journal-info`,
    children: [
        {id: 'about', label: 'О журнале', href: `${journal_info}/about`},
        {id: 'editors', label: 'Редакционная коллегия', href: `${journal_info}/editors`},
        {id: 'address', label: 'Адрес редакции', href: `${journal_info}/address`},
        {id: 'sections', label: 'Разделы/??????', href: `${journal_info}/sections`},
        {id: 'subscription', label: 'Как подписаться на журнал/????????', href: `${journal_info}/subscription`}
    ]
}