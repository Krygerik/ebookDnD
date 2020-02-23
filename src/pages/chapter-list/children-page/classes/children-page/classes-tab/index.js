// @flow
import type { pageContentType } from '@/components/page'

export const CLASSES_PAGE: pageContentType = {
  TITLE: 'Классы',
  URL: '/classes/classes',
  isNavigationPage: false,
  parentUrl: '/classes',
  TABS: [
    {
      NAME: 'Описание',
      TAB_KEY: 'description',
      PARAGRAPHS: [
        {
          VALUE: [
            `Одиннадцать классов представлены в этой главе в следующем порядке:`,
          ],
        },
        {
          LABEL: `Бард`,
          VALUE: [
            `Актер, чья музыка равносильна магии – путешественник, сказочник, исполнитель баллад и хороший торговец`,
          ],
        },
        {
          LABEL: `Варвар`,
          VALUE: [
            `Дикий, сильный воин, использующий свою ярость и инстинкты для победы над врагами`,
          ],
        },
        {
          LABEL: `Воин`,
          VALUE: [
            `Боец с исключительными боевыми навыками и непревзойденными способностями владения оружием`,
          ],
        },
        {
          LABEL: `Вор`,
          VALUE: [
            `Искусный, умелый разведчик и шпион, его победа достигается путем скрытных ударов из тени, а не грубой силой`,
          ],
        },
        {
          LABEL: `Друид`,
          VALUE: [
            `Тот, кто способен использовать энергию живого мира, чтобы
            применять заклинания и обладать таинственными магическими силами`,
          ],
        },
        {
          LABEL: `Жрец/Священник`,
          VALUE: [`Мастер божественной магии, а также неплохой воин`],
        },
        {
          LABEL: `Маг/Волшебник`,
          VALUE: [
            `Могущественный заклинатель, обученный искусству тайных наук`,
          ],
        },
        {
          LABEL: `Монах`,
          VALUE: [
            `Искусный боец рукопашного боя, чьи удары рук и ног быстры и беспощадны – мастер экзотических умений`,
          ],
        },
        {
          LABEL: `Паладин`,
          VALUE: [
            `Рыцарь справедливости и уничтожитель зла,
            защищенный и усиленный владением божественных сил`,
          ],
        },
        {
          LABEL: `Рейнджер`,
          VALUE: [`Хитрый, ловкий, умелый воин дикой лесной местности`],
        },
        {
          LABEL: `Чародей`,
          VALUE: [`Заклинатель с врожденными способностями к магии`],
        },
        {
          LABEL: `Сокращённые название классов`,
          VALUE: [
            `В тексте встречаются следующие сокращения:`,
            `Брд – Бард, Вв – Варвар, Вн – Воин, Вор – Вор,
            Дрд – Друид, Жр/Св – Жрец/ Священник, Маг/Волш – Маг/Волшебник, Мнх – Монах,
            Пал – Паладин, Рджр – Рейнджер, Чар – Чародей`,
          ],
        },
        {
          LABEL: `Мультиклассовый персонаж`,
          VALUE: [
            `Достигая и развиваясь в уровнях, ваш персонаж может
            добавить новый класс. Добавление нового класса дает
            персонажу широкий круг возможностей, но новые возможности стоят персонажу его старых возможностей
            класса. К примеру маг пожелавший стать магом/воином. Новый класс воина даст ему квалификацию в
            большинстве оружия, лучшие спасброски Стойкости, и т.д., но ведь это и значит, что он не сможет
            качественно развиться и получить новые магические
            силы, он не сможет стать могущественным волшебником. Так как в противном случае он должен остаться лишь магом и развиваться в классе мага. Правила
            по созданию и развитию мультиклассовых персонажей приведены в конце этой главы`,
          ],
        },
      ],
    },
  ],
}