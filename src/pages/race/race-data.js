// @flow
import type { navigationListPageType } from '@/components/page'
import { ChoseRace, CHOSE_RACE_PAGE } from './children-page/chose-race'

export const RACE_LIST_PAGE: navigationListPageType = {
  TITLE: 'Глава 2. Расы',
  URL: '/race',
  isNavigationPage: true,
  DESCRIPTION: [
    `Союзники эльфов, и сами эльфы считают
        своим домом Эльфийские леса. Вы не найдете
        в них бродящие толпы дварфов или полуорков.
        В тоже время тяжело найти спокойно прогуливающихся в
        подземных городах дварфов/ карликов – эльфов, людей,
        халфлингов или полуорков. И пока не-люди путешествуют
        по провинциям, большинством населения будут простые люди.
        Однако в больших городах вы встретите большинство
        распространенных рас: люди, эльфы, дварфы, гномы,
        полуэльфы, полуорки, халфлинги, надежда на достижение
        силы, могущества, прибыли соединяет их в одном месте.`,
  ],
  LINKS: [
    {
      NAME: CHOSE_RACE_PAGE.TITLE,
      URL: CHOSE_RACE_PAGE.URL,
      COMPONENT: ChoseRace,
    },
    {
      NAME: 'Рассовые характеристики',
      URL: '',
    },
    {
      NAME: 'Человек',
      URL: '',
    },
    {
      NAME: 'Гномы',
      URL: '',
    },
    {
      NAME: 'Дварфы / Карлики',
      URL: '',
    },
    {
      NAME: 'Полуорки',
      URL: '',
    },
    {
      NAME: 'Полуэльфы',
      URL: '',
    },
    {
      NAME: 'Халфлинги',
      URL: '',
    },
    {
      NAME: 'Эльфы',
      URL: '',
    },
    {
      NAME: 'Маленькие персонажи',
      URL: '',
    },
  ],
}
