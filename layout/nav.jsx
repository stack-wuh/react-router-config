import React from 'react'
import Link from 'next/link'
import classnames from 'classnames'
const PREFIX = 'ws-nav'

const NormalNav = () => {
  const classNames = classnames(`${PREFIX}`)
  return (<nav className={classNames}>
      <ul className={`${PREFIX}-menu`}>
        <li className={`${PREFIX}-menu-item`}><Link href='/'>articles</Link></li>
      </ul>
  </nav>)
}

NormalNav.defaultProps = {}

export default NormalNav