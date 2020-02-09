// @flow
import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { Introduction } from './introduction'
import {
  INTRODUCTION_PAGE_DATA,
  type pageContentType,
} from './introduction-data'

type TInroductionContainer = {
  pageContent: pageContentType,
  match?: Object,
  isNavigation: boolean,
}

const InroductionContainer = (props: TInroductionContainer) => {
  const { pageContent, match, isNavigation } = props

  return (
    <Introduction
      pageContent={pageContent}
      isNavigation={isNavigation}
      tabKey={match ? match.params.tabKey : ''}
    />
  )
}

const IntroductionRouter = (props: any) => {
  const { intoductionPage } = props
  return (
    <Switch>
      <Route exact path={INTRODUCTION_PAGE_DATA.URL}>
        <InroductionContainer
          isNavigation={true}
          pageContent={intoductionPage}
        />
      </Route>
      <Route path={`${INTRODUCTION_PAGE_DATA.URL}/:tabKey`}>
        <InroductionContainer
          isNavigation={false}
          pageContent={intoductionPage}
        />
      </Route>
    </Switch>
  )
}

const mapStateToProps = store => {
  return {
    intoductionPage: store.intoductionPage,
  }
}

export const InroductionController = connect(mapStateToProps)(
  IntroductionRouter
)
