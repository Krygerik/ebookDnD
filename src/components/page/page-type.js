// @flow
export type navigationListPageType = {
  TITLE: string,
  URL: string,
  isNavigationPage: true,
  parentUrl: string,
  image?: Array<string>,
  LINKS: Array<pageLinkType>,
  DESCRIPTION?: Array<string>,
}

type paragraphType = {
  isTable: false,
  LABEL?: string,
  image?: string,
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

type descriptionPageType = {
  isTable?: false,
  LABEL?: string,
  VALUE?: Array<string>,
}

export type pageContentType = {
  TITLE: string,
  URL: string,
  isNavigationPage: false,
  parentUrl: string,
  DESCRIPTION: Array<descriptionPageType | tableType>,
  image?: Array<string>,
  TABS?: Array<tabType>,
}

export type pageLinkType = {
  DATA: navigationListPageType | pageContentType,
  COMPONENT?: any,
}
