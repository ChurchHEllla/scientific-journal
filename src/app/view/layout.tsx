import type { ReactNode } from 'react'

export default function ViewLayout({ children }: { children: ReactNode }) {
    return (
        <html>
            <body>{children}</body>
        </html>
    )
}
