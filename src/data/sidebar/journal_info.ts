import {MenuItem} from "@/models/sidebar_menu";

export const journalInfo: MenuItem = {
    id: 'journal-info',
    label: 'Информация',
    href: '/info/journal-info',
    children: [
        {id: 'about', label: 'О журнале', href: '/info'},
        {id: 'editorial_board', label: 'Редакционная коллегия', href: '/info/editorial_board'},
        {id: 'address', label: 'Адрес редакции', href: '/info/address'},
        {id: 'sections', label: 'Разделы', href: '/info/sections'},
        {id: 'subscription', label: 'Как подписаться на журнал', href: '/info/subscription'}
    ]
}