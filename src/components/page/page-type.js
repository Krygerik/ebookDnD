// @flow
export type navigationListPageType = {
  TITLE: string,
  URL: string,
  isNavigationPage: true,
  parentUrl: string,
  LINKS: Array<pageLinkType>,
}

type paragraphType = {
  isTable: false,
  LABEL?: string,
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
  DESCRIPTION: Array<string>,
  TABS?: Array<tabType>,
}

export type pageLinkType = {
  DATA: navigationListPageType | pageContentType,
  COMPONENT?: any,
}
