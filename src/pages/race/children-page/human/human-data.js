// @flow
import type { pageContentType } from '@/components/page'

export const HUMAN_PAGE: pageContentType = {
  TITLE: 'Человек',
  URL: '/race/human',
  isNavigationPage: false,
  parentUrl: '/race',
  TABS: [
    {
      NAME: 'Описание',
      TAB_KEY: 'description',
      PARAGRAPHS: [
        {
          VALUE: [
            `Большинство людей – предки первопроходцев, захватчиков,
            путешественников, беглецов, и других людей находящихся
            в постоянном движении. Результат, земли людей – это смесь
            разнообразных физических, культурных, религиозных и политических сил.
            Крепкие или изящные, светло- или темнокожие, веселые или строгие,
            примитивные или цивилизованные, праведные или нечестивые, все это
            гамма разнообразных людей.`,
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
            `Люди наиболее гибкие, и подвижные в отношениях из всех распространенных рас. Они
              несходны в своих вкусах, моралях, традициях, и обычаях.
              Многие видят в них малое уважение к истории, но это связано с природой людей, их короткий срок жизни и постоянно
              сменяющиеся культуры, делают их память слишком короткой
              в отличие от дварфов, эльфов, гномов и халфлингов.`,
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
            `Средний рост человека колеблется от 150
            см. и до чуть более 180 см., вес от 50 кг до 100 кг, хотя мужчины заметно выше и тяжелее женщин. Благодаря их постоянным переселениям и войнам, а также быстрой смене поколений, люди наиболее физически разнообразны, чем все
            остальные расы. Их кожа может быть от почти черной, до
            очень бледной, волосы от черного до белого (кучерявые, волнистые, прямые) цветов, а лицевые волосы (борода и усы для
            мужчин) от редких до густых. Множество людей имеют прилитие нечеловеческой крови, у них могут проявляться черты
            эльфов, орков, или других рас. Люди очень непредсказуемы
            в своих стилях одежды, поведении, делая необычные прически, надевая странные одежды, делая татуировки, пирсинг, и
            тому подобные вещи. У людей очень короткий цикл жизни,
            они достигают зрелости в среднем в 15 лет и редко проживают даже одно столетие. `,
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
            `Так как люди очень часто перемешиваются друг с другом в жизни, они легко уживаются с остальными
            расами. Среди всех рас, люди известны как «лучшие друзья
            каждого». Они служат послами, дипломатами, магистратами,
            купцами, и достигают успехов в любых специализациях.`,
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
            `У людей нет как такового определенного мировоззрения,
            даже нейтрального. Среди людей встречаются как очень плохие, так и очень хорошие.`,
          ],
        },
      ],
    },
    {
      NAME: 'Земли людей',
      TAB_KEY: 'land-of-people',
      PARAGRAPHS: [
        {
          VALUE: [
            `Земли людей в постоянном потоке новых
            идей. социальных изменений, инноваций, постоянном появлении новых лидеров. Долго живущие расы находят людскую
            культуру слегка суетливой и даже смущающей.`,
            `Так как люди мало живут, всех их лидеры молоды, и
            пытаются стать политическими, религиозными и военными
            лидерами среди других рас. Даже отдельные люди консервативные традиционалисты, изменяют законы вместе с поколениями, адаптируя и эволюционируя их гораздо быстрее, чем
            халфлинги, эльфы, дварфы. Отдельно или группой человек,
            очень приспособим, и всегда стоит на вершине динамически
            изменяющихся перемен.`,
            `В землях людей проживает огромное количество «не-людей»
            (сравним, к примеру, сколько в землях дварфов проживает других
            не дварфских рас).`,
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
            `В отличии от остальных распространенных
            рас, у людей нет главного верховного бога. Пелор, бог солнца,
            наиболее поклоняемый в землях людей, но у него не настолько главенствующее место, как например Морадин у дварфов
            или Кореллон Ларесйан у эльфов. Некоторые люди набожны
            и фанатичны в определённых религиях, в то время как другим
            все боги абсолютно безразличны.`,
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
            `Люди общаются на Общем. Они очень способны в
            изучении других языков, включая и мало распространенные, они
            обожают вставлять в свои разговоры слова, взятые из других языков: ругань Орков, кулинарные термины Халфлингов, Эльфийские музыкальные выражения, военную терминологию Дварфов
            и т.д.`,
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
            `Имена людей очень разнообразны. Так, не имея единого бога, дающего им камень основания культуры, так и имена
            людей. У них мало типично распространенных имен. Некоторые
            родители дают своим детям имена дварфов или эльфов (причем
            произношение этих имен зачастую неправильно).`,
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
            `Люди авантюристы наиболее отважные, дерзкие, честолюбивые представители, смелой, бесстрашной, ценящей себя расы. Люди могут получать славу в
            глазах своих товарищей благодаря потрясающей силе, здоровью
            и популярности. Люди гораздо чаще становятся известными, чем
            отдельные территории или группы`,
          ],
        },
      ],
    },
    {
      NAME: 'Расовые особенности людей',
      TAB_KEY: 'racial-characteris',
      PARAGRAPHS: [
        {
          LABEL: 'Средний рост',
          VALUE: [
            `Как существа среднего роста, люди не имеют
            каких-то бонусов или штрафов из-за своего роста.`,
          ],
        },
        {
          LABEL: 'Базовая скорость людей 9 метров',
        },
        {
          LABEL: 'Одна дополнительная черта на 1-м уровне',
          VALUE: [
            `Так как люди
            очень быстро специализируются и разнообразны в своих
            талантах. Смотрите Главу 5: Черты.`,
          ],
        },
        {
          LABEL: `Четыре дополнительных пункта навыка на 1-м уровне и
                    один дополнительный пункт навыка на каждом новом уровне`,
          VALUE: [
            `Так как люди разносторонни и способные ученики. (Эти
                4 пункта добавляются как бонус к базовым смотрите Главу
                4 Навыки).`,
          ],
        },
        {
          LABEL: `Автоматический Язык: Общий.`,
          VALUE: [
            `Дополнительные языки: (За
                исключением секретных языков, например Друидов). Смотрите расовые списки языков, или навык Языки, для более
                полного списка (стр. 8_). Люди смешались с различными
                расами и поэтому способны изучить любые языки.`,
          ],
        },
        {
          LABEL: `Желаемый Класс`,
          VALUE: [
            ` Если вы решите, что ваш персонаж будет
            мультиклассовым, то он будет переносить штраф в очках
            опыта, ограничение в росте классов люди не имеют. (Смотрите Опыт для мультиклассовых Персонажей, стр. 60).`,
          ],
        },
      ],
    },
  ],
}
