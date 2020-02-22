// @flow
import React from 'react'
import type { tableType } from './table-data'
import './table.scss'

export const Table = (props: { tableData: tableType }) => {
  const { DATA, NAME, addition } = props.tableData

  return (
    <div className="tab__table">
      {NAME && <div className="tab__table-label">{NAME}</div>}
      <table className="table">
        <thead className="table__head">
          {DATA.header.isComposite
            ? DATA.header.value.map((row, indexRow) => (
                <tr key={indexRow}>
                  {row.map((col, indexCol) => (
                    <th key={indexCol} {...col.attr}>
                      {col.value}
                    </th>
                  ))}
                </tr>
              ))
            : DATA.header.value.map((row, indexRow) => (
                <tr key={indexRow}>
                  {row.map((col, indexCol) => (
                    <th key={indexCol}>{col}</th>
                  ))}
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
      {addition && (
        <div className="tab-table__addition">
          {addition.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      )}
    </div>
  )
}
