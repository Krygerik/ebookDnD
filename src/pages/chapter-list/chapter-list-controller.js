// @flow
import React from 'react'
import { NavigationContent } from '@/components/navigation-content'
import { CHAPTER_LIST_PAGE } from './chapter-list-data'
import { withNavigationRouter } from '@/wrappers/withNavigationRouter'

const ChapterListController = () => (
  <NavigationContent contentPage={CHAPTER_LIST_PAGE} />
)

export const ChapterListWithNavRouter = withNavigationRouter(
  ChapterListController,
  CHAPTER_LIST_PAGE
)
