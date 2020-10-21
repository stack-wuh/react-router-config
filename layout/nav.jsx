import React from 'react'
import Link from 'next/link'
import styles from '../styles/nav.module.css'

const NormalNav = () => {
  return (<nav className={styles.nav}>
      <ul>
          <li><Link href='/'>articles</Link></li>
      </ul>
  </nav>)
}

NormalNav.defaultProps = {}

export default NormalNav