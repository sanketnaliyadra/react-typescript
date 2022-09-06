import React from 'react'

type IButton = {
    handleClick : (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = (props: IButton) => {
  return (
   <button onClick={props.handleClick}>Click</button>
  )
}

export default Button