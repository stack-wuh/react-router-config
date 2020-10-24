import React from 'react'
import classnames from 'classnames'

const PREFIX = 'ws-card'

const Card = ({ 
    children,
    footer
}) => {
  const classNames = classnames(`${PREFIX}`)
  return (<div className={classNames}>
    <div className={`${PREFIX}-content`}>{children}</div>
    <div className={`${PREFIX}-footer`}>{footer}</div>
  </div>)
}

Card.defaultProps = {}

export default Card