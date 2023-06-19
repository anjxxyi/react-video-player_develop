import React from 'react'

const TimeInfo = (props) => {
    const currentTime = props.currentTime;
    const duration = props.duration;
  return (
    <div className='time-info'>
        <p className='text'><b>Now</b><small>({currentTime.toFixed(1)}s)</small> / <b>Total</b><small>({duration.toFixed(1)}s)</small></p>
        <progress 
          style={{width: '100%'}} 
          min="0" 
          max="100" 
          value={duration ? (currentTime * 100) / duration : 0}
        />
    </div>
  )
}

export default TimeInfo