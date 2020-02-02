import { type pageType } from './chapter-list-data'
import { chapterListPage } from './chapter-list-data'

type reduxStateType = {
  ...pageType,
}

export function rootReducer(
  state: reduxStateType = chapterListPage
): reduxStateType {
  return state
}
