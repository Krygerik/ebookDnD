// @flow
import type { navigationListPageType } from '@/components/page'
import {
  BASES_OF_CREATION,
  INTRODUCTION_PAGE,
  PARAMETERS_PAGE,
  RACE_LIST_PAGE,
  CLASSES_LIST_PAGE,
} from './children-page'

export const CHAPTER_LIST_PAGE: navigationListPageType = {
  TITLE: 'Содержание',
  URL: '/',
  parentUrl: '',
  isNavigationPage: true,
  LINKS: [
    INTRODUCTION_PAGE,
    BASES_OF_CREATION,
    PARAMETERS_PAGE,
    RACE_LIST_PAGE,
    CLASSES_LIST_PAGE,
  ],
}
