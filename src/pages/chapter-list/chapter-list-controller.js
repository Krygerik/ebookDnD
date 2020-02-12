// @flow
import React from 'react'
import { connect } from 'react-redux'
import { ChapterList } from './chapter-list'
import { CHAPTER_LIST_PAGE } from './chapter-list-data'
import { setHeader } from '../../components/header'

const ChapterListContainer = (props: any) => {
  const { changeHeader } = props

  return (
    <ChapterList
      chapterListPage={CHAPTER_LIST_PAGE}
      changeHeader={changeHeader}
    />
  )
}

const mapDispatchToProps = dispatch => ({
  changeHeader: newHeader => dispatch(setHeader(newHeader)),
})

export const ChapterListController = connect(
  null,
  mapDispatchToProps
)(ChapterListContainer)
