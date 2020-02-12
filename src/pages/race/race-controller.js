// @flow
import React from 'react'
import { connect } from 'react-redux'
import { RaceList } from './race-list'
import { setHeader } from '../../components/header'
import { RACE_LIST_PAGE } from './race-data'

const RaceListContainer = (props: any) => {
  const { changeHeader } = props

  return <RaceList raceListPage={RACE_LIST_PAGE} changeHeader={changeHeader} />
}

const mapDispatchToProps = dispatch => ({
  changeHeader: newHeader => dispatch(setHeader(newHeader)),
})

export const RaceListController = connect(
  null,
  mapDispatchToProps
)(RaceListContainer)
