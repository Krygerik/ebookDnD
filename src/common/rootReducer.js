// @flow
import { headerReducer } from '../components/header'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  header: headerReducer,
})
