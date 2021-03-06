// @flow
import type { pageContentType } from '@/components/page'
import race_mans from '@/assets/race_mans.png'
import race_womans from '@/assets/race_womans.png'

export const CHOSE_RACE_PAGE: pageContentType = {
  TITLE: 'Выбор расы',
  URL: '/race/chose-race',
  isNavigationPage: false,
  parentUrl: '/race',
  TABS: [
    {
      NAME: 'Описание',
      TAB_KEY: 'description',
      PARAGRAPHS: [
        {
          image: [race_mans, race_womans],
          VALUE: [
            `После того как вы набросали свои показатели параметров, прежде чем записать их в карточку игрока, выберите
          вашу расу. В это же время вы выбираете его или её класс,
          так как каждой расе доступны лишь определённые классы.
          Как только вы знаете класс и расу персонажа, распределите
          набросанные вами показатели по параметрам, изменяя их в
          соответствии с корректировками расы персонажа.`,
            `Вы можете играть персонажем любой расы или класса,
          но определенные расы гораздо лучше подходят к определённым классам. Халфлинги, к примеру, могут быть воинами, но
          их маленький рост и расовые особенности делают их гораздо
          более удобными для воров.`,
            `Раса вашего персонажа дает вам массу возможностей для
          игры, вы можете решить каким он будет, как он будет ощущать себя среди других рас, какие мотивы будут руководить
          ним или ней. Однако, помните, что все описания рас рассчитаны на то большинство которое проживает в мире. В каждой
          расе встречаются индивидуальности, отличающиеся от норм,
          и ваш персонаж может быть одним из них. Пусть описание
          расы не ограничивает вашу фантазию от детализации вашего
          персонажа`,
          ],
        },
      ],
    },
  ],
}
