// @flow
import { chapterListReducer } from '../chapter-list'
import { introductionReducer } from '../introduction'
import { headerReducer } from '../main-page/components'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  chapterListPage: chapterListReducer,
  intoductionPage: introductionReducer,
  header: headerReducer,
})
