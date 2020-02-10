// @flow
import React from 'react'
import type { TTableData } from './table-data'
import './table.scss'

export const Table = (props: TTableData) => {
  const { DATA, NAME } = props.tableData

  return (
    <div className="tab__table">
      <div className="tab__table-label">{NAME}</div>
      <table className="table">
        <thead className="table__head">
          {DATA.header.map((row, indexRow) => (
            <tr key={indexRow}>
              {row.map((col, indexCol) => {
                if (typeof col === 'object') {
                  return (
                    <th key={indexCol} {...col.attr}>
                      {col.value}
                    </th>
                  )
                } else {
                  return <th key={indexCol}>{col}</th>
                }
              })}
            </tr>
          ))}
        </thead>
        <tbody className="table__body">
          {DATA.body.map((row, indexRow) => (
            <tr key={indexRow}>
              {row.map((col, indexCol) => (
                <td key={indexCol}>{col}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
