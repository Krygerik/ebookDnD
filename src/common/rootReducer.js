// @flow
import { chapterListReducer } from '../pages/chapter-list'
import { introductionReducer } from '../pages/introduction'
import { headerReducer } from '../components/header'
import { parametersReducer } from '../pages/parameters'
import { basesOfCreationReducer } from '../pages/bases-of-creation'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  header: headerReducer,
  chapterListPage: chapterListReducer,
  intoductionPage: introductionReducer,
  parametersPage: parametersReducer,
  basesOfCreationPage: basesOfCreationReducer,
})
