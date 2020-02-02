// @flow
import { type chapterListPageType } from './chapter-list-data'
import { chapterListPage } from './chapter-list-data'

export type chapterListStateType = {
  ...chapterListPageType,
}

export const chapterListReducer = (
  state: chapterListStateType = chapterListPage
): chapterListStateType => state
