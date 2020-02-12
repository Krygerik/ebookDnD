// @flow
import { type pageContentType } from '@/components/page'
import { TABLES } from '@/tables'

const MODIFY_PARAMS_AND_BONUS_SPELLS_TABLE = TABLES[0].KEY
const AVERAGE_POWER_PARAMS_TABLE = TABLES[1].KEY
const AVERAGE_AGILITY_PARAMS_TABLE = TABLES[2].KEY
const AVERAGE_BODIES_PARAMS_TABLE = TABLES[3].KEY
const AVERAGE_INTELLIGENCE_PARAMS_TABLE = TABLES[4].KEY
const AVERAGE_WISDOM_PARAMS_TABLE = TABLES[5].KEY
const AVERAGE_CHARM_PARAMS_TABLE = TABLES[6].KEY

export const PARAMETERS_PAGE: pageContentType = {
  TITLE: 'Глава 1. Параметры',
  URL: '/parameters',
  isNavigationPage: false,
  DESCRIPTION: [
    `Каждый произведенный бросок кубика
        модифицирован вместе с параметрами вашего
        персонажа. Например, у более плотного
        телосложением персонажа, более высокий
        шанс выжить от ядовитого укола виверны. У
        персонажа с развитым чувством восприятия, более высокий
        шанс заметить группу скрывающихся рядом медвежатников.
        У глупого персонажа меньше шансов обнаружить секретную
        дверь, ведущую к скрытой сокровищнице. Показатели ваших
        параметров укажут вам на все модификаторы и дальнейшие
        броски кубиков`,
    `Ваш персонаж обладает шестью параметрами: Сила
        (аббревиатура – Сила) и Ловкость (Ловк), Телосложение
        (Тело) и Интеллект (Интл), Мудрость (Мудр) и Обаяние
        (Обн). Каждый из параметров персонажа, который выше
        среднего, дает ему преимущество в бросках, а тот, что ниже
        середины, является помехой при выбросе нужного числа.
        Вы бросаете ваши показатели случайно, согласуя их с теми
        параметрами которые вы желаете видеть, поднимая и опуская
        их в соответствии с вашей расой, и затем, поднимая их, когда
        персонаж развивается, поднимаясь в уровнях.`,
  ],
  TABS: [
    {
      NAME: 'Показатели параметров',
      TAB_KEY: 'params-indicators',
      PARAGRAPHS: [
        {
          isTable: false,
          VALUE: [
            `Для того, что бы получить параметр для вашего персонажа,
                бросьте четыре шестигранных кубика (4d6). Отбрасывайте
                самый нижний показатель на кубике, и суммируйте показатели
                остальных трёх. Этот бросок может дать вам число между 3
                (ужасно) и 18 (прекрасно). Средний показатель параметра
                для типичного обывателя 10 или 11, но ваш герой ведь не
                типичен, не правда ли? `,
            `Наиболее распространенные показатели параметров
                игровых персонажей (ИП) 12, 13. (Ведь обычный персонаж,
                выше, чем обычный человек).`,
            `Бросьте кубики шесть раз, записывая результаты
                каждый раз на черновую бумагу. Как только вы получили
                шесть показателей, распределите их по каждому из шести
                параметров на свое усмотрение. На этом этапе, вы должны
                представлять себе какой тип игрока будет ваш персонаж,
                выберете его расу и класс, с целью максимально лучшего
                размещения показателей параметров. Помните что выбор
                какой-то расы кроме человека или полу-эльфа, изменит
                показатели ваших параметров (смотрите Таблицу 2-1:
                Модификаторы Параметров Расы стр. 12).`,
          ],
        },
        {
          isTable: false,
          LABEL: 'Модификаторы параметров',
          VALUE: [
            `Каждый параметр, после выбора расы, будет изменяться
                от –5 до +5. В Таблице 1-1. Модификаторы Параметров и
                Бонус заклинаний (см. на следующей странице) показывает
                модификаторы для каждого параметра, основанные на его
                величине. Это также показывает количество бонусных
                заклинаний, которыми вы сможете владеть, если ваш
                персонаж способен активировать магию. `,
            `Модификатор – число, которое вы должны
                суммировать или отнимать от броска, когда ваш
                персонаж должен сделать что-то относящееся к
                этому параметру. К примеру, вы должны прибавить
                или отнять модификатор от Силы, если ваш персонаж
                пытается ударить кого-то мечом. Вам также нужны
                эти модификаторы, если вы не бросаете кубики, так
                вы используете модификатор за Ловкость к вашему
                Классу Доспеха (КД). Положительный модификатор
                называется бонус, отрицательный штраф.`,
          ],
        },
        {
          isTable: false,
          LABEL: 'Параметры и заклинатели',
          VALUE: [
            `Параметры от которых зависят ваши бонусные
                заклинания (смотрите Главу 3: Классы) зависят от
                типа заклинателя вашего персонажа: Интеллект у
                Магов, Мудрость для Жрецов, Друидов, Паладинов,
                Рейнджеров, и Обаяние для Волшебников и Бардов.
                В дополнение к высоким показателям параметров,
                заклинатель должен быть необходимого уровня, для
                того чтобы пользоваться бонусными заклинаниями
                более высокого уровня. (Смотрите описание классов
                в Главе 3 для деталей). Для примера, волшебница 
                Мйали имеет Интеллект 15, поэтому она достаточно умна,
                что бы обладать бонусными заклинаниями: одно 1-го
                уровня, и одно 2-го уровня. (Но она не получит бонусное
                заклинание второго уровня до тех пор, пока не достигнет 3-
                го уровня, минимального уровня когда волшебник способен
                активировать заклинания 2-го уровня).`,
            `Если показатель параметра вашего персонажа 9 или ниже,
                то он не может вообще пользоваться заклинаниями. Для
                примера, Интеллект Майли понизился до 9 из-за действия
                яда, она не будет способна пользоваться простейшими
                волшебными заклинаниями до тех пор, пока не вылечится.`,
          ],
        },
        {
          isTable: true,
          KEY: MODIFY_PARAMS_AND_BONUS_SPELLS_TABLE,
        },
        {
          isTable: false,
          LABEL: 'Перебрасывание',
          VALUE: [
            `Если ваши показатели слишком низкие, вы можете отказаться
                от них (с согласия с МП). Ваши показатели считаются
                низкими, если, сумма всех модификаторов признаков (перед
                тем как будут произведены изменения в соответствии с расой)
                равны 0 или ниже нуля, или самый высокий ваш показатель
                равен 13 или ниже 13.`,
          ],
        },
      ],
    },
    {
      NAME: 'Параметры',
      TAB_KEY: 'params',
      PARAGRAPHS: [
        {
          isTable: false,
          VALUE: [
            `Каждый параметр, частично описывает вашего персонажа, и
                воздействует на все его игровые действия.`,
            `Здесь приводится объяснение каждого Параметра,
                включая список рас и созданий с указанным средним
                показателем их Параметра. (Не каждое создание имеет
                какой-то показатель в каждом Параметре, вы увидите это,
                рассматривая списки приведенные ниже). Эти показатели
                далеки от единых средних, молодые, подростки одной
                расы, отличаются друг от друга, как и сборщик налогов
                дварф, купец халфлинг, или какой-нибудь исключительный
                гнолл. У искателя приключений – скажем, воина дварфа или
                рейнджера гнолла – скорее всего, будут лучшие показатели,
                ну как минимум те, от которых зависят их классы, поэтому
                все игровые персонажи, в чем-то будут выше отдельных
                средних признаков`,
          ],
        },
        {
          isTable: false,
          LABEL: 'СИЛА (СИЛА)',
          VALUE: [
            `Сила показывает, насколько у вашего персонажа развита
                мускулатура и физическая сила. Этот параметр особенно
                важен для воинов, варваров, паладинов, рейнджеров и
                монахов, так как он помогает им побеждать в бою. Сила также
                устанавливает ограничение по переносимому весу снаряжения
                вашего персонажа (смотрите Главу 9: Авантюры).`,
          ],
        },
        {
          isTable: false,
          LABEL: 'Модификатор Силы применяется в следующих ситуациях:',
          VALUE: [
            `• При бросках рукопашных атак`,
            `• Броски нанесения повреждения, при использовании
                оружия ближнего боя и метательного оружия. (Включая и
                пращу). (Исключение: Атаки с не основных рук получают
                только половину модификатора Силы, в то время как атаки
                двумя руками с одним оружием увеличивают модификатор
                Силы в 1,5 раза; Штраф по Силе, но не бонус, применяется
                при проведении атак из лука, бонус учитывается Тольку у
                составных луков) `,
            `• Проверки Взбирания, Прыжков, Плавания. Эти навыки
                непосредственно связаны с параметром Сила`,
            `• Проверка Силы (для выламывания двери и т.д.)`,
          ],
        },
        {
          isTable: true,
          KEY: AVERAGE_POWER_PARAMS_TABLE,
        },
        {
          isTable: false,
          LABEL: 'ЛОВКОСТЬ (ЛОВК)',
          VALUE: [
            `Ловкость определяет координацию, проворность, рефлексы
                и баланс. Этот параметр очень важен для воров, а также
                немаловажен для тех персонажей, кто обычно носит легкий
                или средний тип доспехов (варвары и рейнджеры), или те, кто
                их вообще не носит (монахи, маги и чародеи), и для того, кто
                хочет быть искусным лучником.`,
          ],
        },
        {
          isTable: false,
          LABEL: `Модификатор Ловкости применяется в следующих ситуациях:`,
          VALUE: [
            `• Стрелковые атаки, включая атаки из: луков, арбалетов,
                метательных топоров и остального стрелкового оружия.`,
            `• Класс Доспеха (КД), обеспечивает то, как персонаж будет
                реагировать на атаку`,
            `• Спас-броски Рефлекса, уворачивание от огненных
                шаров и других атак, которых можно избежать быстро
                передвигаясь`,
            `• Баланс, Искусство Побега, Скрытность, Бесшумное
                Передвижение, Взлом Замков, Чистка Карманов, Езда
                верхом, Падение/Акробатика, и Использование Веревки.
                Для всех этих навыков Ловкость является ключевым
                Параметром. `,
          ],
        },
        {
          isTable: true,
          KEY: AVERAGE_AGILITY_PARAMS_TABLE,
        },
        {
          isTable: false,
          LABEL: 'ТЕЛОСЛОЖЕНИЕ (ТЕЛО)',
          VALUE: [
            `Телосложение представляет здоровье персонажа и его
                выносливость. Телосложение повышает хит-поинты
                персонажа, а это важно для каждого. `,
          ],
        },
        {
          isTable: false,
          LABEL: `Модификатор Телосложения применяется в следующих
          ситуациях:`,
          VALUE: [
            `• На каждый бросок новых хит-поинтов КХП (Кубик Хитпоинтов), (хотя здесь штраф никогда не понизит бросок
                ниже чем 1, персонаж в любом случае получит как
                минимум 1 хит-поинт при переходе на новый уровень).`,
            `• Спас-броски Стойкости, устойчивость к ядам, и подобным
                эффектам.`,
            `• Проверки Концентрации. Этот навык особенно важен
                заклинателям, он тесно связан с Телосложением.`,
            `Если Телосложение персонажа изменяется в такой
                степени, что меняется модификатор этого параметра, то
                соответственно повышаются или понижаются хит-поинты
                персонажа`,
          ],
        },
        {
          isTable: true,
          KEY: AVERAGE_BODIES_PARAMS_TABLE,
        },
        {
          isTable: false,
          LABEL: 'ИНТЕЛЛЕКТ (ИНТЛ)',
          VALUE: [
            `Интеллект определяет насколько ваш персонаж образован и
                благоразумен. Этот параметр очень важен для магов, так как от
                него напрямую зависит способность применения заклинаний,
                насколько тяжелее устоять против его заклинаний, и насколько
                более мощны его заклинания. Он также важен для того
                персонажа, кто хочет иметь широкое разнообразие навыков.`,
          ],
        },
        {
          isTable: false,
          LABEL: 'Модификатор Интеллекта применяется в следующих ситуациях:',
          VALUE: [
            `• Число языков, которыми может владеть ваш персонаж
                вначале игры.`,
            `• Число пунктов навыков, получаемых на каждом новом
                уровне. (Но ваш персонаж будет получать как минимум 1
                очко навыка на уровень).`,
            `• Оценка, Ремесло, Расшифровка, Сложные Устройства,
                Подделка, Знание, Поиск и Искусство Магии, всё это
                требует такого параметра, как Интеллект.`,
            `Волшебники получают дополнительные бонусные
                заклинания, основанные на их показателях Интеллекта.
                Минимальный Интеллект необходимый магу чтобы колдовать
                10 + уровень заклинания.`,
            `У животных Интеллект на уровне 1 или 2. У
                человекообразных существ Интеллект как минимум 3.`,
          ],
        },
        {
          isTable: true,
          KEY: AVERAGE_INTELLIGENCE_PARAMS_TABLE,
        },
        {
          isTable: false,
          LABEL: 'МУДРОСТЬ (МУДР)',
          VALUE: [
            `Мудрость показывает силу воли персонажа, его общие
                чувства, восприятие и интуицию. Если Интеллект указывает
                на способность персонажа анализировать информацию,
                то Мудрость больше относится к тому, как персонаж
                приспособлен, готов к неожиданности в окружающем
                его мире. «Рассеянный профессор», так называют того, у
                кого низкая Мудрость и Высокий Интеллект. Простофиля
                (низкий Интеллект) может иметь высокую проницательность
                (высокую Мудрость). Мудрость один из наиважнейших
                параметров для жрецов и друидов, и также немаловажен для
                паладинов и рейнджеров. Если вы хотите что бы у вашего
                персонажа были высоко развиты чувства, Мудрость ставьте
                высоким параметром. У каждого существа должен быть
                показатель Мудрости.`,
          ],
        },
        {
          isTable: false,
          LABEL: 'Модификатор Мудрости применяется в следующих ситуациях:',
          VALUE: [
            `• Спас-броски Воли (для отражения очарование персоны и подобные заклинания).`,
            `• Лечение, Прислушивание, Профессия, Чувство Мотива и
                Искусство Выживания. Все эти навыки требуют хорошо
                развитой Мудрости`,
            `Жрецы, друиды, паладины и рейнджеры, получают
                бонусные заклинания, которые зависят от показателя их
                Мудрости. Минимальный показатель Мудрости жреца,
                друида, паладина, рейнджера, для овладения заклинаниями,
                10 + уровень заклинания.`,
          ],
        },
        {
          isTable: true,
          KEY: AVERAGE_WISDOM_PARAMS_TABLE,
        },
        {
          isTable: false,
          LABEL: 'ОБАЯНИЕ (ОБН)',
          VALUE: [
            `Обаяние измеряет силу личности персонажа, его убедительность,
                личный магнетизм, способность вести за собой, руководить,
                физическую привлекательность. Оно представляет то, как
                воспринимают персонажа в обществе, не по внешности, а силу
                его внутренней притягательности. Обаяние очень важно для:
                паладинов, чародеев, бардов. Оно также важна для жрецов, так
                как влияет на их способность «изгнание нежити».`,
          ],
        },
        {
          isTable: false,
          LABEL: 'Модификатор Обаяния применяется в следующих ситуациях:',
          VALUE: [
            `• Актерство, Блеф, Дипломатия, Маскировка, Сбор
                Информации, Приручение животных, Запугивание,
                Использование Магических Устройств. Все эти навыки 
                требуют хорошо развитого параметра Обаяние`,
            `• Проверка влияния на кого-то другого.`,
            `• Проверка для паладинов, жрецов при изгнании зомби,
                вампиров и другой нежити.`,
            `Чародеи и барды получают бонусные заклинания, которые
                базируются на их показателях Обаяния. Минимальное
                Обаяние необходимое барду и чародею, для того чтобы
                пользоваться магией равно 10 + уровень заклинания.`,
            `Каждое существу имеет какой-то показатель Обаяния`,
          ],
        },
        {
          isTable: true,
          KEY: AVERAGE_CHARM_PARAMS_TABLE,
        },
      ],
    },
    {
      NAME: 'Пример создания и расстановки параметров персонажа',
      TAB_KEY: 'example',
      PARAGRAPHS: [
        {
          isTable: false,
          VALUE: [
            `Монте хочет создать нового персонажа. Он бросил четыре
                шестигранника (4d6), они показали 5, 4, 4 и 1. Не принимая
                самый нижний, на черновом листе он записывает 13. После
                этого он производит ещё пять бросков: 13, 10, 15, 12, 8 и 14.
                Монте хочет играть за сильного, плотно сложенного воина
                дварфа. Теперь он распределяет свои броски по параметрам.`,
            `На Силу идет самый высокий 15. Его персонаж получит
                +2 бонус к Силе, что даст хорошую помощь в бою. `,
            `Телосложение получит следующий высший показатель
                14. Природная способность дварфов +2 к Телосложению
                (смотрите Таблицу 2-1: Расовые Модификаторы Параметров
                стр. 12) повысят показатель Телосложения до 16, что даст
                ему +3 бонус к хит-поинтам и улучшенные спас-броски
                Стойкости. `,
            `Нижний показатель Монте отдает под Обаяние –8.
                Модификация Обаяния из-за расы –2 (смотрите Таблицу 2-1),
                снижают её до 6, что дает ему штраф при проверке –2.`,
            `У Монте есть два показателя чуть выше среднего(13 и
                12), и один средний 10. Ловкость получает 13 (+1 бонус).
                Это поможет в атаках со стрелковым оружием и спасбросков
                Рефлекса. (Монте смотрит наперед. Ловкость 13
                даст возможность его персонажу пользоваться чертой
                Уворачивание – смотрите Таблицу 5–1: Отличительные
                Черты, стр. 9_)`,
            `На Мудрость пойдет 12 (+1 бонус). Это поможет с
                навыками восприятия – такими как Прислушивание и
                Отслеживание (смотрите Таблицу 4–2 Навыки, стр. 63), как
                и бонус в спас-бросках Воли.`,
            `Интеллект будет 10 (никаких бонусов и штрафов).
                Средний интеллект не так уж плохо и для воина.`,
            `Монте записывает на карточке персонажа расу своего
                персонажа, окончательные Параметры, модификаторы
                параметров`,
          ],
        },
      ],
    },
    {
      NAME: 'Изменение показателей параметров',
      TAB_KEY: 'change-params',
      PARAGRAPHS: [
        {
          isTable: false,
          VALUE: [
            `Время от времени параметры вашего персонажа будут,
                изменятся. Параметры могут неограниченно подниматься.
                Моменты которые оказывают изменения в параметрах
                включают в себя следующие:`,
            `• Один пункт добавляется, к какому-то одному параметру
                на 4-м уровне, и затем также на каждом последующем 4-м
                уровне (на 8-м, 12-м, 16-м и 20-м уровнях).`,
            `• Множество заклинаний и магических предметов временно
                поднимают или понижают Параметры. Заклинание
                ослабляющий луч снижает Силу персонажа, а заклинание
                сила быка повышает её. Иногда заклинания просто
                мешают персонажу, понижая его параметры. Для примера,
                у персонажа попавшего в зону действия заклинания
                опутывание, будет действовать так, будто его Ловкость на 4
                единицы ниже, чем базовая.`,
            `• Некоторые магические предметы могут поднимать параметры,
                пока они находятся в руках персонажа. К примеру,
                перчатки Ловкости, повышают ловкость персонажа.
                (Магические предметы описываются в Руководстве
                Мастера Подземелий). Заметка: Все магические предметы
                такого типа, не могут поднять параметр выше, чем на +6.
                `,
            `• Некоторые редкие магические предметы могут поднять Параметр
                выше на постоянное время, как и заклинание желание.
                Такой бонус называется врожденный. Любой параметр может
                иметь врожденный бонус, но не более чем +5.`,
            `• Яды, болезни, и другие эффекты могут временно поражать
                параметры (повреждение параметра). Единицы параметров
                восстанавливаются на прежний уровень со скоростью 1
                единица для каждого параметра в день.`,
            `• Некоторые эффекты способны высасывать параметры
                (Постоянная потеря параметра). Единицы потерянные
                таким способом сами не восстановятся, но их можно
                вернуть с помощью заклинаний, таких как, например
                восстановление.`,
            `• Так как персонаж стареет, одни его Параметры возрастают,
                в то время как другие понижаются. Смотрите Таблицу 6–5:
                Эффекты Возраста, стр. 109.`,
            `Когда какой-то параметр изменяется, все атрибуты,
                связанные с ним также изменяются. На пример, когда Мйали
                стала магом 4-го уровня, она решает поднять свой Интеллект
                до 16. Это даёт ей одно бонусное заклинание 3-го уровня,
                она сможет пользоваться им, когда достигнет 5-го уровня,
                и будет способна активировать заклинания 3-го уровня. Как
                персонаж 4-го уровня, она получит пункты навыков, так как
                подняла Интеллект, поэтому она получит 5 пунктов навыка
                за достижение 4-го уровня мага (2 пункта за класс и 3 за
                бонус Интеллекта). Она не получит дополнительные пункты
                за предыдущие уровни (так как дополнительные пункты
                получены после того, как она получила Интеллект 16).`,
          ],
        },
      ],
    },
    {
      NAME: 'Интеллект, мудрость и обаяние',
      TAB_KEY: 'int-wisd-charm',
      PARAGRAPHS: [
        {
          isTable: false,
          VALUE: [
            `Как, средство для хорошего отыгрывания своего персонажа,
                вы можете использовать свои показатели Интеллекта, Мудрости и Обаяния.
                Здесь приведены некоторые предпосылки (и
                только предпосылки), того, что могут означать эти показатели`,
            `Находчивый персонаж остроумен, много знает, и склонен
                произносить замысловатые слова. Персонаж с высоким Интеллектом, но
                низкой Мудростью, умен, но он рассеянный, он
                много знает, но ему не хватает проницательности. Персонаж
                с высоким Интеллектом, но с низким Обаянием, может быть
                заносчивой всезнайкой, или замкнутым учёным. Умный персонаж с низким
                Обаянием и Мудростью, рассеянный и неопрятный. `,
            `Персонаж с низким Интеллектом неправильно разговаривает и произносит
                слова, имеет трудности с передвижением в
                указанные направления, и часто не понимает смысл шуток. `,
            `Персонаж с высокой Мудростью спокойный, здравомыслящий человек, всегда
                точен в мыслях, насторожен и в
                центре происходящих вокруг событий. Персонаж с Высокой
                Мудростью, но невысоким Интеллектом, может быть неграмотен, но предосудителен.
                Персонаж с высокой Мудростью,
                но низким Обаянием, знает достаточно того, что нужно произнести вслух, и
                может быть советником или «силой в тени
                трона», а не лидером. Мудрый персонаж с низким Интеллектом и Обаянием грубоват
                и безыскусственен `,
            `Человек с низкой Мудростью, безрассуден, неосторожен,
                неконтролирующий свои действия, опрометчивый.`,
            `Персонаж с высоким показателем Обаяния, может быть
                красивым внешне, в душе, выдающимся своими заслугами,
                уверенным, вызывающим доверие. Персонаж с высоким
                Обаянием, но низким Интеллектом, может выдавать себя за
                знатока до тех пор, пока он не столкнётся с настоящим экспертом. Обаятельный лидер,
                но с низкой Мудростью, может пользоваться популярностью среди окружающих, но он
                не сможет отличить своих истинных друзей от фальшивых
                льстецов. Харизматичный персонаж с низкими Интеллектом
                и Мудростью скорее всего ограниченный и далекий от понимания мнения других.`,
            `Персонаж с низким показателем Обаяния, может быть
                замкнутым, грубым, неприветливым, подлизывающимся, или
                просто некрасивой внешности. `,
          ],
        },
      ],
    },
  ],
}
