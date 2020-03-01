import React from 'react'
import { Link } from 'react-router-dom'
import styles from 'styles/header.module.scss'
import Logo from '../../assets/image/logo.png'

function Header () {
    return (<>
        <div className={styles.header_wrap}>
            <div className={styles.header_wrap__outer}>
                <div className={styles.outer__left}>
                    <Link to={{pathname: '/'}}>
                        <img src={Logo} alt="logo"/>
                    </Link>
                </div>
                <div className={styles.outer__right}>
                    <span>我是一个过客，而不是归人</span>
                    {/* <Link to={{pathname: '/'}}>我是一个过客，而不是归人</Link> */}
                </div>
            </div>
        </div>
    </>)
}

export default Header