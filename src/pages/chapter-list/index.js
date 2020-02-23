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
    {
      DATA: INTRODUCTION_PAGE,
    },
    {
      DATA: BASES_OF_CREATION,
    },
    {
      DATA: PARAMETERS_PAGE,
    },
    {
      DATA: RACE_LIST_PAGE,
    },
    {
      DATA: CLASSES_LIST_PAGE,
    },
  ],
}
