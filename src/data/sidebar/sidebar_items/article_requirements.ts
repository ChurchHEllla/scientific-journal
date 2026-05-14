import type { MenuItem } from '@/models/sidebar_menu'

const article_requirements_base = '/article_requirements'

export const articleRequirements: MenuItem = {
  id: 'article-requirements',
  label: 'Подготовка статьи',
  children: [
    {
      id: 'article',
      label: 'Требования к статье (рукописи)',
      href: `${article_requirements_base}/article`,
    },
    {
      id: 'example',
      label: 'Образец оформления статьи (рукописи)',
      href: `${article_requirements_base}/example`,
    },
    {
      id: 'review',
      label: 'Порядок рецензирования статей. Требования к рецензии',
      href: `${article_requirements_base}/review`,
    },
    {
      id: 'author',
      label: 'Справка об авторе',
      href: `${article_requirements_base}/author`,
    },
  ],
}
