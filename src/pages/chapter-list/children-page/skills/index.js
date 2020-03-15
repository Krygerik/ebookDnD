// @flow
import type { navigationListPageType } from '@/components/page'
import { childrenDataList } from './children-page'

export const SKILLS_LIST_PAGE: navigationListPageType = {
  TITLE: 'Глава 4. Навыки',
  URL: '/skills',
  isNavigationPage: true,
  parentUrl: '/',
  DESCRIPTION: [
    `Мошенница Лидда способна прокрасться бесшумно к дверям, приложить ухо и услышать,
    как жрец троглодит активирует заклинание
    на своё домашнее животное – адскую гончую.
    Если же жрец Джозан попытается делать то же
    самое, то скорее всего, он наделает столько шума,
    что его услышит адская гончая. Однако, он способен узнать какое заклинание активирует злой жрец. Все эти
    действия очень зависят от навыков этих персонажей (в этом
    примере использовались Бесшумное Передвижение, Искусство Магии и Прислушивание)`,
  ],
  LINKS: childrenDataList,
}
