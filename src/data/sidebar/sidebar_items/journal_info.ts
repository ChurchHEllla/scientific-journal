import type { MenuItem } from '@/models/sidebar_menu'

const journal_info_base = '/info'

export const journalInfo: MenuItem = {
    id: 'journal-info',
    label: 'Информация',
    href: `${journal_info_base}/journal-info`,
    children: [
        { id: 'about', label: 'О журнале', href: `${journal_info_base}/about` },
        { id: 'editors', label: 'Редакционная коллегия', href: `${journal_info_base}/editors` },
        { id: 'address', label: 'Адрес редакции', href: `${journal_info_base}/address` },
        { id: 'sections', label: 'Разделы/??????', href: `${journal_info_base}/sections` },
        {
            id: 'subscription',
            label: 'Как подписаться на журнал/????????',
            href: `${journal_info_base}/subscription`,
        },
    ],
}
