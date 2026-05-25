/**
 * Рекурсивно ищет элемент меню по ID во всей древовидной структуре
 */
import type { MenuItem } from '@/models/sidebar_menu'

export function findMenuItemById(items: MenuItem[], targetId: string): MenuItem | undefined {
    for (const item of items) {
        if (item.id === targetId) {
            return item
        }
        if (item.children && item.children.length > 0) {
            const found = findMenuItemById(item.children, targetId)
            if (found) {
                return found
            }
        }
    }
    return undefined
}
