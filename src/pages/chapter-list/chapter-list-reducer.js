// @flow
import { type navigationListPageType } from './chapter-list-data'
import { CHAPTER_LIST_PAGE } from './chapter-list-data'

export const chapterListReducer = (
  state: navigationListPageType = CHAPTER_LIST_PAGE
): navigationListPageType => state
