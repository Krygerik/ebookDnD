// @flow
import { INTRODUCTION_PAGE_DATA, Inroduction } from '../introduction'

type ReactComponentType = typeof Inroduction

type pageLinkType = {
  NAME: string,
  URL: string,
  COMPONENT?: ReactComponentType,
}

export type chapterListPageType = {
  TITLE: string,
  URL: string,
  LINKS: Array<pageLinkType>,
}

export const CHAPTER_LIST_PAGE: chapterListPageType = {
  TITLE: 'Содержание',
  URL: '/',
  LINKS: [
    {
      NAME: INTRODUCTION_PAGE_DATA.TITLE,
      URL: INTRODUCTION_PAGE_DATA.URL,
      COMPONENT: Inroduction,
    },
    {
      NAME: 'Основы создания персонажа',
      URL: '',
    },
    {
      NAME: 'Глава 1. Параметры',
      URL: '',
    },
    {
      NAME: 'Глава 2. Расы',
      URL: '',
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
