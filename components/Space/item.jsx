import React, { Fragment } from 'react'

const spaceSize = {
    large: 24,
    middle: 16,
    small: 8
}

const SpaceItem = ({
    className,
    size,
    children,
    marginDirection,
    width,
    index,
    lastIndex
}) => {
  const mergeSize = spaceSize[size] ?? size
  const style = index>=lastIndex ? {
      width
  } : {
      [marginDirection]: mergeSize,
      width
  }

  return (<div className={className} style={style}>
      {children}
  </div>)
}

SpaceItem.defaultProps = {}

export default SpaceItem