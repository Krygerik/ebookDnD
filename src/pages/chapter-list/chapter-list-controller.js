import { connect } from 'react-redux'
import React from 'react'
import { MainPage } from './chapter-list'

const MainPageContainer = (props: any) => {
  const { store } = props
  return <MainPage mainPage={store} />
}

const mapStateToProps = store => {
  return {
    store: store,
  }
}

export const MainPageController = connect(mapStateToProps)(MainPageContainer)
