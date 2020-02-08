// @flow
import { CHAPTER_LIST_PAGE } from '../../chapter-list'
import { SET_HEADER, type TSetHeaderAction } from './header-actions'

type headerStateType = {
  title: string,
}

export const headerReducer = (
  state: headerStateType = { title: CHAPTER_LIST_PAGE.TITLE },
  action: TSetHeaderAction
): headerStateType => {
  switch (action.type) {
    case SET_HEADER:
      return {
        ...state,
        title: action.payload,
      }
    default:
      return state
  }
}
