// @flow
import React from 'react'
import { Table } from './table'
import { TABLES } from './table-data'

export const TableController = (props: { tableKey: string }) => {
  const { tableKey } = props
  const tableData = TABLES.filter(table => table.KEY === tableKey).pop()

  return <Table tableData={tableData} />
}
