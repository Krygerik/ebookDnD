// @flow
import { connect } from 'react-redux'
import React from 'react'
import { MainPage } from './chapter-list'

const MainPageContainer = (props: any) => {
  const { chapterListPage } = props
  return <MainPage mainPage={chapterListPage} />
}

const mapStateToProps = store => {
  return {
    chapterListPage: store.chapterListPage,
  }
}

export const MainPageController = connect(mapStateToProps)(MainPageContainer)
