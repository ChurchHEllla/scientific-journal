import { sidebar_menu_data } from '@data/sidebar/sidebar_menu_data';
import {findMenuItemById} from "@/utils/find_menu_item";
import {mockArticle} from "@/articles/journals/article_1";
import {Article} from "@/models/articles";
import JournalArticle from "@components/JournalArticle/JournalArticle";

interface Props {
    params: Promise<{
        journalId: string;
    }>;
}


export default async function JournalPage({ params }: Props) {
    const { journalId } = await params;
    const article: Article = mockArticle

    // 1. Ищем данные журнала в вашем массиве по ID
    const journal = findMenuItemById(sidebar_menu_data, journalId);
    // 2. Если журнал не найден (например, пользователь ввел несуществующий ID)
    if (!journal) {
        return <div>art</div>;
    }
    return (
        <div>
            <p>Это страница журнала с ID: {journalId}</p>
            <JournalArticle a={article}/>
        </div>

    );
}
