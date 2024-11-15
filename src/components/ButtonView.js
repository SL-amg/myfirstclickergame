import React from 'react'

const ButtonView = (props) => {
  return (
<button onClick={props.handleClick} class="glow-on-hover" type="button">{props.name}</button>
  )
}

export default ButtonView
