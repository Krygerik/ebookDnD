// @flow
import type { navigationListPageType } from '@/components/page'
import { childrenDataList } from './children-page'

export const CHAPTER_LIST_PAGE: navigationListPageType = {
  TITLE: 'Содержание',
  URL: '/',
  parentUrl: '',
  isNavigationPage: true,
  LINKS: childrenDataList,
}
