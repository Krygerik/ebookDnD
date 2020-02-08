// @flow
import React from 'react'
import { connect } from 'react-redux'
import { MainPage } from './chapter-list'
import { setHeader } from '../main-page/components'

const MainPageContainer = (props: any) => {
  const { chapterListPage, changeHeader } = props
  return <MainPage mainPage={chapterListPage} changeHeader={changeHeader} />
}

const mapStateToProps = store => {
  return {
    chapterListPage: store.chapterListPage,
  }
}

const mapDispatchToProps = dispatch => ({
  changeHeader: newHeader => dispatch(setHeader(newHeader)),
})

export const MainPageController = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPageContainer)
