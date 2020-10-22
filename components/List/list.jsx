import React, { Fragment } from 'react'
import classnames from 'classnames'

const PREFIX = 'ws'

const List = ({
    children,
    style = {}
}) => {

  const classNames = classnames(`${PREFIX}-list`)
  return (<Fragment>
      <div style={style} className={classNames}>
          {children}
      </div>
  </Fragment>)
}

List.defaultProps = {}

export default List