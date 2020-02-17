// @flow
import React from 'react'
import { Table } from '@/tables'
import type { tabType } from '../page'
import './tab-info.scss'

type TTabInfo = {
  tabs: Array<tabType>,
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
            if (paraghrap.isTable) {
              return <Table key={key} tableKey={paraghrap.KEY} />
            }

            return (
              <div className="paragraph" key={key}>
                {paraghrap.LABEL && (
                  <div className="paragraph__label">{paraghrap.LABEL}</div>
                )}
                {paraghrap.image && <img src={paraghrap.image} />}
                {paraghrap.VALUE &&
                  paraghrap.VALUE.map((value, i) => (
                    <p key={i} className="paragraph__value">
                      {value}
                    </p>
                  ))}
              </div>
            )
          })
        )}
    </div>
  )
}
