// @flow
import type { pageContentType } from '@/components/page'
import halfling from '@/assets/halfling.png'

export const HALFLING_PAGE: pageContentType = {
  TITLE: 'Халфлинги',
  URL: '/race/halfling',
  isNavigationPage: false,
  parentUrl: '/race',
  TABS: [
    {
      NAME: 'Описание',
      TAB_KEY: 'description',
      PARAGRAPHS: [
        {
          VALUE: [
            `Халфлинги – умные, одарённые существа, обожающие
                жизнь. Отдельные халфлинги и целые семьи, находят место
                существования повсюду где только можно. Очень часто они
                путешествуют, но другие халфлинги реагируют на них с подозрением и непониманием. В зависимости от клана, халфлинги могут быть надежными, трудолюбивыми (если живут
                кланом) горожанами, или же быть ворами, ожидая возможности своровать что-то по ценнее и раствориться во мраке
                ночи. Но вопреки всеми, халфлинги искусные и находчивые,
                выживающие в любых условиях.`,
          ],
        },
      ],
    },
    {
      NAME: 'Индивидуальность',
      TAB_KEY: 'individuality',
      PARAGRAPHS: [
        {
          VALUE: [
            `Халфлинги предпочитают постоянные хлопоты, чем обычную тоску. Они чрезвычайно любопытны. Полагаясь на свою способность выживать или избегать неприятности, они проявляют такую отвагу, на которую
            большинство людей крупнее их ростом, просто неспособны.`,
            `У халфлингов обильные аппетиты, как на еду, так и на
            разные развлечения. Они любят хорошо приготовленную
            пищу, хорошее питье, великолепный табак, и удобную одежду. Хотя их мать – соблазн богатства, они предпочитают
            тратить деньги налево и направо, а не накапливать их.`,
            `Халфлинги известные коллекционеры. Если обычные
            халфлинги могут собирать чайнички, книжки или засушенные цветы, некоторые из них могут собирать такие предметы как, шкуры диких зверей – а иногда и самих зверей.
            Богатые халфлинги, иногда нанимают искателей приключений, что бы раздобыть какие-то экзотические предметы для
            их коллекции.`,
          ],
        },
      ],
    },
    {
      NAME: 'Внешность',
      TAB_KEY: 'appearance',
      PARAGRAPHS: [
        {
          image: [halfling],
          VALUE: [
            `Рост халфлингов обычно составляет 90 см.,
            а вес обычно 13,5 – 16 кг. Их кожа обычно красновата, а волосы черные, и прямые. Глаза коричневые или
            черные. У мужчин халфлингов очень часто,
            короткие бакенбарды, бороды редко
            встречаются, а усы не наблюдаются вообще. Они любят носить простую, комфортную и практичную
            одежду. Вопреки представителям
            других рас, они предпочитает комфорт, а не показатели богатства. Они
            достигают зрелости в двадцать с небольшим лет и обычно живут до середины своего второго столетия.`,
          ],
        },
      ],
    },
    {
      NAME: 'Отношения',
      TAB_KEY: 'relations',
      PARAGRAPHS: [
        {
          VALUE: [
            `Халфлинги пытаются ужиться со всеми окружающими. Они знают, как жить в сообществах людей, дварфов, эльфов,
            гномов, преподнося себя как ценных и
            желаемых членов общества.`,
          ],
        },
      ],
    },
    {
      NAME: 'Мировоззрение',
      TAB_KEY: 'ideolody',
      PARAGRAPHS: [
        {
          VALUE: [
            `Халфлинги стремятся быть нейтральными. Хотя они уживаются с переменами (тяга к хаосу), а также непостижимо постоянны, так законы клана, чувство
            собственного достоинства (тяга к законности).
            `,
          ],
        },
      ],
    },
    {
      NAME: 'Земли халфлингов',
      TAB_KEY: 'land-of-halfling',
      PARAGRAPHS: [
        {
          VALUE: [
            `У халфлингов нет
            как таковых собственных земель. Вместо этого, у них есть земли других рас, где они
            получают достаточное количество ресурсов для своего существования.
            Очень часто халфлинги формируют небольшие сообщества в городах людей и дварфов. Хотя они с
            удовольствием работают с остальными, друзьями они становятся
            только между собой. Халфлинги
            селятся и в уединенных местах,
            где они основывают независимые поселки. Однако общины
            халфлингов известны за свою постоянную
            подвижность, как только где-то есть земля с огромными возможностями, они переселяются туда, особенно если там появилась новая шахта, или надобность в хороших работниках,
            после опустошающей войны. Если такая возможность времена, то общины могут вновь переехать на новое место. Если же
            они задерживаются надолго, то, скорее всего в этом месте появляется новый поселок. Некоторые общины с другой стороны, всю свою жизнь путешествуют, их вагоны катятся, лодки
            плывут с места на место, не имея постоянного дома.`,
          ],
        },
      ],
    },
    {
      NAME: 'Религия',
      TAB_KEY: 'religion',
      PARAGRAPHS: [
        {
          VALUE: [
            `Главный бог халфлингов Йондала Благословенная, защитница халфлингов.
            Йондала пообещала благословлять и защищать тех, кто следует её законам, защищает
            её кланы, и ухаживает за своими семьями. У халфлингов есть
            ещё множество меньших богов, которые, как они говорят,
            присматривают за отдельными поселками, лесами, реками,
            озерами, и так далее. Они почитают этих богов, что бы они
            помогали им безопасно путешествовать с места на место.`,
          ],
        },
      ],
    },
    {
      NAME: 'Языки',
      TAB_KEY: 'languages',
      PARAGRAPHS: [
        {
          VALUE: [
            `Халфлинги общаются на своем собственном
            языке, который использует символы из Общего. Они очень
            мало пишут на своем собственном языке, в отличие от дварфов, эльфов и
            гномов, у них богатой библиотеки письменных
            работ. Но у них очень сильна традиция устного повествования. И хотя язык
            халфлингов не секретен, они не очень желает делиться им с другими. Практически
            все халфлинги разговаривают на Общем, он необходим им для общения с людьми
            тех земель, где они проживают, или проезжают.`,
          ],
        },
      ],
    },
    {
      NAME: 'Имена',
      TAB_KEY: 'names',
      PARAGRAPHS: [
        {
          VALUE: [
            `Халфлинги получают имена семейства, и возможно прозвище. Иногда кажется, что фамилия халфлинга,
            это прозвища, настолько они слились с этой нацией за множество поколений.`,
          ],
        },
        {
          LABEL: 'Имена мужчин',
          VALUE: [
            `Альтон, Бийю, Кэйд, Элдон, Гаррет, Лайл, Майло, Осборн, Роско и Виллби`,
          ],
        },
        {
          LABEL: 'Имена женщин',
          VALUE: [
            `Амариллис, Чармайн, Кора, Евфемия, Джиллиан, Лаиния, Мерла, Портия, Серафина, Верна`,
          ],
        },
        {
          LABEL: 'Названия семей',
          VALUE: [
            `Брушгазер, Гудбаррел, Гринботтл, Хайхилл, Хилтоппл,
            Лигаллоу, Тилиф, Сорнгэйдж, Тосскобл, Андербогх`,
          ],
        },
      ],
    },
    {
      NAME: 'Искатели приключений',
      TAB_KEY: 'adventurers',
      PARAGRAPHS: [
        {
          VALUE: [
            `Халфлинг часто отправяются
            в путь, чтобы добиться чего-нибудь самостоятельно. Они пытаются использовать свои навыки, чтобы достичь богатств и
            высокого статуса. Разница между халфлингами: искатель приключений и обычным, то второй в поисках «больших сумм»
            не боится запачкаться. У первого это не карьера,
            а случайность. Иногда оптимизм халфлингов
            некоторым кажется воровством или жульничеством, халфлинг авантюрист, осознавший, что своим спутникам он
            может доверять, в свою очередь никогда
            не подведет их.`,
          ],
        },
      ],
    },
    {
      NAME: 'Расовые особенности халфлингов',
      TAB_KEY: 'racial-characteris',
      PARAGRAPHS: [
        {
          LABEL: '+2 Ловкость, –2 Сила',
          VALUE: [
            `Халфлинги
            очень быстрые, ловкие и хорошо обращаются с метательным оружием,
            но они маленькие, и поэтому не такие
            сильные как другие человекообразные.`,
          ],
        },
        {
          LABEL: ' Маленький рост',
          VALUE: [
            `Как маленькие
            создания халфлинги получают
            +1 бонус к Классу Доспеха, +1
            бонус к броскам атаки, и +4
            бонус к проверкам на Скрытность, но они использует
            оружие меньше по размеру,
            чем обычное, их способность
            поднятия и переноса груза три четверти, от того, что могут нести
            персонажи Среднего роста.`,
          ],
        },
        {
          LABEL: 'Базовая скорость халфлингов 6 метров',
        },
        {
          LABEL:
            '+2 расовый бонус к Взбиранию, Прыжкам и Бесшумному Передвижению',
          VALUE: [`Халфлинги ловки, устойчивы, спортивны.`],
        },
        {
          LABEL: '+1 расовый бонус ко всем спасброскам',
          VALUE: [`Халфлинги удивительно избегают всякие неудачи`],
        },
        {
          LABEL: '+2 бонус морали при проверке страха.',
          VALUE: [
            `(Этот бонус плюсуется с +1 бонусом халфлингов для всех спасбросков).`,
          ],
        },
        {
          LABEL: '+1 расовый бонус атаки с метательным оружием',
          VALUE: [
            `Метание
            камней, универсальный спорт среди всех халфлингов, они
            особенно метко научились владеть ими.`,
          ],
        },
        {
          LABEL: '+2 расовый бонус при проверке Прислушивания',
          VALUE: [`У халфлингов остроконечные уши.`],
        },
        {
          LABEL: `Автоматические языки: Общий и Халфлингов. Дополнительные: Дварфов, Эльфов, Гномов, Гоблинов, Орков.`,
          VALUE: [
            `Расторопные халфлинги изучают языки, как своих врагов, так
            и друзей.`,
          ],
        },
        {
          LABEL: `Желаемый Класс: Вор`,
          VALUE: [
            `Мультиклассовый халфлинг вор
            не вычисляет штраф из полученного опыта. (см Опыт для
            Мультиклассовых Персонажей стр. 60). Халфлинги выживают за счет скрытности, остроумия, и всевозможных навыков, они биологически предрасположены к призванию
            вора.`,
          ],
        },
      ],
    },
  ],
}