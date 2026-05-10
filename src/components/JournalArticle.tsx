import {Article, ArticleGroup, ArticleItem} from "@/models/articles";

export default function JournalArticle({a}: {a: Article}) {
    return (
            <div>
                <h3 style={{textAlign: 'center'}}>{a.articleTitle}</h3>
                <hr/>
                {a.articleGroups.map((group: ArticleGroup) => (
                    <section key={group.articleGroupTitle}>

                        <h4>{group.articleGroupTitle}</h4>

                        {group.articleItems.map((item: ArticleItem) => (

                            <section key={item.articleItemTitle}>

                                <h5>{item.articleItemTitle}</h5>

                            </section>

                        ))}

                    </section>
                ) )}
            </div>
    )

}