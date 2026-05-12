import styles from "@/app/(main)/page.module.css"
import {ReactNode} from "react";

export default function ViewLayout({children}: {children: ReactNode}) {

    return (
        <html>
            <body>
                <div className={styles.page}>
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