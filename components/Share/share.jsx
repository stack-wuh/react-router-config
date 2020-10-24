import React, { Fragment } from 'react'
import Head from 'next/head'
import classnames from 'classnames'

import Space from '../Space'

const FAMILYNAME = 'myFontFamily'

const Share = ({
    columns = [],
    data = {},
    formatData
}) => {
  const filterData = formatData?.() || data

  const childNode = columns.map(item => <span key={item.icon} className={classnames(`${FAMILYNAME} ${item.icon}`)}>&nbsp;{filterData[item.field]}</span>)

  return (<Fragment>
      <Head>
          <link rel="stylesheet" href="//at.alicdn.com/t/font_604691_xwud4f2en68.css" />
      </Head>
      <Space>
        {childNode}
      </Space>
  </Fragment>)
}

Share.defaultProps = {}

export default Share