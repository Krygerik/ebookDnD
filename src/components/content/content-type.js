// @flow
type paragraphType = {
  TYPE: 'default',
  LABEL?: string,
  VALUE?: Array<string>,
}

type tableKeyType = {
  TYPE: 'table',
  KEY: string,
}

type tabType = {
  NAME: string,
  TAB_KEY: string,
  PARAGRAPHS: Array<paragraphType | tableKeyType>,
}

export type pageContentType = {
  TITLE: string,
  URL: string,
  DESCRIPTION: Array<string>,
  TABS?: Array<tabType>,
}
