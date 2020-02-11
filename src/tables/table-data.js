export const DEFAULT = 'default'
export const TABLE = 'table'

type TCompositeHeaderCell = {
  value: string,
  attr: Object,
}

type TTableDataWithCompositeHeader = {
  isCompositeHeader: true,
  header: Array<Array<TCompositeHeaderCell | string>>,
  body: Array<Array<string>>,
}

export type TTableData = {
  isCompositeHeader: false,
  header: Array<Array<string>>,
  body: Array<Array<string>>,
}

export type tableType = {
  KEY: string,
  NAME: string,
  DATA: TTableDataWithCompositeHeader | TTableData,
}

export const TABLES: Array<tableType> = [
  {
    KEY: 'table 1-1',
    NAME: 'Таблица 1-1: Модификаторы параметров и бонусные заклинания',
    DATA: {
      isCompositeHeader: true,
      header: [
        [
          {
            value: 'Показатель',
            attr: {
              rowSpan: 2,
            },
          },
          {
            value: 'Модификатор',
            attr: {
              rowSpan: 2,
            },
          },
          {
            value: 'Бонусные заклинания (По уровню заклинаний)',
            attr: {
              colSpan: 10,
            },
          },
        ],
        ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      ],
      body: [
        ['1', '-5', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        ['2-3', '-4', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        ['4-5', '-3', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        ['6-7', '-2', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        ['8-9', '-1', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        ['10-11', '0', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        ['12-13', '+1', '1', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        ['14-15', '+2', '1', '1', '-', '-', '-', '-', '-', '-', '-', '-'],
        ['16-17', '+3', '1', '1', '1', '-', '-', '-', '-', '-', '-', '-'],
        ['18-19', '+4', '1', '1', '1', '1', '-', '-', '-', '-', '-', '-'],
        ['20-21', '+5', '2', '1', '1', '1', '1', '-', '-', '-', '-', '-'],
        ['22-23', '+6', '2', '2', '1', '1', '1', '1', '-', '-', '-', '-'],
        ['24-25', '+7', '2', '2', '2', '1', '1', '1', '1', '-', '-', '-'],
        ['26-27', '+8', '2', '2', '2', '2', '1', '1', '1', '1', '-', '-'],
        ['28-29', '+9', '3', '2', '2', '2', '2', '1', '1', '1', '1', '-'],
        ['30-31', '+10', '3', '3', '2', '2', '2', '2', '1', '1', '1', '1'],
      ],
    },
  },
]
