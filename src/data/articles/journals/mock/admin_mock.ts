// Предположим, что эти типы импортированы из файла с определениями
import {
    JournalResponse,
    ArticleGroupResponse,
    ArticleItemResponse,
    AuthorResponse,
} from '@/models/responses' // путь к вашим типам

// Интерфейс для ответа инициализации (если он еще не определен)
export interface InitResponse {
    journals: JournalResponse[]
    groups: ArticleGroupResponse[]
    articles: (ArticleItemResponse & { authors: AuthorResponse[] })[] // Статья с вложенными авторами для удобства отображения
    authors: AuthorResponse[]
}

import type { Init } from '@/models/articles' // Путь к вашему файлу с типами

export const mockInitData: Init = {
    journals: [
        {
            journalId: '550e8400-e29b-41d4-a716-446655440000',
            labelKey: '2-2023',
            data: '«Вестник МАДИ» | Выпуск 1 (72), март 2023',
            title: 'vol_72_1',
        },
    ],
    groups: [
        {
            articleGroupId: '550e8400-e29b-41d4-a716-446655440001',
            journalId: '550e8400-e29b-41d4-a716-446655440000',
            articleGroupTitle:
                'ПРОЕКТИРОВАНИЕ И СТРОИТЕЛЬСТВО ДОРОГ, МЕТРОПОЛИТЕНОВ, АЭРОДРОМОВ, МОСТОВ И ТРАНСПОРТНЫХ ТОННЕЛЕЙ',
        },
    ],
    articles: [
        {
            articleItemId: '550e8400-e29b-41d4-a716-446655440002',
            articleGroupId: '550e8400-e29b-41d4-a716-446655440001',
            articleItemTitle:
                'ПОВЫШЕНИЕ ЭФФЕКТИВНОСТИ УКЛАДКИ ГЕОСИНТЕТИЧЕСКИХ МАТЕРИАЛОВ В КОНСТРУКЦИЮ ДОРОГИ',
            abstract:
                'В статье рассматриваются вопросы формирования графа автодорожной сети с целью исследования нарушений функционирования транспортных связей вследствие ухудшения технического состояния мостовых сооружений.',
            keywords: `'геосинтетика', 'дорожное строительство', 'графы'`,
            references: [
                'Чытович Н.А. Механика грунтов. М.: Высшая школа, 2009.',
                'ГОСТ Р 58775-2019 «Дороги автомобильные общего пользования».',
            ],
            authors: [
                {
                    id: 'auth-1',
                    fullName: 'Станислав Аркадьевич Шемякин',
                    bio: 'доктор технических наук, профессор ТОГУ',
                    email: 'shemyakin@madi.ru',
                },
                {
                    id: 'auth-2',
                    fullName: 'Евгений Алексеевич Шишкин',
                    bio: 'кандидат технических наук, доцент ТОГУ',
                    email: 'shishkin@madi.ru',
                },
            ],
        },
        {
            articleItemId: '550e8400-e29b-41d4-a716-446655440003',
            articleGroupId: '550e8400-e29b-41d4-a716-446655440001',
            articleItemTitle:
                'ПРОГНОЗИРОВАНИЕ ЗАДЕРЖЕК ТРАНСПОРТНЫХ СРЕДСТВ НА НЕРЕГУЛИРУЕМОМ ПЕШЕХОДНОМ ПЕРЕХОДЕ',
            abstract: '',
            keywords: [],
            references: [],
            authors: [
                {
                    id: 'auth-3',
                    fullName: 'Павел Иванович Поспелов',
                    bio: 'доктор технических наук, профессор МАДИ',
                    email: 'pospelov@madi.ru',
                },
            ],
        },
        // Добавьте эти объекты в массив articles вашего мока mockInitData

        {
            articleItemId: '550e8400-e29b-41d4-a716-446655440004',
            articleGroupId: '550e8400-e29b-41d4-a716-446655440001',
            articleItemTitle:
                'АНАЛИЗ ВЛИЯНИЯ КЛИМАТИЧЕСКИХ ФАКТОРОВ НА ДОЛГОВЕЧНОСТЬ АСФАЛЬТОБЕТОННЫХ ПОКРЫТИЙ',
            abstract:
                'В работе исследуется влияние перепадов температур и уровня осадков на образование колейности и трещин в асфальтобетонных покрытиях автомобильных дорог центрального региона России. Предложена методика оценки устойчивости покрытия к климатическим воздействиям.',
            keywords: ['асфальтобетон', 'климат', 'долговечность', 'колейность'],
            references: [
                'ГОСТ 9128-2013 «Смеси асфальтобетонные дорожные».',
                'Одарчук Н.И. Проектирование дорожных одежд. М.: МАДИ, 2018.',
            ],
            authors: [
                {
                    id: 'auth-4',
                    fullName: 'Ирина Викторовна Смирнова',
                    bio: 'кандидат технических наук, доцент кафедры строительства дорог',
                    email: 'smirnova@madi.ru',
                },
            ],
        },
        {
            articleItemId: '550e8400-e29b-41d4-a716-446655440005',
            articleGroupId: '550e8400-e29b-41d4-a716-446655440001',
            articleItemTitle:
                'ОПТИМИЗАЦИЯ СХЕМЫ ОРГАНИЗАЦИИ ДВИЖЕНИЯ НА ПРИЛЕГАЮЩИХ ТЕРРИТОРИЯХ К МАГИСТРАЛЯМ',
            abstract:
                'Рассмотрены проблемы заторов на въездах и выездах с прилегающих территорий (парковки ТЦ, жилые комплексы). Разработана алгоритмическая модель оптимизации светофорного регулирования для снижения задержек основного потока транспорта.',
            keywords: ['организация движения', 'затор', 'светофор', 'прилегающая территория'],
            references: [
                'СП 42.13330.2016 «Градостроительство».',
                'Руководство по организации дорожного движения.',
            ],
            authors: [
                {
                    id: 'auth-5',
                    fullName: 'Алексей Дмитриевич Волков',
                    bio: 'аспирант кафедры организации перевозок',
                    email: 'volkov.ad@madi.ru',
                },
                {
                    id: 'auth-6',
                    fullName: 'Мария Сергеевна Кузнецова',
                    bio: 'старший преподаватель',
                    email: 'kuznetsova@madi.ru',
                },
            ],
        },
        {
            articleItemId: '550e8400-e29b-41d4-a716-446655440006',
            articleGroupId: '550e8400-e29b-41d4-a716-446655440001',
            articleItemTitle: 'СРАВНИТЕЛЬНЫЙ ЭКОНОМИЧЕСКИЙ ЭФФЕКТ ПРИМЕНЕНИЯ МОДУЛЬНЫХ МОСТОВ',
            abstract:
                'Проведен сравнительный анализ затрат на возведение временных мостовых переходов из сборно-разборных конструкций и традиционных железобетонных решений. Выявлена экономическая эффективность модульных систем при сроках строительства менее 3 месяцев.',
            keywords: ['мосты', 'экономическая эффективность', 'временные сооружения', 'логистика'],
            references: [
                'СТО НОСТРОЙ 2.15.136-2014.',
                'Отчет о НИР «Экономика транспортного строительства», 2022.',
            ],
            authors: [
                {
                    id: 'auth-7',
                    fullName: 'Дмитрий Олегович Соколов',
                    bio: 'доцент кафедры экономики строительства',
                    email: 'sokolov.do@madi.ru',
                },
            ],
        },
        {
            articleItemId: '550e8400-e29b-41d4-a716-446655440007',
            articleGroupId: '550e8400-e29b-41d4-a716-446655440001',
            articleItemTitle:
                'РАЗРАБОТКА МЕТОДИКИ ОЦЕНКИ УРОВНЯ ШУМА ОТ АВТОМОБИЛЬНОГО ТРАНСПОРТА В ГОРОДСКОЙ ЗАСТРОЙКЕ',
            abstract:
                'Предложен новый подход к картографированию шумового загрязнения от транспортных потоков с использованием GIS-технологий. Результаты верифицированы натурными измерениями на МКАД и ТТК.',
            keywords: ['шум', 'экология', 'GIS', 'городская среда', 'транспорт'],
            references: [
                'СанПиН 1.2.3685-21 «Гигиенические нормативы».',
                'Сафаров В.Р. Защита от шума. М.: Стройиздат, 2015.',
            ],
            authors: [
                {
                    id: 'auth-8',
                    fullName: 'Елена Павловна Морозова',
                    bio: 'кандидат биологических наук, доцент',
                    email: 'morozova@madi.ru',
                },
            ],
        },
        {
            articleItemId: '550e8400-e29b-41d4-a716-446655440008',
            articleGroupId: '550e8400-e29b-41d4-a716-446655440001',
            articleItemTitle: 'ПРИМЕНЕНИЕ BIM-ТЕХНОЛОГИЙ ПРИ ПРОЕКТИРОВАНИИ ТРАНСПОРТНЫХ РАЗВЕЗОК',
            abstract:
                'Описан опыт внедрения информационного моделирования (BIM) при проектировании многоуровневых транспортных развязок. Рассмотрены вопросы автоматизации подсчета объемов земляных работ и обнаружения коллизий инженерных сетей.',
            keywords: [
                'BIM',
                'проектирование',
                'Transportation Infrastructure',
                'Autodesk Civil 3D',
            ],
            references: [
                'ГОСТ Р 57563-2017 «Информационное моделирование в строительстве».',
                'Morgenthal G. BIM in Bridge Engineering, 2021.',
            ],
            authors: [
                {
                    id: 'auth-9',
                    fullName: 'Артем Владимирович Козлов',
                    bio: 'ведущий инженер проекта, выпускник МАДИ',
                    email: 'kozlov.av@project-bureau.ru',
                },
                {
                    id: 'auth-10',
                    fullName: 'Сергей Николаевич Петров',
                    bio: 'профессор кафедры ИСАД',
                    email: 'petrov.sn@madi.ru',
                },
            ],
        },
    ],
}

