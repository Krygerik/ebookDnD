// @flow
import type { pageContentType } from '@/components/page'
import halfOrc from '@/assets/halfOrc.png'

export const HALF_ORC_PAGE: pageContentType = {
  TITLE: 'Полуорки',
  URL: '/race/half-orc',
  isNavigationPage: false,
  parentUrl: '/race',
  DESCRIPTION: [
    `В диких краях, варварские племена орков и людей проживает в 
    крайне хрупком балансе, сражаясь, друг другом в войнах, и торгуя во 
    времена перемирий. Полуорки, те, кто родился от человека и орка, но 
    их не воспринимает ни та, ни другая культуры. Некоторые по разным причинам 
    покидают свой дом, и направляются в цивилизованные земли, принося с собой из 
    диких мест бесстрашие, храбрость, и боевой героизм.`,
  ],
  TABS: [
    {
      NAME: 'Индивидуальность',
      TAB_KEY: 'individuality',
      PARAGRAPHS: [
        {
          isTable: false,
          VALUE: [
            `Полуорки раздражительны и угрюмы. Они скорее будут действовать, 
            чем размышлять, и скорее сражаться, чем выяснять. Те, кто более везучи, 
            не настолько безумны, и способны контролировать себя, способны прожить в 
            землях цивилизации.`,
            `Полуорки любят простые удовольствия: покушать, выпить, 
            похвастаться, попеть, побороться, и потанцевать дикие танцы. Такие радости 
            как: поэзия, культурные танцы, философия им не доступны. Подходящей группе он 
            будет ценным вкладом. На великосветском балу герцогини, он явно не впишется.`,
          ],
        },
      ],
    },
    {
      NAME: 'Внешность',
      TAB_KEY: 'appearance',
      PARAGRAPHS: [
        {
          isTable: false,
          image: halfOrc,
          VALUE: [
            `Полуорки ростом 1,8–2,1 метр, весят они между 81 кг. и 112,5 кг. У 
            полуорков кожа серого оттенка, покатый лоб, выпяченная нижняя челюсть, торчащие 
            зубы, и грубые взлохмаченные волосы на теле, все признаки явно указывающие на 
            его происхождение.`,
            `Оркам нравятся шрамы. Шрам полученные в бою считаются наградой, 
            а особенные шрамы признаком красоты. Любой полуорк проживающий среди, или рядом 
            с орками имеет шрамы, они являются знаком стыда обозначая его рабство, и указывая 
            на его бывшего хозяина, или знак награды указывая на его завоевания и его высокий 
            статус. Полуорк живущий среди людей, может как скрывать, так и показывать свои шрамы, 
            все зависит от отношения к ним.`,
            `Зрелыми полуорки становятся немного быстрее, чем люди, 
            где-то в 14 лет, и соответственно стареют тоже. Лишь некоторые из полуорков проживают 
            более чем 75 лет.`,
          ],
        },
      ],
    },
    {
      NAME: 'Отношения',
      TAB_KEY: 'relations',
      PARAGRAPHS: [
        {
          isTable: false,
          VALUE: [
            `Из-за того что, орки кровные враги дварфов и эльфов, у полуорков жесткие 
            отношения с этими расами. По этой причине орки не в хороших отношениях с людьми, 
            халфлингами, гномами и другими расами. Поэтому каждый полуорк, должен самостоятельно 
            добиваться мирных отношений у тех, кто боится или ненавидит его орочьих потомков. 
            Некоторые живут в уединении не привлекая к себе внимания. Другие, проявляя публичное 
            сострадание и добросердечность (проходят или нет эти поступки, но они искренни). 
            Другие просто пытаются быть настолько сильными, что у других просто не оставалось
            бы иного выбора, как принять их условия.`,
          ],
        },
      ],
    },
    {
      NAME: 'Мировоззрение',
      TAB_KEY: 'ideolody',
      PARAGRAPHS: [
        {
          isTable: false,
          VALUE: [
            `У полуорков прямая тенденция к хаосу, это от их родителей орков, но, от 
            родителей людей у них нет стремления ни к добру, ни к злу. Полуорки выросшие 
            среди орков, имеют лишь одну цель – выжить, как правило их намерения имеют злые корни.`,
          ],
        },
      ],
    },
    {
      NAME: 'Земли полуорков',
      TAB_KEY: 'land-of-halforc',
      PARAGRAPHS: [
        {
          isTable: false,
          VALUE: [
            `Полуорки не имеют собственных земель. Наиболее часто они живут среди орков.
            Среди других рас, люди, наиболее чаще принимают полуорков, поэтому они практически 
            всегда живут в человеческих землях, если не живут среди орков.`,
          ],
        },
      ],
    },
    {
      NAME: 'Религия',
      TAB_KEY: 'religion',
      PARAGRAPHS: [
        {
          isTable: false,
          VALUE: [
            `Как и орки, полуорки поклоняются Груумшу, главному богу орков, и архиврагу 
            Кореллону Ларесиану (богу эльфов). Так как Груумш злой бог, варвары и воины 
            полуорки, будут поклоняться ему как богу войны, хотя сами по себе они будут не 
            злыми. Служители Груумша уставшие от самоутверждения перед богом, или пытающиеся 
            не дать людям разочароваться в них, просто не выносят свою религию на публику. 
            Полуорки желающее соединится с людьми, будут поклонятся своим богам, и будут 
            показывать это в своих добродетельных поступках.`,
          ],
        },
      ],
    },
    {
      NAME: 'Языки',
      TAB_KEY: 'languages',
      PARAGRAPHS: [
        {
          isTable: false,
          VALUE: [
            `Орки, не имеющие своего собственного алфавита, используют шрифт Дварфов
            лишь в редких случаях чтобы написать что-то на Орочьем. Очень часто письменность
            орков напоминает какие-то грубые надписи.`,
          ],
        },
      ],
    },
    {
      NAME: 'Имена',
      TAB_KEY: 'names',
      PARAGRAPHS: [
        {
          isTable: false,
          VALUE: [
            `Обычно полуорк выбирает имя для того, что бы произвести какое то впечатление
            на кого-то. Если он проживает среди людей, он выбирает человеческое имя. Если он
            хочет кого-то запугать, то выбирает гортанное орочье имя.`,
            `Полуорк выросший в обществе людей, будет назван человеческим именем, хотя позже, покинув дом, он
            может изменить свое имя. Некоторые полуорки, конечно, не настолько умны,чтобы
            подобрать себе нормальное имя.`,
          ],
        },
        {
          isTable: false,
          LABEL: 'Имена мужчин',
          VALUE: [`Денч, Фенг, Гелл, Хенк, Холг, Имш, Кес, Ронт, Шамп, Фокк`],
        },
        {
          isTable: false,
          LABEL: 'Имена женщин',
          VALUE: [
            `Багги, Эмен, Энгонг, Мйев, Ниега, Овак, Овнка, Шауса, Вола и Волен`,
          ],
        },
      ],
    },
    {
      NAME: 'Искатели приключений',
      TAB_KEY: 'adventurers',
      PARAGRAPHS: [
        {
          isTable: false,
          VALUE: [
            `Полуорки проживающие среди людей, неизменно востребованы как неистовые
            воины, из-за своей высокой силы. Очень часто гонимые из благородного общества,
            они очень часто находят взаимопонимание и дружбу среди искателей приключений,
            большинство из которых друзья скитальцев и изгнанников.`,
          ],
        },
      ],
    },
    {
      NAME: 'Расовые особенности полуорков',
      TAB_KEY: 'racial-characteris',
      PARAGRAPHS: [
        {
          isTable: false,
          LABEL: '+2 Сила, –2 Интеллект, –2 Обаяние',
          VALUE: [
            `Полуорки сильны, но их
            орочье наследие, делает их угрюмыми и грубыми`,
          ],
        },
        {
          isTable: false,
          LABEL: 'Среднего размера',
          VALUE: [
            `Как существа среднего роста, полуорки не
          имеют каких-то бонусов или штрафов из-за своего роста.`,
          ],
        },
        {
          isTable: false,
          LABEL: 'Базовая скорость полуорка 9 метров',
        },
        {
          isTable: false,
          LABEL: 'Темновидение',
          VALUE: [
            `Полуорки (и орки) могут видеть в темноте до 18 метров. Они видят все черно-белым, но как обычным
            зрением, и способны перемещаться в темноте безо всяких
            источников света.`,
          ],
        },
        {
          isTable: false,
          LABEL: 'Кровь орков',
          VALUE: [
            `При каких-то особых условиях и эффектах касающейся расы орк, полуорк принимается как орк.`,
            `К примеру, полуорк столь же уязвим к определенным
            эффектам  как и его предки, может использовать особое орочье
            оружие, или магические предметы которые дают особые силы,
            если его держит орк. (Смотрите Справочник Монстров за 
            дополнительной информацией об орках, и Руководство Мастера
            Подземелий о магических предметах).`,
          ],
        },

        {
          isTable: false,
          LABEL: `Автоматические Языки: Общий и Орков. Бонусные языки:
          Драконов, Гигантов, Гноллов, Гоблинов, Абисса.`,
          VALUE: [
            `Особо развитые полуорки (они исключение) могут владеть языками
            своих союзников и конкурентов.`,
          ],
        },
        {
          isTable: false,
          LABEL: `Желаемый класс: Варвар`,
          VALUE: [
            `Мультиклассовый персонаж орк,
            не будет получать штраф за полученный опыт (см. Опыт для
            Мультиклассовых Персонажей стр. 60). Свирепость течет в
            жилах полуорка.`,
          ],
        },
      ],
    },
  ],
}
