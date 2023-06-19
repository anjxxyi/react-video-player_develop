import React from 'react'

const BtnGroup = (props) => {
  const play = props.videoPlay;
  const pause = props.videoPause;
  const stop = props.videoStop;

  const btnStyle = {margin: '0 5px'};
  return (
    <div className='btn-group'>
      <button style={btnStyle} onClick={play}>PLAY</button>
      <button style={btnStyle} onClick={pause}>PAUSE</button>
      <button style={btnStyle} onClick={stop}>STOP</button>
    </div>
  )
}

export default BtnGroup