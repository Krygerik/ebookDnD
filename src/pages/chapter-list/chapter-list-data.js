// @flow
import { INTRODUCTION_PAGE, Inroduction } from '../introduction'
import { BASES_OF_CREATION, BasesOfCreation } from '../bases-of-creation'
import { PARAMETERS_PAGE, Parameters } from '../parameters'
import { RACE_LIST_PAGE, Racelist } from '../race'
import type { navigationListPageType } from '@/components/page'

export const CHAPTER_LIST_PAGE: navigationListPageType = {
  TITLE: 'Содержание',
  URL: '/',
  isNavigationPage: true,
  LINKS: [
    {
      NAME: INTRODUCTION_PAGE.TITLE,
      URL: INTRODUCTION_PAGE.URL,
      COMPONENT: Inroduction,
    },
    {
      NAME: BASES_OF_CREATION.TITLE,
      URL: BASES_OF_CREATION.URL,
      COMPONENT: BasesOfCreation,
    },
    {
      NAME: PARAMETERS_PAGE.TITLE,
      URL: PARAMETERS_PAGE.URL,
      COMPONENT: Parameters,
    },
    {
      NAME: RACE_LIST_PAGE.TITLE,
      URL: RACE_LIST_PAGE.URL,
      COMPONENT: Racelist,
    },
    {
      NAME: 'Глава 3. Классы',
      URL: '',
    },
    {
      NAME: 'Глава 4. Навыки',
      URL: '',
    },
    {
      NAME: 'Глава 5. Отличительные черты',
      URL: '',
    },
    {
      NAME: 'Глава 6. Описание',
      URL: '',
    },
    {
      NAME: 'Глава 7. Снаряжение',
      URL: '',
    },
    {
      NAME: 'Глава 8. Сражение',
      URL: '',
    },
    {
      NAME: 'Глава 9. Авантюры',
      URL: '',
    },
    {
      NAME: 'Глава 10. Магия',
      URL: '',
    },
    {
      NAME: 'Глава 11. Заклинания',
      URL: '',
    },
    {
      NAME: 'Приложение: Общие справки и глоссарий',
      URL: '',
    },
    {
      NAME: 'Индекс',
      URL: '',
    },
    {
      NAME: 'Карточка игрока',
      URL: '',
    },
    {
      NAME: 'Список представленных в книге таблиц',
      URL: '',
    },
  ],
}
