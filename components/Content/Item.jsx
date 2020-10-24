import React, { Fragment } from 'react'
import classnames from 'classnames'

import Share from '../Share'

const PREFIX = 'ws-content'

const FooterExtraColumns = [
    {
        label: '发布时间',
        icon: 'my-icon-shizhong',
        field: 'update_at'
    },
    {
        label: '地点',
        icon: 'my-icon-map',
        field: 'location'
    }
]

const ContentItem = ({
    data,
    onClick
}) => {
  const wrapClassNames = classnames(`${PREFIX}`)

  const formatData = (value) => {
    const __params = { ...value }
    __params.update_at = new Date(value?.update_at).toLocaleDateString().replace(/\//gi, '-')

    return __params
  }

  return (<Fragment>
      <div onClick={onClick} className={wrapClassNames}>
          <div className={`${PREFIX}__wrap`}>
            <div className={`${PREFIX}__left`}>
                <img src={data?.cover_img} alt="cover" width='170px' height='120px'/>
            </div>
            <div className={`${PREFIX}__right`}>
                <h6 className={`${PREFIX}--title`}>{data?.title}</h6>
                <p className={`${PREFIX}--sub`}>{data?.sub_title}</p>
                <span className={`${PREFIX}--empty`} />
                <div className={`${PREFIX}--footer`}>
                   <Share columns={FooterExtraColumns} data={data} formatData={() => formatData(data)} />
                </div>
            </div>
          </div>
      </div>
  </Fragment>)
}

ContentItem.defaultProps = {}

export default ContentItem