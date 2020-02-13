// @flow
export type pageLinkType = {
  NAME: string,
  URL: string,
  COMPONENT?: any,
}

export type navigationListPageType = {
  TITLE: string,
  URL: string,
  isNavigationPage: true,
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
  DESCRIPTION: Array<string>,
  TABS?: Array<tabType>,
}