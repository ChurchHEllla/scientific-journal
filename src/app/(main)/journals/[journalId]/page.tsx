import { sidebar_menu_data } from '@data/sidebar/sidebar_menu_data';
import {findMenuItemById} from "@/utils/find_menu_item";
import type {Journal} from "@/models/articles";
import JournalArticle from "@components/JournalArticle/JournalArticle";
import {journals} from "@data/articles";

interface Props {
    params: Promise<{
        journalId: string;
    }>;
}


export default async function JournalPage({ params }: Props) {
    const { journalId } = await params;
    const article: Journal = journals[journalId]

    // 1. Ищем данные журнала в вашем массиве по ID
    const journal = findMenuItemById(sidebar_menu_data, journalId);
    // 2. Если журнал не найден (например, пользователь ввел несуществующий ID)
    if (!journal || !article) {
        return <div>art</div>;
    }
    return (
        <div>
            <p>Это страница журнала с ID: {journalId}</p>
            <JournalArticle a={article}/>
        </div>

    );
}
