// @flow
import type { pageContentType } from '@/components/page'
import {
  PRIEST_LVL_TABLE,
  PRIEST_GODS_TABLE,
  PRIEST_STARTER_PACK_TABLE,
} from '@/tables'
import priestImage from '@/assets/priest.png'

export const PRIEST_PAGE: pageContentType = {
  TITLE: 'Жрец/Священник',
  URL: '/classes/priest',
  isNavigationPage: false,
  parentUrl: '/classes',
  TABS: [
    {
      NAME: 'Описание',
      TAB_KEY: 'description',
      PARAGRAPHS: [
        {
          image: [priestImage],
          VALUE: [
            `Боги сопровождают нас повсюду, в поразительных природных
            местах, в благородных крестовых походах, в церковных
            обрядах, в сердцах последователей. Как и люди, боги бывают
            различные: от благодушных до злых сердцем, ненавязчивых
            и наоборот, простых или загадочных. Однако боги большинство
            своей работы выполняют через своих посредников – жрецов.
            Добрые жрецы лечат, защищают, мстят за невинных.
            Злые – грабят, разрушают, занимаются вредительством.
            Жрецы используют силу бога, чтобы воплотить волю бога. Также
            с помощью этой силы жрецы предрешают свою судьбу`,
          ],
        },
        {
          LABEL: `Приключения`,
          VALUE: [
            `В идеале жрец отправляется в путь по воле своего бога. К
            примеру, добрый священник жаждет предложить всем, кто нуждается
            свою помощь. Если через благородные действия он принесет хорошую
            репутацию своему богу или храму, то это ещё лучше. Злой жрец
            будет искать пути усилить свою силу, или силу своего бога, так
            как тогда его будут бояться и уважать`,
            `Иногда жрецы получают приказы, или как минимум
            предложения, от своих полубожественных наставников, говорящих
            о том, что эта миссия очень важна для церкви. В награду жрецу
            и его компаньонам, за их бесстрашие в приключении, могут быть
            предложены дары в исполнении желаний, или новые жреческие
            заклинания, предметы`,
            `Безусловно, у жрецов как и у остальных людей, отправкой в
            путь могут быть самые различные мотивации`,
          ],
        },
        {
          LABEL: `Характеристика`,
          VALUE: [
            `Священники – мастера божественной/жреческой магии. Эта магия
            особенно эффективна в лечении. Даже неопытный, начинающий жрец
            способен вернуть тех людей, чья жизнь на грани смерти, а опытные
            жрецы возвращают к жизни даже тех, кто преступил эту грань`,
            `Будучи источниками божественной энергии, они способны изгонять
            и даже разрушать мертвые существа. В свою очередь злой жрец
            способен к обратному, он способен брать нежить под свой контроль`,
            `Жрецы знакомы с оружием и навыками сражения с оружием в руках.
            Они способны сражаться с простыми видами оружия в руках, знают
            как обращаться с доспехами, причем доспехи не препятствую
            нормальному процессу активации жреческих заклинаний, в отличие
            от заклинаний магов`,
          ],
        },
        {
          LABEL: `Мировоззрение`,
          VALUE: [
            `Жрец будет того же мировоззрения, как и бог которому он поклоняется.
            Так как люди чаще поклоняются добрым богам, чем злым или нейтральным,
            то и добрых жрецов большее количество, чем их злых братьев по классу.
            Также жрецы больше подвержены законам, а не хаосу, поэтому ордены и
            подобные структуры более организованны и лучше приспособлены к набору
            новых последователей и их дальнейшему обучению`,
            `И хотя обычно бог и жрец одного мировоззрения, все же встречаются
            жрецы чье мировоззрение отличается от бога на «один шаг». Например,
            большинство жрецов бога доблести Хейрониуса (законно доброго) являются
            законно-добрыми, но некоторые из них законно-нейтральные или нейтрально
            добрые. Если бог нейтрален, то необязательно, что все его жрецы тоже
            будут нейтральными`,
          ],
        },
        {
          LABEL: `Религия`,
          VALUE: [
            `Любой существующий бог имеет посвященных ему или ей жрецов, поэтому
            встречаются священники самых разнообразных религий. В развитых землях,
            наиболее популярным, которому поклоняются большинство людей, является
            Пелор, бог солнца. Среди «не-человеческих» рас жрецы поклоняются своему
            главному богу, предводителю пантеона их расы`,
            `Некоторые жрецы посвящают себя не богу, а доступу к божественной
            силе. У них могущественная магия, но они не связаны с учением и постоянной
            практикой служения. У них отличные отношения со жрецами посвятившими
            себя исключительно службе богам. Так, жрецы, служащие Добру и Закону,
            хорошо сотрудничают со жрецами всех добрых и законных богов, которые
            превозносят принципы жизни в добре и законе, но абсолютно не участвуют
            в церковных обрядах, иерархии`,
          ],
        },
        {
          LABEL: `Предпосылки`,
          VALUE: [
            `Большинство жрецов состоят на службе в религиозных организациях, более
            распространенных под названием церкви. Каждый поклялся служению идеалам
            своей церкви. Присоединившись к церкви, в большинстве случаев в детском
            возрасте, повзрослев, жрецы ощущают потребность к служению, некоторые
            воспринимаю это как «зов» их бога. Одни проводят всю свою жизнь в церкви,
            служа богу в ежедневных ритуалах, другие идут в дорогу, руководствуясь
            учением их бога и воплощая его наставления в жизнь. Жрецы определенных
            религий стремятся не вступать в конфликты, а находится в хрупком но все
            же мире. У священников с похожими идеалами, как добро, законность,
            сотрудничают друг с другом, смотря на себя как на воплощение порядка,
            или доброты. Жрецы из противоположных религий – кровные враги. В
            большинстве земель война между церквями вытекает в длительные гражданские
            войны или непрекращающиеся социальные конфликты между главами
            противоположных церквей`,
          ],
        },
        {
          LABEL: `Расы`,
          VALUE: [
            `Среди жрецов можно встретить представителей всех многочисленных рас,
            так как необходимость в религии и божественной магии всегда остра.
            Жрецы большинства рас, однако, более сфокусированы на повседневных
            ритуалах, чем на дорогах, полных приключений. Хотя, странствующие
            жрецы, с определенной святой целью весьма распространены среди рас
            людей и дварфов. Среди диких гуманоидных рас жрецы встречаются реже.
            Исключение троглодиты, их жреческая магия и жрецы являются неотъемлемой
            частью их ритуалов, они ведут свою расу за пленными которые нужны
            для жертвоприношений и пожираний`,
          ],
        },
        {
          LABEL: `Отношения с другими классами`,
          VALUE: [
            `В группе искателей приключений жрец – всегда друг каждого в группе,
            и часто то ядро, вокруг которого все держатся вместе. Так как они
            являются источниками божественной энергии и очень умелые лекари, искатель
            приключений любого класса рад видеть жреца рядом с собой, особенно,
            после того как ему перепало несколько ударов в битве и нужно лечение.
            Иногда жрецы конфликтуют с друидами из-за того, что друиды воплощение
            более древних, первичных отношений между смертными и богами. В большинстве
            случаев религия, предопределяет отношение жреца к остальным. К примеру,
            жрец Олидаммары (бога воров) будет великолепно чувствовать себя в
            компании воров, в тоже время жрец Хейрониуса (бога доблести), будет в ней
            только мучиться`,
          ],
        },
        {
          LABEL: `Роль`,
          VALUE: [
            `Жрец обычно выполняет роль главного лекаря, гадателя группы, а также
            специалиста по защите. Он может самостоятельно постоять за себя в сражении,
            но обычно не рвется изо всех сил на передовую боя. Сферы и выбор заклинаний
            также существенно играют на роль персонажа`,
          ],
        },
      ],
    },
    {
      NAME: 'Таблица уровней',
      TAB_KEY: 'lvl-table',
      PARAGRAPHS: [
        {
          isTable: true,
          KEY: PRIEST_LVL_TABLE,
        },
      ],
    },
    {
      NAME: 'Боги',
      TAB_KEY: 'gods-table',
      PARAGRAPHS: [
        {
          isTable: true,
          KEY: PRIEST_GODS_TABLE,
        },
      ],
    },
    {
      NAME: 'Игровая информация',
      TAB_KEY: 'game-info',
      PARAGRAPHS: [
        {
          LABEL: 'Параметры',
          VALUE: [
            `Мудрость предопределяет насколько могущественен жрец, насколько сильное
            заклинание он способен с активировать, сколько заклинаний в день может быть
            активировано и как тяжело противостоять (смотрите ниже заклинания). Высокое
            Телосложение дает ему больше хит-поинтов, а высокое Обаяние увеличивает
            его способность изгнания нежити`,
          ],
        },
        {
          LABEL: 'Мировоззрение',
          VALUE: [
            `В зависимости от бога. Мировоззрение священника может отличаться не более
            чем на одну ступень от мировоззрения бога (или по шкале законный – хаотичный,
            или по добрый –злой, но не по обоим). Исключение жрецы
            Св. Кутберта (законно-доброго бога), они могут быть только
            законно добрыми или законно-нейтральными. Жрец не может
            быть полностью нейтральным, если только его бог не истинно нейтрален`,
          ],
        },
        {
          LABEL: 'Кубик хит-поинтов (КХП)',
          VALUE: [`d8`],
        },
      ],
    },
    {
      NAME: 'Навыки класса',
      TAB_KEY: 'skills',
      PARAGRAPHS: [
        {
          VALUE: [
            `У жрецов следующие классовые навыки (в скобках ключевой Параметр для каждого навыка):`,
            `Концентрация (Тело)`,
            `Ремесло (Интл)`,
            `Дипломатия (Обн)`,
            `Лечение (Мудр)`,
            `Знание (магия) (Интл)`,
            `Знание (религия) (Интл)`,
            `Знание (планы) (Интл)`,
            `Ремесло (Интл)`,
            `Профессия (Мудр)`,
            `Искусство Магии (Интл)`,
            `Смотрите Главу 4: для ознакомления с описаниями навыков`,
          ],
        },
        {
          LABEL: 'Сферы и Навыки Класса',
          VALUE: [
            `Жрец избравший в качестве своих сфер Растения и Животные, получает как классовый
          навык Знание (природа) (Интл).`,
            `Жрец выбравший Знание как сферу, также получает навыки всех Знаний (Интл)`,
            `Выбравший Путешествия, получает навык Искусство Выживания (Мудр)`,
            `Выбравший Мошенничество получает следующие навыки: Блеф (Обн), Маскировка (Обн), Скрытность (Ловк)`,
            `Смотрите Боги, Сферы влияния и Заклинания Сфер ниже`,
          ],
        },
        {
          LABEL: 'Пункты навыков на 1-м уровне',
          VALUE: [`(2 + модификатор Интеллекта) × 4`],
        },
        {
          LABEL: 'Пункты навыков на каждом новом уровне',
          VALUE: [`2 + модификатор Интеллекта`],
        },
      ],
    },
    {
      NAME: 'Особенности класса',
      TAB_KEY: 'features',
      PARAGRAPHS: [
        {
          LABEL: 'Квалификация в оружии и доспехах',
          VALUE: [
            `Воин квалифицирован в использовании всех простых и военных видов оружия,
            всех типов доспехов (легких, средних, тяжелых), а также щитов (включая башенные)`,
          ],
        },
        {
          LABEL: 'Бонусные Черты',
          VALUE: [
            `Жрецы квалифицированы со всеми видами простых оружий. Со всеми видами
            доспехов (легкий, средний, тяжелый) и щитами (за исключением башенных щитов)`,
            `У каждого из богов есть любимое оружие (смотрите Боги стр.106), жрецы считают
            за честь умение владеть этим видом оружия. Жрец, выбравший сферу Война, получает
            бесплатно отличительную черту Улучшенное Обращение с Оружием, в качестве бонуса,
            которая касается оружия бога. А также получает черту Квалификация в Военном
            Оружие в качестве бонуса, если оружие относится к этой категории`,
            `Смотрите Главу 5: Отличительные Черты для большего ознакомления.`,
          ],
        },
        {
          LABEL: 'Аура (Экс)',
          VALUE: [
            `Жрец доброго, злого, законного или хаотичного бога источает чрезвычайно
            сильную ауру, которая касается непосредственно мировоззрения его бога (смотрите
            для деталей описание заклинание обнаружение зла). Жрецы, которые не поклоняются
            специфическим богам, но выбирают себе сферы Добра, Зла, Закона или Хаоса,
            также источают мощную ауру соответствующего мирооззрения`,
          ],
        },
        {
          LABEL: 'Заклинания',
          VALUE: [
            `Жрец способен активировать жреческие заклинания (подобного типа доступны
            друидам, паладинам и рейнджерам) в соответствии со списком заклинаний жреца
            стр. 18_, в соответствии со своим уровнем. Однако его мировоззрение может
            запретить ему доступ к определенным заклинаниям по моральным и этическим
            соображениям; смотрите ниже Добрые, Злые, Законные и Хаотичные Заклинания.
            Также жрец должен заранее выбирать и подготавливать заклинания`,
            `Что бы заготавливать или применять заклинания, показатель Мудрости жреца
            должен быть 10 + уровень заклинания. (Мудрость 10 для 0-го уровня, Мудр 11
            для 1-го уровня, и т.д.). Класс Сложности для спасбросков против заклинаний
            жреца, вычисляется по: 10 + уровень заклинания + модификатор Мудрости Жреца`,
            `Как и остальные заклинатели, жрец может применять лишь определенное
            количество заклинаний определенного уровня в день. Его базовое дневное
            ограничение по уровню указано в Таблице 3–7: Жрец. В дополнение он получает
            бонусные заклинания, которые зависят от Мудрости жреца (смотрите Таблицу 1–1:
            Модификаторы Параметров и Бонусные заклинания, стр. 8). Он также получает
            доступ к заклинаниям сфер (по одному каждого уровня), начиная с первого уровня.
            Когда жрец подготавливает заклинание в свою ячейку сферы,
            он должен выбрать одно заклинание из двух сфер (смотрите
            ниже для деталей Боги, Сферы и Заклинания Сфер)`,
            `Жрецы не получают свои заклинания через книги или свитки и им не нужно их
            пополнять переписывая. Вместо этого, он должны медитировать или молится,
            чтобы восстановить заклинания, получая их через собственную силу веры,
            или через божественное вдохновение. Каждый жрец должен
            указать время, когда он будет молится в течение 1 час в тихом размышлении,
            или мольбе, чтобы восстановить дневное количество заклинаний. Обычно добрые
            молятся на рассвете или в полдень, а злые на закате или в полночь. Время
            отдыха не входит в диапазон промежутка подготовки заклинаний
            жрецом. Жрец может подготавливать и применять любые заклинания
            из списка жреца (стр. 185), но принимается в учет,
            что он имеет доступ к заклинаниям этого уровня. В момент
            медитации он также должен указать какие заклинание заготавливает`,
          ],
        },
        {
          LABEL: 'Боги, Сферы и Заклинания Сфер',
          VALUE: [
            `Выберите бога для вашего священника. Самые распространенные боги приведены
            в таблице 3-8: Боги, а их описания на страницах 106–107. Бог жреца влияет
            на его мировоззрение, его магию, его жизненные ценности и какие отношения
            складываются у него с окружающими`,
            `Если в Таблице 3-8, в графе «Типичные последователи» указана раса, то
            желательно чтобы жрец этого бога был именно этой расы (у такого бога могут
            быть последователи из других рас, но не жрецы)`,
            `Выбрав бога, вы выбираете мировоззрение вашему жрецу, две сферы из сфер
            доступа вашего бога. Хотя священники определенных религий едины в выборе
            своего бога, все же у каждой религии есть свои аспекты. Вы можете выбрать
            только сферу вашего мировоззрения (как, Добро, Зло, Закон и
            Хаос), если мировоззрение жреца совпадает со сферой`,
            `Если ваш жрец не поклоняется определнному богу, то выберите самостоятельно
            две сферы, чтобы показать духовные склонности и способности вашего персонажа.
            Ограничение в сферах в мировоззрении все также применяется`,
            `Каждая сфера дает вашему жрецу доступ к одному заклинанию каждого уровня
            магии, а также определенные преимущества. Ваш персонаж извлекает выгоду
            из любой выбранной сферы. Из выбранных заклинаний данного уровня заклинаний,
            он способен заучить одно из двух, раз в день. Если заклинания сферы нет в
            списке заклинаний жреца (стр. 185), то жрец имеет право использовать
            заклинание сферы лишь в ячейке для таких заклинаний. Заклинания Сфер и
            Даруемые Силы приведены на стр. 187–190`,
            `Например, Жрец Джозан поклоняется Пелору. Он выбирает сферы Добро и Лечение
            (из доступных по Пелору сфер). От своих сфер он получает преимущества.
            Добро позволяет ему активировать заклинания с дескриптором добро на +1
            уровень заклинателя выше (будто он на один уровень выше за свой базовый),
            и дает заклинание защита от зла как заклинание сферы 1-го уровня.
            Лечение – дает доступ ко всем заклинаниям, основанным на лечении школы
            колдовства, будто он на один уровень выше, и заклинание лечение легких
            ранений. При подготовке заклинаний Джозан получает одно заклинание 1-го
            уровня за то, что он жрец 1-го уровня, одно бонусное за высокий показатель
            Мудрости (15), и одно заклинание сферы. Выбор из двух заклинаний из
            выбранных им сфер состоит или защита от зла, или лечение легких ранений`,
          ],
        },
        {
          LABEL: 'Мгновенное Активирование',
          VALUE: [
            `Добрые жрецы (нейтральные добрых богов) способны направлять энергию
            запасенных заклинаний в лечащие заклинания. Жрец «теряет» запасенное
            заклинание, при активации заклинания лечение, того же уровня что и
            запасенное. Например, добрый жрец выучил заклинание команда (1-го уровня)
            и может, теряя его, активировать лечение легких ранений (тоже 1-го уровня).
            Жрецы добрых богов, способны активировать лечащие заклинания, так как
            они особенно хороши в обращении позитивной энергии. Священник не может
            использовать заклинания сфер при замене их мгновенного активирования
            лечение или причинить. Эти заклинания он получает от сил своего бога в
            частности, а нет общей жреческой магической энергии`,
            `Злые жрецы (нейтральные злых богов) наоборот, запасенные заклинания
            могут применять, как заклинания причинить (заклинания, где в названии
            стоит «причинить»). Эти жрецы умелы в обращении с негативной энергией`,
            `Нейтральные жрецы нейтральных богов способны менять заклинания или на
            лечение или на причинить (выбор игрока), в зависимости, с какой
            энергией его персонаж больше сталкивается. Сделав выбор, его больше
            изменить невозможно. Этот выбор также определяет, изгоняет или
            контролирует его персонаж нежить (смотри ниже)`,
            `Исключение: Все законно нейтральные жрецы Вии Джасы (богини смерти
            и магии) заменяют на заклинания причинить, а не лечение. Все жрецы
            Св. Кутберта (бога возмездия) и все не злые жрецы Обад-Хая
            (бога природы) способны заменять на заклинания лечение, а
            не причинить`,
          ],
        },
        {
          LABEL: 'Хаотичные, Злые, Добрые и Законные Заклинания',
          VALUE: [
            `Жрец не способен активировать и изучать заклинания, связанные с противоположным
            мировоззрением его или её бога. К примеру, добрый или нейтральный жрец доброго
            бога не способен пользоваться злыми заклинаниями. Заклинания, связанные
            со сферами Добро, Зло, Хаос, Закон идентифицируются по «линии» ограничения
            своего использования, смотрите дескрипторы заклинаний в Главе 11: Заклинания`,
          ],
        },
        {
          LABEL: 'Изгнание или Контролирование Нежити (Свх)',
          VALUE: [
            `Любой священник вне зависимости от мировоззрения обладает
            способностью воздействования на мертвых существ (таких
            как скелетов, зомби, пугало и вампиров), пропуская энергию
            силы своей веры через священный (или нечестивый) символ
            (смотрите Изгнание и Контролирование Нежити на стр. 1__).`,
            `Добрый жрец (или нейтральный, поклоняющийся доброму богу)
            имеет сверхъестественную способность изгонять
            нежить: скелетов, зомби, призраков, вампиров, заставляя этих
            нечестивых созданий отступать/гибнуть перед мощью бога,
            передаваемой через жреца. Злые священники (нейтральные
            поклоняющиеся злым богам) способны подчинять и контролировать
            таких существ. Нейтральные жрецы нейтральных богов
            способны выбирать, к какой энергии они больше
            склонны: позитивной или негативной (выбор игрока). Сделав
            выбор, его невозможно поменять. Это отображается на спонтанных
            заклинаниях нейтральных жрецов: причинить или
            излечить (смотрите выше)`,
            `Исключения: Все законно нейтральные жрецы Вии Джасы (богини
            смерти и магии) контролируют нежить, а не изгоняют её. Все
            жрецы Св. Кутберта (бога возмездия) и все не злые жрецы
            Обад-Хая (бога природы) изгоняют нежить, а не контролируют её`,
            `Жрец способен применить изгнание или контроль нежити три раза
            в день плюс модификатор его Обаяния. Жрец с 5 и более рангами
            в Знание (религия) получает +2 бонус к проверкам изгнания против нежити`,
          ],
        },
        {
          LABEL: 'Дополнительные Языки',
          VALUE: [
            `Бонусные языки жрецов включают в себя Небесный, Абисса, Адский (языки
            добрых, хаотично злых и законно злых существ соответственно). Это
            дополнение к основным языкам доступным для персонажа, помимо его
            расовых (смотрите Раса и Языки стр. 12 и Навык Язык стр. 81)`,
          ],
        },
      ],
    },
    {
      NAME: 'Уход в отставку',
      TAB_KEY: 'resignation',
      PARAGRAPHS: [
        {
          LABEL: 'Более не жрец',
          VALUE: [
            `Жрец не выполняющий кодексы и постулаты своего бога (действуя вопреки
            мировоззрению и целям бога), теряет все свои заклинания и черты класса,
            не способен развиваться далее в уровнях до тех пор пока он не искупит
            грехи (смотрите заклинание искупление, на стр. 219)`,
          ],
        },
      ],
    },
    {
      NAME: 'Стартовый пакет',
      TAB_KEY: 'starter-pack',
      PARAGRAPHS: [
        {
          LABEL: 'Человек Жрец',
        },
        {
          LABEL: 'Доспех',
          VALUE: [
            `Чешуйчатая кольчуга (+4 КД, штраф проверки доспеха –4, скорость 6 м, вес 13,5 кг.)`,
            `Большой деревянный щит (+2 КД, штраф проверки доспеха –2, вес 4,5 кг.)`,
          ],
        },
        {
          LABEL: 'Оружие',
          VALUE: [
            `Тяжелая булава (1d8, крит. ×2, 3,6 кг., одноручное, дробящее)`,
            `Легкий арбалет (1d8, крит. 19–20/×2, диапазон 24м, 1,8 кг, колющеее)`,
          ],
        },
        {
          LABEL: 'Выбор Навыков',
          VALUE: [
            `Выберите количество навыков равное 3 + модификатор Интеллекта`,
          ],
        },
        {
          isTable: true,
          KEY: PRIEST_STARTER_PACK_TABLE,
        },
        {
          LABEL: 'Отличительная черта',
          VALUE: [`Написать Свиток`],
        },
        {
          LABEL: 'Бонусная Отличительная черта',
          VALUE: [`Настороженность`],
        },
        {
          LABEL: 'Бог/Сферы',
          VALUE: [`Пелор/Добро и Лечение`],
        },
        {
          LABEL: 'Снаряжение',
          VALUE: [
            `Вещмешок с будюком, пища на один день, походное одеяло, мешок,
            огниво и кресало. Колчан с 10 арбалетными стрелами. Священный
            деревянный символ (солнечный диск Пелора). Три факела`,
          ],
        },
        {
          LABEL: 'Золото',
          VALUE: [`1d4 зм`],
        },
      ],
    },
  ],
}
