// Типизация элемента меню (адаптируйте под вашу структуру)
type MenuItem = {
    id: string;
    label: string;
    href?: string;
    children?: MenuItem[];
};

/**
 * Рекурсивно ищет элемент меню по ID во всей древовидной структуре
 */
export function findMenuItemById(
    items: MenuItem[],
    targetId: string
): MenuItem | undefined {
    for (const item of items) {
        if (item.id === targetId) {
            return item;
        }
        if (item.children && item.children.length > 0) {
            const found = findMenuItemById(item.children, targetId);
            if (found) {
                return found;
            }
        }
    }
    return undefined;
}

export function findMenuItemByHref(
    items: MenuItem[],
    targetHref: string
): MenuItem | undefined {
    for (const item of items) {
        if (item.href === targetHref) {
            return item;
        }
        if (item.children?.length) {
            const found = findMenuItemByHref(item.children, targetHref);
            if (found) return found;
        }
    }
    return undefined;
}