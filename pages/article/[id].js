import React, { Fragment } from 'react'
import NormalLayout from '../../layout/normal'
import NormalMenu from '../../layout/nav'

const Article = () => {
  return (<Fragment>
    <NormalLayout leftRender={() => <NormalMenu />}>
        <h4>Hello World!</h4>
    </NormalLayout>
  </Fragment>)
}
export default Article