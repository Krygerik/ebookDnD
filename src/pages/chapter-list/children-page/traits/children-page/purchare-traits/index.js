// @flow
import type { pageContentType } from '@/components/page'

export const PURCHARE_TRAITS_PAGE: pageContentType = {
  TITLE: 'Приобретение отличительных черт',
  URL: '/traits/purchare-traits',
  isNavigationPage: false,
  parentUrl: '/traits',
  TABS: [
    {
      NAME: 'Описание',
      TAB_KEY: 'description',
      PARAGRAPHS: [
        {
          VALUE: [
            `В отличие от навыков, вы не приобретаете черты за пункты,
            вы их просто выбираете для вашего персонажа. Каждый персонаж при создании получает одну отличительную черту. На
            третьем уровне, и через каждые три последующих уровня
            (6, 9, 12-й, 15-й, и 18-й), он или она получает новый навык
            (смотрите Таблицу 3-2: Опыт и Преимущества зависящие от
            Уровня стр.22). Мультиклассовые персонажи получают новую черту при подсчете его суммарного уровня классов, а не
            от развития каждого класса индивидуально`,
            `Кроме этого, представители некоторых классов получают
            бонусные черты как классовые особенности. Эти отличительные черты, связанные с классом, указаны в специальных списках (смотрите Бонусные Черты Воина ниже, и отдельные
            описания классов в 3 Главе)`,
            `Персонажи люди получают одну дополнительную черту
            на первом уровне, выбирая её из списка отличительных черт`,
          ],
        },
      ],
    },
  ],
}
