// @flow
import { type chapterListPageType } from './chapter-list-data'
import { CHAPTER_LIST_PAGE } from './chapter-list-data'

export type chapterListStateType = {
  ...chapterListPageType,
}

export const chapterListReducer = (
  state: chapterListStateType = CHAPTER_LIST_PAGE
): chapterListStateType => state
