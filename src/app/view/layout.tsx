import styles from "@/app/(main)/page.module.css"
import {ReactNode} from "react";
import Header from "@components/Header/Header";

export default function ViewLayout({children}: {children: ReactNode}) {

    return (
        <html>
            <body>
                <div className={styles.page}>
                    <Header/>
                    <div className={styles.container}>
                        <main className={styles.mainContent}>
                            <div className={styles.intro}>
                                {children}
                            </div>
                        </main>
                    </div>

                </div>
            </body>
        </html>

    )
}