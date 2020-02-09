// @flow
import type { pageContentType } from './introduction-data'
import { INTRODUCTION_PAGE_DATA } from './introduction-data'

type introductionState = {
  ...pageContentType,
}

export const introductionReducer = (
  state: introductionState = INTRODUCTION_PAGE_DATA
): introductionState => state
