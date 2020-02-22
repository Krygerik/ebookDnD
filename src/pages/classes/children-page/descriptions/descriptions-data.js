// @flow
import type { pageContentType } from '@/components/page'
import { CLASSES_HIT_POINTS_TABLE } from '@/tables'

export const DESCRIPTIONS_PAGE: pageContentType = {
  TITLE: 'Описания классов',
  URL: '/classes/descriptions',
  isNavigationPage: false,
  parentUrl: '/classes',
  TABS: [
    {
      NAME: 'Описание',
      TAB_KEY: 'desc',
      PARAGRAPHS: [
        {
          VALUE: [
            `Большая часть этой главы вплоть до раздела мультиклассовых персонажей, описывает классы в алфавитном порядке.
                В каждом описании вы найдете, общее обсуждение класса в
                «игровом мире», как воспринимают и как понимают таких
                персонажей, и как игрок может описать себя. Эти описания
                общие. Каждый представитель класса может отличаться своим отношением к миру, взглядами и иными аспектами`,
          ],
        },
        {
          LABEL: 'Игровая информация',
          VALUE: [
            `После общего описания класса следует игровая информация.
            Не все нижеуказанные разделы встречаются в каждом классе`,
          ],
        },
        {
          LABEL: 'Параметры',
          VALUE: [
            `В этом разделе указывается, какие параметры являются наиболее важными для персонажа этого
            класса. Приветствуется игра «нестандартным» персонажем,
            но обычный персонаж этого класса должен иметь самый высокий параметр в том, в чем он профессионален, (в игровых
            терминах, это означает, что, он наиболее подходит для роли в
            этом классе, и его таланты наиболее востребованы и квалифицированны)`,
          ],
        },
        {
          LABEL: 'Мировоззрение',
          VALUE: [
            `Лишь несколько классов ограничены
            в своих мировоззрениях. К примеру, бард может быть лишь
            только любого хаотичного или нейтрального мировоззрения.
            Если указано «Любое» значит, ваш персонаж не ограничен в
            выборе мировоззрения`,
          ],
        },
        {
          LABEL: 'Кубик хит-поинтов (КХП)',
          VALUE: [
            `Тип кубика бросаемый персонажем, для определения количества его хит-поинтов получаемых на новом уровне`,
          ],
        },
        {
          isTable: true,
          KEY: CLASSES_HIT_POINTS_TABLE,
        },
        {
          VALUE: [
            `Персонаж на каждом новом уровне бросает по одному
                кубику хит-поинтов, затем добавляет или отнимает модификатор Телосложения от броска, и записывает результат. Поэтому персонаж имеет равное количество КХП и уровней.
                Для своего первого КХП, первоуровневый персонаж получает максимальное количество хит-поинтов (хотя модификатор Телосложения
                все же применяется)`,
            `Например, так как Вадания друид, она получает КХП d8. На
                первом уровне
                у неё 8 хит-поинтов. Так как
                её Телосложение
                13, она имеет модификатор +1, и
                общая сумма её
                хит-поинтов 9.
                Достигнув 2-го
                уровня (и все последующие уровни), игрок Вадании бросает d8,
                и добавляет +1
                (за бонус Телосложения), а затем
                добавляет их к своим хит-поинтам`,
            `Если у вашего
                персонажа штраф Телосложения делает
                так, что бросок равен 0
                или ниже нуля, вы прибавляете в любом
                случае 1 хит-поинт к вашим хит-поинтам`,
            `Невозможно потерять (или не получить
                ни одного) достигнув нового уровня, даже если у персонажа слабое Телосложение`,
          ],
        },
        {
          LABEL: 'Таблица класса',
          VALUE: [
            `Эта таблица показывает, как ваш персонаж продвигается при достижении новых уровней. Некоторые из цифр схожи с цифрами из Таблицы 3-1: Базовые
            бонусы спасбросков и атак, но более детализированные для
            конкретного класса. Таблица класса включает в себя`,
            `Уровень: Уровень персонажа в этом классе`,
            `Базовый Бонус Атаки: Базовый бонус атаки персонажа и
            его количество атак`,
            `Спасбросок Стойкости: Базовый спасбросок стойкости.
            Также здесь применяется модификатор Телосложения`,
            `Спасбросок Рефлекса: Базовый спасбросок рефлекса.
            Также здесь применяется модификатор Ловкости`,
            `Спасбросок Воли: Базовый спасбросок Воли. Также здесь
            применяется модификатор Мудрости`,
            `Особое: Способности класса, зависящие от уровня, они
            описываются в нижеследующем разделе «Особенности Класса»`,
            `Заклинаний в День: Какое количество заклинаний в день,
            каждого уровня способен активировать заклинатель. Если в
            разделе стоит «—» для данного уровня заклинаний, персонаж не способен активировать заклинания этого уровня. Если
            стоит «0» персонаж способен лишь активировать заклинания
            этого уровня, если у него есть бонусные заклинания, так как
            его высокий показатель параметра позволяет ему это выполнять. (Бонусные заклинания зависят от: у магов – Интеллекта, друидов, жрецов, паладинов, рейнджеров – Мудрости,
            бардов, чародеев – Обаяния. Смотрите Таблицу 1–1: Модификаторы Параметров и Бонусные заклинания, стр. 8). Если
            стоит число, то персонаж может активировать это количество
            заклинаний плюс бонусные каждый день`,
            `Персонаж всегда может взять заклинания более низкого
            уровня и запомнить их в ячейке более высокого заклинания
            (смотрите Слоты Заклинаний, стр. 17_)`,
          ],
        },
        {
          LABEL: 'Классовые навыки',
          VALUE: [
            `Здесь указывается, количество пунктов навыков персонажа 1-го уровня, количество пунктов навыков получаемых на каждый новый уровень, и список навыков для класса. В любом случае персонаж получает определенное количество пунктов на каждом уровне, так рейнджер
            4, а вор 8. От этого числа отнимается, или к нему плюсуется
            модификатор Интеллекта (не забывайте о 1 бонусном пункте
            для персонажа человека), к общему количеству получаемых
            пунктов навыков (но в любом случае как минимум 1 пункт,
            даже со штрафом из-за Интеллекта). Помните, что персонаж
            1-го уровня стартует с учетверенным количеством пунктов
            навыков. Но его максимальный ранг в навыке равняется
            – уровень персонажа + 3. На первом уровне вы можете достичь лишь 4-й ранг в любом навыке, при стоимости 1 пункт
            за ранг`,
            `Например, полуэльф друид Вадания получает 4 пункта навыков за уровень. Модификатор её Интеллекта +1,
            итого общее число 5 пунктов навыков. На первом уровне она получает количество пунктов навыков в четыре
            раза больше, или 20 пунктов навыков. Максимальный
            ранг навыка 4, поэтому она может, например, 20 пунктов
            разделить на пять навыков класса. (Более полезно иметь
            высокие показатели в нескольких навыках, чем низкие во
            множестве навыков)`,
            `Вы также можете приобретать навыки из списков навыков других классов, но каждый пункт тратится лишь
            на половину рангов из навыков смежного класса, и вы
            можете подняться лишь до половины максимального ранга такого навыка (так,
            максимальный ранг у персонажа
            первого уровня будет 2)`,
          ],
        },
        {
          LABEL: 'Особенности класса',
          VALUE: [
            `Специальные характеристики класса.
            Если есть, то в этой
            секции указаны ограничения и недостатки
            класса. Особенности
            класса включают в
            себя`,
            `Квалификация
            в Оружие и Доспехах: С какими
            видами оружия и
            доспехов квалифицирован этот класс. Вне зависимости от тренированности, тяжелые доспехи оказывают влияние на определенные
            навыки (такие как Взбирание) и на активирование большинства заклинаний. Персонажи могут быть квалифицированы с
            иными видами оружия или типами доспехов за счет соответствующих черт: Квалификация в Доспехах (легких, средних,
            тяжелых), Квалификация в Щитах и Квалификация в Оружие (простом, военном или экзотическом). (Смотрите 5 Главу: Отличительные Черты)`,
            `Заклинания: Барды, Друиды, Жрецы, Маги и Чародеи
            способны пользоваться заклинаниями. Варвары, Воины,
            Воры и Монахи нет. Паладины и Рейнджеры получают доступ к использованию заклинаний на 4-м уровне.`,
            `Другие Особенности: У каждого класса есть свои уникальные способности. Так, воры обладают несколькими, а
            монахи имеют целое множество`,
            `Некоторые особенности сверхъестественные, или подобные заклинанию. Использование подобной заклинанию способности, очень сходно с самим заклинанием (здесь лишь не
              требуется материальный компонент, смотрите Компоненты
              на стр. 17_), но провоцирует благоприятные атаки. Сверхъестественные способности не подобны активированию заклинаний (смотрите Глава 8: Сражение, в особенности Благоприятные Атаки стр. 13_, и Использование Специальных
              Способностей, стр. 14_)`,
          ],
        },
        {
          LABEL: 'Уход в отставку',
          VALUE: [
            `Если по каким-то причинам персонаж
            оставляет свой класс, здесь указаны правила что делать. Если
            отдельно не отмечено в описании класса, то персонаж в отставке сохраняет свои приобретенные квалификации в оружие и доспехах`,
          ],
        },
        {
          LABEL: 'Стартовый пакет',
          VALUE: [
            `В этой секции приводятся различные
            отличительные черты, навыки, снаряжение и другие детали
            для персонажа 1-го уровня этого класса. Вы можете не использовать это и создать персонажа по своему, или использовать комплект целиком (переписав его в свою карточку),
            или использовать некоторые части пакет (как например снаряжение), а остальные детали выбрать самостоятельно, навыки например. Мастер Подземелий может использовать эти
            пакеты для быстрого создания первоуровневых неигровых
            персонажей`,
            `Стартовый пакет подразумевает, что вы потратите по 4
            пункта навыков на каждый навык (лучше выделятся в чем-то,
            чем быть неопытным во многом). Таблица навыков в каждом
            из классов отображает навыки в порядке их важности для
            персонажа`,
            `Каждый стартовый пакет связан с расой. Эти комплекты
            не ссылаются на расовые особенности, поэтому обязательно
            просмотрите расовые особенности вашего персонажа (описано во Второй Главе: Расы), включая модификаторы параметров и бонусы навыков. Пакет также не отражает все особенности класса, поэтому также обратите внимание на отличительные особенности класса`,
            `«Одеяние» подразумевает одеяние для приключений, а не
            обычную одежду. Считайте, что ваш персонаж владеет одним
            из комплектов одежды. Выберите одно из следующих комплектов одеяний (смотрите более подробно в Главе 7: Снаряжение) бесплатно: одежда ремесленника, исследователя,
            артиста, монаха, крестьянина, ученого, путешественника`,
          ],
        },
      ],
    },
  ],
}
