// @flow
import type { navigationListPageType } from '@/components/page'
import { ChoseRace, CHOSE_RACE_PAGE } from './children-page/chose-race'
import { RaceParams, RACE_PARAMS_PAGE } from './children-page/race-params'
import { HumanPage, HUMAN_PAGE } from './children-page/human'
import { GnomePage, GNOME_PAGE } from './children-page/gnome'
import { DwarfPage, DWARF_PAGE } from './children-page/dwarf'
import { HalfOrcPage, HALF_ORC_PAGE } from './children-page/half-orc'

export const RACE_LIST_PAGE: navigationListPageType = {
  TITLE: 'Глава 2. Расы',
  URL: '/race',
  isNavigationPage: true,
  parentUrl: '/',
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
      DATA: CHOSE_RACE_PAGE,
      COMPONENT: ChoseRace,
    },
    {
      DATA: RACE_PARAMS_PAGE,
      COMPONENT: RaceParams,
    },
    {
      DATA: HUMAN_PAGE,
      COMPONENT: HumanPage,
    },
    {
      DATA: GNOME_PAGE,
      COMPONENT: GnomePage,
    },
    {
      DATA: DWARF_PAGE,
      COMPONENT: DwarfPage,
    },
    {
      DATA: HALF_ORC_PAGE,
      COMPONENT: HalfOrcPage,
    },
  ],
}
