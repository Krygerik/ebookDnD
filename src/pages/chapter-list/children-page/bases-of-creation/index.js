// @flow
import type { pageContentType } from '@/components/page'

export const BASES_OF_CREATION: pageContentType = {
  TITLE: 'Основы создания персонажа',
  URL: '/bases-of-creation-char',
  parentUrl: '/',
  isNavigationPage: false,
  TABS: [
    {
      NAME: 'Описание',
      TAB_KEY: 'description',
      PARAGRAPHS: [
        {
          VALUE: [
            `Просмотрите с 1 по 5 Главы, а затем следуя этим шагам создайте
                персонажа 1-го уровня. Из материала вам понадобятся: копия
                карточки игрока, карандаш, несколько листов бумаги для
                различных записей, и четыре шестигранных кубика`,
          ],
        },
      ],
    },
    {
      NAME: 'Посоветуйтесь с вашим мастером подземелий',
      TAB_KEY: 'consult',
      PARAGRAPHS: [
        {
          VALUE: [
            `У вашего МП могут свои домашние правила. Вам также
                нужно будет поинтересоваться какие персонажи (их классы,
                расы) уже участвуют в игре, для того, что бы ваш персонаж
                хорошо гармонировал в группе.`,
          ],
        },
      ],
    },
    {
      NAME: 'Набросайте показатели параметров',
      TAB_KEY: 'sketch',
      PARAGRAPHS: [
        {
          VALUE: [
            `Набросайте каждый из параметров. Для этого, бросьте
                четыре шестигранника, игнорируя самый нижний показатель,
                и просуммируйте оставшиеся три. Запишите все шесть
                результатов на черновой бумаге.`,
            `Для дополнительных деталей смотрите Главу 1 (на
                следующей странице).`,
          ],
        },
      ],
    },
    {
      NAME: 'Выберите класс и расу',
      TAB_KEY: 'chose-class-and-race',
      PARAGRAPHS: [
        {
          VALUE: [
            `Выберите одновременно расу и класс для вашего персонажа,
                так как некоторые расы более удобны для некоторых классов.
                Классы приведенные Главе 3: бард, варвар, воин, вор, друид,
                жрец, маг, монах, паладин, рейнджер, чародей. В разделе
                «Расы» вы сможете посмотреть какие расы и классы наиболее
                совместимы. Расы рассмотренные в Главе 2: дварф, гном,
                полу-орк, полу-эльф, халфлинг, человек, эльф.`,
            `Запишите на карточке выбранные расу и класс`,
          ],
        },
      ],
    },
    {
      NAME: 'Распределите и откорректируйте параметры',
      TAB_KEY: 'distribute',
      PARAGRAPHS: [
        {
          VALUE: [
            `Теперь зная расу и класс вашего персонажа, соответственно
                показателей ваших шести способностей, которые вы кидали в
                1 пункте: Сила, Ловкость, Телосложение, Интеллект, Мудрость
                и Обаяние, модифицируйте их вверх и вниз соответственно с
                расой вашего персонажа, модификаторы указаны в Таблице
                2-1: Расовые модификаторы параметров (стр. 12)`,
            `Самые высокие показатели ставьте для поддержки вашего
                выбора класса. В каждом описании класса есть заголовок
                «Параметры», в котором указаны наиболее важные параметры
                для класса, и советы относительно их.`,
            `Для каждого параметра запишите модификатор. Смотрите
                в Таблице 1-1: Модификаторы параметров и Бонусные
                заклинания (стр. 8). Модификаторы параметров оказывают
                влияние на множество бросков кубиков в игре, включая:
                броски атаки, броски повреждений, проверки навыков и спасброски`,
            `Запишите на карточке откорректированные показатели
                параметров и их модификаторы. `,
          ],
        },
      ],
    },
    {
      NAME: 'Обзор стартового пакета',
      TAB_KEY: 'starter-pack',
      PARAGRAPHS: [
        {
          VALUE: [
            `В конце каждого класса в 3 Главе, вам будет предложен
            как минимум один стартовый пакет. Просмотрите его. Он
            позволит быстро выполнить несколько шагов создания вашего
            персонажа. Если вам подходят черты, навыки и снаряжение,
            описанные для персонажа выбранного вами класса, тогда вы
            можете записать эту информацию на вашу карточку игрока.
            Но вы можете, и самостоятельно подобрать всю информацию
            из нижеследующих глав`,
          ],
        },
      ],
    },
    {
      NAME: 'Запишите расовые и классовые признаки',
      TAB_KEY: 'record-traits',
      PARAGRAPHS: [
        {
          VALUE: [
            `Раса и класс вашего персонажа, дают вам определенный ряд
            плюсов и минусов. Большинство признаков автоматические,
            но часть из них связаны с выбором. Некоторые решения
            подразумевают размышления на будущее, о предстоящих
            действиях героя. Посмотрите всю книгу, если вам это
            необходимо, не бойтесь изучать и узнавать.`,
          ],
        },
      ],
    },
    {
      NAME: 'Выбор навыков',
      TAB_KEY: 'chose-skills',
      PARAGRAPHS: [
        {
          VALUE: [
            `В зависимости от класса вашего персонажа и его модификатора
            Интеллекта, вы получите определенное количество очков
            для покупки навыков (смотрите стр. 6_). Каждый навык
            измеряется в рангах. Каждый ранг добавляет +1 (к броскам
            проверки), для успешной проверки навыка. `,
            `На 1-м уровне ваш персонаж может приобрести до 4-х
            рангов в классовом навыке (навык из списка всех навыков
            относящихся к классу вашего персонажа), или до 2-х рангов
            в навыках смежных классов (навык из списка навыков других
            классов).`,
            `Приобретение и развитие навыка будет лучше, если вы
            потратите 4 пункта навыков (ваш максимум) на каждый
            выбранный навык, как приведено в стартовых пакетах. `,
            `Как только вы выбрали навыки, определите для каждого
            ключевой Параметр. Когда вы будете записывать ваши навыки
            на карточке игрока, запишите модификаторы Параметра в
            графе с одноименным наименованием.`,
            `Таблица 4–2: Навыки (стр. 6_) приводит список всех
            навыков в игре, и указывает какие навыки являются
            классовыми для разных классов.`,
          ],
        },
      ],
    },
    {
      NAME: 'Выбор черт персонажа',
      TAB_KEY: 'chose-char',
      PARAGRAPHS: [
        {
          VALUE: [
            `У каждого 1 уровневого персонажа есть одна черта. Смотрите
            Таблица 5-1: Отличительные Черты (стр 9_), со списком всех
            черт, и необоходимыми условиями (если таковые есть), а
            также кратким описанием. `,
          ],
        },
      ],
    },
    {
      NAME: 'Ознакомление с описанием',
      TAB_KEY: 'intro-the-description',
      PARAGRAPHS: [
        {
          VALUE: [
            `Просмотрите Главу 6: Описание. Это поможет вам лучше
            детализировать вашего персонажа. Вы можете определится с
            деталями сейчас, или немного позже. `,
          ],
        },
      ],
    },
    {
      NAME: 'Выбор снаряжения',
      TAB_KEY: 'chose-equip',
      PARAGRAPHS: [
        {
          VALUE: [
            `Если вы не используете снаряжение приведенное
            в стартовом пакете для каждого класса, вы можете
            самостоятельно приобрести своё стартовое снаряжение
            (смотрите стр. 11_), используя информацию из 7 Главы:
            Снаряжение.`,
          ],
        },
      ],
    },
    {
      NAME: 'Запишите показатели боя',
      TAB_KEY: 'record-battle-params',
      PARAGRAPHS: [
        {
          VALUE: [
            `Определите эти данные, и запишите их на своей карточке
            игрока`,
          ],
        },
        {
          LABEL: 'Хит-Поинты',
          VALUE: [
            `Ваши хит-поинты (хп), определяют
            насколько тяжело убить вашего персонажа. Персонажи 1-
            го уровня получают: маги и чародеи по 4 хп, воры и барды
            по 6хп, жрецы, друиды и монахи по 8 хп, воины, паладины
            рейнджеры по 10 хп, и варвары по 12 хп. К этому количеству
            приплюсовывается модификатор Телосложения вашего
            персонажа`,
          ],
        },
        {
          LABEL: 'Класс Доспеха',
          VALUE: [
            `Ваш Класс Доспеха (КД) указывает на то,
            как сложно будет попасть по вашему персонажу в сражении.
            Просуммируйте вместе следующие показатели: 10+ваш бонус
            доспеха+бонус щита+модификатор размера+модификатор
            Ловкости. `,
          ],
        },
        {
          LABEL: 'Инициатива',
          VALUE: [
            `Модификатор инициативы вашего
            персонажа равен модификатору вашей Ловкости. Если
            вы выбрали Улучшенную Инициативу, вы получаете
            дополнительный модификатор`,
          ],
        },
        {
          LABEL: 'Бонус Атаки',
          VALUE: [
            `Ваш класс определяет базовый бонус
            атаки. Для определения вашего бонуса в рукопашных атаках,
            добавьте модификатор Силы к вашему базовому бонусу атаки.
            Для стрелковых атак добавляйте к базовому бонус атаки ваш
            модификатор Ловкости`,
          ],
        },
        {
          LABEL: 'Спас-броски',
          VALUE: [
            `Ваш класс определяет базовый бонус
            спас-броска. К этим числам добавляйте ваш модификатор
            Телосложения для определения бонуса спас-броска
            Стойкости, модификатор Ловкости для спас-броска Ловкости,
            и модификатор Мудрости для спас-броска Воли`,
          ],
        },
      ],
    },
    {
      NAME: 'Детали, детали и ещё раз детали',
      TAB_KEY: 'another-details',
      PARAGRAPHS: [
        {
          VALUE: [
            `Теперь придумайте или выберите из предложенного списка
              имя персонажа, определите его пол, мировоззрение, возраст,
              внешний вид и т.д. Глава 6: Описание поможет вам в этом. `,
            `Особой надобности полного создания персонажа нет,
              с разрешения вашего МП вы бы могли добавлять, изменять
              какие-то детали, в зависимости от игры, для того, что бы
              лучше ощутить своего персонажа.`,
          ],
        },
      ],
    },
  ],
}
