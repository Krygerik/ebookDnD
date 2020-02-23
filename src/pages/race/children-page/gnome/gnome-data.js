// @flow
import type { pageContentType } from '@/components/page'

export const GNOME_PAGE: pageContentType = {
  TITLE: 'Гномы',
  URL: '/race/gnome',
  isNavigationPage: false,
  parentUrl: '/race',
  TABS: [
    {
      NAME: 'Описание',
      TAB_KEY: 'description',
      PARAGRAPHS: [
        {
          VALUE: [
            `Гномы всюду желанны и популярны как, техники, алхимики
            и изобретатели. Вопреки столь большого спроса на их навыки, они предпочитают находиться среди своей расы, живя в
            комфортабельных норах, под покатыми, лесистыми холмами,
            где водится огромное количество животных, но идея поохотится на них, очень плохая идея.`,
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
            `Гномы обожают животных, красивые драгоценные камни и всевозможные шутки. У них развито огромное чувство юмора, и пока они обожают доставать
            кого-то каламбурами, шутками и играми, их будут притягивать разные шалости – чем более закрученные, тем лучшие.
            К счастью, у них не менее развиты чувства и умения к более
            практичным ремеслам, таким как – инженерия, которую они
            часто используют в своих проказах и шутках.`,
            `Гномы чрезмерно любопытны. Их любовь к различным
            вещам превосходит различные ожидания. Иногда они даже
            безрассудны в своих действиях из-за этого. Их изобретательность, делает их непревзойденными инженерами-мастерами,
            так как они постоянно ищут новые пути создания как существующих, так и новых вещей. Иногда гномы вытворяют свои
            проказы, лишь для того, что бы посмотреть, как те, кто попал
            под воздействие шутки, отреагируют.`,
          ],
        },
      ],
    },
    {
      NAME: 'Внешность',
      TAB_KEY: 'appearance',
      PARAGRAPHS: [
        {
          VALUE: [
            `Обычно гномы достигают роста 90 – 105 см.
            в высоту и весят 18,1 – 20,3 кг. Цвет кожи от темного желтокоричневого, до цвета древесной коры, их волосы ухожены,
            глаза обычно любого оттенка голубого цвета. Мужчины гномы обычно имеют короткие, тщательно ухоженные бороды.
            Они обычно носят кожаную одежду или одежду природного
            цвета, украшая её замысловатыми узорами и ювелирными
            украшениями. Зрелыми гномы становятся в возрасте около
            40 лет, и живут приблизительно 350 лет, хотя некоторые доживают до 500 лет.`,
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
            `У гномов отличные отношения с дварфами,
            которые также обожают драгоценные предметы, а также большую любознательность к механическим предметам, и испытывают такую же ненависть к гоблинам и гигантам, оркам и
            троллям. Им нравится находиться в обществе с халфлингами,
            особенно тех, которые легки на подъем что бы совершить какую-нибудь шутку или поозорничать. Большинство гномов,
            относятся к более высоким расам, людей, эльфов, полуэльфов, полуорков, с небольшой подозрительностью, но очень
            редко у них возникает чувство ненависти и злобы к таким
            расам.`,
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
            `Чаще всего гномы добры. Те, кто тянутся к порядку, законам: ученые, инженеры, исследователи,
            испытатели или советники. Те, кому нравится беспорядок,
            и хаос становятся ловкачами, путешественниками, или загадочными обработчиками драгоценных камней. Гномы добросердечны, и даже шутки которые они творят между собой
            больше игра, чем злая шутка. К счастью злые гномы встречаются так редко, как можно напугать гнома.`,
          ],
        },
      ],
    },
    {
      NAME: 'Земли гномов',
      TAB_KEY: 'land-of-gnome',
      PARAGRAPHS: [
        {
          VALUE: [
            `Гномы располагают свои дома в холмистых, лесных землях. Они, как и дварфы живут под землей,
            но на открытый воздух выходят чаще, чем дварфы, так как
            обожают живой мир, природы поверхности. Их дома хорошо
            скрыты, как благодаря технике постройки, так и магии иллюзий. Те, кто желанны в поселках гномов, попадают в красивые
            и теплые норы. Те же, кто приходят со злыми намерениями,
            никогда не смогут обнаружить норы гномов с первого раза.`,
            `Гномы, проживающие в землях людей, обычно ювелиры,
            механики, ученые и преподаватели. Некоторые семейства людей конкурируют между собой, за то, что бы получить какого-то учителя-гнома. В течение своей жизни, гном-наставник
            может воспитать несколько поколений одной человеческой
            семьи.`,
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
            `Главный бог гномов Гарл Глиттергольд, Бдительный Защитник. Его священники учат гномов, заботится,
            и помогать друг другу. Шутки, к примеру, это способ поднять
            настроение и поддержать гномов в трудную минуту, а не для
            того чтобы чувствовать триумф над тем, кого ты разыграл.`,
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
            `Язык гномов использует корни языка Дварфов,
            но он обновлен благодаря трактатам о научных изобретениях,
            и каталогам с информацией про окружающий мир поверхности. Люди ботаники, натуралисты и инженеры, очень часто
            изучают Гномий язык, для того что бы затем можно было прочесть множество потрясающих книг, тех тематик (механика,
            драг. камни), где гномы достигли высокого уровня развития.`,
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
            `Гномы просто помешаны на именах, и у большинства из них существует почти полдюжины имен. Пока
            гном взрослеет, он получает имя от своей мамы, папы,
            старейшины своего клана, также свои имена ему дают его
            тетки и дядьки, кроме этого у гнома могут быть всевозможные прозвища. Имена гномов обычно отображают его
            историю, это имена его предков или дальних родственников, хотя некоторые придумывают совершенно новые
            имена. Общаясь с людьми или другими, кто «скупы» на
            имена, гномы говорят, что у них не более трех имен: собственно имя, название клана и прозвище. Когда гном решает, какое же имя он будет использовать, проживая по
            соседству с людьми, обычно он выбирает самое забавное.
            Названия кланов гномов, это обычно комбинации распространенных гномьих слов, почти всегда, гномы переводят их на Общий, если проживают во владениях людей
            (или на Эльфийский если живут во владениях эльфов, или
            тому подобное).`,
          ],
        },
        {
          LABEL: 'Имена мужчин',
          VALUE: [
            `Боддинок, Димбль, Фонкин, Глим, Гербо, Джебеддо, Намфоодль, Руднар, Сеебо, Зук.`,
          ],
        },
        {
          LABEL: 'Имена женщин',
          VALUE: [
            `Бимпноттин, Карамип, Дювамил, Элливик, Эллижобель, Лупмоттин, Марданаб, Роивин, Шамиль и Вэйвокет`,
          ],
        },
        {
          LABEL: 'Имена кланов',
          VALUE: [
            `Берен, Дэргель, Фолькор, Гаррик, Накли,
            Мурниг, Нингель, Раулнор, Счеппен и Турен.`,
          ],
        },
        {
          LABEL: 'Прозвища',
          VALUE: [
            `«Пивохлёб», «Пепельный печник», «Дразнилкин», «Маскировщик», «Запирало», «Тырятель», «Выпивало», «Однобашмачный», «Сверкающий изумрудик», «Заика».`,
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
            `Гномы любопытны и импульсивны. Они могут отправиться в приключения из-за желания
            посмотреть мир, или из-за своей любви ко всему новому. Гномы, уважающие закон, и стремящиеся к нему, могут отправиться в путь, что бы восстановить порядок, или защитить
            невиновных, демонстрируя чувство долга к обществу, как к
            целому, которое является основным во всех гномьих общинах. Некоторые гномы избирают опасный, нелегкий путь к
            богатству, из-за своей любви к драгоценным камням и редким, красивым предметам. В зависимости отношений гнома
            с его родным кланом, путешествующий гном может быть изгнанником или каким-то подобием предателя (за то, что покинул свой клан и свои прямые обязанности).`,
          ],
        },
      ],
    },
    {
      NAME: 'Расовые особенности гномов',
      TAB_KEY: 'racial-characteris',
      PARAGRAPHS: [
        {
          LABEL: '+2 к Телосложению, –2 к Силе',
          VALUE: [
            `Как и дварфы, гномы плотно сложены, но они малы, и поэтому не столь сильны, как
            более крупные расы.`,
          ],
        },
        {
          LABEL: 'Маленький Рост',
          VALUE: [
            `Как маленькие создания гномы получают
            +1 бонус к Классу Доспеха, +1 бонус к броскам атаки, и +4
            бонус к проверкам навыка «Скрытность», но они используют оружие меньше по размеру, чем обычное, их способность поднятия и переноса груза три четверти, от того, что
            могут нести персонажи Среднего роста.`,
          ],
        },
        {
          LABEL: 'Базовое передвижение гномов 6 метров',
        },
        {
          LABEL: 'Зрение при низком освещении',
          VALUE: [
            `Гномы в два раза лучше видят, чем люди, при звездном, лунном, свете факелов или в
            условиях плохого освещения. Они сохраняют способность
            различать цвета и детали в таких условиях.`,
          ],
        },
        {
          LABEL: 'Осведомленность с оружием',
          VALUE: [
            `Гномы принимают крючковатый молот гномов (смотрите стр. 11_) как военное, а не
            экзотическое оружие.`,
          ],
        },
        {
          LABEL: '+2 расовый бонус к спасброскам против иллюзий',
          VALUE: [`Так как гномы хорошо знакомы со всеми типами иллюзий.`],
        },
        {
          LABEL:
            '+1 расовый бонус против кобольдов и гоблинообразных (гоблины, хобгоблины, медвежатники)',
          VALUE: [
            `Часто сражаясь с этими расами, гномы накопили опыт битв применяемый в боях против них.`,
          ],
        },
        {
          LABEL:
            '+1 к Классу Сложности для всех спасбросков с акти-вированных гномами',
          VALUE: [
            `Их врожденная осведомленность с этими эффектами, делает иллюзии более сложными для рассмотрения.
            Эта корректировка суммируется с иными похожими эффектами, такими от черты Фокусировка в Заклинаниях.`,
          ],
        },
        {
          LABEL: '+4 бонус к уворачиванию против существ из типа великаны',
          VALUE: [
            `Этот бонус дается гномам, за особо долго накапливаемые
            знания, передаваемые из поколения в поколение, о сражениях с великанами (такими как огры, тролли и холмовые
            великаны). Заметьте, что если персонаж может потерять
            бонус к Классу Доспехов, например из-за того, что, он оторопевший, он также теряет и свой бонус уворачивания тоже.
            В Справочнике Монстров содержится дополнительная информация о существах из типа великан. `,
          ],
        },
        {
          LABEL: '+2 расовый бонус при проверке Прислушивания',
          VALUE: [`У гномов остроконечные уши.`],
        },
        {
          LABEL: '+2 расовый бонус к проверке Ремесло (Алхимия)',
          VALUE: [
            `Очень чувствительный нос гномов позволяет им отслеживать алхимические процессы по запаху.`,
          ],
        },
        {
          LABEL: `Автоматические языки: Общий или Гномов. Бонусные:
          Драконов, Дварфов, Эльфов, Гигантов, Гоблинов и Орков.`,
          VALUE: [
            `Гномы больше проводят времени в общении с дварфами и
            эльфами, чем дварфы и эльфы между собой, помимо этого
            гномы хорошо знают языки своих врагов (кобольдов, гоблинов, гигантов и орков). У гномов есть способность подобная заклинанию общение с животными, применяемая раз в
            день и только с норными млекопитающими: лисы, барсуки,
            кролики и т.д. Эта способность врожденная для всех гномов. Время действия 1 минута (гном считается как маг 1-го
            уровня, вне зависимости от его текущего уровня). Смотри
            заклинание общение с животными на стр .`,
          ],
        },
        {
          LABEL: `Подобные Заклинаниям Способности`,
          VALUE: [
            ` 1/день:—общение с
            животными (только роющиеся животные, длительность 1
            минута). Гномы с показателем Обаяния 10 и выше обладают следующими подобными заклинаниям способностями:
            1/день—танцующие огоньки, призрачный звук и ловкость
            рук. Уровень заклинателя 1-й; КС спасброска 10+мод-тор
            Обн гнома+уровень заклинания. Смотрите описания заклинаний в Главе 10.`,
          ],
        },
        {
          LABEL: `Желаемый Класс: Бард`,
          VALUE: [
            `Мультиклассовый гном бард не получает штрафа в очках опыта, при подсчете его (смотрите
              Опыт для Мультиклассовых Персонажей, стр. 60).`,
          ],
        },
      ],
    },
  ],
}
