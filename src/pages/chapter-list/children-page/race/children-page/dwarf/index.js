// @flow
import type { pageContentType } from '@/components/page'
import dwarf from '@/assets/dwarf.png'

export const DWARF_PAGE: pageContentType = {
  TITLE: 'Дварфы/Карлики',
  URL: '/race/dwarf',
  isNavigationPage: false,
  parentUrl: '/race',
  TABS: [
    {
      NAME: 'Описание',
      TAB_KEY: 'description',
      PARAGRAPHS: [
        {
          VALUE: [
            `Дварфы или карлики известны за свое мастерство в военном искусстве, их способностям противостоять физическим
            и магическим повреждениям, их знаниям секретов земли, и
            их способности потреблять большое количество эля. Их таинственные королевства, расположенные внутри гор, известны
            за свои удивительные сокровища, которые дварфы создают
            ради того чтобы дать их в дар, или произвести торговлю.`,
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
            `Дварфы не очень щедры на смех
            или шутки, и подозрительны к незнакомцам, зато великодушны к тем, кто завоевал их доверие. Дварфы
            очень ценят золото, изумруды, ювелирные
            украшения, и объекты искусства сделанные из этих потрясающих материалов, они также прославились из-за
            этого своей жадностью. В бою
            они и не безрассудны, и не робки,
            они сражаются с храбростью и
            стойкостью, с трезвым расчетом. Их чувство справедливости
            сильно, но что плохо оно может обращаться в жажду мести. Среди
            гномов, которые очень близки к
            дварфам, есть поговорка: «Если я
            вру, пусть мне в сражении встретится
            дварф».`,
          ],
        },
      ],
    },
    {
      NAME: 'Внешность',
      TAB_KEY: 'appearance',
      PARAGRAPHS: [
        {
          image: [dwarf],
          VALUE: [
            `Дварфы достигают в росте лишь 120 – 135 см.,
            но они такие широкие, что они
            в среднем такие же по весу, как
            и люди. Мужчины дварфы слегка
            выше, и заметно тяжелее, чем
            женщины дварфы. Их кожа обычно темно желтовато-коричневая,
            но бывает и светло-коричневой,
            их глаза темные. Волосы обычно
            черные, серые и коричневые,
            и обычно длинные. Мужчины
            дварфы высоко ценят свои бороды, и тщательно за ними ухаживают. Их излюбленный стиль
            в прическе, одежде, бородах
            – простота. Дварфы достигают зрелости в 50 лет, и живут
            приблизительно 400 лет.`,
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
            `У дварфов хорошие отношения с гномами, и терпимые с людьми, полуэльфами, и халфлингами.
            Дварфы говорят: « Разница между знакомством и дружбой,
            измеряется в сотню лет». Людям с их коротким периодом
            жизни, тяжело завязать истинно сильные отношения с дварфами. Наилучшие отношения дварф – человек достигаются,
            когда дварф поддерживал хорошие отношения с родителями
            и прародителями этого человека. Дварфы не столь ценят эльфийские утонченность и искусство, считая эльфов непредсказуемыми, непостоянными и ненадежными. Хотя эльфы и
            дварфы на протяжении веков, сражаются бок о бок в битвах
            против орков, гоблинов, и гноллов, и эльфы тоже в свою очередь не очень хвалят дварфов. Дварфы не доверяют полуоркам, и это чувство взаимно. К счастью дварфы порядочны,
            и всегда дают возможность отдельным полуоркам шанс проявить себя.`,
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
            `Обычно дварфы законны, и стремятся
            к добру. Авантюристы дварфы весьма похожи на общий стереотип, однако, они, скорее всего, те, кто не вписывается в
            общество карликов.`,
          ],
        },
      ],
    },
    {
      NAME: 'Земли дварфов',
      TAB_KEY: 'land-of-dwarf',
      PARAGRAPHS: [
        {
          VALUE: [
            `Обычно владения дварфов расположены
            глубоко в каменных недрах скал, где дварфы добывают драгоценные камни и металлы, и создают из них удивительные
            предметы. Представители других рас, те которым доверяют,
            здесь всегда желанны, но некоторые части этих королевств
            закрыты, даже для них. Какое богатство дварфы не находят в своих скалах, они получают его через торговлю. Дварфы не
            любят воду и путешествия по воде, поэтому предприимчивые люди очень часто сами приплывают, если есть возможность, чтобы выторговать какие-то товары у дварфов.`,
            `В людских королевствах обычно встречаются дварфы специализирующиеся в следующем: наемники, мастера оружейники, доспешники, ювелиры, ремесленники. Телохранители
            дварфы очень ценимы за свою преданность и храбрость.`,
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
            `Главное божество карликов Морадин, Дух Кузни. Он создатель дварфов, и надеется, что его последователи
            работают для того, что бы карликам жилось лучше.`,
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
            `Все дварфы общаются на своем родном языки,
            буквами которого являются руны. В литературе дварфов собрана обширная история королевств дварфов и их войн на
            протяжении тысячелетий. Алфавит дварфов используется
            в (с небольшими изменениями) в языках Гномов, Гигантов,
            Гоблинов, Орков, а также в некоторых Глубинных языках.
            Дварфы часто владеют языками как своих друзей (гномов и
            Людей), так и врагов. Некоторые также изучают странные
            Глубинные языки, таких существ как, например, Ксорн.`,
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
            `Имя дварфу, в соответствии с традицией, дает
            его предводитель клана. Каждое характерное имя дварфов используется в течение многих поколений. Имя карлика не его собственное. Оно принадлежность его клана. Если он будет злоупотреблять им, или опозорит
            его, клан имеет право лишить дварфа своего имени.
            Карлик лишенный своего имени, становится вне
            закона, и не может брать любое другое имя.`,
          ],
        },
        {
          LABEL: 'Имена мужчин',
          VALUE: [
            `Барендд, Броттор, Вейт,, Эйнкиль, Оскар, Рурик, Таклинн, Траубон, Ульфгар и Эберк.`,
          ],
        },
        {
          LABEL: 'Имена женщин',
          VALUE: [
            `Артин, Аудхильд, Дагнал, Диеса, Гуннольда, Хлайн, Ильдэ, Лифтраса, Саннл и Торгга`,
          ],
        },
        {
          LABEL: 'Имена кланов',
          VALUE: [
            `Бальдерк, Горунн, Хольдерхек, Лодерр, Лутгехр, Румнахейм, Стракельн, Торунн и Унгарт`,
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
            `Отправление дварфа в
            поиски приключений может быть мотивированно:
            Исправлением прошлых ошибок, тягой к невиданному,
            непознанному, или простой жаждой наживы, жадностью.
            Пока его деяния приносят славу и честь его клану,
            его поступки дают ему уважение и статус в его обществе. Уничтожение гигантов
            и созидание могущественных
            магических предметов, путь по
            которому дварф достигает уважения среди других дварфов.`,
          ],
        },
      ],
    },
    {
      NAME: 'Расовые особенности гномов',
      TAB_KEY: 'racial-characteris',
      PARAGRAPHS: [
        {
          LABEL: '+2 к Телосложению, –2 к Обаянию',
          VALUE: [
            `Из-за того, что дварфы упитанные и плотные, но неприветливы
            и необщительны.`,
          ],
        },
        {
          LABEL: 'Среднего размера',
          VALUE: [`Из-за размера не получают ни бонусов, ни штрафов.`],
        },
        {
          LABEL: 'Скорость дварфов 6 метров',
          VALUE: [
            `Однако при этой скорости двар-фы способны передвигаться
            даже когда одеты в средние или тяжелые доспехи, или когда
            несут среднюю или тяжелую нагрузку (в отличие от других
            существ, чья скорость понижается в таких ситуациях).`,
          ],
        },
        {
          LABEL: 'Темновидение',
          VALUE: [
            `Дварфы способны видеть в темноте до 18 метров от себя. Они видят все черно-белым, но как обычным
            зрением, и способны перемещаться в темноте безо всяких
            источников света.`,
          ],
        },
        {
          LABEL: 'Обработка камня',
          VALUE: [
            `Из-за своей расы дварфы прибавляют +2
            бонус к проверки, что бы заметить необычную обработку
            камня, такую как: закрывающиеся стены, каменные ловушки, новые конструкции (даже те, что на вид старые), неустойчивые поверхности, непрочные потолки, и тому подобное. Что-то, что, похоже, подражает камню, но не каменное
            считается необычной обработкой камня. Дварф находящийся в 3 метрах от необычной обработки камня, делает проверку, будто активно ищет, дварф может использовать навык
            Поиск, обнаружить каменные ловушки как и вор. Дварф интуитивно чувствует глубину, наклон туннеля, точно, так как
            человек на поверхности ощущает на склоне где подъем, а где спуск. Так как у дварфов развито шестое чувство, отношение к камню, у них достаточно возможности в развитии
            этого чувства в их подземных домах.`,
          ],
        },
        {
          LABEL: 'Осведомленность с оружием',
          VALUE: [
            `Дварфы принимают боевые топоры карликов и ургоши дварфов (смотрите 7 Главу: Снаряжение) как военное оружие, а не экзотическое.`,
          ],
        },
        {
          LABEL: 'Стабильность',
          VALUE: [
            `Дварфы чрезвычайно устойчивы на ногах.
            Когда стоит на земле, он получает +4 бонус к проверкам
            от повышенного напора или опрокидывания (но, не когда
            взбирается, лети, едет верхом, или ещё как-то передвигается, не касаясь почвы)`,
          ],
        },
        {
          LABEL: '+2 расовый бонус к спасброскам против ядов',
          VALUE: [
            `Дварфы очень
            устойчивы к токсическим веществам.`,
          ],
        },
        {
          LABEL:
            '+2 расовый бонус к спасброскам против заклинаний и эффектов подобным заклинаниям',
        },
        {
          LABEL:
            '+1 к броскам атаки против орков (включая и полуорков) и гоблиноидов (гоблины, хобгоблины имедвежатники)',
          VALUE: [
            `Дварфы разработали особые боевые умения, способные более профессионально сражаться с их постоянными врагами.`,
          ],
        },
        {
          LABEL: `+4 бонус к уворачиванию против атак существ из типа
          великан (таких как огры, тролли и холмовые
          великаны)`,
          VALUE: [
            `Этот бонус дается дварфам, за
            особо долго накапливаемые знания, передаваемые из поколения в поколение,
            о сражениях с великанами. Заметьте,
            что если персонаж может потерять
            бонус к Классу Доспехов, например из-за того, что он оторопевший, он также теряет и свой бонус
            уворачивания тоже. В Справочнике
            Монстров содержится дополнительная информация о существах из типа
            великан.`,
          ],
        },
        {
          LABEL: `+2 расовый бонус к проверке «Оценки» редких и экзотических предметов`,
          VALUE: [
            `Дварфы знакомы с различными ценными предметами (особенно
              сделанными из камня или металла).`,
          ],
        },
        {
          LABEL: `+2 расовый бонус к проверке «Ремесло» относящемуся к камню или металлу`,
          VALUE: [
            `Дварфы
            особенно искусны с обработкой камня и
            металлов.`,
          ],
        },
        {
          LABEL: `Автоматический Язык: Общий и Дварфов. Бонус: Гигантов, Гномов, Гоблинов, Орков, Существ земли и Подземный
          Общий.`,
          VALUE: [
            `Дварфы хорошо знакомы с языками их врагов, и их подземных союзников.`,
          ],
        },
        {
          LABEL: `Желаемый Класс: Воин`,
          VALUE: [
            `Мультиклассовый
            персонаж не страдает от штрафов в очках
            опыта за мультиклассовость (смотрите Опыт
            для мультиклассовых персонажей, стр. 60).
            Культура дварфов прославляет достоинства воинов.`,
          ],
        },
      ],
    },
  ],
}