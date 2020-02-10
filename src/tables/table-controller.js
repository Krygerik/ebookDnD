import React from 'react'
import { Table } from './table'
import { TABLES } from './table-data'

type TTableControllerProps = {
  tableKey: string,
}

export const TableController = (props: TTableControllerProps) => {
  const { tableKey } = props
  const tableData = TABLES.filter(table => table.KEY === tableKey).pop()

  return <Table tableData={tableData} />
}
