import type { MenuItem } from '@/models/sidebar_menu'
import { Init } from '@/models/articles'
import { TreeBuilder } from '@components/site/SidebarMenu/mapper'

// Перенести на бэкенд?

const journals_base = '/journals'

export function journals(init: Init): MenuItem {
    return {
        id: 'journal-prospects',
        label: 'Выпуски журнала',
        href: '/',
        children: [
            {
                id: '2023',
                label: '2023',
                children: [
                    {
                        id: '2-2023',
                        label: '2-2023',
                        href: `${journals_base}/2-2023`,
                    },
                    {
                        id: '1-2023',
                        label: '1-2023',
                        href: `${journals_base}/1-2023`,
                    },
                ],
            },

            {
                id: '2024',
                label: '2024',
                children: [
                    {
                        id: '1-2024',
                        label: '1-2024',
                        href: `${journals_base}/1-2024`,
                    },
                ],
            },
            {
                id: 'данные с сервера (TODOдописать mapper*)',
                label: 'Данные с сервера ( TODO дописать mapper*)',
                children: TreeBuilder(init),
            },
        ],
    }
}
