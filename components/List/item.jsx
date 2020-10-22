import React, { Fragment } from 'react'
import classnames from 'classnames'
const PREFIX = 'ws'

const ListItem = ({
    style,
    children,
    border = true,
    alignItem='flex-start',
    justifyContent='flex-start'
}) => {

  const classNames = classnames(`${PREFIX}-list-item`, {
      'is-border': border
  })

  return (<Fragment>
      <div className={classNames} style={style}>
          {children}
      </div>
  </Fragment>)
}

ListItem.defaultProps = {}

export default ListItem