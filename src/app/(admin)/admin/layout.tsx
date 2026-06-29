import type { ReactNode } from 'react'
import styles from '@/app/(admin)/admin/page.module.css'
import stylesMain from '@/app/(admin)/admin/page.module.css'
import SidebarItems from '@components/admin/SidebarItems/SidebarItems'
import { getInit } from '@/api/client'
import { InitProvider } from '@/app/(admin)/admin/provider'
import SidebarMenu from '@components/site/SidebarMenu/SidebarMenu'

export default async function AdminLayout({ children }: { children: ReactNode }) {
    const init = await getInit()
    return (
        <html>
            <body>
                <InitProvider initial={init}>
                    <div className={styles.layout}>
                        <div>
                            <SidebarItems />
                        </div>
                        <main className={styles.content}>{children}</main>
                    </div>
                </InitProvider>
            </body>
        </html>
    )
}
