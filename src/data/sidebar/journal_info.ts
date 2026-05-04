import {MenuItem} from "@/models/SidebarMenu";

export const journal_info: MenuItem = {
    id: 'journal-info',
    label: 'Информация',
    href: '/journals/journal-info',
    children: [
        {id: 'back-to-basics', label: 'Старый сайт', href: 'https://lib.madi.ru/nitdo/index.html'},
        {id: 'about-journal', label: 'О журнале', href: '/journals/about-journal'},
        {id: 'editorial-board', label: 'Редакционная коллегия', href: '/journals/editorial-board'},
        {id: 'bibliometrics', label: 'Библиометрия редколлегии', href: '/journals/bibliometrics'},
        {id: 'address', label: 'Адрес редакции', href: '/journals/address'},
        {id: 'rinc-rating', label: 'Рейтинг журнала в РИНЦ', href: '/journals/rinc-rating'},
    ]
}