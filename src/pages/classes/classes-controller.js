// @flow
import React from 'react'
import { Page } from '@/components/page'
import { CLASSES_LIST_PAGE } from './classes-data'
import { withNavigationRouter } from '@/wrappers/withNavigationRouter'

const ClassesListController = () => <Page content={CLASSES_LIST_PAGE} />

export const ClassesListwithNavigationRouter = withNavigationRouter(
  ClassesListController,
  CLASSES_LIST_PAGE
)
