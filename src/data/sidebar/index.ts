import type { MenuItem } from '@/models/sidebar_menu'
import { journals } from '@data/sidebar/sidebar_items/journals'
import { journalInfo } from '@data/sidebar/sidebar_items/journal_info'
import { articleRequirements } from '@data/sidebar/sidebar_items/article_requirements'

export const index: MenuItem[] = [journalInfo, articleRequirements, journals]
