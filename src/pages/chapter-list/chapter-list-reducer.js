// @flow
import { type chapterListPageType } from './chapter-list-data'
import { chapterListPage } from './chapter-list-data'

type reduxStateType = {
  ...chapterListPageType,
}

export function rootReducer(
  state: reduxStateType = chapterListPage
): reduxStateType {
  return state
}
