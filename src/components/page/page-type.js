// @flow
export type navigationListPageType = {
  TITLE: string,
  URL: string,
  isNavigationPage: true,
  parentUrl: string,
  image?: Array<string>,
  LINKS: Array<navigationListPageType | pageContentType>,
  DESCRIPTION?: Array<string>,
}

type paragraphType = {
  isTable?: false,
  LABEL?: string,
  image?: Array<string>,
  VALUE?: Array<string>,
}

type tableType = {
  isTable: true,
  KEY: string,
}

export type tabType = {
  NAME: string,
  TAB_KEY: string,
  PARAGRAPHS: Array<paragraphType | tableType>,
}

export type pageContentType = {
  TITLE: string,
  URL: string,
  isNavigationPage: false,
  parentUrl: string,
  TABS: Array<tabType>,
}
