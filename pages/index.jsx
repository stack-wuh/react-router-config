import React from 'react'
import useSwr from 'swr'
import fetch from 'node-fetch'
import Link from 'next/link'
import { NormalLayout, NormalMenu } from '../layout'
import List, { Item } from '../components/List'
import '../styles/current.module.css'
import { FETCH_ARTICLE_LIST } from './api'

const fetcher = url => fetch(url).then(res => res.json())
const Index = () => {
    const { data, error } = useSwr(`${FETCH_ARTICLE_LIST}?`, fetcher)
    if (error) return <div>error</div>
    if (!data) return <div>loading ...</div>
    const { data: source } = data
    return (<NormalLayout leftRender={() => <NormalMenu />}>
        <List>
            {
                source.map(item => (<Item key={item._id}>
                    {item._id}
                </Item>))
            }
        </List>
    </NormalLayout>)
}

export default Index