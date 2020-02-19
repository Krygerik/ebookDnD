// @flow
import type { navigationListPageType } from '@/components/page'
import { INTRODUCTION_PAGE, Inroduction } from '../introduction'
import { BASES_OF_CREATION, BasesOfCreation } from '../bases-of-creation'
import { PARAMETERS_PAGE, Parameters } from '../parameters'
import { RACE_LIST_PAGE, Racelist } from '../race'
import { CLASSES_LIST_PAGE, Classeslist } from '../classes'

export const CHAPTER_LIST_PAGE: navigationListPageType = {
  TITLE: 'Содержание',
  URL: '/',
  parentUrl: '',
  isNavigationPage: true,
  LINKS: [
    {
      DATA: INTRODUCTION_PAGE,
      COMPONENT: Inroduction,
    },
    {
      DATA: BASES_OF_CREATION,
      COMPONENT: BasesOfCreation,
    },
    {
      DATA: PARAMETERS_PAGE,
      COMPONENT: Parameters,
    },
    {
      DATA: RACE_LIST_PAGE,
      COMPONENT: Racelist,
    },
    {
      DATA: CLASSES_LIST_PAGE,
      COMPONENT: Classeslist,
    },
  ],
}
