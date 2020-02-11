import React from 'react'
import { DEFAULT, TABLE, Table } from '../../tables'
import './tab-info.scss'

type TTabInfo = {
  tabs: Array<Object>,
  tabKey?: string,
}

export const TabInfo = (props: TTabInfo) => {
  const { tabs, tabKey } = props
  return (
    <div className="tab-info">
      {tabs
        .filter(tab => tab.TAB_KEY === tabKey)
        .map(tab =>
          tab.PARAGRAPHS.map((paraghrap, key) => {
            if (paraghrap.TYPE === DEFAULT) {
              return (
                <div className="paragraph" key={key}>
                  <div className="paragraph__label">{paraghrap.LABEL}</div>
                  {paraghrap.VALUE &&
                    paraghrap.VALUE.map((value, i) => (
                      <p key={i} className="paragraph__value">
                        {value}
                      </p>
                    ))}
                </div>
              )
            }
            if (paraghrap.TYPE === TABLE) {
              return <Table key={key} tableKey={paraghrap.KEY} />
            }
          })
        )}
    </div>
  )
}
