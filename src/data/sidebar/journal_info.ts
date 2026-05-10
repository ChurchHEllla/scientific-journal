import {MenuItem} from "@/models/sidebar_menu";

export const journalInfo: MenuItem = {
    id: 'journal-info',
    label: 'Информация',
    href: '/info/journal-info',
    children: [
        {id: 'about', label: 'О журнале', href: '/info/about'},
        {id: 'editors', label: 'Редакционная коллегия', href: '/info/editors'},
        {id: 'address', label: 'Адрес редакции', href: '/info/address'},
        {id: 'sections', label: 'Разделы/??????', href: '/info/sections'},
        {id: 'subscription', label: 'Как подписаться на журнал/????????', href: '/info/subscription'}
    ]
}