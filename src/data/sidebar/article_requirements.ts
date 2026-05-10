import {MenuItem} from "@/models/sidebar_menu";

export const articleRequirements: MenuItem = {
    id:'article_requirements',
    label: 'Подготовка статьи',
    children: [
        {id:'article', label: 'Требования к статье (рукописи)', href: '/journals/article_requirements/article'},
        {id: 'example', label: 'Образец оформления статьи (рукописи)', href: '/journals/article_requirements/example'},
        {id: 'review', label: 'Порядок рецензирования статей. Требования к рецензии', href: '/journals/article_requirements/review'},
        {id: 'author', label: 'Справка об авторе', href: '/journals/article_requirements/author'},
    ]
}