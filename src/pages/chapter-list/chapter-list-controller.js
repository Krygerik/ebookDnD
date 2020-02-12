// @flow
import React from 'react'
import { Page } from '@/components/page'
import { CHAPTER_LIST_PAGE } from './chapter-list-data'
import { withNavigationRouter } from '@/wrappers/withNavigationRouter'

const ChapterListController = () => <Page content={CHAPTER_LIST_PAGE} />

export const ChapterListWithNavRouter = withNavigationRouter(
  ChapterListController,
  CHAPTER_LIST_PAGE
)
