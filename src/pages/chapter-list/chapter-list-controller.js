// @flow
import React from 'react'
import { connect } from 'react-redux'
import { ChapterList } from './chapter-list'
import { setHeader } from '../../components/header'

const ChapterListContainer = (props: any) => {
  const { chapterListPage, changeHeader } = props
  return (
    <ChapterList
      chapterListPage={chapterListPage}
      changeHeader={changeHeader}
    />
  )
}

const mapStateToProps = store => {
  return {
    chapterListPage: store.chapterListPage,
  }
}

const mapDispatchToProps = dispatch => ({
  changeHeader: newHeader => dispatch(setHeader(newHeader)),
})

export const ChapterListController = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChapterListContainer)
