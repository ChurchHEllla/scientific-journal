// Предположим, что эти типы импортированы из файла с определениями
import { Journal, ArticleGroup, ArticleItem, Author } from '@/models/responses' // путь к вашим типам

// Интерфейс для ответа инициализации (если он еще не определен)
export interface InitResponse {
    journals: Journal[]
    groups: ArticleGroup[]
    articles: (ArticleItem & { authors: Author[] })[] // Статья с вложенными авторами для удобства отображения
    authors: Author[]
}

const mockData: InitResponse = {
    journals: [
        {
            journal_id: '550e8400-e29b-41d4-a716-446655440000',
            label_key: 'tech_journal_2024',
            data: '{"issue": "1", "year": 2024}',
            article_title: 'Tech Journal',
            created_at: '2024-01-15T10:00:00Z',
        },
        {
            journal_id: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
            label_key: 'science_review_q1',
            data: '{"volume": "12"}',
            article_title: 'Science Review',
            created_at: '2024-02-20T14:30:00Z',
        },
        {
            journal_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
            label_key: 'mad_i_herald',
            data: '{"special_edition": true}',
            article_title: 'MADI Herald',
            created_at: '2024-03-10T09:15:00Z',
        },
    ],

    groups: [
        {
            article_group_id: 'g1-dist-sys',
            journal_id: '550e8400-e29b-41d4-a716-446655440000', // Tech Journal
            article_group_title: 'Distributed Systems',
            created_at: '2024-01-16T11:00:00Z',
        },
        {
            article_group_id: 'g2-frontend',
            journal_id: '550e8400-e29b-41d4-a716-446655440000', // Tech Journal
            article_group_title: 'Modern Frontend',
            created_at: '2024-01-17T12:00:00Z',
        },
        {
            article_group_id: 'g3-physics',
            journal_id: '6ba7b810-9dad-11d1-80b4-00c04fd430c8', // Science Review
            article_group_title: 'Quantum Physics',
            created_at: '2024-02-21T15:00:00Z',
        },
        {
            article_group_id: 'g4-roads',
            journal_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7', // MADI Herald
            article_group_title: 'Road Construction Technologies',
            created_at: '2024-03-11T10:00:00Z',
        },
    ],

    articles: [
        {
            article_item_id: 'a1-go-intro',
            article_group_id: 'g1-dist-sys',
            article_item_title: 'Introduction to Go Concurrency',
            abstract:
                'This article explains the basics of Go language concurrency primitives like goroutines and channels.',
            keywords: 'go, backend, concurrency, goroutines',
            created_at: '2024-01-20T09:00:00Z',
            authors: [
                {
                    author_id: 'u1-john',
                    full_name: 'John Doe',
                    bio: 'Senior Backend Developer with 10 years of experience.',
                    email: 'john@example.com',
                    created_at: '2023-11-01T08:00:00Z',
                },
            ],
        },
        {
            article_item_id: 'a2-react-rsc',
            article_group_id: 'g2-frontend',
            article_item_title: 'Deep Dive into React Server Components',
            abstract:
                'Understanding modern React architecture and how RSC changes the way we build web applications.',
            keywords: 'react, nextjs, rsc, frontend',
            created_at: '2024-01-22T10:30:00Z',
            authors: [
                {
                    author_id: 'u2-alice',
                    full_name: 'Alice Smith',
                    bio: 'Frontend Architect specializing in React ecosystem.',
                    email: 'alice@example.com',
                    created_at: '2023-11-05T09:00:00Z',
                },
                {
                    author_id: 'u3-bob',
                    full_name: 'Bob Johnson',
                    bio: 'Fullstack Developer.',
                    email: null, // Пример отсутствия email
                    created_at: '2023-12-10T11:00:00Z',
                },
            ],
        },
        {
            article_item_id: 'a3-quantum',
            article_group_id: 'g3-physics',
            article_item_title: 'Advances in Quantum Entanglement',
            abstract:
                'Recent experimental results in quantum entanglement stability at room temperature.',
            keywords: 'physics, quantum, entanglement',
            created_at: '2024-02-25T14:00:00Z',
            authors: [
                {
                    author_id: 'u4-charlie',
                    full_name: 'Dr. Charlie Brown',
                    bio: 'Professor of Physics at MADI.',
                    email: 'charlie.brown@madi.ru',
                    created_at: '2023-10-15T07:00:00Z',
                },
            ],
        },
        {
            article_item_id: 'a4-asphalt',
            article_group_id: 'g4-roads',
            article_item_title: 'New Asphalt Mixtures for Cold Climates',
            abstract:
                'Analysis of durability of new polymer-modified asphalt mixtures in severe winter conditions.',
            keywords: 'roads, asphalt, construction, madi',
            created_at: '2024-03-15T11:45:00Z',
            authors: [
                {
                    author_id: 'u1-john', // Тот же автор, что и в первой статье
                    full_name: 'John Doe',
                    bio: 'Senior Backend Developer with 10 years of experience.',
                    email: 'john@example.com',
                    created_at: '2023-11-01T08:00:00Z',
                },
                {
                    author_id: 'u5-eve',
                    full_name: 'Eve Ivanova',
                    bio: 'Civil Engineering Student.',
                    email: 'eve.student@madi.ru',
                    created_at: '2024-01-10T12:00:00Z',
                },
            ],
        },
    ],

    authors: [
        {
            author_id: 'u1-john',
            full_name: 'John Doe',
            bio: 'Senior Backend Developer with 10 years of experience.',
            email: 'john@example.com',
            created_at: '2023-11-01T08:00:00Z',
        },
        {
            author_id: 'u2-alice',
            full_name: 'Alice Smith',
            bio: 'Frontend Architect specializing in React ecosystem.',
            email: 'alice@example.com',
            created_at: '2023-11-05T09:00:00Z',
        },
        {
            author_id: 'u3-bob',
            full_name: 'Bob Johnson',
            bio: 'Fullstack Developer.',
            email: null,
            created_at: '2023-12-10T11:00:00Z',
        },
        {
            author_id: 'u4-charlie',
            full_name: 'Dr. Charlie Brown',
            bio: 'Professor of Physics at MADI.',
            email: 'charlie.brown@madi.ru',
            created_at: '2023-10-15T07:00:00Z',
        },
        {
            author_id: 'u5-eve',
            full_name: 'Eve Ivanova',
            bio: 'Civil Engineering Student.',
            email: 'eve.student@madi.ru',
            created_at: '2024-01-10T12:00:00Z',
        },
    ],
}

export default mockData
