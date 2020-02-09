// @flow
import React from 'react'
import { Header } from './header'
import { connect } from 'react-redux'

type THeaderContainer = {
  header: { title: string },
}

const HeaderContainer = (props: THeaderContainer) => {
  return <Header title={props.header.title} />
}

const mapStateToProps = store => ({
  header: store.header,
})

export const HeaderController = connect(mapStateToProps)(HeaderContainer)
