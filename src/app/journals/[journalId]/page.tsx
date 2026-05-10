import { sidebarMenuData } from '@data/sidebar/sidebarMenuData';
import {findMenuItemById} from "@/utils/findMenuItemByHref";
import PdfViewer from '@components/PdfViewer';
import {mockArticle} from "@/articles/journals/article_1";
import {Article} from "@/models/articles";
import JournalArticle from "@components/JournalArticle";

interface Props {
    params: Promise<{
        journalId: string;
    }>;
}


export default async function JournalPage({ params }: Props) {
    const { journalId } = await params;
    const article: Article = mockArticle

    // 1. Ищем данные журнала в вашем массиве по ID
    const journal = findMenuItemById(sidebarMenuData, journalId);
    // 2. Если журнал не найден (например, пользователь ввел несуществующий ID)
    if (!journal) {
        return <div>art</div>;
    }
    return (
        <div>
            <h1>{journal?.label}</h1>
            <JournalArticle a={article}/>
            <p>Это страница журнала с ID: {journalId}</p>
            <PdfViewer fileUrl="/assets/about.pdf"/>
        </div>

    );
}
