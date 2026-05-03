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
        label: 'Птичка',
        href: '/journals/bird',
        children: [
            { id: 'editorial', label: 'Редколлегия журнала', href: '/journals/bird' },
        ]
    },
    {
        id: 'journal-info',
        label: 'Информация',
        href: '/journals/journal-info',
        children: [
            { id: 'about-journal', label: 'О журнале', href: '/journals/about-journal' },
            { id: 'editorial-board', label: 'Редакционная коллегия', href: '/journals/editorial' },
            { id: 'bibliometrics', label: 'Библиометрия редколлегии', href: '/journals/bibliometrics' },
            { id: 'address', label: 'Адрес редакции', href: '/journals/address' },
            { id: 'rinc-rating', label: 'Рейтинг журнала в РИНЦ', href: '/journals/rinc-rating' },
        ]
    },
];