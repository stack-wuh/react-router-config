import React from 'react'
import Header from './header'

const NormalLayout = ({ 
    children,
    leftRender
}) => {
    return (<>
        <Header />
        <div className='content'>
            {
                leftRender && (<div>{leftRender()}</div>)
            }
            {children}
        </div>
    </>)
}

export default NormalLayout