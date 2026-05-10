
/*
Модель описания статей
*/
export interface ArticleResponse {
    articles: Article[];
    status: string;
}
export interface Article{
    data: string;
    articleTitle: string;
    articleGroups: ArticleGroup[];
}
export interface ArticleGroup{
    articleGroupTitle: string;
    articleItems: ArticleItem[];
}

export interface ArticleItem {
    articleItemTitle: string;
    authors: Author[];
    abstract: string;
    keywords: string[];
    references: string[];

}

export interface Author {
   name: string;
   bio: string;
}