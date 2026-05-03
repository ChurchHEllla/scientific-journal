export const sidebarMenuData = [
    {
        id: 'journal-prospects',
        label: 'Выпуски журнала',
        href: '/',
        children: [
            {
                id: '2023',
                label: '2023',
                href: '/journals/2023',
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
    },
    {
        id: 'bird',
        label: 'Синичка',
        href: '/journals/bird',
        children: [
            { id: 'editorial', label: 'Редколлегия журнала', href: '/prospects/editorial' },
            { id: 'authors', label: 'Для авторов и подписчиков', href: '/prospects/authors' },
            { id: 'retraction', label: 'Условия Ретрагирования', href: '/prospects/retraction' },
        ]
    }
];