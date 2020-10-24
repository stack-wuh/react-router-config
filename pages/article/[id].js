import React, { Fragment } from 'react'
import useSwr from 'swr'
import { useRouter } from 'next/router'
import NormalLayout from '../../layout/normal'
import NormalMenu from '../../layout/nav'

import { FETCH_ARTICLE_LIST } from '../api'
const fetcher = url => fetch(url).then(res => res.json())

const Article = () => {
  const router = useRouter()
  const { data } = useSwr(`${FETCH_ARTICLE_LIST}?_id=${router?.query?.id}`, fetcher)

  if (!data) return null
  const { data: [info] } = data

  return (<Fragment>
    <NormalLayout leftRender={() => <NormalMenu />}>
      <div>
        <h4>{info?.title}</h4>
        <article dangerouslySetInnerHTML={{ __html: info.content }} />
      </div>
    </NormalLayout>
  </Fragment>)
}
export default Article