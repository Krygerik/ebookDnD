// @flow
export const INTRODUCTION = 'introduction'

type pageLinkType = {
  name: string,
  key: string,
}

export type chapterListPageType = {
  title: string,
  url: string,
  links: Array<pageLinkType>,
}

export const chapterListPage: chapterListPageType = {
  title: 'Содержание',
  url: '/',
  links: [
    {
      name: 'Введение',
      key: INTRODUCTION,
    },
    {
      name: 'Основы создания персонажа',
      key: '',
    },
    {
      name: 'Глава 1. Параметры',
      key: '',
    },
    {
      name: 'Глава 2. Расы',
      key: '',
    },
    {
      name: 'Глава 3. Классы',
      key: '',
    },
    {
      name: 'Глава 4. Навыки',
      key: '',
    },
    {
      name: 'Глава 5. Отличительные черты',
      key: '',
    },
    {
      name: 'Глава 6. Описание',
      key: '',
    },
    {
      name: 'Глава 7. Снаряжение',
      key: '',
    },
    {
      name: 'Глава 8. Сражение',
      key: '',
    },
    {
      name: 'Глава 9. Авантюры',
      key: '',
    },
    {
      name: 'Глава 10. Магия',
      key: '',
    },
    {
      name: 'Глава 11. Заклинания',
      key: '',
    },
    {
      name: 'Приложение: Общие справки и глоссарий',
      key: '',
    },
    {
      name: 'Индекс',
      key: '',
    },
    {
      name: 'Карточка игрока',
      key: '',
    },
    {
      name: 'Список представленных в книге таблиц',
      key: '',
    },
  ],
}
