import React, { useEffect } from 'react'
import Header from './header'

const NormalLayout = ({ 
    children,
    leftRender
}) => {
    useEffect(() => {
        const elem = document.querySelector('.App')
        elem.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [])
    return (<>
        <Header />
        <div className='content flex'>
            {
                leftRender && (<div>{leftRender()}</div>)
            }
            {children}
        </div>
    </>)
}

export default NormalLayout