// @flow
import type { navigationListPageType } from '@/components/page'
import { ChoseRace, CLASSES_PAGE } from './children-page/classes-tab'
import { Bonuses, BONUSES_PAGE } from './children-page/bonuses'
import { Advantages, ADVANTAGES_PAGE } from './children-page/advantages'

export const CLASSES_LIST_PAGE: navigationListPageType = {
  TITLE: 'Глава 3. Классы',
  URL: '/classes',
  isNavigationPage: true,
  parentUrl: '/',
  DESCRIPTION: [
    `Авантюристы, искатели приключений – эти
        люди ищут золото, славу, справедливость,
        знаменитость, могущество или знания, а
        быть может их зовут в путешествия иные
        причины, возможно благородные, а возможно
        низкие. Каждый из них по своему пытается достигнуть своих целей, выбирая различные пути
        достижения, от грубой боевой силы, до поражающей воображение магии, или с помощью своих мастерских навыков.
        Одних ждут победа и рост в опыте, богатстве и могуществе,
        других… смерть.`,
    `Класс вашего персонажа - это его или её профессия или
        призвание. Именно класс определяет, что он способен делать:
        великолепно сражаться, быть способным в магии, навыках
        или ином. Класс это первый ваш выбор, когда вы решаете начать игру и пытаетесь представить вашего персонажа (иногда
        даже перед тем как решить расу, или возможно очень влияет
        на её выбор). Выбранный вами класс обозначает, как лучше
        вам расположить параметры вашего персонажа, и предположить какая раса будет лучшей, или наиболее удобной для
        этого класса.`,
  ],
  LINKS: [
    {
      DATA: CLASSES_PAGE,
      COMPONENT: ChoseRace,
    },
    {
      DATA: BONUSES_PAGE,
      COMPONENT: Bonuses,
    },
    {
      DATA: ADVANTAGES_PAGE,
      COMPONENT: Advantages,
    },
  ],
}
