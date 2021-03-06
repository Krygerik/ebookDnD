// @flow
import type { navigationListPageType } from '@/components/page'
import { childrenDataList } from './children-page'

export const TRAITS_LIST_PAGE: navigationListPageType = {
  TITLE: 'Глава 5. Отличительные черты',
  URL: '/skills',
  isNavigationPage: true,
  parentUrl: '/',
  DESCRIPTION: [
    `Отличительная черта это особенность вашего
    персонажа, дающая ему новые способности
    или улучшая его. К примеру, Лидда (вор
    халфлинг) выбирает, что на 1-м уровне она
    начнёт с чертой Улучшенная Инициатива. Она
    даст +4 бонус к проверкам её инициативы. На
    третьем уровне (смотрите Таблицу 3-2: Опыт
    и Преимущества зависящие от Уровня, стр. 22),
    она получает новую отличительную черту и выбирает Уворачивание. Эта черта позволит ей избегать атак выбранного
    противника, улучшая её Класс Доспеха против него`,
    `В отличие от навыков, отличительные черты не имеют рангов. Персонаж или имеет, или не имеет отличительную черту`,
  ],
  LINKS: childrenDataList,
}
