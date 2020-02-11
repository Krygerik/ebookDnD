// @flow
import { type pageContentType } from '../../components/content'
import { INTRODUCTION_PAGE } from './introduction-data'

export const introductionReducer = (
  state: pageContentType = INTRODUCTION_PAGE
): pageContentType => state
