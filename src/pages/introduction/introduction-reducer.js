// @flow
import type { pageContentDataType } from './introduction-data'
import { INTRODUCTION_PAGE_DATA } from './introduction-data'

type introductionState = {
  ...pageContentDataType,
}

export const introductionReducer = (
  state: introductionState = INTRODUCTION_PAGE_DATA
): introductionState => state
