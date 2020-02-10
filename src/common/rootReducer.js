// @flow
import { chapterListReducer } from '../pages/chapter-list'
import { introductionReducer } from '../pages/introduction'
import { headerReducer } from '../components/header'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  chapterListPage: chapterListReducer,
  intoductionPage: introductionReducer,
  header: headerReducer,
})