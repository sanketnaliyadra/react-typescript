import React from 'react'

type IContainerCss = {
    style: React.CSSProperties;
}

const Container = (props: IContainerCss) => {
  return (
    <div style={props.style}>
        Text content goes here
    </div>
  )
}

export default Container