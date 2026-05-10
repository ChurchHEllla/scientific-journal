import {MenuItem} from "@/models/sidebar_menu";

//Перенести на бэкенд?

export const journals: MenuItem = {

    id: 'journal-prospects',
    label: 'Выпуски журнала',
    href: '/',
    children: [
        {
            id: '2023',
            label: '2023',
            children: [
                {
                    id: '1-2023',
                    label: '1-2023',
                    href: '/journals/1-2023'
                }
            ]
        },
        {
            id: '2022',
            label: '2022',
            children: [
                {
                    id: '2-2022',
                    label: '2-2022',
                    href: '/journals/2-2022'
                },
                {
                    id: '1-2022',
                    label: '1-2022',
                    href: '/journals/1-2022'
                }
            ]
        },

    ],
}