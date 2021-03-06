// @flow
import type { pageContentType } from '@/components/page'
import {
  MONK_LVL_TABLE,
  MONK_DAMAGE_DEPENDS_SIZE_TABLE,
  MONK_STARTER_PACK_TABLE,
} from '@/tables'
import monkImage from '@/assets/monk.png'

export const MONK_PAGE: pageContentType = {
  TITLE: 'Монах',
  URL: '/classes/monk',
  isNavigationPage: false,
  parentUrl: '/classes',
  TABS: [
    {
      NAME: 'Описание',
      TAB_KEY: 'description',
      PARAGRAPHS: [
        {
          image: [monkImage],
          VALUE: [
            `Словно небольшие точки на ландшафте расположены монастыри – маленькие,
            огороженные обители, населённые монахами. Обычно монахи преследуют
            великолепие своих тел и душ через постоянные тренировки и медитации.
            Они тренируются, чтобы стать прекрасными воинами, сражаясь особой
            техникой, не применяя оружие или доспехи. Монастыри,
            управляемые добрыми верховными мастерами, выполняют
            роль защитников людей. Готовые выступить в защиту, даже
            когда босиком и одеты в простую крестьянскую одежду. Они
            странствуют не привлекая внимание остальных людей, ловя
            бандитов, неся справедливость на головы неосторожных,
            коррумпированных военачальников, знати. Полной противоположностью
            являются монастыри, управляемые злыми мастерами, распространяющими
            на близлежащие земли зло, страх, также как это может злой варлорд.
            Из злых монахов выходят идеальные шпионы, лазутчики и наёмные убийцы`,
            `Однако для отдельного монаха не характерно стремление
            к власти, славе или накоплению богатства. Единственное, что
            его заботит, оттачивание собственного искусства боя, а также
            дальнейшее улучшение боевых способностей. Его целью является
            достижение того, что лежит вне пространств обычных владений и королевств`,
          ],
        },
        {
          LABEL: `Приключения`,
          VALUE: [
            `Монахи обычно отправляются в путь приключений, чтобы испытать себя.
            Не подверженные публичному выставлению своих умений, они всё же хотят
            испытать их перед различными преградами и препятствиями. Манахи не
            страдают жадностью к материальному обогащению, но интенсивно ищут то,
            что может помочь им в улучшении овладения их искусства боя`,
          ],
        },
        {
          LABEL: `Характеристика`,
          VALUE: [
            `Ключевой способностью монаха является его способность сражаться без
            доспехов и оружия. Благодаря своим строгим тренировкам, его удары
            настолько же сильны, как и оружие, а удары наносятся значительно быстрее,
            чем воин своим мечом`,
            `Хотя монахи не активируют заклинания, у них есть своя, специфическая
            магия. Они собирают в себя едва различимую энергию, называемую ци,
            позволяющую им творить непревзойдённые вещи. Именно монах лучшего всего
            знает, как оглушить оппонента одним невооружённым ударом. Также
            монах обладает сверхъестественным чутьем о приближении атаки, удара.
            Он способен уклониться от атаки, даже если полностью не осознаёт о
            её приближении`,
            `С приобретением опыта и силы, монах развивает свои способности энергии
            ци и ведения боя, придающие ему со временем всё больше и больше силы,
            делая его одним из наиболее искусных бойцов`,
          ],
        },
        {
          LABEL: `Мировоззрение`,
          VALUE: [
            `Тренировки монаха требуют строгой дисциплины. Лишь те, у кого в сердце
            закон и порядок способны познать путь и учения монахов`,
          ],
        },
        {
          LABEL: `Религия`,
          VALUE: [
            `Монахи тренируют свои духовные пути. Эти пути внутренние, способные
            поддерживать связь лишь с частным, таинственным духовным миром. Им не
            нужны ни жрецы, ни боги. Монахи могут поклоняться некоторым, законным
            по своему мировоззрению богам, они будут медитировать на образ своего
            бога, чтобы затем соответствовать их учениям`,
            `Три наиболее возможных кандидата поклонения монахов:`,
            `Хайрониус (бог доблести)`,
            `Св. Кутберт (бог возмездия)`,
            `Хекстор (бог тирании)`,
          ],
        },
        {
          LABEL: `Предпосылки`,
          VALUE: [
            `Обычно монахи тренируются в монастыре. Большинство монахов попало в
            монастырь в детстве, их отправили жить с монахами, когда умерли их родители,
            а может потому, что в семье не было достаточно пищи, чтобы прокормить
            всех, а может как ответ/возврат за добрые дела монастыре, сделанные для
            семьи, селения. Жизнь в монастыре настолько замкнута на том, что монах
            проводит большую часть времени в тренировках, что он практически не ощущает
            связи со своими прошлыми родными или селением`,
            `В больших городах, монахи наставники организовывают школы, в которых
            обучают своему искусству подходящих и заинтересованных кандидатов. Монахи
            из этих академий, смотрят на своих сельских побратимов по искусству, как
            на более отсталых, и менее тренированных`,
            `Монах может ощущать сильную связь со своим монастырём или школой. Монах,
            воспитанный в ней, ценит её превыше всего. В тоже время, другие монахи,
            ставшие на собственный путь изучения, рассчитывают лишь на свои тренировки
            и достижения в искусстве боя`,
            `Монахи отличают друга друга от остальной массы населения, считая себя
            обособленной группой. Они могут ощущать родственные узы своего класса,
            также они обожают проводить соревнования между друг другом, чтобы
            проверить, чья ци мощнее`,
          ],
        },
        {
          LABEL: `Расы`,
          VALUE: [
            `Наиболее часто, можно встретить монастыри, населённые людьми, которые являются
            неотделимой составляющей, их вечно эволюционирующей культуры. Именно поэтому,
            большая часть монахов люди (или полуорки или полуэльфы, проживающие в обществе
            людей). Эльфы предрасположены к целеустремлённой, длительной посвящённости
            интересующей науке, искусству или дисциплине, поэтому некоторые из них, могут
            покидать свои леса, и становится монахами. Традиции монахов чужды для
            культур дварфов и гномов, а халфлинги слишком переменчивы и неусидчивы,
            чтобы длительное время находится в монастыре, поэтому очень и очень редко,
            дварфы, гномы или халфлинги становятся монахами`,
            `Дикие гуманоиды не обладают слишком стабильной социальной культурой,
            позволяющей развивать учения монахов,но изредка, сирота и покинутый ребёнок
            из какого-то гуманоидного племени прибредает к оплотам цивилизации в глухих
            местностях – монастырям, или берутся на обучение странствующими
            мастерами-учителями монахами. У злой подземной эльфийской подрасы, известной
            как дроу, есть небольшие, но весьма неплохие продвижения в искусстве монахов`,
          ],
        },
        {
          LABEL: `Отношения с другими классами`,
          VALUE: [
            `Монахи весьма отдалены от остальных, так как у них очень мало общего с
            мотивациями и навыками других классов. Однако монахи признаны всеми за то,
            что они надёжные компаньоны, и прекрасно справляются с заданиями прикрывая
            других`,
          ],
        },
        {
          LABEL: `Роль`,
          VALUE: [
            `Монах наиболее приспособлен как стремительный боец, используя свою скорость
            для быстрого вступления в бой и покидания его, не позволяя противнику
            ввязываться с ним в продолжительные рукопашные схватки. Он также может быть
            прекрасным разведчиком, особенно если сфокусирует свой выбор навыков на
            скрытности`,
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
          KEY: MONK_LVL_TABLE,
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
            `Мудрость питает особые атакующие и защитные способности монахов. Ловкость
            даёт не бронированному монаху лучшую защиту, а также бонусы к некоторым
            классовым навыкам. Сила улучшает способность проведения невооруженного боя`,
          ],
        },
        {
          LABEL: 'Мировоззрение',
          VALUE: [`Любое законное`],
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
            `У монаха следующие навыки класса (и их ключевой параметр):`,
            `Актёрство (Обн)`,
            `Баланс (Ловк)`,
            `Бесшумное Передвижение (Ловк)`,
            `Взбирание (Сила)`,
            `Дипломатия (Обн)`,
            `Знание (магия) (Интл)`,
            `Знание (религия) (Интл)`,
            `Искусство Побега (Ловк)`,
            `Концентрация (Тело)`,
            `Отслеживание (Мудр)`,
            `Плавание (Сила)`,
            `Прислушивание (Мудр)`,
            `Профессия (Мудр)`,
            `Прыжки (Сила)`,
            `Ремесло (Интл)`,
            `Падение/Кульбиты (Ловк)`,
            `Скрытность (Ловк)`,
            `Смотрите 4 Главу: Навыки с описанием всех перечисленных навыков`,
          ],
        },
        {
          LABEL: 'Пункты навыков на 1-м уровне',
          VALUE: [`(4 + модификатор Интеллекта) × 4`],
        },
        {
          LABEL: 'Пункты навыков на каждом новом уровне',
          VALUE: [`4 + модификатор Интеллекта`],
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
            `Монахи опытны с основными простыми видами оружия, и специфическими видами
            оружия являющимися предметами тренировки монаха. Весь список оружия для
            монаха, включает в себя: дубина, арбалет (тяжёлый или лёгкий), кинжал,
            ручной топор, метательное копьё, кама, нунчаки, посох, сюрикены, сьянгхэм
            и праща. (Смотрите Главу 7: Снаряжение, для ознакомления с описанием оружия)`,
            `Монахи не квалифицированы во владении с доспехами и щитами, ведь множество
            специальных способностей монаха основано на не закрепощенном передвижении.
            Будучи одетыми в доспехи, или удерживающие щиты, или же несущие среднюю или
            тяжелую нагрузку, монах теряет свой бонус к КД, а также повышенное
            передвижение и шквал ударов`,
          ],
        },
        {
          LABEL: 'Бонус КД (Экс)',
          VALUE: [
            `Они хорошо обучены технике отклонения от ударов и развивают «шестое чувство»,
            позволяющее им избегать удары неожиданных атак. Будучи не в доспехах и не
            в перенагрузке, в дополнение к базовому модификатору Ловкости в КД, монах
            добавляет бонус Мудрости (если он есть) к своему КД. В дополнение монах
            получает +1 бонус к КД на 5-м уровне. Далее этот бонус повышается на каждом
            5-м уровне по классу монаха (+2 на 10-м, +3 на 15-м и +4 на 20-м)`,
            `Эти бонусы к КД применяются и против касательных атак, и когда монах
            оторопевший. Эти бонусы он теряет, когда полностью обездвижен или беспомощен,
            когда одет в какой-нибудь доспех, или удерживает щит, а также если несет
            среднюю или тяжелую нагрузку`,
          ],
        },
        {
          LABEL: 'Невооруженный Удар',
          VALUE: [
            `Монахи высоко тренированны в безоружном стиле боя. Применяя его, они получают
            существенные преимущества. На первом уровне в качестве бонусной черты монах
            получает Улучшенный Невооруженный Удар. Атаки монаха чередуют в себе удары
            кулаком, локтями, коленями и стопами. Это означает, что он способен проводить
            невооруженные атаки даже когда он удерживает что-то в руках. У монахов нет не
            основной руки при проведении нескольких атак различными руками (только для
            невооруженного боя). Для всех своих невооруженных атак монах применяет полный
            бонус Силы, а также при бросках повреждения`,
            `Обычно невооруженные атаки монаха наносят постоянные повреждения, но он может
            выбирать нанесение временных повреждений, не перенося при этом штрафов к
            броскам атак. Точно также он может выбирать временные или постоянные
            повреждения при проведении захвата (смотрите стр. 15_)`,
            `Относительно заклинаний и эффектов усиливающих природное или изготовленное
            оружие (такие как волшебный клык или волшебное оружие), невооруженные удары
            монаха воспринимаются как и изготовленное оружие, и природное оружие`,
            `Также монах наносит больше повреждений в такой атаке, чем это может выполнить
            обычный человек, это отображено в Таблице 3–15: Монах. Невооружённые удары в
            таблице 3-15: Монах, даны для монахов Среднего размера. Маленькие по размеру
            монахи, причиняют меньшее количество, от указанного, повреждений, своими
            невооружёнными атаками (Смотрите Таблицу 3-11: Скорость и Повреждения
            Маленьких и Больших Монахов)`,
          ],
        },
        {
          LABEL: 'Шквал Ударов',
          VALUE: [
            `Будучи без доспехов, монах, ухудшая точность, повышает количество атак.
            Применяя это, он может проводить на одну дополнительную атаку в раунд больше.
            Свою первую атаку он проводит со своим высоким бонусом атаки –2, а также и
            каждая последующая. Результаты модифицированной базовой атаки показаны в
            колонке Бонус Атаки Шквала Ударов в Таблице 3–10: Монах. Эти штрафы применяются
            на 1 раунд, поэтому они переносятся на благоприятные атаки монаха, которые
            он будет проводить до своего следующего действия. Когда монах поднимается до
            5-го, уровня эти штрафы опускаются до –1, а на 9-м уровне и вовсе исчезают.
            При проведении шквала ударов монах обязан выполнять свое действие полной
            атаки (смотрите стр. 14_)`,
            `Монах может использовать шквал ударов невооруженными атаками, или держа в
            руках специфическое оружие для монаха (кама, нунчаки, посох, сай, сюрикен и
            сьянгхэм). Если вооружён одним таким оружием, он может проводить атаку или
            оружием или рукой по своему желанию. Для примера, на 6-м уровне, Эмбе
            способна проводить свой невооруженный удар с бонусом атаки +3 и атаковать
            специальным оружием монаха, тоже с бонусом +3, используя оружие как часть
            шквала ударов, монах применяет свой бонус Силы (не 1,5 или 0,5 бонуса Силы)
            к повреждениям во всех успешных атаках, вне зависимости от того, удерживает
            ли он оружие в одной или обеих руках. В шквале ударов монах не может
            использовать никакое другое оружие, кроме своего специфического`,
            `В случае с посохом, то каждое окончание этого оружия принимается как
            отдельное оружие, в целях его использования в шквале ударов. Даже хотя посох
            требует для применения две руки, монах все также может чередовать
            невооруженные атаки с ударами посоха, подразумевается, что у него достаточное
            количество атак в шквале ударов, чтобы чередовать их. Например, монах 8-го
            уровня способен проводить две атаки посохом (по одной с каждого конца) с
            бонусом атаки +5, и одну невооруженную атаку с бонусом +0, или же он может
            провести одну атаку посохом, и одну невооруженную атаку с бонусом атаки
            +5, а затем проатаковать вторым окончанием посоха с бонусом атаки +0. Однако
            он не может удерживая посох, держать в руках ещё какое-то другое оружие.
            Достигая 11-го уровня, шквал ударов монаха улучшается. В дополнение к одной
            стандартной дополнительной атаке, он получает вторую дополнительную атаку
            при своем полном базовом бонусе атаки`,
          ],
        },
        {
          LABEL: 'Бонусная Черта',
          VALUE: [
            `На 1-м уровне монах может взять себе на выбор в качестве бонуса или
            Улучшенный Захват, или Ошеломляющий Удар. На 2-м уровне он может выбрать Боевые
            Рефлексы или Отклонение Стрел. На 6-м или Улучшенное Обезоруживание, или
            Улучшенное Опрокидывание. (Смотрите Глава 5: Черты, для ознакомления с их
            описанием). Чтобы выбирать эти черты, у монаха нет необходимости точно
            соответствовать необходимым условиям представленным в отличительных чертах`,
          ],
        },
        {
          LABEL: 'Уклонение (Экс)',
          VALUE: [
            `С высоким проворством, монах способен уклоняться даже от магических и
            необычных атак. Если монах успешно проводит проверку Рефлекса, против атаки
            причиняющей половину повреждения при успешной проверке Рефлекса (такой как,
            например, огненное дыхание красного дракона или шар огня), монах не переносит
            вообще никаких повреждений. Уклонение возможно лишь в том случае, если
            монах одет в легкий тип доспехов, или вообще без доспехов. Беспомощный
            монах (без сознания или парализованный) не получает преимуществ уклонения`,
          ],
        },
        {
          LABEL: 'Быстрое Передвижение (Экс)',
          VALUE: [
            `С третьего уровня и выше, монах способен передвигаться быстрее, чем обычно,
            показано в Таблице 3-10: Монах. Монах в доспехах (даже лёгких), или со
            средней или тяжёлой нагрузкой, теряет свою сверх-скорость`,
          ],
        },
        {
          isTable: true,
          KEY: MONK_DAMAGE_DEPENDS_SIZE_TABLE,
        },
        {
          LABEL: 'Безмолвный Разум (Экс)',
          VALUE: [
            `На 3-м уровне и выше, монах получает +2 бонус к спасброскам против
            заклинаний или эффектов из школы Очарования. Благодаря длительным
            тренировкам и медитациям, он становится более устойчивым к атакам
            влияющим на разум`,
          ],
        },
        {
          LABEL: 'Замедленное Падение (Экс)',
          VALUE: [
            `На 4-м уровне, монах способен затормозить свое падение о противоположные
            стены на расстоянии вытянутых рук монаха. Монах переносит повреждение, так,
            будто он упал с высоты на 6м. ниже. Его способность замедлять падение
            (понижать опасность высоты, удерживаясь о стены) улучшается до тех пор,
            пока на 18 уровне он способен падать, замедляя падения о стены, практически
            с любой высоты. Смотрите колонку «Особое» в Таблице 3-10: Монах, для
            деталей`,
          ],
        },
        {
          LABEL: 'Удар Ци (Свх)',
          VALUE: [
            `На 4-м уровне, невооружённая атака монаха усиленна энергией ци.
            Невооружённый удар такой атаки принимается как магический, относительно
            способности причинить повреждение существу со снижением повреждений,
            (смотрите Снижение Повреждений на стр. 291 в Руководстве Мастера Подземелий).
            Удар ци с ростом уровней монаха улучшается. С 10-го уровня удар ци
            принимается как законное оружие относительно снижения повреждений.
            С 16-го уровня его удары принимаются как адамантиновое оружие, относительно
            преодоления снижения повреждения существ и преодоления прочности (смотрите
            Разбивание Объектов стр. 16_)`,
          ],
        },
        {
          LABEL: 'Чистота Тела (Экс)',
          VALUE: [
            `На 5-м уровне, получает контроль над иммунной системой своего тела. Он
            получает иммунитет ко всем болезням, кроме сверхъестественных и магических
            (таких как гниение мумии или ликантропия)`,
          ],
        },
        {
          LABEL: 'Целостность Тела (Свх)',
          VALUE: [
            `На 7-м уровне, монах способен лечить свои собственные ранения. Каждый день,
            он способен восстанавливать хит-поинты, количество которых равно: текущий
            уровень монаха ×2. Это лечение он может распределять на несколько
            использований`,
          ],
        },
        {
          LABEL: 'Улучшенное Уклонение (Экс)',
          VALUE: [
            `На 9-м уровне способность монаха уклонятся повышается. Он всё также не
            переносит повреждений при успешной проверке Рефлекса против атак, таких как
            дыхание дракона или огненный шар, но в любом случае, при неудачной проверке,
            переносит лишь половину повреждений. Беспомощный монах (без сознания или
            парализованный) не получает преимуществ уклонения`,
          ],
        },
        {
          LABEL: 'Алмазное Тело (Свх)',
          VALUE: [
            `На 11-м уровне, монах настолько контролирует метаболизм собственного тела,
            что приобретает иммунитет ко всем видам ядов`,
          ],
        },
        {
          LABEL: 'Поражающий Шаг (Свх)',
          VALUE: [
            `С 12-го уровня, один раз в день, монах магически способен проскальзывать
            между измерениями, будто применяя заклинание дверь измерений. Его эффективный
            уровень заклинателя = 1/2 текущего уровня монаха (дроби округляются вниз)`,
          ],
        },
        {
          LABEL: 'Алмазная Душа (Экс)',
          VALUE: [
            `На 13-м уровне, монах приобретает устойчивость к магии. Его устойчивость
            к магии равна: его уровень + 10. Для того чтобы поразить монаха заклинанием,
            заклинатель обязан преодолеть устойчивость монаха, выбросив на d20:
            1d20 + уровень заклинателя, (Смотрите Устойчивость к Магии, стр. 17_) число
            равное или выше УМ монаха`,
          ],
        },
        {
          LABEL: 'Содрагающая Длань (Свх)',
          VALUE: [
            `Начиная с 15-го уровня, монах способен применять эту способность. Эта
            ужасающая атака проводит удар, заставляющий смещаться органы внутри тела
            оппонента, и при желании монаха, эта атака может быть фатальной. Монах
            способен применять содрагающую длань один раз в неделю, и перед броском
            атаки обязан сфокусироваться. Механизмы, слизни, растения и нежить, а
            также бестелесные и существа, обладающие иммунитетом к критическим атакам,
            не подвергаются влиянию этой способности. Если удар успешен, жертва
            переносит повреждение от удара, и помимо этого, монах может пожелать,
            чтобы существо умерло (свободное действие) в промежутке времени 1
            день за каждый уровень монаха. Существо обязано пройти проверку спасброска
            Стойкости (КС 10 + 1/2 уровней монаха + модификатор Мудрости). Если
            проверка Стойкости неуспешна, существо умирает. Если успешна, существо
            более не уязвимо к атаке этой содрагающей длани (но позже, может быть
            поражено другой)`,
          ],
        },
        {
          LABEL: 'Нестареющее Тело (Экс)',
          VALUE: [
            `После достижения 17-го уровня, монах более не переносит штрафов за
            возраст, и не может быть магически состарен. Любые штрафы, которыми он
            обладал, сохраняются. Бонусы всё также накапливаются, а умирает монах
            от старости, когда приходит конец срока жизни`,
          ],
        },
        {
          LABEL: 'Язык Солнца и Луны (Экс)',
          VALUE: [
            `С 17-го уровня и выше, монах способен разговаривать с любым живым существом`,
          ],
        },
        {
          LABEL: 'Пустота Тела (Свх)',
          VALUE: [
            `С 19-го уровня и выше, монах способен приобретать эфирное состояние на
            1 раунд/уровень в день, как заклинание эфирность. Монах способен входить в
            это состояние по несколько раз в день, но не более чем на
            ограниченное количество раундов, позволенных ему, соответственно уровня`,
          ],
        },
        {
          LABEL: 'Собственное Улучшение',
          VALUE: [
            `С 20-го уровня, монах наделять свое тело навыками и квази-магическими
            способностями так, что он превращается в магическое существо. С этой
            поры, он считается внешним (экстрапланарным существом),
            а не гуманоидом, относительно магических эффектов и заклинаний. К примеру,
            его не поражает очарование персоны. В дополнение он получает снижение
            повреждений 10/магия. Это означает, что монах игнорирует (мгновенно
            регенерирует) первые 10 пунктов повреждения от обычного оружия, или
            атак ,проводимых существ без похожего снижения повреждений (смотрите
            Снижение Повреждений на стр. 291 в Руководстве Мастера Подземемелий). В
            отличие от внешних, монах все также возможно вернуть к жизни из погибшего
            состояния, будто он является представителем из существ своего предыдущего
            типа`,
          ],
        },
      ],
    },
    {
      NAME: 'Уход в отставку',
      TAB_KEY: 'resignation',
      PARAGRAPHS: [
        {
          LABEL: 'Более не Монах',
          VALUE: [
            `Монах утративший законное мировоззрение, не развивается
            далее в уровнях, но сохраняет все свои накопленные способности монаха`,
            `Как и представители любых других классов, монах может
            быть мультиклассовым персонажем, но монахи сталкиваются
            со строгим ограничением. Если монах, получивший новый
            класс (или будучи уже мультиклассовым), поднял другой
            класс хотя бы на единицу, больше никогда не будет развиваться в классе
            монаха, хотя и сохранит все способности монаха`,
          ],
        },
      ],
    },
    {
      NAME: 'Стартовый пакет',
      TAB_KEY: 'starter-pack',
      PARAGRAPHS: [
        {
          LABEL: 'Человек Монах',
        },
        {
          LABEL: 'Доспех',
          VALUE: [`Нет, (скорость 9м.)`],
        },
        {
          LABEL: 'Оружие',
          VALUE: [
            `Посох (1d6/1d6, крит. ×2, 1,8 кг., двуручное, дробящее)`,
            `Праща (1d4, крит. ×2, диапазон 15м, 0 кг., дробящее)`,
          ],
        },
        {
          LABEL: 'Выбор Навыков',
          VALUE: [
            `Выберите количество навыков, равное 5 + модификатор Интеллекта`,
          ],
        },
        {
          isTable: true,
          KEY: MONK_STARTER_PACK_TABLE,
        },
        {
          LABEL: 'Отличительная черта',
          VALUE: [
            `Если Ловк 13 или выше - Уворачивание`,
            `Если Ловк 12 или ниже - Улучшенная Инициатива`,
          ],
        },
        {
          LABEL: 'Бонусная Черта',
          VALUE: [
            `Если Ловк 13 и выше - Подвижность`,
            `Если 12 и ниже - Сражение в Слепую`,
          ],
        },
        {
          LABEL: 'Снаряжение',
          VALUE: [
            `Вещмешок с бурдюком, еда на один день пути, походное одеяло, мешок,
            кремень и огниво. Три факела. Мешочек с 20 камнями для пращи`,
          ],
        },
        {
          LABEL: 'Золото',
          VALUE: [`2d4 зм`],
        },
      ],
    },
  ],
}
