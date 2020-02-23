// @flow
import type { navigationListPageType } from '@/components/page'
import {
  CHOSE_RACE_PAGE,
  DWARF_PAGE,
  RACE_PARAMS_PAGE,
  HUMAN_PAGE,
  GNOME_PAGE,
  HALF_ORC_PAGE,
  HALF_ELF_PAGE,
  HALFLING_PAGE,
  ELF_PAGE,
  SMALL_CHARACTERS_PAGE,
} from './children-page'

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
    },
    {
      DATA: RACE_PARAMS_PAGE,
    },
    {
      DATA: HUMAN_PAGE,
    },
    {
      DATA: GNOME_PAGE,
    },
    {
      DATA: DWARF_PAGE,
    },
    {
      DATA: HALF_ORC_PAGE,
    },
    {
      DATA: HALF_ELF_PAGE,
    },
    {
      DATA: HALFLING_PAGE,
    },
    {
      DATA: ELF_PAGE,
    },
    {
      DATA: SMALL_CHARACTERS_PAGE,
    },
  ],
}
