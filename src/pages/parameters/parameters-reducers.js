// @flow
import type { pageContentType } from '../introduction'
import { PARAMETERS_PAGE } from './parameters-data'

export const parametersReducer = (
  state: pageContentType = PARAMETERS_PAGE
): pageContentType => state
