// @flow
import type { pageContentType } from '@/components/page'
import { BARD_TABLE } from '@/tables'
import bardImage from '@/assets/bard.png'

export const BARD_PAGE: pageContentType = {
  TITLE: 'Бард',
  URL: '/classes/bard',
  isNavigationPage: false,
  parentUrl: '/classes',
  TABS: [
    {
      NAME: 'Описание',
      TAB_KEY: 'description',
      PARAGRAPHS: [
        {
          image: [bardImage],
          VALUE: [
            `Поговаривают, что музыка это своеобразный вид магии, и
            барды это доказывают. Жизнь барда это: путешествия по
            земле, собирание легенд, рассказы удивительных историй,
            сотрудничество с помощью своей музыки с магией, и получение удовольствия от большого внимания к своей особе. Если
            жизнь распоряжается так, что бард втянут в какие-то грандиозные события, то он не пропустит случая выступить в роли
            дипломата, посла, посредника в переговорах, разведчика или
            шпиона`,
            `Магия барда исходит из сердца. Если его сердце доброе,
            бард несет надежду и отвагу угнетенным, и использует свои
            трюки, музыку и магию для пресечения схем негодяев. Если
            дворянин, владелец земли, безнравственен, добрый бард -
            враг в этом регионе. Он ловко старается избежать пленения,
            и поднимает дух оппозиции. Но музыка может исходить и от
            злого сердца. Злые барды предвещают жестокость, мани-пулируя, удерживая власть над сердцами и разумами других, и
            забирая то, что восхищенная публика «добровольно» отдает`,
          ],
        },
        {
          LABEL: `Приключения`,
          VALUE: [
            `Барды смотрят на приключения, как на
            возможность познать, выучить что-то новое. Чтобы попасть в
            давно забытую древнюю гробницу, они приложат все свои навыки и способности, не упустят ни единого шанса, лишь бы
            увидеть древние магические манускрипты, расшифровать,
            разобраться с древними книгами. Они будут путешествовать
            в странные места, сталкиваться с необычными существами, и
            изучать новые истории и песни. Барды любят сопровождать
            героев (они не прочь ходить и рядом со злодеями), чтобы
            быть первым свидетелями их поступков – бард повествующий удивительную истории из своего личного опыта, очень
            известен и уважаем среди остальных бардов. И после стольких историй о героических подвигах сердца барда настолько
            преисполнено отваги, что они сами желают стать героями`,
          ],
        },
        {
          LABEL: `Характеристика`,
          VALUE: [
            `Бард источает магию из своей души,
            а не из книги. Он может активировать не так уж много заклинаний, но активирует он заклинания без предварительного выбора и заучивания их. Ему больше нравятся заклинания
            из школ магии очарования и иллюзий, чем более жестоких
            заклинаний школы заклятия, обычно используемых магами и
            чародеями`,
            `Помимо заклинаний, бард получает магию через свою
            музыку и поэзию. Он может взбодрить своих союзников, приведя их в восторг, дав им силы с помощью магических эффектов, базирующихся на речи или произношении слов`,
            `Барды обладают частичным доступом к навыкам воров,
            хотя у них они не настолько развиты, как у воров. Барды,
            слушая и рассказывая истории, узнают огромное количество
            информации о произошедших событиях, и подмечают интересующие их факты`,
          ],
        },
        {
          LABEL: `Мировоззрение`,
          VALUE: [
            `Барды – путешественники, ведомые
            своими капризами и причудами, а не традициями и законами.
            Их непосредственные таланты, магия, и образ жизни не совместны с законным мировоззрением`,
          ],
        },
        {
          LABEL: `Религия`,
          VALUE: [
            `Они уважают Фарлахнгуна, бога дорог. Иногда
            они останавливаются на отдых рядом с его алтарями, надеясь что им перепадет какая-то монета от путешественников,
            останавливающихся рядом с алтарем. Множество бардов,
            даже не эльфов, поклоняются Кореллону Ларесйану, богу
            эльфов и покровителю музыки и поэзии. Добрые барды поклоняются также Пелору, богу солнца, веря
            в то что, он поможет им в их путешествии. Барды
            предпочитающие хаос и непредвиденность уважают Олидаммару (бога воров). Те, кто стали на путь
            зла всегда поклоняются Эриснулу (богу кровопролития), но таких немного. Но в любом случае, так
            как бард проводит практически все
            время в дороге, у него мало
            времени, чтобы поклонятся какому-то богу, или
            быть верным какому-то
            одному храму`,
          ],
        },
        {
          LABEL: `Предпосылки`,
          VALUE: [
            `Ученик бард, получает свои
            первые навыки от опытного барда учителя, он
            путешествует с ним до
            тех пор, пока сам не
            готов, самостоятельно начать карьеру
            барда. Большинство
            бардов в детстве сбежали с дома или круглые сироты, подружившиеся с бардами
            в дороге, и принявшие решение
            стать такими
            как они. Так
            как барды
            редко организовывают неформальные
            «школы/училища», учеников барда можно встретить возле барда, путешествующего по земле. Но
            в целом, все барды
            не ощущают
            сильной преданности друг к
            другу. По факту, некоторые барды очень конкурируют с другими бардами за
            популярность и защиту своей территории`,
          ],
        },
        {
          LABEL: `Расы`,
          VALUE: [
            `Чаще всего бардами становятся гномы, люди, эльфы и полуэльфы. Люди прекрасно приспособлены к странствующей жизни, прекрасно адаптируются в новых землях
            и с новыми традициями. Гномы известны своим чувством
            юмора, и аферами, которые сами выводят их на ремесло бардов. Эльфы прекрасно знакомы с магией и музыкой, поэтому
            карьера барда заложена у них в крови. Но наиболее странствующие дороги бардов подходят полуэльфам, которые чувствуют себя чужими даже у себя дома. Полуорки, даже те кто
            вырос среди людей, считаются не совсем нормальными, если
            отправились по путям бардов. Традиций быть бардом, среди
            рас дварфов и халфлингов, не существует, хотя встречаются
            отдельные уникумы, находящие учителей которые обучают
            их искусству бардов`,
            `Барды не встречаются среди диких рас, возможно изредка
            среди кентавров. Барды кентавры часто обучают детей людей
            или детей других распространенных рас`,
          ],
        },
        {
          LABEL: `Отношения с другими классами`,
          VALUE: [
            `Барды хорошо уживаются с представителями всех классов. Очень часто он выступает в роли представителя группы, используя свои общественные навыки как сильную сторону группы. В группе, где
            отсутствует маг или чародей, он представляет собой магию.
            В группе, где нет вора, он предоставляет свои воровские навыки. Бард известен как более специализированный персонаж, он интересен игрокам пытающимся отыгрывать за воина, чародея и вора`,
          ],
        },
        {
          LABEL: `Роль`,
          VALUE: [
            `Бард возможно скорее всего и является первичной душой команды. В большинстве групп авантюристов он
            лучше всех справляется с ролью поддержки. Он не может настолько великолепно скрываться как рейнджер или вор, или
            достигнуть такой мощи в заклинаниях как жрец или маг,
            и вряд ли достигнет такой боевой мощи как варвар
            или воин. Однако, он всегда может
            оказать поддержку всем остальным
            персонажам, и он всегда способен
            сделать так, чтобы остальные
            смогли сделать все как можно
            лучше. Для типичной команды
            из четырех персонажей, возможно бард станет самым ценным дополнением в виде пятого персонажа поддержки, а
            также он может стать великолепным лидером команды`,
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
          KEY: BARD_TABLE,
        },
      ],
    },
    {
      NAME: 'Игровая информация',
      TAB_KEY: 'game-info',
      PARAGRAPHS: [
        {
          VALUE: [`У бардов следующие игровые показатели`],
        },
        {
          LABEL: 'Параметры',
          VALUE: [
            `Обаяние
          определяет насколько могущественные заклинания
          может активировать бард,
          сколько заклинаний в день
          он может с активировать,
          и насколько тяжело противостоять его магии (смотрите ниже Заклинания).
          Самые важные показатели
          для барда Обаяние, Ловкость
          и Интеллект, так как они влияют на его навыки`,
          ],
        },
        {
          LABEL: 'Мировоззрение',
          VALUE: [`Любое хаотичное и нейтральное`],
        },
        {
          LABEL: 'Кубик хит-поинтов (КХП)',
          VALUE: [`d6`],
        },
      ],
    },
    {
      NAME: 'Навыки класса',
      TAB_KEY: 'skills',
      PARAGRAPHS: [
        {
          VALUE: [
            `У бардов следующие классовые навыки (в
            скобках ключевой Параметр для каждого
            навыка): Актёрство (Обн), Баланс (Ловк),
            Бесшумное Передвижение (Ловк), Блеф
            (Обн), Взбирание (Сила), Дипломатия
            (Обн), Знание (все навыки. выбор индивидуален), Искусство Магии (Интл), Искусство Побега (Ловк), Использование Магических Устройств
            (Обн), Концентрация (Тело), Маскировка (Обн), Оценка (Интл), Падение/Акробатика (Ловк), Прислушивание (Мудр),
            Плавание (Сила), Профессия (Мудр), Прыжки (Сила), Расшифровка (Интл), Ремесло (Интл), Сбор Информации (Обн),
            Скрытность (Ловк), Ловкие Руки (Ловк), Чувство Мотива
            (Мудр), Язык (о/т). Смотрите Глава 4: Навыки для детального
            ознакомления с ними`,
          ],
        },
        {
          LABEL: 'Пункты навыков на 1-м уровне',
          VALUE: [`(6 + модификатор Интеллекта) × 4`],
        },
        {
          LABEL: 'Пункты навыков на каждом новом уровне',
          VALUE: [`6 + модификатор Интеллекта`],
        },
      ],
    },
    {
      NAME: 'Особенности класса',
      TAB_KEY: 'features',
      PARAGRAPHS: [
        {
          VALUE: [`У бардов следующие классовые особенности`],
        },
        {
          LABEL: 'Квалификация в оружии и доспехах',
          VALUE: [
            `Бард умело обращается со всеми видами простого оружия. В дополнение,
          бард квалифицирован с одним из следующих типов оружия:
          длинный лук, составной лук, длинный меч, рапира, дубина,
          короткий составной лук, короткий меч, короткий лук, кнут.
          Барды квалифицированы с легкими и средним видами доспехов, щитами`,
            `Из-за того, что соматический компонент заклинаний
          барда относительно прост, бард способен активировать свои
          заклинания одетый в легкий тип доспехов, не неся при этом
          штраф провала. Однако, бард как и любой заклинатель, одетый в средние и тяжелые доспехи и несущий щит, способен
          активировать заклинания, но у него есть определенный шанс
          провала заклинания, если есть соматический компонент (у
          большинства заклинаний есть). На мультиклассовго барда
          все также применяется обычный шанс провала магических
          заклинаний, которые он получает от других классов`,
          ],
        },
        {
          LABEL: 'Заклинания',
          VALUE: [
            `Бард способен активировать заклинания
          магов из списка Заклинания Бардов (сходных с заклинаниями магов и чародеев) (смотрите список на стр. 181). Он активирует заклинания без надобности их перед этим подготавливать и хранить в книге заклинаний. Все заклинания бардов
          имеют вербальный компонент (пение, декламация или музыкальное сопровождение). Чтобы активировать заклинания
          определенного уровня у барда должна быть как минимум 10
          Обаяние+уровень заклинания (Обн 10 для 0-го уровня, 11 для
          заклинаний 1-го уровня и т.д.). Класс Сложности спасбросков
          против заклинаний барда высчитывается следующим образом: 10+уровень заклинания + модификатор Обаяния барда`,
            `Как и прочие заклинатели, бард способен активировать
          лишь определенное количество заклинаний в день. Его базовая способность активации указана в Таблице 3–4: Бард. В
          дополнение, за высокий показатель Обаяния, барды получают дополнительные заклинания (смотрите Таблицу 1–1:
          Модификаторы Параметров и Бонусные Заклинания, стр. 8).
          Когда по Таблице 3–4 отмечается, что бард получает 0 заклинаний, значит он может активировать лишь свои бонусные заклинания данного уровня (например заклинания 1-го уровня,
          для барда 2-го уровня)`,
            `Выбор заклинаний бард существенно ограничен. Бард
          начинает играть владея четырьмя заклинаниями 0-го уровня
          (также называемые кантрипы) на свой выбор. На каждом новом уровне бард приобретает одно или более новые заклинания, как отмечено в Таблице 3–5 Знаемые Бардом Заклинания. (В отличие от заклинаний в день, число знаемых бардом
          заклинаний не попадают под влияние высокого показателя
          Обаяния; эти числа строго фиксированные)`,
            `При достижении 5-го уровня, а затем через каждые три
          (8-й, 11-й и т.д.), бард способен заменять знаемое заклинание
          другим, новым. По эффекту, бард «теряет» старое, но получает новое. Новое заклинание должно быть того же уровня,
          что и старое, и как минимум на два уровня ниже от самых высоких заклинаний, которые бард может активировать на данный момент. Например, достигнув 5-го уровня, бард может
          обменять одно заклинание 0-го уровня (на два уровня ниже
          за его саамы высокие заклинания – 2-го уровня) на другое заклинание 0-го уровня. На 8-м уровне он может обменять одно
          заклинание 0-го или 1-го уровня (так как теперь он имеет доступ к заклинаниям 3-го уровня), на другое такого же уровня.
          Бард может обменивать только одно заклинания на одном из
          возможных уровней и должен определится, меняет он, или
          нет заклинание при получении новых`,
            `Как было отмечено выше, барды не заготавливают свои
          заклинания. Он может применить любое заклинание, которое
          знает, в любое время, принимается, что он ещё не использовал свое дневное ограничение применения заклинаний. Например, бард Гимбли на первом уровне может применять два
          заклинания 0-го уровня в день (смотрите Таблицу 3–1: Бард).
          Однако он знает четыре заклинания 0-го уровня: обнаружение магии, призрачный звук, свет и чтение магии (смотрите
          Таблицу 3–2: Знаемые Бардом Заклинания). Поэтому в любой
          день он может применить два раза любую комбинацию из
          этих четырех заклинаний. Ему не следует заранее определять
          какие заклинания он будет активировать`,
          ],
        },
        {
          LABEL: 'Знания Бардов',
          VALUE: [
            `Бард собирает огромный объем знаний
            путешествуя по разным землям, изучая истории других бардов. Бард способен сделать особую проверку знаний барда с
            бонусом равным его уровень+модификатор Интеллекта, чтобы понять владеет ли он какой-то информацией о знатных
            местных людях, легендарных предметах или заметить ценные места. (Если у барда 5 или более рангов в Знание (история), он получает +2 бонус к этой проверке). Эта проверка не
            открывает силы и способности у магического предмета, но
            дает подсказку о его общих функциях. КС для этой проверки
            различен: и 10, и 20 и выше; этот тип знаний очень разнообразен. МП должен обращаться к таблице, идущей ниже, чтобы
            определять Класс Сложности`,
          ],
        },
        {
          LABEL: 'Музыка Барда',
          VALUE: [
            `Один раз в день за каждый уровень
            бард способен использовать свои песни или стихи для формирования магических эффектов вокруг него(включая и на
            себя при желании). Так как эти все способности в категории
            “музыка барда”, они должны включать в себя декламацию
            стихов, восхваление, напевание песен, мелодий (типа, фа-ляля и т.д.), насвистывание, игру на инструменте или пение с
            музыкальным сопровождением. Каждая способность требует как минимальный уровень барда, так и определенное количество рангов навыка Актерство. Если у барда не достает
            минимально необходимого количества рангов, он не получает
            эту способность до тех пор, пока не будет иметь достаточное
            количество рангов`,
            `Начало эффекта музыки является стандартным действием. Некоторые способности музыки барда требуют проверки
            концентрации, что означает, что бард должен каждый раунд
            тратить стандартное действие, чтобы поддерживать способность. Но даже и при использовании музыки бардов которая
            не требует концентрации, бард не может применять заклинания, активировать предметы с применением заклинаний
            (такие как свитки), или активировать магические предметы с
            помощью слов (волшебные палочки). Как и при активировании заклинаний с вербальным компонентом (смотрите Компоненты, стр. 17_), глухой бард имеет 20% шанс провала
            заклинания или своей музыки. Если он провалил попытку она
            идет в счет количеств его музыки барда в день`,
            `Противопесня (Свх): Бард, у которого 3 или более рангов в навыке Актёрство, может использовать свои навыки в
            музыке и поэзии, чтобы противодействовать магическим
            эффектам базирующимся на звуке (но не заклинаниям одним
            из компонентов которых является вербальный компонент).
            Каждый раунд исполнения противопесни, он должен делать
            проверку Актёрства. Любое существо вблизи от барда на
            расстоянии 9 метров (включая и самого барда), которое
            поражено звуковой или языковой магической атакой (как-то,
            звуковой всплеск или команда) может использовать результат
            проверки Актёрства барда как свой спасбросок, после броска своего спасброска. Результат проверки Актёрства, скорее
            всего, будет лучшим. Если существо в пределах противопесни уже под эффектом не мгновенной звуковой или языковой
            магической атаки, он получает дополнительный спасбросок
            против эффекта, пока слышит противопесню, но для спасброска должно использовать результат проверки Актерства
            барда. Противопесня не имеет эффекта против эффектов, которые не позволяют проходить спасброски. Бард способен
            выполнять противопесню в течение 10 раундов`,
            `Гипнотизирование (Пдз): Бард у которого 3 или более
            рангов в навыке Актерство, может использовать свою музыку или поэзию, чтобы загипнотизировать своим исполнением
            одно существо. Для того чтобы быть загипнотизированным,
            оно должно слышать и видеть барда, и находится от него не
            далее чем в 27 метрах. Бард тоже должен видеть существо.
            Оно должно быть способным обратить внимание на барда.
            Если рядом возникает бой или другая опасность действие
            способности обрывается. За каждые три уровня сверх первого, он может нацеливать эту способность на дополнительное
            существо за одно применение способности (два на 4-м уровне, 3 на 7-м и т.д.)`,
            `Бард должен сделать проверку Актерства. Цель может
            не войти под контроль, если её спасбросок Воли равен или
            больше проверки барда. Если спасбросок успешен, бард неспособен использовать свою способность гипнотизирования
            против этого существа в течение 24 часов. Если спасбросок
            провален, то существо тихо садится и слушает песню барда в
            течение 1раунд/уровень барда. Будучи загипнотизированной,
            цель получает –4 штраф к своим проверкам Отслеживания и
            Прислушивания. Любая потенциальная угроза (как перемещение друга барда перед глазами существа) позволяет загипнотизированному существу сделать вторую проверку спасброска, против новой проверки Актёрства. Любая видимая
            угроза, такая как активация заклинания, вытаскивание меча,
            прицеливание, сбивает весь эффект. Гипнотизирование – подобная очарованию, воздействующая разум способность.`,
            `Повысить Боевой Дух (Свх): Бард у которого 3 или более рангов в навыке Актёрство, способен повысить храбрость
            своих товарищей, укрепив их дух против страха и повысив
            их боевые способности (включая и себя). Чтобы попасть под
            влияние песни, союзник должен слышать пение барда в течение полного раунда. Эффект продолжается в течение времени
            пока поет бард, плюс 5 раундов после остановки пения (или
            5 раундов после того как союзники прекратили слышать пение барда). Очарованные союзники получают +1 моральный
            бонус к спасброскам против эффектов обаяния и страха, и +1
            бонус к броскам атаки и повреждений. На 8-м уровне, и через каждые последующие 6 уровней, бонус этой способности
            повышается на 1 (+2 на 8-м, +3 на 14-м и +4 на 20-м). Повысить боевой дух – воздействующая на разум способность`,
            `Повысить Способности (Свх): Бард 3-го и выше уровня,
            у которого 6 или более рангов в навыке Актёрство, может с
            помощью своей музыки или стихов повысить товарищу выполнить задачу. Друг должен находится в пределах 9 метров
            от барда, видеть и слышать его. Бард в свою очередь тоже
            должен видеть его. В зависимости от задачи, бард своей музыкой может помочь товарищу повысив его душевное состояние, помочь ему в мыслительном сосредоточении, или в
            чем-нибудь другом. Товарищ получает +2 бонус компетентности при проверке своих навыков, в частности того навыка,
            который он проверял, слушая музыку барда. МП конечно
            в зависимости от ситуации имеет право сам решать, когда
            это недопустимо, к примеру, при проверке Бесшумного Передвижения вором, она ему лишь мешает. Эффект этой способности продолжается максимум 2 минуты. Бард способен
            применять повысить способности и на себя. Повысить способности – воздействующая на разум способность`,
            `Внушение (Пдз): Бард 6-го уровня и выше, у которого 9
            или более рангов в навыке Актёрство, может выполнять внушение (считается как заклинание) существу которое уже под
            гипнозом (смотрите выше). Использование этой способности
            не сбивает концентрацию барда на гипнотизировании, и не
            дает возможности повторного проведения проверки спасброска против эффекта гипнотизирование. Внушение не ограничено дневным лимитом исполнения музыкальных способностей барда (один раз за каждый уровень опыта),
            а гипнотизирование зависит. Нейтрализует эффект спасбросок Воли (КС
            10+1/2 уровня барда+модификатор Обаяния барда). Эта способность поражает лишь одно существо (но, смотрите ниже
            массовое внушение). Внушение – подобная очарованию, воздействующая на разум способность, зависимая от языка`,
            `Повысить Мощь (Свх): Бард 9-го уровня, у которого 12
            или более рангов в навыке Актёрство, с помощью своих
            песен и стихов может повысить свою мощь, или желающего
            союзника в пределах 9 метров, давая сверх – боевые способности. За каждые три уровня после достижения 9-го уровня,
            бард может повышать мощь одного дополнительного союзника за одно использование способности (два на 12-м, три на
            15-м, четыре на 18-м). Чтобы повысить мощь, бард должен
            петь, а союзник слышать пение барда, в течение полного раунда, как и в повышении боевого духа. Существа с повышенной мощью получают дополнительные КХП, бонусы атаки
            и бонусы спасбросков, до тех пор пока они слышит песню,
            и в течении 5 раундов после окончания песни. Существа получают следующее: +2 КХП (d10 дающий временные хит-поинты), если есть, то к этим КХП применяйте бонусы по Телосложению, +2 бонус компетентности к атакам, и +1 бонус
            компетентности к спасброскам Стойкости. Бонусные Кубики
            Хит-Поинтов Учитываются как стандартные при определения эффекта от таких заклинаний как сон и т.д. Повысить
            мощь – воздействующая на разум способность`,
            `Песнь Свободы (Пдз): Бард 12-го уровня, у которого 15 или
            более рангов в навыке Актёрство, может использовать свои песни и стихи для создания эффекта, эквивалентного заклинанию
            сбить колдовство (уровень заклинателя равен уровню барда).
            Применение этой способности требует 1 минуты непрерывной
            концентрации и музыки, чтобы оказать эффект на расположенное
            существо в пределах 9 метров. Бард не может применить песнь
            свободы на самого себя`,
            `Повысить Героизм (Свх): Бард 15-го уровня, у которого
            18 или более рангов в навыке Актёрство, с помощью своих
            песен и стихов может вдохновить на героизм себя, или же- лающего союзника в пределах 9 метров, позволяя существу
            бесстрашно сражаться даже с многократно превосходящими
            силами врага. За каждые три уровня выше 15-го, бард спосо- бен повышать героизм у одного дополнительного существа
            за одно применение способности. Для вдохновения героиз- ма бард должен петь, а союзник слышать его, на протяжении
            одного полного раунда. Существо с вдохновением получает
            +4 бонус морали к спасброскам, и +4 бонус уворачивания к
            КД. Эффект длится пока союзник слышит как поет бард, и
            спустя ещё 5 раундов. Повысить героизм – воздействующая
            на разум способность`,
            `Массовое Внушение (Пдз): Эта способность действует как и внушение, но лишь за исключением того, что бард должен
            быть 18-го уровня, и иметь как минимум 21 ранг в Актерстве,
            чтобы произвести одновременно внушение для всех существ,
            которых он загипнотизировал (смотрите выше). Массовое
            внушение – подобная очарованию, воздействующая на разум
            способность, зависимая от языка`,
          ],
        },
      ],
    },
    {
      NAME: 'Уход в отставку',
      TAB_KEY: 'resignation',
      PARAGRAPHS: [
        {
          LABEL: 'Более не бард',
          VALUE: [
            `Бард принявший законное мировоззрение, прекращает
            развитие в своих уровнях, но сохраняет все достигнутые способности`,
          ],
        },
      ],
    },
    {
      NAME: 'Стартовый пакет',
      TAB_KEY: 'starter-pack',
      PARAGRAPHS: [
        {
          LABEL: 'Гном Бард',
        },
        {
          LABEL: 'Доспех',
          VALUE: [
            `Кожаный выдубленный доспех (+3 КД, скорость
              6м, 4,5 кг, штраф проверки доспеха –1, шанс провала заклинания нет)`,
          ],
        },
        {
          LABEL: 'Оружие',
          VALUE: [
            `Длинный меч (1d6, критич 19-20/×2, 0,9 кг, одноручное, Рубящее)`,
            `Легкий арбалет (1d6, критич 19-20/×2, диапазон 24м, 0,9 кг, Колющее)`,
          ],
        },
        {
          LABEL: 'Выбор Навыков',
          VALUE: [
            `Выберите количество навыков равное 6+модификатор Интеллекта`,
          ],
        },
        {
          LABEL: 'Отличительная черта',
          VALUE: [
            `Если Ловкость 13 или выше, Уворачивание; если ловкость 12 или ниже Улучшенная Инициатива`,
          ],
        },
        {
          LABEL: 'Заклинания',
          VALUE: [`определение магии, призрачный звук, свет и чтение магии`],
        },
        {
          LABEL: 'Снаряжение',
          VALUE: [
            `Вещмешок с бурдюком, пища на один день пути,
            походное одеяло, мешок, кресало
            и огниво. Три факела. Колчан с
            20 арбалетными стрелами. Лютня
            (общее), мешочек с магическими
            компонентами`,
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
