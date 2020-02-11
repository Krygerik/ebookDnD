// @flow
import { type pageContentType } from '../../components/content'
import { PARAMETERS_PAGE } from './parameters-data'

export const parametersReducer = (
  state: pageContentType = PARAMETERS_PAGE
): pageContentType => state
