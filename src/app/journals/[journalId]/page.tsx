import { sidebarMenuData } from '@data/SidebarMenuData';
import {findMenuItemById} from "@/lib/findMenuItemByHref";

// Типизация пропсов
type Props = {
    params: Promise<{
        journalId: string;
    }>;
};

export default async function JournalPage({ params }: Props) {
    const { journalId } = await params;

    // 1. Ищем данные журнала в вашем массиве по ID
    const journal = findMenuItemById(sidebarMenuData, journalId);
    // 2. Если журнал не найден (например, пользователь ввел несуществующий ID)
    if (!journal) {
        return <div>Журнал не найден</div>;
    }

    return (
        <div>
            <h1>{journal.label}</h1>
            <p>Это страница журнала с ID: {journalId}</p>
            {/* Здесь можно вывести список статей или контент этого журнала */}
            <ul>
                {journal.children?.map((child) => (
                    <li key={child.id}>
                        {/* Обратите внимание: ссылки внутри тоже должны быть корректными */}
                        <a href={child.href}>{child.label}</a>
                    </li>
                ))}
            </ul>
        </div>

    );
}