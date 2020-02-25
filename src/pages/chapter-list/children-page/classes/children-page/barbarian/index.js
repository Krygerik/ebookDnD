// @flow
import type { pageContentType } from '@/components/page'
import { BARBARIAN_TABLE, BARBARIAN_STARTER_PACK_TABLE } from '@/tables'
import barbarianPicture from '@/assets/barbarian.png'

export const BARBARIAN_PAGE: pageContentType = {
  TITLE: 'Варвар',
  URL: '/classes/barbarian',
  isNavigationPage: false,
  parentUrl: '/classes',
  TABS: [
    {
      NAME: 'Описание',
      TAB_KEY: 'description',
      PARAGRAPHS: [
        {
          image: [barbarianPicture],
          VALUE: [
            `Эти храбрые, иногда безрассудные воины приходят в цивилизацию из
            холодных пустошей севера, или из южных жарких опасных джунглей.
            Развитое общество называет их варвары или 
            берсеркеры, и ожидает от
            них ущерба, безжалостности и жестокости. Но,
            однако, эти «варвары» доказывают поразительную
            храбрость и свою надежность тем, кто становится их другом
            и союзником. Противники варваров,
            недооценивающие их, знакомятся с
            хитростью, изобретательностью,
            настойчивостью и безжалостностью этих воинов`,
          ],
        },
        {
          LABEL: `Приключения`,
          VALUE: [
            `Поиск приключений - это лучшая
            дорога для варвара, чтобы
            зарекомендовать себя в цивилизованном обществе.
            Они не лучшим образом подходят к однообразной,
            монотонной службе охранника или другим мирским заданиям.
            Варвары не испытывают трудностей и страха перед опасностями, неопределенностями и путешествиями по дорогам,
            в которые их вовлекают их приключения. Варвары могут отправиться в путь,
            чтобы уничтожить своих ненавистных врагов. Они выражают открытую неприязнь ко всему необычному, включая оживших мертвецов, демонов и дьяволов. Магию
            варвары также не сильно жалуют`,
          ],
        },
        {
          LABEL: `Характеристика`,
          VALUE: [
            `Варвары великолепные воины. Но
            если обычный воин - это показатель тренировок и дисциплины, то варвар это безудержная ярость. Находясь в состоянии
            неистового берсеркера, он становится более сильным и выносливым, способным нанести большее поражение своим
            противникам и устоять перед их атаками. Но ярость проходит,
            и варвар становится ослабленным, поэтому его внутренней
            энергии обычно хватает лишь на несколько таких яростных
            демонстраций, но и их обычно достаточно, чтобы обратить
            противника в бегство. Его дом - это дикая местность, где он
            способен передвигаться с высокой скоростью`,
          ],
        },
        {
          LABEL: `Мировоззрение`,
          VALUE: [
            `Варвар никогда не бывает законным.
            Он может быть благородным, но в его сердце всегда находится необузданность. Его сила это дикие просторы, он
            не может жить в земле, где все подчинено законам. Варвары-хаотики, это выражение свободы
            и эмоций. Но это также и легкомысленные разрушители`,
          ],
        },
        {
          LABEL: `Религия`,
          VALUE: [
            `Некоторые варвары не доверяют обычным религиям,
            они предпочитают подсознательное, природное взаимопонимание со вселенной,
            обычному поклонению. Но другие могут поклоняться
            таким богам как: Корд (бог силы), Обад-Хай (бог природы),
            или Эриснул (бог кровопролитий).
            Варвары способны к самому преданному поклонению своим богам`,
          ],
        },
        {
          LABEL: `Предпосылки`,
          VALUE: [
            `Варвары, пришедшие с диких земель или с варварских племен,
            обычно селятся на окраинах цивилизации.
            Искатель приключений, варвар, может
            отправиться в земли цивилизаций с
            мыслью о достижении богатств, может быть беглецом, сбежавшим из плена после того как его продали
            в рабство в «цивилизации», может он был нанят в качестве солдата, а быть может
            из его родного дома он был изгнан захватчиками. Варвары
            мало общаются и поддерживают отношения с друг другом, если
            они не происходят родом из одного
            племени или одной земли. По сущности, варвары никогда
            себя не считают таковыми, они себя считают воинами`,
          ],
        },
        {
          LABEL: `Расы`,
          VALUE: [
            `Варвары-люди приходят из далеких диких земель,
            расположенных на окраине цивилизаций. Варвары полуорки
            обычно проживают в племенах орков, прежде чем их судьба
            приводит их в земли людей. Варвары дварфы встречаются
            очень редко, обычно они родом из павших под натиском
            непрекращающихся войн с гоблиноидами, орками и гигантами,
            дварфских цитаделей-королевств. Из других рас варвары
            встречаются ещё реже`,
            `Среди жестоких рас, варвары встречаются чаще, чем воины.
            Если вам встретится огр или орк, то, скорее всего, он
            будет варваром`,
          ],
        },
        {
          LABEL: `Отношения с Другими Классами`,
          VALUE: [
            `Как жители диких
            владений, варвары наиболее удобно чувствуют себя рядом с
            рейнджерами, друидами и жрецами поклоняющимися богам
            природы, таким как Обад-Хай и Эхлонна. Множество варваров
            уважает артистизм и непосредственность бардов,
            а некоторые фанаты их музыки. Эти персонажи не доверяют тому,
            чего они не понимают, это относится к магии, которую они
            называют «магией книг». Варвары больше понимают чародеев,
            чем магов, но это, возможно, потому что чародеи более
            общительны и харизматичны. Монахи с их постоянными тренировками,
            практиками, осмотрительными и продуманными
            тактиками в сражении, очень мало общаются с варварами.
            Но представители этих классов относятся друг к другу безо
            всякой неприязни. У варваров нет каких-то определенных
            взглядов и убеждений по поводу воинов, паладинов, жрецов
            и воров`,
          ],
        },
        {
          LABEL: `Роль`,
          VALUE: [
            `Первичной ролью варвара в группе авантюристов обычно
            является расположение в качестве непосредственного сражающегося
            на передовой. Ни один другой персонаж не сравнится с его
            непревзойденной прочностью. Благодаря своей скорости, подбору
            навыков и чувству ловушек, он также может служить как разведчик`,
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
          KEY: BARBARIAN_TABLE,
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
            `Из-за своей роли в битве, Сила самый главный параметр для
            варвара, помимо этого от неё зависят несколько навыков,
            доступных варварам. Те варвары, кто носит легкие доспехи,
            не должны оставить без должного внимания Ловкость. Мудрость
            важна тем, что она тесно связана с несколькими навыками варваров.
            Высокий показатель Телосложения позволяет варвару дольше
            находится в состоянии ярости (и жить дольше, так как она
            дает ему большее количество хит-поинтов)`,
          ],
        },
        {
          LABEL: 'Мировоззрение',
          VALUE: [`Любое незаконное`],
        },
        {
          LABEL: 'Кубик хит-поинтов (КХП)',
          VALUE: [`d12`],
        },
      ],
    },
    {
      NAME: 'Навыки класса',
      TAB_KEY: 'skills',
      PARAGRAPHS: [
        {
          VALUE: [
            `У варваров следующие классовые навыки (в
            скобках ключевой Параметр для каждого
            навыка):`,
            `Взбирание (Сила)`,
            `Езда Верхом (Ловк)`,
            `Запугивание (Обн)`,
            `Искусство Выживания (Мудр)`,
            `Плавание (Сила)`,
            `Приручение животных (Обн)`,
            `Прислушивание (Мудр)`,
            `Прыжки (Сила)`,
            `Ремесло (Интл). Смотрите Глава 4: Навыки, для ознакомления с описанием навыков`,
          ],
        },
        {
          LABEL: 'Пункты навыков на 1-м уровне',
          VALUE: [`( 4 + модификатор Интеллекта) × 4`],
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
            `Варвар квалифицирован со всеми видами простого и военного оружия,
            легкими и средними доспехами, щитами (за исключением башенных щитов)`,
          ],
        },
        {
          LABEL: 'Безграмотность',
          VALUE: [
            `Варвар - единственный персонаж, начинающий свой путь без владения
            навыками чтения и письма. Он должен потратить 2 пункта навыков, чтобы обрести
            способность читать и писать на том языке, на котором он общается`,
            `Варвар, получающий уровень в каком-нибудь другом
            классе, сразу получает и грамотность. Любой иной персонаж,
            который приобрел класс по варвару, не теряет своей, уже имеющейся грамотности`,
          ],
        },
        {
          LABEL: 'Повышенное Передвижение (Экс)',
          VALUE: [
            `У варвара более высокая скорость, чем базовая для его расы. Он
            получает +3 метра, если не одет в доспех, или в легком, или среднем доспехах
            (и не переносит тяжелую нагрузку). К примеру, варвар человек
            будет иметь базовую скорость 12 метров вместо стандартных
            для расы 9-ти метров. Когда он одет в средние доспехи или переносит
            среднюю нагрузку, его скорость понижается до 9 метров. У варвара
            халфлинга скорость 9 метров, вместо обычных
            6, когда он без нагрузки или в легком типе доспехов. Когда же
            он наденет средние доспехи или будет неси среднюю нагрузку,
            его скорость понизится до 6 метров`,
          ],
        },
        {
          LABEL: 'Ярость Варвара (Экс)',
          VALUE: [
            `В экстренных случаях, варвар может входить в холодеющее
                кровь неистовство. В состоянии ярости, варвар получает
                дополнительную силу и стойкость, но становится более
                безрассудным и менее способным защитить себя. Он временно
                поднимает Силу на +4, Телосложение на +4 и получает +2
                бонус морали к спасброскам Воли, но получает –2 штраф к КД`,
            `Повышение Телосложения дает варвару по 2 дополнительных
                хит-поинта за каждый уровень, но после окончания
                ярости, эти хит-поинты пропадают, так Телосложение становится
                обычным. (Эти сверх хит-поинты теряются не сразу;
                смотрите Временные Хит-поинты стр. 14_). В состоянии
                ярости варвар не способен пользоваться навыками основанными
                на Интеллекте, Ловкости и Обаянии (исключение для
                Баланса, Езды Верхом, Запугивания и Искусства Побега),
                навык Концентрации, а также навыки требующие терпение
                и сосредоточенность, он также не может активировать заклинания,
                активировать магические предметы с командным
                словом, инициатором заклинания (как у волшебных палочек),
                или содержащих заклинание (свиток). Он может использовать
                все свои отличительные черты, за исключением Боевой
                Экспертности, черт создания предметов, метамагических.
                Вспышка ярости варвара длится 3 + модификатор
                Телосложения (новый в ярости) – раундов. Но варвар может окончить
                свою ярость раньше, по своему желанию. По окончанию ярости,
                варвар находится в уставшем состоянии (–2 к Силе, –2 к
                Ловкости, не способен проводить стремительные атаки или
                бегать), в течении этого столкновения (за исключением варвара
                17-го уровня, когда эти ограничения уже не применяются, смотрите ниже)`,
            `Варвар способен впадать в ярость лишь один раз в одном
                столкновении, и лишь определенное количество раз в день
                (определенное его уровнем). 1 раз на 1-м уровне, 2 на 4-м
                уровне, и дополнительный раз через каждые четыре уровня
                (до максимум 6 на 20-м уровне). Впадение в ярость не занимает
                много времени, но он может выполнить его только в
                свое действие (смотрите Инициатива стр. 13_), а не в ответ на
                чье-то действие. Варвар, к примеру, не способен сразу впасть
                в ярость при попадании в него стрелы, чтобы получить дополнительные
                хит-поинты из-за повышенного показателя Телосложения,
                хотя он получит это преимущество, если вошел
                в ярость в предыдущем раунде, перед попаданием стрелы`,
          ],
        },
        {
          LABEL: 'Сверхъестественное Уворачивание (Экс)',
          VALUE: [
            `Достигнув 2-го уровня варвар получает экстраординарную способность
                реагировать на опасность прежде чем его разум среагирует на
                неё. Со второго уровня и дальше, он сохраняет свой бонус по
                Ловкости к КД (если он есть) в независимости от того,
                оторопевший он или атакуемый невидимым противником. (Он
                теряет свой бонус Ловкости к КД, если полностью обездвижен)`,
            `Если у варвара уже есть сверхъестественное уворачивание от
                другого класса (к примеру варвар с как минимумом четырьмя
                уровнями по вору), он автоматически получает улучшенное
                сверхъестественное уворачивание (смотрите ниже)`,
          ],
        },
        {
          LABEL: 'Повышенная Ярость (Экс)',
          VALUE: [
            `Начиная с 11-го уровня, ярость варвара дает ему следующие
            бонусы +6 к Силе, +6 к Телосложению и +3 бонус морали к
            спасброскам Воли. Штраф к КД остается по прежнему –2`,
          ],
        },
        {
          LABEL: 'Ощущение Ловушек (Экс)',
          VALUE: [
            `На 3-го уровне у варвара развивается такое чувство интуиции,
            что предупреждает его по поводу ловушек, что даёт ему +1 к спасброску
            Рефлекса против ловушек, и +1 КД уворачивания от атак, проводимых
            ловушками. Эти бонусы повышаются на +1 через каждые три
            уровня варвара (6-м, 9-м, 12-м, 15-м и 18-м уровнях)`,
          ],
        },
        {
          LABEL: 'Улучшенное Сверхъестественное Уворачивание (Экс)',
          VALUE: [
            `С 5-го уровня варвара тяжело фланкировать, он с одинаковой
            скоростью реагирует на своих противников с обеих сторон,
            будто это один противник. Эта способность не дает вору
            использовать коварную атаку в фланкировании по варвару.
            Исключение, если вор не менее чем, на четыре уровня вора
            выше варвара, он способен прокрасться и провести коварную
            атаку`,
            `Если у персонажа уже было сверхъестественное уворачивание
            (смотрите выше) от другого класса, персонаж автоматически
            приобретает улучшенное сверхъестественное уворачивание, а
            уровни от класса дающего сверхъестественное
            уворачивание суммируются с базовыми, при определении
            минимального уровня вора, который сможет фланкировать
            персонажа. `,
          ],
        },
        {
          LABEL: 'Снижение Повреждений (Экс)',
          VALUE: [
            `Начиная с 7-го уровня, варвар способен частично уменьшить
            повреждение, причиненное от каждого удара или атаки. Отнимайте
            1 повреждение каждый раз, когда варвар получил повреждение от оружия
            или природной атаки. На 10-м уровне снижение повреждений
            на –2, на 13-м на –3, на 16-м на –4, и на 19-м на –5. Снижение
            повреждения может снизить вред до 0, но не ниже нуля`,
          ],
        },
        {
          LABEL: 'Непробиваемая Воля (Экс)',
          VALUE: [
            `Будучи в ярости, варвар 14-го уровня и выше получает +4 бонус
            к спасброскам Воли против заклинаний школы очарований. Этот
            бонус суммируется со всеми остальными модификаторами, включая бонус
            морали к спасброскам Воли, когда он находится в ярости`,
          ],
        },
        {
          LABEL: 'Неутомимая Ярость (Экс)',
          VALUE: [
            `С 17-го уровня и выше, варвар более не переходит в уставшее
            состояние в конце своей ярости`,
          ],
        },
        {
          LABEL: 'Могучая Ярость (Экс)',
          VALUE: [
            `Начиная с 20-го уровня, ярость варвара дает ему следующие бонусы
            +8 к Силе, +8 к Телосложению и +4 бонус морали к спасброскам Воли.
            Штраф к КД остается по прежнему –2`,
          ],
        },
      ],
    },
    {
      NAME: 'Уход в отставку',
      TAB_KEY: 'resignation',
      PARAGRAPHS: [
        {
          LABEL: 'Более не варвар',
          VALUE: [
            `Варвар, принявший законное мировоззрение теряет свою
            способность впадать в ярость, и не растет в уровнях класс
            варвара. Но он сохраняет все остальные преимущества (повышенное
            передвижение, снижение повреждений, сверхъестественное
            уворачивание и чувство ловушек)`,
          ],
        },
      ],
    },
    {
      NAME: 'Стартовый пакет',
      TAB_KEY: 'starter-pack',
      PARAGRAPHS: [
        {
          LABEL: 'Полуорк Варвар',
        },
        {
          LABEL: 'Доспех',
          VALUE: [
            `Кожаный выдубленный доспех (+3 КД, штраф проверки доспеха –1,
              скорость передвижения 12 м, вес 9,0 кг)`,
          ],
        },
        {
          LABEL: 'Оружие',
          VALUE: [
            `Двуручный топор (1d12, крит. ×3, вес 5,4 кг., двуручное, рубящее)`,
            `Короткий лук (1d6, крит. ×3, диапазон 18 м, 0,9 кг, колющее)`,
            `Кинжал (1d4, крит. 19-20/×2, диапазон 3 м, 0,45 кг, облегченное, колющее)`,
          ],
        },
        {
          LABEL: 'Выбор Навыков',
          VALUE: [`Выберите число навыков равное 4 +- модификатор Интеллекта`],
        },
        {
          isTable: true,
          KEY: BARBARIAN_STARTER_PACK_TABLE,
        },
        {
          LABEL: 'Отличительная черта',
          VALUE: [`Улучшение Обращения с Оружием (двуручный топор)`],
        },
        {
          LABEL: 'Снаряжение',
          VALUE: [
            `Вещмешок с бурдюком, еда на один день пути, походное одеяло,
            мешок, кремень и огниво. Колчан с 20 стрелами`,
          ],
        },
        {
          LABEL: 'Золото',
          VALUE: [`2d4 золотых монет`],
        },
      ],
    },
  ],
}
