'use client'

import { createContext, useContext, useState } from 'react'
import type { Init } from '@/models/articles'

const InitContext = createContext<any>(null)

export function InitProvider({
    initial,
    children,
}: {
    initial: Init | null
    children: React.ReactNode
}) {
    const [init, setInit] = useState(initial)

    return <InitContext.Provider value={{ init, setInit }}>{children}</InitContext.Provider>
}

export function useInit() {
    return useContext(InitContext)
}
