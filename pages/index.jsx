import React from 'react'
import { NormalLayout, NormalMenu } from '../layout'
import '../styles/current.module.css'

const Current = () => {
    return (<NormalLayout leftRender={() => <NormalMenu />}>
    </NormalLayout>)
}

export default Current