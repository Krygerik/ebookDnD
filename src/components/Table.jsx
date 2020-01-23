import React from "react";
import { getTableByKey } from "../content/model";

export const Table = (props) => {
  const { tableKey } = props;
  const {header, body} = getTableByKey(tableKey)

  return (
    <table className="table">
      <thead className="table__head">
        {header.map((row, indexRow) => (
          <tr key={indexRow}>
            {row.map((col, indexCol) => {
              if (typeof col === "object") {
                return (
                  <th key={indexCol} {...col.attr}>
                    {col.value}
                  </th>
                );
              } else {
                return <th key={indexCol}>{col}</th>;
              }
            })}
          </tr>
        ))}
      </thead>
      <tbody className="table__body">
        {body.map((row, indexRow) => (
          <tr key={indexRow}>
            {row.map((col, indexCol) => (
              <td key={indexCol}>{col}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}