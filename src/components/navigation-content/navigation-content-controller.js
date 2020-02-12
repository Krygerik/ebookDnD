// @flow
import React from 'react'
import { connect } from 'react-redux'
import { NavigationContent } from './navigation-content'
import { setHeader } from '../header'

type pageLinkType = {
  NAME: string,
  URL: string,
  COMPONENT?: any,
}

export type navigationListPageType = {
  TITLE: string,
  URL: string,
  LINKS: Array<pageLinkType>,
}

type TNavigationContentContainer = {
  contentPage: navigationListPageType,
  changeHeader: Function,
}

const NavigationContentContainer = (props: TNavigationContentContainer) => {
  const { changeHeader, contentPage } = props

  return (
    <NavigationContent contentPage={contentPage} changeHeader={changeHeader} />
  )
}

const mapDispatchToProps = dispatch => ({
  changeHeader: newHeader => dispatch(setHeader(newHeader)),
})

export const NavigationContentController = connect(
  null,
  mapDispatchToProps
)(NavigationContentContainer)
