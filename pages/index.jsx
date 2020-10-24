import React from 'react'
import useSwr from 'swr'
import fetch from 'node-fetch'
import { useRouter } from 'next/router'
import { NormalLayout, NormalMenu } from '../layout'
import Space from '../components/Space'
import Content from '../components/Content'
import '../styles/current.module.css'
import { FETCH_ARTICLE_LIST } from './api'

const fetcher = url => fetch(url).then(res => res.json())
const Index = () => {
    const router = useRouter()
    const { data, error } = useSwr(`${FETCH_ARTICLE_LIST}?`, fetcher)
    if (error) return <div>error</div>
    if (!data) return <div>loading ...</div>
    const { data: source } = data

    const handleClickJump = (value) => {
        router.push({
            pathname: `/article/${value._id}`
        })
    }
    return (<NormalLayout leftRender={() => <NormalMenu />}>
        <Space direction='vertical' align='start' size='small' width='100%'>
            {
                source.map(item => (<Content onClick={() => handleClickJump(item)} data={item} key={item._id} />))
            }
        </Space>
    </NormalLayout>)
}

export default Index