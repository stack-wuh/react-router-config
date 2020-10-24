import React, { Fragment } from 'react'
import classnames from 'classnames'
import Item from './item'

const PREFIX = 'ws-space'

/**
 * 
 * @param {*} direction: horizotal, vertical 
 * @param {*} size 间隔
 * @param {*} align 对齐方式: center, start, end
 */
const Space = ({
  children,
  size = 'middle',
  direction = 'horizontal',
  align = 'center',
  width
}) => {

  const mergeAlign = align && direction==='horizontal' ? 'start' : align

  const wrapClassnames = classnames(
    `${PREFIX}`, 
    `${PREFIX}-${direction}`,
    `${PREFIX}-align-${mergeAlign}`
  )

  const childNodes = [...children]

  const marginDirection = direction === 'horizontal' ? 'marginRight': 'marginBottom'
  const renderChild = childNodes.map((item, index) => <Item 
    key={`${PREFIX}-item-${index}`} 
    className={`${PREFIX}-item`}
    marginDirection={marginDirection}
    width={width}
    size={size}
    index={index}
    lastIndex={childNodes.length - 1}>{item}</Item>)

  return (<div className={wrapClassnames}>
    {
      renderChild
    }
  </div>)
}

Space.defaultProps = {}

export default Space