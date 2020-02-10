// @flow
import { chapterListReducer } from '../pages/chapter-list'
import { introductionReducer } from '../pages/introduction'
import { headerReducer } from '../components/header'
import { parametersReducer } from '../pages/parameters'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  chapterListPage: chapterListReducer,
  intoductionPage: introductionReducer,
  header: headerReducer,
  parametersPage: parametersReducer,
})