export const mockData: InitResponse = {
    journals: [
        {
            journalId: '550e8400-e29b-41d4-a716-446655440000',
            labelKey: 'tech_journal_2024',
            data: '{"issue": "1", "year": 2024}',
            title: 'Tech Journal',
            createdAt: '2024-01-15T10:00:00Z',
        },
        {
            journalId: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
            labelKey: 'science_review_q1',
            data: '{"volume": "12"}',
            title: 'Science Review',
            createdAt: '2024-02-20T14:30:00Z',
        },
        {
            journalId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
            labelKey: 'mad_i_herald',
            data: '{"special_edition": true}',
            title: 'MADI Herald',
            createdAt: '2024-03-10T09:15:00Z',
        },
    ],

    groups: [
        {
            articleGroupId: 'g1-dist-sys',
            journalId: '550e8400-e29b-41d4-a716-446655440000', // Tech Journal
            article_group_title: 'Distributed Systems',
            createdAt: '2024-01-16T11:00:00Z',
        },
        {
            articleGroupId: 'g2-frontend',
            journalId: '550e8400-e29b-41d4-a716-446655440000', // Tech Journal
            article_group_title: 'Modern Frontend',
            createdAt: '2024-01-17T12:00:00Z',
        },
        {
            articleGroupId: 'g3-physics',
            journalId: '6ba7b810-9dad-11d1-80b4-00c04fd430c8', // Science Review
            article_group_title: 'Quantum Physics',
            createdAt: '2024-02-21T15:00:00Z',
        },
        {
            articleGroupId: 'g4-roads',
            journalId: '7c9e6679-7425-40de-944b-e07fc1f90ae7', // MADI Herald
            article_group_title: 'Road Construction Technologies',
            createdAt: '2024-03-11T10:00:00Z',
        },
    ],

    articles: [
        {
            article_item_id: 'a1-go-intro',
            articleGroupId: 'g1-dist-sys',
            article_item_title: 'Introduction to Go Concurrency',
            abstract:
                'This article explains the basics of Go language concurrency primitives like goroutines and channels.',
            keywords: 'go, backend, concurrency, goroutines',
            createdAt: '2024-01-20T09:00:00Z',
            authors: [
                {
                    author_id: 'u1-john',
                    fullName: 'John Doe',
                    bio: 'Senior Backend Developer with 10 years of experience.',
                    email: 'john@example.com',
                    createdAt: '2023-11-01T08:00:00Z',
                },
            ],
        },
        {
            article_item_id: 'a2-grpc-protos',
            articleGroupId: 'g1-dist-sys',
            article_item_title: 'Designing Robust gRPC APIs with Protocol Buffers',
            abstract:
                'A deep dive into best practices for defining .proto files, handling versioning, and ensuring backward compatibility in microservices architecture.',
            keywords: 'grpc, protobuf, microservices, api-design',
            createdAt: '2024-01-22T10:30:00Z',
            authors: [
                {
                    author_id: 'u2-jane',
                    fullName: 'Jane Smith',
                    bio: 'Architect specializing in high-load distributed systems.',
                    email: 'jane@example.com',
                    createdAt: '2023-11-05T09:00:00Z',
                },
            ],
        },
        {
            article_item_id: 'a3-k8s-scaling',
            articleGroupId: 'g1-dist-sys',
            article_item_title: 'Horizontal Pod Autoscaling Strategies in Kubernetes',
            abstract:
                'Analyzing different metrics (CPU, Memory, Custom) for effective HPA configuration to handle traffic spikes without over-provisioning resources.',
            keywords: 'kubernetes, k8s, devops, scaling, cloud-native',
            createdAt: '2024-01-25T14:15:00Z',
            authors: [
                {
                    author_id: 'u3-alex',
                    fullName: 'Alex Johnson',
                    bio: 'DevOps Engineer and CNCF contributor.',
                    email: 'alex@example.com',
                    createdAt: '2023-12-01T10:00:00Z',
                },
                {
                    author_id: 'u2-jane',
                    fullName: 'Jane Smith',
                    bio: 'Architect specializing in high-load distributed systems.',
                    email: 'jane@example.com',
                    createdAt: '2023-11-05T09:00:00Z',
                },
            ],
        },
        {
            article_item_id: 'a4-event-sourcing',
            articleGroupId: 'g1-dist-sys',
            article_item_title: 'Implementing Event Sourcing with Kafka and Go',
            abstract:
                'How to build an immutable audit log and reconstruct state using event sourcing patterns. Practical examples of consumer groups and offset management.',
            keywords: 'event-sourcing, kafka, go, pattern, architecture',
            createdAt: '2024-01-28T11:00:00Z',
            authors: [
                {
                    author_id: 'u4-maria',
                    fullName: 'Maria Garcia',
                    bio: 'Backend Lead focused on event-driven architectures.',
                    email: 'maria@example.com',
                    createdAt: '2023-12-10T08:30:00Z',
                },
            ],
        },
        {
            article_item_id: 'a5-redis-caching',
            articleGroupId: 'g1-dist-sys',
            article_item_title: 'Advanced Caching Patterns with Redis',
            abstract:
                'Exploring Cache-Aside, Write-Through, and Write-Behind patterns. Handling cache invalidation strategies and preventing thundering herd problems.',
            keywords: 'redis, caching, performance, database, backend',
            createdAt: '2024-02-01T09:45:00Z',
            authors: [
                {
                    author_id: 'u1-john',
                    fullName: 'John Doe',
                    bio: 'Senior Backend Developer with 10 years of experience.',
                    email: 'john@example.com',
                    createdAt: '2023-11-01T08:00:00Z',
                },
            ],
        },
        {
            article_item_id: 'a6-distributed-tracing',
            articleGroupId: 'g1-dist-sys',
            article_item_title: 'Observability: Distributed Tracing with OpenTelemetry',
            abstract:
                'Setting up end-to-end tracing across multiple microservices. Integrating OpenTelemetry with Jaeger and Prometheus for better system visibility.',
            keywords: 'observability, tracing, opentelemetry, monitoring, jaeger',
            createdAt: '2024-02-05T16:20:00Z',
            authors: [
                {
                    author_id: 'u5-dmitry',
                    fullName: 'Dmitry Volkov',
                    bio: 'SRE Engineer passionate about observability and reliability.',
                    email: 'dmitry@example.com',
                    createdAt: '2024-01-15T12:00:00Z',
                },
            ],
        },
        {
            article_item_id: 'a2-react-rsc',
            articleGroupId: 'g2-frontend',
            article_item_title: 'Deep Dive into React Server Components',
            abstract:
                'Understanding modern React architecture and how RSC changes the way we build web applications.',
            keywords: 'react, nextjs, rsc, frontend',
            createdAt: '2024-01-22T10:30:00Z',
            authors: [
                {
                    author_id: 'u2-alice',
                    fullName: 'Alice Smith',
                    bio: 'Frontend Architect specializing in React ecosystem.',
                    email: 'alice@example.com',
                    createdAt: '2023-11-05T09:00:00Z',
                },
                {
                    author_id: 'u3-bob',
                    fullName: 'Bob Johnson',
                    bio: 'Fullstack Developer.',
                    email: null, // Пример отсутствия email
                    createdAt: '2023-12-10T11:00:00Z',
                },
            ],
        },
        {
            article_item_id: 'a3-quantum',
            articleGroupId: 'g3-physics',
            article_item_title: 'Advances in Quantum Entanglement',
            abstract:
                'Recent experimental results in quantum entanglement stability at room temperature.',
            keywords: 'physics, quantum, entanglement',
            createdAt: '2024-02-25T14:00:00Z',
            authors: [
                {
                    authorId: 'u4-charlie',
                    fullName: 'Dr. Charlie Brown',
                    bio: 'Professor of Physics at MADI.',
                    email: 'charlie.brown@madi.ru',
                    created_at: '2023-10-15T07:00:00Z',
                },
            ],
        },
        {
            article_item_id: 'a4-asphalt',
            articleGroupId: 'g4-roads',
            article_item_title: 'New Asphalt Mixtures for Cold Climates',
            abstract:
                'Analysis of durability of new polymer-modified asphalt mixtures in severe winter conditions.',
            keywords: 'roads, asphalt, construction, madi',
            created_at: '2024-03-15T11:45:00Z',
            authors: [
                {
                    authorId: 'u1-john', // Тот же автор, что и в первой статье
                    fullName: 'John Doe',
                    bio: 'Senior Backend Developer with 10 years of experience.',
                    email: 'john@example.com',
                    createdAt: '2023-11-01T08:00:00Z',
                },
                {
                    authorId: 'u5-eve',
                    fullName: 'Eve Ivanova',
                    bio: 'Civil Engineering Student.',
                    email: 'eve.student@madi.ru',
                    createdAt: '2024-01-10T12:00:00Z',
                },
            ],
        },
    ],

    authors: [
        {
            authorId: 'u1-john',
            fullName: 'John Doe',
            bio: 'Senior Backend Developer with 10 years of experience.',
            email: 'john@example.com',
        },
        {
            authorId: 'u2-alice',
            fullName: 'Alice Smith',
            bio: 'Frontend Architect specializing in React ecosystem.',
            email: 'alice@example.com',
        },
        {
            authorId: 'u3-bob',
            fullName: 'Bob Johnson',
            bio: 'Fullstack Developer.',
            email: null,
        },
        {
            authorId: 'u4-charlie',
            fullName: 'Dr. Charlie Brown',
            bio: 'Professor of Physics at MADI.',
            email: 'charlie.brown@madi.ru',
        },
        {
            authorId: 'u5-eve',
            fullName: 'Eve Ivanova',
            bio: 'Civil Engineering Student.',
            email: 'eve.student@madi.ru',
            createdAt: '2024-01-10T12:00:00Z',
        },
    ],
}
