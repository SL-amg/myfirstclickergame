import React from 'react'

const PlaneView = (props) => {
  return (
    <div disabled={props.gameOver}>
       <img  onClick={props.handleClick} src='https://s3.amazonaws.com/cartoonsmartstreaming/wp-content/uploads/2014/12/05002726/veering.png' /> {/* to shoot if press on plane  */}
    </div>
  )
}

export default PlaneView
