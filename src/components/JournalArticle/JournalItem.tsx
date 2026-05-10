import {ArticleItem} from "@/models/articles";
import {useState} from "react";
import styles from "./JournalItem.module.css"

export default function JournalItem({a}: {a: ArticleItem}) {
    const [isOpen, setIsOpen] = useState(false);

    return(
       <div>
            <a
                onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(!isOpen)
                }}
                aria-expanded={isOpen}
                className={`${styles.link} ${styles.labelLink}`}
            >
                {a.articleItemTitle}
            </a>
           <p style={{textAlign: 'justify'}}>
               <b>Авторы:</b>
           </p>
           {a.authors.map(author => (
               <p key={author.fullName}>
                   <b>{author.fullName}, </b>
                   {author.bio}, <a className={styles.link} href={'mailto:' + author.email}>{author.email}</a>
               </p>
           ))}

           <div className={`${styles.content} ${isOpen ? styles.open : ''}`}>
                <p style={{textAlign: 'justify'}}>
                    <b>Аннотация:</b>
                    <br/>
                    <i>{a.abstract}</i>
                </p>
           </div>
       </div>
    )
}