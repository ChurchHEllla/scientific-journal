import { sidebarMenuData } from '@data/sidebar/sidebarMenuData';
import {findMenuItemById} from "@/lib/findMenuItemByHref";
import PdfViewer from '@components/PdfViewer';

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
            <h1>{journal?.label}</h1>
            <p>Это страница журнала с ID: {journalId}</p>
            <PdfViewer fileUrl="/assets/about.pdf"/>
        </div>

    );
}
