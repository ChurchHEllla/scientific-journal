import {MenuItem} from "@/models/sidebar_menu";
import {journals} from "@data/sidebar/journals";
import {journalInfo} from "@data/sidebar/journal_info";
import {articleRequirements} from "@data/sidebar/article_requirements";

export const sidebar_menu_data: MenuItem[] = [
    journalInfo,
    articleRequirements,
    journals,
];

